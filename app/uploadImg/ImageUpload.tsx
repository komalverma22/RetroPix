'use client';

import { Button } from "@/components/ui/8bit/button"
import { ChangeEvent, useState } from 'react';

interface ImageUploadProps {
  onImageUpload: (file: File) => void;
  uploadedImage: string | null;
}

export default function ImageUpload({ onImageUpload }: ImageUploadProps) {
  const [isDraggingOver, setIsDraggingOver] = useState(false);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) onImageUpload(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDraggingOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) onImageUpload(file);
  };

  return (
    <div
      onDragOver={(e) => { e.preventDefault(); setIsDraggingOver(true); }}
      onDragLeave={() => setIsDraggingOver(false)}
      onDrop={handleDrop}
      style={{
        position: 'relative',
        borderRadius: '20px',
        border: `1px dashed ${isDraggingOver ? '#01234B' : '#01234B'}`,
        background: isDraggingOver
          ? 'linear-gradient(135deg, #fff5f3, #fef3f8)'
          : 'white',
        minHeight: '480px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'all 0.2s',
        overflow: 'hidden',
      }}
    >
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer', zIndex: 5 }}
      />

      {/* Decorative corners */}
      <div style={{ position: 'absolute', top: '16px', left: '16px', fontSize: '18px', opacity: 0.4 }}>✦</div>
      <div style={{ position: 'absolute', top: '16px', right: '16px', fontSize: '18px', opacity: 0.4 }}>✦</div>
      <div style={{ position: 'absolute', bottom: '16px', left: '16px', fontSize: '18px', opacity: 0.4 }}>✦</div>
      <div style={{ position: 'absolute', bottom: '16px', right: '16px', fontSize: '18px', opacity: 0.4 }}>✦</div>

      <div style={{ textAlign: 'center', padding: '20px' }}>
        {/* Icon */}
        <div style={{
          width: '80px', height: '80px', borderRadius: '50%',
          background: 'white',
          border: '1px solid #01234B',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '32px', margin: '0 auto 20px',
          // boxShadow: '0 8px 24px rgba(212,132,122,0.2)',
          transition: 'transform 0.2s',
          transform: isDraggingOver ? 'scale(1.1)' : 'scale(1)',
        }}>
          {isDraggingOver ? '🌸' : '📷'}
        </div>

        <p style={{
          fontFamily: "'Press Start 2P', cursive",
          fontSize: '20px', color: '#2d1f1a', fontWeight: 400,
          marginBottom: '8px',
        }}>
          {isDraggingOver ? 'Drop your photo here' : 'ADD YOUR PHOTO'}
        </p>
        <p style={{ fontSize: '13px', color: '#b09090', marginBottom: '24px', lineHeight: 1.6 }}>
          Click to browse or drag &amp; drop your image<br />
          PNG · JPG · WebP supported
        </p>

        <div style={{
      
        }}>
             <Button 
        // borderColor="bg-[#4E72C0]"
        className=" bg-[#4E72C0] text-white border-2  py-6 text-sm font-normal hover:bg-[#7BC13C] hover:text-[#035DA5] hover:translate-y-1 transition-all shadow-[0_8px_0_0_#035DA5] hover:shadow-[0_4px_0_0_#035DA5] hover:bg-opacity-90 "
        style={{ fontFamily: "'Press Start 2P', cursive" }}
      >
        {/* <span>⬆</span>  */}
        Choose Image
      </Button>
        </div>

        <div style={{ marginTop: '20px', display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {['✨ Pixelate', '🖼️ Frame', '✍️ Add Text', '😊 Emoji'].map((step) => (
            <span key={step} style={{
              fontSize: '11px', color: '#b09090', background: 'white',
              padding: '4px 10px', borderRadius: '20px', border: '1px solid #f0e0da',
            }}>
              {step}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}