'use client';

import FooterHeading from './FooterHeading';
import FooterContent from './FooterContent';
import FooterArt from './FooterArt';

export default function Footer() {
  return (
    <footer
      className="w-full pt-12 md:pt-16 px-4 md:px-8"
      style={{
        backgroundColor: '#E4F1FE',
        
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <FooterHeading />

        {/* Content */}
        <FooterContent />

        {/* Pixel Art Footer */}
        <FooterArt />
      </div>
    </footer>
  );
}
