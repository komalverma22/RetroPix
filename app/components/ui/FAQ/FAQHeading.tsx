'use client';

export default function FAQHeading() {
  return (
    <>
      <style>{`
        .faq-heading {
          font-family: 'Press Start 2P', cursive;
          color: #FDFFFF;
          letter-spacing: 5px;
          line-height: 1.35em;
          font-weight: 500;
          font-size: clamp(22px, 6vw, 46px);
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
          .faq-heading {
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

      <h2 className="faq-heading">
        You Ask,<br />
        We Answer!
      </h2>
    </>
  );
}