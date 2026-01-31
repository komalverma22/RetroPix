'use client';

import { useState, useRef } from 'react';
import ImageUpload from './ImageUpload';
import SettingsPanel from './SettingsPanel';
import DecorationPanel from './DecorationPanel';

interface ProcessedImageState {
  dataUrl: string | null;
  originalFile: File | null;
}

interface TextDecoration {
  id: string;
  text: string;
  fontSize: number;
  color: string;
  position: 'top' | 'bottom';
}

interface EmojiDecoration {
  id: string;
  emoji: string;
  fontSize: number;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export default function UploadImgPage() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [pixelSize, setPixelSize] = useState(16);
  const [colors, setColors] = useState(32);
  const [styleMode, setStyleMode] = useState('standard');
  const [frameIt, setFrameIt] = useState(false);
  const [frameType, setFrameType] = useState('none');
  const [textDecorations, setTextDecorations] = useState<TextDecoration[]>([]);
  const [emojiDecorations, setEmojiDecorations] = useState<EmojiDecoration[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [processedImage, setProcessedImage] = useState<ProcessedImageState>({
    dataUrl: null,
    originalFile: null,
  });

  const handleImageUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const imageSrc = e.target?.result as string;
      setUploadedImage(imageSrc);
      setProcessedImage({ dataUrl: imageSrc, originalFile: file });
    };
    reader.readAsDataURL(file);
  };

  const pixelateImage = (
    imageSrc: string,
    pixelSize: number,
    colorCount: number
  ): Promise<string> => {
    return new Promise((resolve) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        let padding = 0;
        if (frameType !== 'none') padding = 80;

        canvas.width = img.width + padding * 2;
        canvas.height = img.height + padding * 2;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Draw frame background
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw frame
        if (frameType !== 'none') {
          drawFrame(ctx, canvas.width, canvas.height, frameType);
        }

        // Draw original image
        ctx.drawImage(img, padding, padding);

        // Get image data and pixelate
        const imageData = ctx.getImageData(padding, padding, img.width, img.height);
        const data = imageData.data;

        for (let i = 0; i < img.height; i += pixelSize) {
          for (let j = 0; j < img.width; j += pixelSize) {
            let r = 0, g = 0, b = 0, a = 0;
            let pixelCount = 0;

            for (let dy = 0; dy < pixelSize && i + dy < img.height; dy++) {
              for (let dx = 0; dx < pixelSize && j + dx < img.width; dx++) {
                const idx = ((i + dy) * img.width + (j + dx)) * 4;
                r += data[idx];
                g += data[idx + 1];
                b += data[idx + 2];
                a += data[idx + 3];
                pixelCount++;
              }
            }

            r = Math.floor(r / pixelCount);
            g = Math.floor(g / pixelCount);
            b = Math.floor(b / pixelCount);
            a = Math.floor(a / pixelCount);

            r = Math.floor((r / 255) * (colorCount - 1)) * Math.floor(255 / (colorCount - 1));
            g = Math.floor((g / 255) * (colorCount - 1)) * Math.floor(255 / (colorCount - 1));
            b = Math.floor((b / 255) * (colorCount - 1)) * Math.floor(255 / (colorCount - 1));

            for (let dy = 0; dy < pixelSize && i + dy < img.height; dy++) {
              for (let dx = 0; dx < pixelSize && j + dx < img.width; dx++) {
                const idx = ((i + dy) * img.width + (j + dx)) * 4;
                data[idx] = r;
                data[idx + 1] = g;
                data[idx + 2] = b;
                data[idx + 3] = a;
              }
            }
          }
        }

        ctx.putImageData(imageData, padding, padding);

        // Draw text
        textDecorations.forEach((text) => {
          ctx.font = `bold ${text.fontSize}px 'Press Start 2P', cursive`;
          ctx.fillStyle = text.color;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';

          const yPos = text.position === 'top' ? padding - 40 : canvas.height - padding + 40;
          ctx.fillText(text.text, canvas.width / 2, yPos);
        });

        // Draw emojis
        emojiDecorations.forEach((emoji) => {
          const posMap = {
            'top-left': { x: 20, y: 20 },
            'top-right': { x: canvas.width - 20, y: 20 },
            'bottom-left': { x: 20, y: canvas.height - 20 },
            'bottom-right': { x: canvas.width - 20, y: canvas.height - 20 },
          };

          const pos = posMap[emoji.position];
          ctx.font = `${emoji.fontSize}px Arial`;
          ctx.textAlign = emoji.position.includes('right') ? 'right' : 'left';
          ctx.textBaseline = emoji.position.includes('top') ? 'top' : 'bottom';
          ctx.fillText(emoji.emoji, pos.x, pos.y);
        });

        resolve(canvas.toDataURL('image/png'));
      };
      img.src = imageSrc;
    });
  };

  const drawFrame = (ctx: CanvasRenderingContext2D, width: number, height: number, type: string) => {
    const frameWidth = 10;

    if (type === 'simple') {
      ctx.strokeStyle = '#035DA5';
      ctx.lineWidth = frameWidth;
      ctx.strokeRect(frameWidth / 2, frameWidth / 2, width - frameWidth, height - frameWidth);
    } else if (type === 'retro') {
      // Retro pixelated frame
      ctx.fillStyle = '#035DA5';
      for (let i = 0; i < width; i += 10) {
        ctx.fillRect(i, 0, 5, frameWidth);
        ctx.fillRect(i, height - frameWidth, 5, frameWidth);
      }
      for (let i = 0; i < height; i += 10) {
        ctx.fillRect(0, i, frameWidth, 5);
        ctx.fillRect(width - frameWidth, i, frameWidth, 5);
      }
    } else if (type === 'double') {
      ctx.strokeStyle = '#035DA5';
      ctx.lineWidth = 3;
      ctx.strokeRect(5, 5, width - 10, height - 10);
      ctx.strokeRect(12, 12, width - 24, height - 24);
    } else if (type === 'rainbow') {
      const colors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#9400D3'];
      const thickness = frameWidth / colors.length;
      colors.forEach((color, idx) => {
        ctx.strokeStyle = color;
        ctx.lineWidth = thickness;
        const offset = idx * thickness + thickness / 2;
        ctx.strokeRect(offset, offset, width - offset * 2, height - offset * 2);
      });
    }
  };

  const handleSettingsChange = async () => {
    if (!uploadedImage) return;
    const processed = await pixelateImage(uploadedImage, pixelSize, colors);
    setProcessedImage({ ...processedImage, dataUrl: processed });
  };

  const handleDownload = () => {
    if (!processedImage.dataUrl) return;

    const link = document.createElement('a');
    link.href = processedImage.dataUrl;
    link.download = 'retropix-image.png';
    link.click();
  };

  // Update when settings change
  if (uploadedImage) {
    handleSettingsChange();
  }

  return (
    <main className="w-full min-h-screen bg-gradient-to-br from-[#f0f0f0] to-[#ffffff] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          style={{
            fontFamily: "'Press Start 2P', cursive",
            color: '#035DA5',
            textShadow: '2px 2px 0px rgba(0, 0, 0, 0.1)',
          }}
        >
          PIXELIFY YOUR IMAGE
        </h1>

        {/* Main Container */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left Panels - Settings and Decorations */}
          <div className="flex flex-col gap-8 lg:order-first order-last">
            {/* Settings Panel */}
            <SettingsPanel
              pixelSize={pixelSize}
              colors={colors}
              styleMode={styleMode}
              frameIt={frameIt}
              onPixelSizeChange={(value) => {
                setPixelSize(value);
              }}
              onColorsChange={(value) => {
                setColors(value);
              }}
              onStyleModeChange={setStyleMode}
              onFrameItChange={setFrameIt}
              onDownload={handleDownload}
            />

            {/* Decoration Panel */}
            {uploadedImage && (
              <DecorationPanel
                onTextAdd={(text) => setTextDecorations([...textDecorations, text])}
                onEmojiAdd={(emoji) => setEmojiDecorations([...emojiDecorations, emoji])}
                onTextUpdate={(updatedText) =>
                  setTextDecorations(textDecorations.map((t) => (t.id === updatedText.id ? updatedText : t)))
                }
                onEmojiUpdate={(updatedEmoji) =>
                  setEmojiDecorations(emojiDecorations.map((e) => (e.id === updatedEmoji.id ? updatedEmoji : e)))
                }
                textDecorations={textDecorations}
                emojiDecorations={emojiDecorations}
                onTextRemove={(id) => setTextDecorations(textDecorations.filter((t) => t.id !== id))}
                onEmojiRemove={(id) => setEmojiDecorations(emojiDecorations.filter((e) => e.id !== id))}
                frameType={frameType}
                onFrameTypeChange={setFrameType}
              />
            )}
          </div>

          {/* Image Upload/Preview - Right */}
          <div className="flex-1 w-full lg:w-auto">
            {!uploadedImage ? (
              <ImageUpload onImageUpload={handleImageUpload} uploadedImage={null} />
            ) : (
              <div
                className="rounded-lg border-4 flex items-center justify-center overflow-hidden"
                style={{
                  borderColor: '#035DA5',
                  backgroundColor: '#f5f5f5',
                  height: '500px',
                }}
              >
                {processedImage.dataUrl && (
                  <img
                    src={processedImage.dataUrl}
                    alt="Pixelated"
                    className="w-full h-full object-contain"
                    style={{
                      imageRendering: 'pixelated',
                    }}
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Hidden canvas for processing */}
      <canvas ref={canvasRef} className="hidden" />
    </main>
  );
}
