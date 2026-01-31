'use client';

import WhyChooseHeading from './WhyChooseHeading';
import WhyChooseContent from './WhyChooseContent';

export default function WhyChoose() {
  return (
    <section className="w-full py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <WhyChooseHeading />

        {/* Content */}
        <WhyChooseContent />
      </div>
    </section>
  );
}
