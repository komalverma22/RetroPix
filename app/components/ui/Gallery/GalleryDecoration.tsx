'use client';

export default function GalleryDecoration() {
  return (
    <div className="w-full overflow-hidden pt-[-20px]" >
      <img
        src="/belowGallery.png"
        alt="Gallery decoration"
        className="w-full h-auto block"
        style={{
          imageRendering: 'pixelated',
          display: 'block',
          margin: '0',
          padding: '0',
        }}
      />
    </div>
  );
}
