'use client';

export default function HeroHeading() {
  return (
    <div className="text-center">
      <h1
        className="text-white drop-shadow-lg select-none"
        style={{
          fontFamily: "'Press Start 2P', cursive",
          fontSize: '64px',
          letterSpacing: '13%',
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
          lineHeight: '1.2',
        }}
      >
        PIXEL
        <br />
        CONCEPT
      </h1>
    </div>
  );
}
