'use client';

export default function FooterArt() {
  return (
    <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <img
        src="/footerImg.png"
        alt="Retro pixel art footer"
        className="w-full h-auto block m-0"
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
