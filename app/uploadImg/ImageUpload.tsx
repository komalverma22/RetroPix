'use client';

import { ChangeEvent } from 'react';
import Image from 'next/image';

interface ImageUploadProps {
  onImageUpload: (file: File) => void;
  uploadedImage: string | null;
}

export default function ImageUpload({ onImageUpload, uploadedImage }: ImageUploadProps) {
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onImageUpload(file);
    }
  };

  return (
    <div className="flex-1 flex items-center justify-center">
      <div
        className="w-full h-[500px] rounded-lg border-4 border-dashed flex items-center justify-center cursor-pointer relative overflow-hidden"
        style={{
          borderColor: '#035DA5',
          backgroundColor: '#f5f5f5',
        }}
      >
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="absolute inset-0 opacity-0 cursor-pointer z-10"
        />

        {uploadedImage ? (
          <img
            src={uploadedImage}
            alt="Uploaded"
            className="w-full h-full object-contain"
            style={{
              imageRendering: 'auto',
            }}
          />
        ) : (
          <div className="text-center pointer-events-none">
            <div
              style={{
                fontSize: '48px',
                marginBottom: '16px',
              }}
            >
              📁
            </div>
            <p
              style={{
                fontFamily: "'Press Start 2P', cursive",
                fontSize: '14px',
                color: '#035DA5',
                marginBottom: '8px',
              }}
            >
              Click to upload or drag & drop
            </p>
            <p
              style={{
                fontFamily: "'Press Start 2P', cursive",
                fontSize: '12px',
                color: '#666',
              }}
            >
              PNG, JPG, WebP
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
