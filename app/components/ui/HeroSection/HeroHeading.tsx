'use client';

export default function HeroHeading() {
  return (
    <>
      <style>{`
        .hero-heading {
          font-family: 'Press Start 2P', cursive;
          color: #FDFFFF;
          letter-spacing: 0.18em;
          font-size: clamp(28px, 7vw, 64px);
          text-shadow:
            -3px -3px 0px #035DA5,
            -3px  3px 0px #035DA5,
             3px -3px 0px #035DA5,
             3px  3px 0px #035DA5,
            -3px  0px 0px #035DA5,
             3px  0px 0px #035DA5,
             0px -3px 0px #035DA5,
             0px  3px 0px #035DA5;
        }
        @media (min-width: 768px) {
          .hero-heading {
            text-shadow:
              -8px -8px 0px #035DA5,
              -8px  8px 0px #035DA5,
               8px -8px 0px #035DA5,
               8px  8px 0px #035DA5,
              -8px  0px 0px #035DA5,
               8px  0px 0px #035DA5,
               0px -8px 0px #035DA5,
               0px  8px 0px #035DA5;
          }
        }
        .hero-subtext {
          font-family: 'Press Start 2P', cursive;
          color: #035DA5;
          font-size: clamp(9px, 2vw, 20px);
          line-height: 1.8;
          text-align: center;
          padding: 16px;
          max-width: min(90vw, 900px);
        }
      `}</style>

      <div className="text-center flex flex-col items-center ">
        <h1 className="hero-heading text-center">
          PIXEL<br className="sm:hidden" /> CONCEPT
        </h1>
        <p className="hero-subtext">
          Transform any image into a retro aesthetic in seconds.
          Fast. Lightweight. Lo-fi. Authentic. Pixel-perfect.
        </p>
      </div>
    </>
  );
}