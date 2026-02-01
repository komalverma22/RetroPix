'use client';

import FAQHeading from './FAQHeading';
import FAQItems from './FAQItems';

export default function FAQ() {
  return (
  <section
  id="faq"
  className="w-full py-20 md:py-35 px-4 md:px-8 bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/faqBg.png')",
    backgroundSize: 'cover',
  }}
>

      <div className="max-w-7xl mx-auto" >
        {/* Main Container - Heading and Items */}
        <div className="flex flex-col lg:flex-row gap-12 md:gap-5 items-start mb-20">
          {/* Left - Heading */}
          <div className="flex-1 min-w-0">
            <FAQHeading />
          </div>

          {/* Right - FAQ Items */}
          <div className="flex-1 w-full">
            <FAQItems />
          </div>
        </div>
      </div>
    </section>
  );
}
