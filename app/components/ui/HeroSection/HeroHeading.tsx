'use client';

export default function HeroHeading() {
  return (
    <div className="text-center">
      <h1
        className="text-[#FDFFFF]  text-[50px] sm:text-[40px] md:text-[64px] "
        style={{
          fontFamily: "'Press Start 2P'",
      
          letterSpacing: '0.18em',
          textShadow: `
            -8px -8px 0px #035DA5,
            -8px 8px 0px #035DA5,
            8px -8px 0px #035DA5,
            8px 8px 0px #035DA5,
            -8px 0px 0px #035DA5,
            8px 0px 0px #035DA5,
            0px -8px 0px #035DA5,
            0px 8px 0px #035DA5,
            0px 0px 0px #035DA5
          `,
         
        }}
      >
        PIXEL
        CONCEPT
      </h1>
     <div className=" text-[14px] sm:text-[15px] lg:text-[20px] text-[#035DA5] max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-7xl px-4 py-5"
  style={{
    fontFamily: "'Press Start 2P', cursive",
    lineHeight:'',
  }}
>
  Transform any image into a retro aesthetic in seconds. Fast. Lightweight. Lo-fi. Authentic. Pixel-perfect.
</div>
    </div>
  );
}
