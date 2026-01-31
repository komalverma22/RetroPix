'use client';

export default function WhyChooseContent() {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
      {/* Left side - Description box */}
      <div className="flex-1">
        <div
          className="rounded-3xl p-8 md:p-10 relative"
          style={{
            backgroundColor: '#035DA5',
            border: '4px solid #1a3a5c',
            boxShadow: '0 8px 0 0 rgba(0, 0, 0, 0.2), inset 0 -2px 0 0 rgba(0, 0, 0, 0.1)',
          }}
        >
          <p
            className="text-lg md:text-xl leading-relaxed"
            style={{
              fontFamily: "'Press Start 2P', cursive",
              color: '#ffffff',
              fontSize: '14px',
              lineHeight: '1.8',
            }}
          >
            Unlike modern filters that just blur your photos,{' '}
            <span
              className="px-2 py-1 rounded"
              style={{
                backgroundColor: '#AAF48B',
                color: '#035DA5',
                fontWeight: 'bold',
              }}
            >
              RetroPix
            </span>{' '}
            uses a custom 8-bit rendering engine. It carefully maps your colors to vintage palettes
            like CGA, Game Boy, and NES, ensuring your art looks like it was actually made in{' '}
            <span
              className="px-2 py-1 rounded"
              style={{
                backgroundColor: '#AAF48B',
                color: '#035DA5',
                fontWeight: 'bold',
              }}
            >
              1991
            </span>
            .
          </p>
        </div>
      </div>

      {/* Right side - Pixel art image */}
      <div className="flex-1 flex justify-center">
        <div
          className="rounded-2xl p-4 md:p-6"
          style={{
            backgroundColor: '#f0f0f0',
            border: '4px solid #035DA5',
            boxShadow: '0 8px 0 0 rgba(3, 93, 165, 0.3)',
          }}
        >
          <img
            src="/paintImg.png"
            alt="Retro pixel art palette"
            className="w-full h-auto max-w-xs md:max-w-sm"
            style={{
              imageRendering: 'pixelated',
            }}
          />
        </div>
      </div>
    </div>
  );
}
