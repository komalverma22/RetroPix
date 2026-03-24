'use client';

export default function WhyChooseContent() {
  return (
    <>
      <style>{`
        .whychoose-box {
          box-shadow: 4px 4px 0 0 #01234B;
        }
        @media (min-width: 768px) {
          .whychoose-box {
            box-shadow: 16px 16px 0 0 #01234B;
          }
        }
      `}</style>
    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

      {/* Left side - Description box */}
      <div className="flex-1   my-2 lg:my-10 xl:my-0 w-full flex justify-center xl:justify-start">
        <div
          className="whychoose-box rounded-3xl w-full lg:w-[782px] p-5 md:p-10 lg:mt-[-70px]"
          style={{
            backgroundColor: '#4E72C0',
            border: '2.5px solid #01234B',
          }}
        >
          <p
            style={{
              fontFamily: "'Press Start 2P', cursive",
              color: '#ffffff',
              fontSize: 'clamp(10px, 2.2vw, 22px)',
              lineHeight: '1.8',
            }}
          >
            Unlike modern filters that just blur your photos,{' '}
            <span
              className="px-2 py-1"
              style={{
                backgroundColor: '#AAF48B',
                color: '#FFFFFF',
                fontWeight: 'bold',
              }}
            >
              RetroPix
            </span>{' '}
            uses a custom 8-bit rendering engine. It carefully maps your colors to vintage palettes
            like CGA, Game Boy, and NES, ensuring your art looks like it was actually made in{' '}
            <span
              className="px-2 py-1"
              style={{
                backgroundColor: '#AAF48B',
                color: '#FFFFFF',
                fontWeight: 'bold',
              }}
            >
              1991
            </span>
            .
          </p>
        </div>
      </div>

      {/* Right side - Pixel art image (desktop only) */}
      <div className="flex-1 justify-center mt-[-95px] hidden xl:flex">
        <img
          src="/paintImg.png"
          alt="Retro pixel art palette"
          className="w-full h-auto mb-[-40px] max-w-xs md:max-w-[489px]"
          style={{ imageRendering: 'pixelated' }}
        />
      </div>

    </div>
    </>
  );
}