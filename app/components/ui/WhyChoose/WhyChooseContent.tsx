'use client';

export default function WhyChooseContent() {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Left side - Description box */}
      <div className="flex-1">
        <div
          className="rounded-3xl w-[350px] md:w-[782px] p-5 md:p-10 relative  mt-[-0px] md:mt-[-70px]"
          style={{
            backgroundColor: '#4E72C0',
            border: '3px solid #01234B',
          boxShadow: '16px 16px 0 0 #01234B'

          }}
        >
           
          <p
            className="text-sm md:text-[22px] leading-relaxed"
            style={{
              fontFamily: "'Press Start 2P', cursive",
              color: '#ffffff',
             
              lineHeight: '1.8',
            }}
          >
            Unlike modern filters that just blur your photos,{' '}
            <span
              className="px-3 py-2"
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
              className="px-3 py-2"
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

      {/* Right side - Pixel art image */}
  <div className="flex-1 flex justify-center mt-[-95px] hidden lg:flex">
  <img
    src="/paintImg.png"
    alt="Retro pixel art palette"
    className="w-full h-auto max-w-xs md:max-w-[489px]"
    style={{
      imageRendering: 'pixelated',
    }}
  />
</div>

    </div>
  );
}