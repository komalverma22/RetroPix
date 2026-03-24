'use client';

import WhyChooseHeading from './WhyChooseHeading';
import WhyChooseContent from './WhyChooseContent';

export default function WhyChoose() {
  return (
    <section className="w-full px-4 md:px-8 pb-10 md:pb-0  my-10">
      <div className="max-w-7xl mx-auto">
        <WhyChooseHeading />
        <WhyChooseContent />
      </div>
    </section>
  );
}