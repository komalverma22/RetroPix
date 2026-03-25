'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import ImageUpload from './ImageUpload';
import SettingsPanel from './SettingsPanel';
import DecorationPanel from './DecorationPanel';

export interface TextDecoration {
  id: string;
  text: string;
  fontSize: number;
  color: string;
  fontFamily: string;
  x: number;
  y: number;
}

export interface EmojiDecoration {
  id: string;
  emoji: string;
  fontSize: number;
  x: number;
  y: number;
}

const FrameNone = () => (
  <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="8" width="44" height="44" rx="4" fill="#f5f0ec" stroke="#ddd0c8" strokeWidth="1.5"/>
    <rect x="14" y="14" width="32" height="32" rx="3" fill="#ede5e0"/>
  </svg>
);
const FramePolaroid = () => (
  <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="4" width="50" height="54" rx="3" fill="white" stroke="#e8ddd8" strokeWidth="1.5"/>
    <rect x="10" y="9" width="40" height="34" rx="2" fill="#f5ede7"/>
    <text x="30" y="53" textAnchor="middle" fontSize="5" fill="#c9a89a" fontFamily="serif">✦ polaroid ✦</text>
  </svg>
);
const FrameBlush = () => (
  <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="54" height="54" rx="10" fill="#fce8e4" stroke="#e8a09a" strokeWidth="1.5"/>
    <rect x="9" y="9" width="42" height="42" rx="7" fill="white"/>
    <rect x="13" y="13" width="34" height="34" rx="5" fill="#fdf5f3"/>
  </svg>
);
const FrameFilm = () => (
  <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="54" height="54" rx="2" fill="#1e1e1e"/>
    <rect x="12" y="9" width="36" height="42" rx="2" fill="#f5ede7"/>
    {[12,20,28,36,44].map(y => (
      <g key={y}><rect x="4" y={y} width="5" height="5" rx="1" fill="#111" stroke="#333" strokeWidth="0.5"/><rect x="51" y={y} width="5" height="5" rx="1" fill="#111" stroke="#333" strokeWidth="0.5"/></g>
    ))}
  </svg>
);
const FrameBotanical = () => (
  <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="7" y="7" width="46" height="46" rx="4" fill="#f5faf3" stroke="#b8d9a8" strokeWidth="1.5"/>
    <rect x="13" y="13" width="34" height="34" rx="3" fill="#eef7ea"/>
    <text x="6" y="14" fontSize="10" fill="#7aad6a">🌿</text><text x="43" y="14" fontSize="10" fill="#7aad6a">🌿</text>
    <text x="6" y="56" fontSize="10" fill="#88bb78">🌸</text><text x="43" y="56" fontSize="10" fill="#88bb78">🌸</text>
  </svg>
);
const FrameVintage = () => (
  <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="54" height="54" rx="2" fill="#fdf8f0" stroke="#c9a96e" strokeWidth="2"/>
    <rect x="8" y="8" width="44" height="44" rx="1" fill="none" stroke="#c9a96e" strokeWidth="1" strokeDasharray="3 2"/>
    <rect x="13" y="13" width="34" height="34" rx="1" fill="#fdf4e8"/>
  </svg>
);
const FramePastel = () => (
  <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="54" height="54" rx="8" fill="url(#pr2)"/>
    <rect x="9" y="9" width="42" height="42" rx="6" fill="white"/>
    <defs><linearGradient id="pr2" x1="0" y1="0" x2="60" y2="60"><stop offset="0%" stopColor="#ffb3c6"/><stop offset="50%" stopColor="#c3b3ff"/><stop offset="100%" stopColor="#b3ffd9"/></linearGradient></defs>
  </svg>
);
const FrameMinimal = () => (
  <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="6" width="48" height="48" rx="1" fill="#fafafa" stroke="#1a1a1a" strokeWidth="1.5"/>
    <rect x="12" y="12" width="36" height="36" fill="#f4f4f4"/>
  </svg>
);
const FrameHeart = () => (
  <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="5" width="50" height="50" rx="5" fill="#fff0f4" stroke="#ffb3c1" strokeWidth="1.5"/>
    <rect x="12" y="12" width="36" height="36" rx="3" fill="#fff8fa"/>
    <text x="6" y="14" fontSize="9">💕</text><text x="43" y="14" fontSize="9">💕</text>
    <text x="6" y="56" fontSize="9">🌸</text><text x="43" y="56" fontSize="9">🌸</text>
  </svg>
);
const FrameStar = () => (
  <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="54" height="54" rx="6" fill="#0f0c20" stroke="#7b5ea7" strokeWidth="1.5"/>
    <rect x="10" y="10" width="40" height="40" rx="4" fill="#120d28"/>
    <text x="5" y="14" fontSize="8">✨</text><text x="44" y="14" fontSize="8">⭐</text>
    <text x="5" y="56" fontSize="8">💫</text><text x="44" y="56" fontSize="8">🌙</text>
  </svg>
);
const FrameDiary = () => (
  <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="3" width="50" height="54" rx="2" fill="#fdf9f4" stroke="#d4b896" strokeWidth="1.5"/>
    <line x1="5" y1="10" x2="55" y2="10" stroke="#d4b896" strokeWidth="1"/>
    <rect x="11" y="14" width="38" height="38" rx="2" fill="#fdf5ea"/>
    {[24,32,40,48].map(y=><line key={y} x1="11" y1={y} x2="49" y2={y} stroke="#e8d4b8" strokeWidth="0.5"/>)}
  </svg>
);
const FrameNeon = () => (
  <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="54" height="54" rx="4" fill="#090910" stroke="#00ffe7" strokeWidth="2"/>
    <rect x="9" y="9" width="42" height="42" rx="3" fill="none" stroke="#ff00aa" strokeWidth="1" opacity="0.7"/>
    <rect x="14" y="14" width="32" height="32" rx="2" fill="#0a0a1a"/>
  </svg>
);

const FRAME_PRESETS = [
  { id: 'none', name: 'None', description: 'Clean & bare', preview: <FrameNone /> },
  { id: 'polaroid', name: 'Polaroid', description: 'Retro snap', preview: <FramePolaroid /> },
  { id: 'soft-glow', name: 'Blush', description: 'Pink glow', preview: <FrameBlush /> },
  { id: 'film', name: 'Film', description: 'Cinematic strip', preview: <FrameFilm /> },
  { id: 'botanical', name: 'Botanical', description: 'Garden vibes', preview: <FrameBotanical /> },
  { id: 'vintage', name: 'Vintage', description: 'Double frame', preview: <FrameVintage /> },
  { id: 'pastel-rainbow', name: 'Pastel', description: 'Rainbow border', preview: <FramePastel /> },
  { id: 'minimal', name: 'Minimal', description: 'Clean line', preview: <FrameMinimal /> },
  { id: 'heart', name: 'Hearts', description: 'Love all around', preview: <FrameHeart /> },
  { id: 'star', name: 'Starry', description: 'Celestial glow', preview: <FrameStar /> },
  { id: 'diary', name: 'Diary', description: 'Dear journal...', preview: <FrameDiary /> },
  { id: 'neon', name: 'Neon', description: 'Glowing vibes', preview: <FrameNeon /> },
];

function drawFrameOnCanvas(
  ctx: CanvasRenderingContext2D,
  w: number, h: number,
  type: string, outerPad: number
) {
  if (type === 'polaroid') {
    ctx.fillStyle = '#fffaf8'; ctx.fillRect(0, 0, w, h);
    ctx.shadowColor = 'rgba(0,0,0,0.10)'; ctx.shadowBlur = 18; ctx.shadowOffsetY = 5;
    ctx.fillStyle = '#fff'; ctx.fillRect(3, 3, w - 6, h - 6);
    ctx.shadowColor = 'transparent'; ctx.shadowBlur = 0; ctx.shadowOffsetY = 0;
    ctx.font = `italic ${outerPad * 0.38}px Georgia, serif`;
    ctx.fillStyle = '#c9a89a'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText('✦  polaroid  ✦', w / 2, h - outerPad * 0.52);
  } else if (type === 'soft-glow') {
    const g = ctx.createLinearGradient(0, 0, w, h);
    g.addColorStop(0, '#fce8e4'); g.addColorStop(0.5, '#fdeef8'); g.addColorStop(1, '#fce8e4');
    ctx.fillStyle = g; ctx.beginPath(); ctx.roundRect(0, 0, w, h, 14); ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,0.72)';
    ctx.beginPath(); ctx.roundRect(outerPad * 0.3, outerPad * 0.3, w - outerPad * 0.6, h - outerPad * 0.6, 10); ctx.fill();
  } else if (type === 'film') {
    ctx.fillStyle = '#181818'; ctx.fillRect(0, 0, w, h);
    const sw = outerPad * 0.48, sh = sw * 1.3, sg = sh * 1.7;
    for (let y = outerPad * 0.22; y < h - sh; y += sg) {
      ctx.fillStyle = '#0d0d0d';
      ctx.beginPath(); ctx.roundRect(outerPad * 0.1, y, sw, sh, 2); ctx.fill();
      ctx.beginPath(); ctx.roundRect(w - outerPad * 0.1 - sw, y, sw, sh, 2); ctx.fill();
    }
  } else if (type === 'botanical') {
    ctx.fillStyle = '#f3f9f0'; ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = '#b8d9a8'; ctx.lineWidth = 2;
    ctx.strokeRect(5, 5, w - 10, h - 10);
    ctx.font = `${outerPad * 0.68}px serif`;
    ctx.textBaseline = 'top'; ctx.textAlign = 'left'; ctx.fillText('🌿', 9, 9);
    ctx.textAlign = 'right'; ctx.fillText('🌸', w - 9, 9);
    ctx.textBaseline = 'bottom'; ctx.textAlign = 'left'; ctx.fillText('🍃', 9, h - 9);
    ctx.textAlign = 'right'; ctx.fillText('🌺', w - 9, h - 9);
  } else if (type === 'vintage') {
    ctx.fillStyle = '#fdf8f0'; ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = '#c9a96e'; ctx.lineWidth = 3; ctx.strokeRect(5, 5, w - 10, h - 10);
    ctx.lineWidth = 1; ctx.setLineDash([5, 3]); ctx.strokeRect(12, 12, w - 24, h - 24); ctx.setLineDash([]);
    ctx.font = '14px serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillStyle = '#c9a96e';
    [[14,14],[w-14,14],[14,h-14],[w-14,h-14]].forEach(([cx,cy]) => ctx.fillText('✦', cx, cy));
  } else if (type === 'pastel-rainbow') {
    const rg = ctx.createLinearGradient(0, 0, w, h);
    rg.addColorStop(0,'#ffb3c6'); rg.addColorStop(0.33,'#c3b3ff'); rg.addColorStop(0.66,'#b3ccff'); rg.addColorStop(1,'#b3ffd9');
    ctx.fillStyle = rg; ctx.beginPath(); ctx.roundRect(0, 0, w, h, 12); ctx.fill();
    ctx.fillStyle = 'white';
    ctx.beginPath(); ctx.roundRect(outerPad * 0.4, outerPad * 0.4, w - outerPad * 0.8, h - outerPad * 0.8, 8); ctx.fill();
  } else if (type === 'minimal') {
    ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = '#1a1a1a'; ctx.lineWidth = 2.5; ctx.strokeRect(3, 3, w - 6, h - 6);
  } else if (type === 'heart') {
    const hg = ctx.createLinearGradient(0, 0, w, h);
    hg.addColorStop(0, '#fff0f4'); hg.addColorStop(1, '#fff8fb');
    ctx.fillStyle = hg; ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = '#ffb3c1'; ctx.lineWidth = 2; ctx.strokeRect(4, 4, w - 8, h - 8);
    ctx.font = `${outerPad * 0.6}px serif`;
    ctx.textBaseline = 'top'; ctx.textAlign = 'left'; ctx.fillText('💕', 8, 8);
    ctx.textAlign = 'right'; ctx.fillText('💕', w - 8, 8);
    ctx.textBaseline = 'bottom'; ctx.textAlign = 'left'; ctx.fillText('🌸', 8, h - 8);
    ctx.textAlign = 'right'; ctx.fillText('🌸', w - 8, h - 8);
  } else if (type === 'star') {
    ctx.fillStyle = '#0f0c20'; ctx.fillRect(0, 0, w, h);
    ctx.shadowColor = '#7b5ea7'; ctx.shadowBlur = 14;
    ctx.strokeStyle = '#7b5ea7'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.roundRect(4, 4, w - 8, h - 8, 8); ctx.stroke();
    ctx.shadowColor = 'transparent'; ctx.shadowBlur = 0;
    ctx.strokeStyle = '#ff6eb4'; ctx.lineWidth = 1; ctx.globalAlpha = 0.5;
    ctx.beginPath(); ctx.roundRect(10, 10, w - 20, h - 20, 5); ctx.stroke(); ctx.globalAlpha = 1;
    ctx.font = `${outerPad * 0.56}px serif`;
    ctx.textBaseline = 'top'; ctx.textAlign = 'left'; ctx.fillText('✨', 8, 8);
    ctx.textAlign = 'right'; ctx.fillText('⭐', w - 8, 8);
    ctx.textBaseline = 'bottom'; ctx.textAlign = 'left'; ctx.fillText('💫', 8, h - 8);
    ctx.textAlign = 'right'; ctx.fillText('🌙', w - 8, h - 8);
  } else if (type === 'diary') {
    ctx.fillStyle = '#fdf9f4'; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#d4b896'; ctx.fillRect(0, 0, w, outerPad * 0.15);
    ctx.strokeStyle = '#e8d4b8'; ctx.lineWidth = 1;
    for (let y = outerPad + 28; y < h - outerPad; y += 28) {
      ctx.beginPath(); ctx.moveTo(outerPad * 0.7, y); ctx.lineTo(w - outerPad * 0.7, y); ctx.stroke();
    }
    ctx.strokeStyle = '#d4b896'; ctx.lineWidth = 1.5;
    ctx.strokeRect(outerPad * 0.5, outerPad * 0.4, w - outerPad, h - outerPad * 0.8);
  } else if (type === 'neon') {
    ctx.fillStyle = '#090910'; ctx.fillRect(0, 0, w, h);
    ctx.shadowColor = '#00ffe7'; ctx.shadowBlur = 14;
    ctx.strokeStyle = '#00ffe7'; ctx.lineWidth = 2; ctx.strokeRect(4, 4, w - 8, h - 8);
    ctx.shadowColor = '#ff00aa'; ctx.shadowBlur = 10;
    ctx.strokeStyle = '#ff00aa'; ctx.lineWidth = 1; ctx.globalAlpha = 0.65;
    ctx.strokeRect(10, 10, w - 20, h - 20);
    ctx.shadowColor = 'transparent'; ctx.shadowBlur = 0; ctx.globalAlpha = 1;
  } else {
    ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, w, h);
  }
}

export default function UploadImgPage() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [pixelSize, setPixelSize] = useState(8);
  const [colors, setColors] = useState(64);
  const [styleMode, setStyleMode] = useState('standard');
  const [frameType, setFrameType] = useState('none');
  const [textDecorations, setTextDecorations] = useState<TextDecoration[]>([]);
  const [emojiDecorations, setEmojiDecorations] = useState<EmojiDecoration[]>([]);
  const [processedDataUrl, setProcessedDataUrl] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState<string | null>(null);
  // Track which panel is open on mobile (settings, frames, or decorations)
  const [mobilePanel, setMobilePanel] = useState<'settings' | 'frames' | 'decorations' | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const processingRef = useRef(false);

  const pixelateImage = useCallback(
    (imageSrc: string, pxSize: number, colorCount: number, frame: string): Promise<string> => {
      return new Promise((resolve) => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => {
          const canvas = canvasRef.current;
          if (!canvas) return;
          const hasFrame = frame !== 'none';
          const outerPad = hasFrame ? 72 : 0;
          const innerPad = hasFrame ? 16 : 0;
          const bottomExtra = frame === 'polaroid' ? outerPad * 0.7 : 0;

          const imgOffsetX = outerPad + innerPad;
          const imgOffsetY = outerPad + innerPad;
          const totalW = img.width + (outerPad + innerPad) * 2;
          const totalH = img.height + (outerPad + innerPad) * 2 + bottomExtra;

          canvas.width = totalW;
          canvas.height = totalH;
          const ctx = canvas.getContext('2d')!;
          ctx.clearRect(0, 0, totalW, totalH);

          drawFrameOnCanvas(ctx, totalW, totalH, frame, outerPad);

          ctx.save();
          ctx.beginPath();
          if (hasFrame) {
            ctx.roundRect(imgOffsetX, imgOffsetY, img.width, img.height, 14);
          } else {
            ctx.rect(0, 0, totalW, totalH);
          }
          ctx.clip();
          ctx.drawImage(img, imgOffsetX, imgOffsetY, img.width, img.height);
          ctx.restore();

          const imgData = ctx.getImageData(imgOffsetX, imgOffsetY, img.width, img.height);
          const data = imgData.data;
          for (let i = 0; i < img.height; i += pxSize) {
            for (let j = 0; j < img.width; j += pxSize) {
              let r = 0, g = 0, b = 0, a = 0, cnt = 0;
              for (let dy = 0; dy < pxSize && i + dy < img.height; dy++) {
                for (let dx = 0; dx < pxSize && j + dx < img.width; dx++) {
                  const idx = ((i + dy) * img.width + (j + dx)) * 4;
                  r += data[idx]; g += data[idx+1]; b += data[idx+2]; a += data[idx+3]; cnt++;
                }
              }
              r=Math.floor(r/cnt); g=Math.floor(g/cnt); b=Math.floor(b/cnt); a=Math.floor(a/cnt);
              const step = Math.max(1, Math.floor(255 / (colorCount - 1)));
              r=Math.round(r/step)*step; g=Math.round(g/step)*step; b=Math.round(b/step)*step;
              for (let dy = 0; dy < pxSize && i + dy < img.height; dy++) {
                for (let dx = 0; dx < pxSize && j + dx < img.width; dx++) {
                  const idx = ((i + dy) * img.width + (j + dx)) * 4;
                  data[idx]=r; data[idx+1]=g; data[idx+2]=b; data[idx+3]=a;
                }
              }
            }
          }
          ctx.save();
          ctx.beginPath();
          if (hasFrame) {
            ctx.roundRect(imgOffsetX, imgOffsetY, img.width, img.height, 14);
          } else {
            ctx.rect(0, 0, totalW, totalH);
          }
          ctx.clip();
          ctx.putImageData(imgData, imgOffsetX, imgOffsetY);
          ctx.restore();

          textDecorations.forEach((td) => {
            ctx.save();
            ctx.font = `bold ${td.fontSize * 1.5}px ${td.fontFamily}`;
            ctx.fillStyle = td.color; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
            ctx.shadowColor = 'rgba(0,0,0,0.4)'; ctx.shadowBlur = 5;
            ctx.fillText(td.text, (td.x / 100) * totalW, (td.y / 100) * totalH);
            ctx.restore();
          });
          emojiDecorations.forEach((ed) => {
            ctx.save();
            ctx.font = `${ed.fontSize * 1.5}px Arial`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
            ctx.fillText(ed.emoji, (ed.x / 100) * totalW, (ed.y / 100) * totalH);
            ctx.restore();
          });

          resolve(canvas.toDataURL('image/png'));
        };
        img.src = imageSrc;
      });
    },
    [textDecorations, emojiDecorations]
  );

  useEffect(() => {
    if (!uploadedImage || processingRef.current) return;
    processingRef.current = true;
    pixelateImage(uploadedImage, pixelSize, colors, frameType).then((url) => {
      setProcessedDataUrl(url);
      processingRef.current = false;
    });
  }, [uploadedImage, pixelSize, colors, frameType, textDecorations, emojiDecorations, pixelateImage]);

  const handleImageUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => setUploadedImage(e.target?.result as string);
    reader.readAsDataURL(file);
  };

  const handleDownload = () => {
    if (!processedDataUrl) return;
    const a = document.createElement('a');
    a.href = processedDataUrl; a.download = 'pixelify.png'; a.click();
  };

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent, id: string) => {
    e.preventDefault();
    setIsDragging(id);
    const container = previewRef.current;
    if (!container) return;
    const getPos = (ev: MouseEvent | TouchEvent) => {
      const rect = container.getBoundingClientRect();
      const cx = 'touches' in ev ? ev.touches[0].clientX : (ev as MouseEvent).clientX;
      const cy = 'touches' in ev ? ev.touches[0].clientY : (ev as MouseEvent).clientY;
      return { x: Math.max(3, Math.min(97, ((cx - rect.left) / rect.width) * 100)), y: Math.max(3, Math.min(97, ((cy - rect.top) / rect.height) * 100)) };
    };
    const onMove = (ev: MouseEvent | TouchEvent) => {
      const pos = getPos(ev);
      setTextDecorations(p => p.map(t => t.id === id ? { ...t, ...pos } : t));
      setEmojiDecorations(p => p.map(em => em.id === id ? { ...em, ...pos } : em));
    };
    const onUp = () => {
      setIsDragging(null);
      document.removeEventListener('mousemove', onMove); document.removeEventListener('mouseup', onUp);
      document.removeEventListener('touchmove', onMove); document.removeEventListener('touchend', onUp);
    };
    document.addEventListener('mousemove', onMove); document.addEventListener('mouseup', onUp);
    document.addEventListener('touchmove', onMove, { passive: false }); document.addEventListener('touchend', onUp);
  };

  const toggleMobilePanel = (panel: 'settings' | 'frames' | 'decorations') => {
    setMobilePanel(prev => prev === panel ? null : panel);
  };

  return (
    <main style={{ minHeight: '100vh', background: '', fontFamily: "'DM Sans','Segoe UI',sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=DM+Serif+Display:ital@0;1&display=swap');

        .frame-btn { transition: transform 0.18s, box-shadow 0.18s; }
        .frame-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0,0,0,0.09); }
        ::-webkit-scrollbar { width: 4px; height: 4px; }
        ::-webkit-scrollbar-thumb { background: rgba(212,132,122,0.25); border-radius: 10px; }

        /* ── Desktop: 3-column grid ── */
        .pix-layout {
          display: grid;
          grid-template-columns: 265px 1fr 210px;
          grid-template-rows: auto;
          gap: 18px;
          align-items: start;
        }
        .pix-left   { grid-column: 1; }
        .pix-center { grid-column: 2; }
        .pix-right  { grid-column: 3; }

        .pix-sticky {
          position: sticky;
          top: 16px;
          max-height: calc(100vh - 60px);
          overflow-y: auto;
        }

        /* Mobile toolbar (hidden on desktop) */
        .mobile-toolbar { display: none; }

        /* Mobile panels (hidden on desktop) */
        .mobile-panel {
          display: none;
        }

        /* ── Tablet: 2-column, right panel goes below ── */
        @media (max-width: 900px) {
          .pix-layout {
            grid-template-columns: 220px 1fr;
            grid-template-rows: auto auto;
          }
          .pix-left   { grid-column: 1; grid-row: 1; }
          .pix-center { grid-column: 2; grid-row: 1; }
          .pix-right  {
            grid-column: 1 / -1;
            grid-row: 2;
          }

          /* Frames panel: horizontal scrollable row on tablet */
          .frames-grid {
            display: flex !important;
            flex-direction: row !important;
            gap: 8px !important;
            overflow-x: auto;
            padding-bottom: 6px;
          }
          .frame-btn {
            flex: 0 0 auto;
            width: 130px;
          }
          .pix-sticky {
            position: static;
            max-height: none;
          }
          .pix-right .pix-sticky {
            position: static;
          }
        }

        /* ── Mobile: single column, panels via bottom toolbar ── */
        @media (max-width: 600px) {
          .pix-layout {
            display: flex;
           align-items: center;
           padding-top:20px;
            flex-direction: column;
            gap: 12px;
          }
          /* Hide sidebar panels on mobile — shown via mobile-panel drawers instead */
          .pix-left, .pix-right { display: none; }

          .mobile-toolbar {
            display: flex;
            gap: 8px;
            overflow-x: auto;
            padding: 0 0 4px;
            scrollbar-width: none;
          }
          .mobile-toolbar::-webkit-scrollbar { display: none; }
          .mobile-toolbar-btn {
            flex: 1 1 0;
            min-width: 0;
            padding: 9px 6px;
            border-radius: 11px;
            border: 1.5px solid #f0e0da;
            background: white;
            color: #9b7b74;
            font-size: 12px;
            font-weight: 500;
            cursor: pointer;
            font-family: inherit;
            white-space: nowrap;
            text-align: center;
            transition: background 0.15s, border-color 0.15s;
          }
          .mobile-toolbar-btn.active {
            border-color: #4E72C0;
            background: #4E72C0;
            color: white;
          }
          .mobile-panel {
            display: block;
            background: white;
            border-radius: 14px;
            border: 1.5px solid #f0e0da;
            padding: 14px;
            overflow: hidden;
          }
          /* Frames: horizontal scroll on mobile */
          .frames-grid {
            display: flex !important;
            flex-direction: row !important;
            gap: 8px !important;
            overflow-x: auto;
            padding-bottom: 4px;
          }
          .frame-btn {
            flex: 0 0 auto;
            width: 115px;
          }
          .preview-height { height: 300px !important; }
        }

        /* ── Very small screens ── */
        @media (max-width: 380px) {
          .mobile-toolbar-btn { font-size: 11px; padding: 8px 5px; }
          .preview-height { height: 260px !important; }
        }
      `}</style>

      <div style={{ maxWidth: '1380px', margin: '0 auto', padding: '20px 12px 80px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '22px' ,paddingTop: 80}}>
          <p style={{ fontFamily: "", fontSize: '11px', color: '#01234B', letterSpacing: '0.3em', marginBottom: '5px' }}>✦ PHOTO EDITOR ✦</p>
       <h1
  style={{
    fontFamily: "'Press Start 2P', cursive",
    fontSize: 'clamp(16px, 4vw, 36px)', // 👈 updated
    color: '#035DA5',
    fontWeight: 300,
    margin: 0,
    lineHeight: 1.1,
    letterSpacing: '-1.4px'
  }}
>
  Pixelify Your Image
</h1>
          {/*  style={{
              fontFamily: "'Press Start 2P', cursive",
              fontSize: '30px',
              color: '#01234B',
              marginBottom: '12px',
              fontWeight: 'bold',
            
            }} */}
          {/* <p style={{ fontSize: '13px', color: '#01234B', marginTop: '5px', fontWeight: 300 }}>Upload · Pixelate · Frame · Decorate</p> */}
        </div>

        {/* Mobile toolbar — only visible on mobile */}
        {uploadedImage && (
          <div className="mobile-toolbar">
            <button className={`mobile-toolbar-btn${mobilePanel === 'settings' ? ' active' : ''}`} onClick={() => toggleMobilePanel('settings')}>⚙️ Settings</button>
            <button className={`mobile-toolbar-btn${mobilePanel === 'frames' ? ' active' : ''}`} onClick={() => toggleMobilePanel('frames')}>🖼 Frames</button>
            <button className={`mobile-toolbar-btn${mobilePanel === 'decorations' ? ' active' : ''}`} onClick={() => toggleMobilePanel('decorations')}>✨ Decorate</button>
          </div>
        )}

        {/* Mobile collapsible panels */}
        {uploadedImage && mobilePanel === 'settings' && (
          <div className="mobile-panel">
            <SettingsPanel pixelSize={pixelSize} colors={colors} styleMode={styleMode}
              onPixelSizeChange={setPixelSize} onColorsChange={setColors} onStyleModeChange={setStyleMode} />
          </div>
        )}

        {uploadedImage && mobilePanel === 'frames' && (
          <div className="mobile-panel">
            <p style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '10px', color: '#d4847a', letterSpacing: '0.2em', marginBottom: '10px', textTransform: 'uppercase' }}>✦ Frame Style</p>
            <div className="frames-grid" style={{ display: 'flex', flexDirection: 'row', gap: '8px', overflowX: 'auto' }}>
              {FRAME_PRESETS.map((frame) => (
                <button key={frame.id} className="frame-btn" onClick={() => setFrameType(frame.id)}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', padding: '10px 8px', borderRadius: '11px', border: frameType === frame.id ? '1.5px solid #01234B' : '1.5px solid #f0e0da', background: frameType === frame.id ? '' : 'white', cursor: 'pointer', width: '115px', flexShrink: 0 }}>
                  <div style={{ width: '40px', height: '40px' }}>{frame.preview}</div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '12px', fontWeight: 600, color: '#2d1f1a' }}>{frame.name}</div>
                    <div style={{ fontSize: '10px', color: '#b09090' }}>{frame.description}</div>
                  </div>
                  {frameType === frame.id && <span style={{ color: '#d4847a', fontSize: '12px' }}>✓</span>}
                </button>
              ))}
            </div>
          </div>
        )}

        {uploadedImage && mobilePanel === 'decorations' && (
          <div className="mobile-panel">
            <DecorationPanel
              textDecorations={textDecorations} emojiDecorations={emojiDecorations}
              onTextAdd={(t) => setTextDecorations(p => [...p, { ...t, x: 50, y: 50 }])}
              onEmojiAdd={(em) => setEmojiDecorations(p => [...p, { ...em, x: 50, y: 50 }])}
              onTextRemove={(id) => setTextDecorations(p => p.filter(t => t.id !== id))}
              onEmojiRemove={(id) => setEmojiDecorations(p => p.filter(e => e.id !== id))}
            />
          </div>
        )}

        {/* Main layout grid */}
        <div className="pix-layout">

          {/* LEFT — Settings + Decorations */}
          <div className="pix-left">
            <div className="pix-sticky" style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingBottom: '8px' }}>
              <SettingsPanel pixelSize={pixelSize} colors={colors} styleMode={styleMode}
                onPixelSizeChange={setPixelSize} onColorsChange={setColors} onStyleModeChange={setStyleMode} />
              {uploadedImage && (
                <DecorationPanel
                  textDecorations={textDecorations} emojiDecorations={emojiDecorations}
                  onTextAdd={(t) => setTextDecorations(p => [...p, { ...t, x: 50, y: 50 }])}
                  onEmojiAdd={(em) => setEmojiDecorations(p => [...p, { ...em, x: 50, y: 50 }])}
                  onTextRemove={(id) => setTextDecorations(p => p.filter(t => t.id !== id))}
                  onEmojiRemove={(id) => setEmojiDecorations(p => p.filter(e => e.id !== id))}
                />
              )}
            </div>
          </div>

          {/* CENTER — Preview */}
          <div className="pix-center" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {!uploadedImage ? (
              <ImageUpload onImageUpload={handleImageUpload} uploadedImage={null} />
            ) : (
              <>
                <div
                  ref={previewRef}
                  className="preview-height"
                  style={{
                    position: 'relative', borderRadius: '16px', overflow: 'hidden',
                    background: 'white',
                    boxShadow: '0 12px 40px rgba(0,0,0,0.09)',
                    height: '460px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}
                >
                  {processedDataUrl && (
                    <img src={processedDataUrl} alt="Preview"
                      style={{ maxWidth: '94%', maxHeight: '94%', objectFit: 'contain', imageRendering: 'pixelated', display: 'block', borderRadius: '10px', boxShadow: '0 6px 30px rgba(0,0,0,0.12)' }}
                    />
                  )}
                  {textDecorations.map((td) => (
                    <div key={td.id} onMouseDown={(e) => handleDragStart(e, td.id)} onTouchStart={(e) => handleDragStart(e, td.id)}
                      style={{ position: 'absolute', left: `${td.x}%`, top: `${td.y}%`, transform: 'translate(-50%,-50%)', fontSize: `${td.fontSize}px`, color: td.color, fontFamily: td.fontFamily, fontWeight: 'bold', textShadow: '0 2px 8px rgba(0,0,0,0.45)', userSelect: 'none', padding: '3px 8px', borderRadius: '4px', border: '1.5px dashed rgba(255,255,255,0.6)', background: isDragging === td.id ? 'rgba(255,255,255,0.2)' : 'transparent', whiteSpace: 'nowrap', zIndex: 10, cursor: 'grab', opacity: isDragging === td.id ? 0.7 : 0.95 }}>
                      {td.text}
                    </div>
                  ))}
                  {emojiDecorations.map((ed) => (
                    <div key={ed.id} onMouseDown={(e) => handleDragStart(e, ed.id)} onTouchStart={(e) => handleDragStart(e, ed.id)}
                      style={{ position: 'absolute', left: `${ed.x}%`, top: `${ed.y}%`, transform: 'translate(-50%,-50%)', fontSize: `${ed.fontSize}px`, lineHeight: 1, userSelect: 'none', padding: '3px', border: '1.5px dashed rgba(255,255,255,0.6)', background: isDragging === ed.id ? 'rgba(255,255,255,0.2)' : 'transparent', borderRadius: '4px', zIndex: 10, cursor: 'grab', opacity: isDragging === ed.id ? 0.7 : 1 }}>
                      {ed.emoji}
                    </div>
                  ))}
                  {(textDecorations.length > 0 || emojiDecorations.length > 0) && (
                    <div style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', background: 'rgba(0,0,0,0.42)', color: 'white', fontSize: '11px', padding: '4px 14px', borderRadius: '20px', whiteSpace: 'nowrap', backdropFilter: 'blur(6px)' }}>
                      ✦ Drag to reposition
                    </div>
                  )}
                </div>

                {/* Action buttons */}
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button onClick={() => { setUploadedImage(null); setProcessedDataUrl(null); setTextDecorations([]); setEmojiDecorations([]); setMobilePanel(null); }}
                    style={{ flex: 1, padding: '11px', borderRadius: '11px', border: '1.5px solid #e8d8d4', background: 'white', color: '#01234B', fontSize: '13px', fontWeight: 500, cursor: 'pointer', fontFamily: 'inherit', minWidth: 0 }}>
                    ↩ Change
                  </button>
                  <button onClick={handleDownload}
                    style={{ flex: 2, padding: '11px 16px', borderRadius: '11px', border: 'none', background: '#4E72C0', color: 'white', fontSize: '14px', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', boxShadow: '0 4px 18px rgba(212,132,122,0.36)', minWidth: 0 }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')} onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
                    ⬇ Download
                  </button>
                </div>
              </>
            )}
          </div>

          {/* RIGHT — Frames (desktop / tablet) */}
          <div className="pix-right">
            <div className="pix-sticky" style={{ paddingBottom: '8px' }}>
              <p style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '10px', color: '#01234B', letterSpacing: '-0.03em', marginBottom: '10px', textTransform: 'uppercase' }}>
                ✦ Frame Style
              </p>
              {/* On tablet this becomes horizontal via .frames-grid CSS; on desktop it's vertical */}
              <div className="frames-grid" style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {FRAME_PRESETS.map((frame) => (
                  <button key={frame.id} className="frame-btn" onClick={() => setFrameType(frame.id)}
                    style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 11px', borderRadius: '11px', border: frameType === frame.id ? '1px solid #01234B' : '1.5px solid #f0e0da', background: frameType === frame.id ? '#4E72C0' : 'white', cursor: 'pointer', textAlign: 'left', width: '100%' }}>
                    <div style={{ width: '38px', height: '38px', flexShrink: 0 }}>{frame.preview}</div>
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontSize: '12px', fontWeight: 600, color:frameType === frame.id ? 'white':'#2d1f1a',
                          fontFamily: 'inherit' }}>{frame.name}</div>
                      <div style={{ fontSize: '10px', color:frameType === frame.id ? 'white':'#2d1f1a', marginTop: '1px' }}>{frame.description}</div>
                    </div>
                    {frameType === frame.id && <span style={{ marginLeft: 'auto', color: '#d4847a', fontSize: '13px', flexShrink: 0 }}>✓</span>}
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </main>
  );
}