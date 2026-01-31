'use client';

export default function WhyChooseHeading() {
  return (
    <h2
      className="text-5xl md:text-[46px] font-medium text-center py-20 md:py-14"
      style={{
        fontFamily: "'Press Start 2P', cursive",
        color: '#FDFFFF',
       textShadow: `
            -5px -5px 0px #035DA5,
            -5px 5px 0px #035DA5,
            5px -5px 0px #035DA5,
            5px 5px 0px #035DA5,
            -5px 0px 0px #035DA5,
            5px 0px 0px #035DA5,
            0px -5px 0px #035DA5,
            0px 5px 0px #035DA5,
            0px 0px 0px #035DA5
          `,
        letterSpacing: '0.18em',
      }}
    >
      WHY RETROPIX
    </h2>
  );
}
