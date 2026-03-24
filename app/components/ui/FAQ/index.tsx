'use client';

import FAQHeading from './FAQHeading';
import FAQItems from './FAQItems';

export default function FAQ() {
  return (
    <>
      <style>{`
        #faq {
          background-image: url('/faqBg.png');
          background-size: 100% 100%;
          background-position: center;
          background-repeat: no-repeat;
        }
        @media (max-width: 767px) {
          #faq {
            background-image: url('/faq-phone-bgImg.png');
          }
        }
      `}</style>

      <section
        id="faq"
        className="w-full py-20 md:py-25 px-4 md:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 md:gap-5 items-start mb-0">
            <div className="flex-1 min-w-0">
              <FAQHeading />
            </div>
            <div className="flex-1 w-full">
              <FAQItems />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}