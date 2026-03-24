'use client';

export default function FooterHeading() {
  return (
    <div className="mb-12 md:mb-16">
      <h2
        className="text-4xl md:text-5xl lg:text-[109px] font-bold text-center
                   [text-shadow:4px_4px_0px_#035DA5] 
                   lg:[text-shadow:8px_8px_0px_#035DA5]
                   [-webkit-text-stroke:1px_#035DA5]
                   md:[-webkit-text-stroke:2px_#035DA5]"
        style={{
          fontFamily: "'Press Start 2P', cursive",
          color: '#FDFFFF',
          letterSpacing: '4px',
        }}
      >
        THANKS
      </h2>
    </div>
  );
}