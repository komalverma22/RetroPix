'use client';

export default function FAQHeading() {
  return (
    <h2
      className="text-4xl md:text-5xl lg:text-[46px] font-medium"
      style={{
        fontFamily: "'Press Start 2P', cursive",
        color: '#FDFFFF',
        // textShadow: '5px 5px 0 #035DA5',
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
        letterSpacing: '5px',
        lineHeight:'1.35em'
      }}
    >
      You Ask,<br/>
      We Answer!
    </h2>
  );
}
