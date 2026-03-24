'use client';

export default function WhyChooseHeading() {
  return (
    <>
      <style>{`
        .whychoose-heading {
          font-family: 'Press Start 2P', cursive;
          color: #FDFFFF;
          letter-spacing: 0.18em;
          font-weight: 500;
          text-align: center;
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
          .whychoose-heading {
            text-shadow:
              -5px -5px 0px #035DA5,
              -5px  5px 0px #035DA5,
               5px -5px 0px #035DA5,
               5px  5px 0px #035DA5,
              -5px  0px 0px #035DA5,
               5px  0px 0px #035DA5,
               0px -5px 0px #035DA5,
               0px  5px 0px #035DA5;
          }
        }
      `}</style>
      <h2 className="whychoose-heading text-[23px] md:text-[46px] py-5 md:py-14">
        WHY RETROPIX?
      </h2>
    </>
  );
}