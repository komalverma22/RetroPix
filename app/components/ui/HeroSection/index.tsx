'use client';

import Image from 'next/image';
import HeroHeading from './HeroHeading';
import GetStartedButton from './GetStartedButton';

export default function HeroSection() {
  return (
    <>
      <style>{`
        .hero-section {
          width: 100%;
          position: relative;
          height: 100svh;
          min-height: 500px;
          overflow: hidden;
          
        }
        .hero-content {
          position: absolute;
          inset: 0;
          z-index: 20;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding-left: 16px;
          padding-right: 16px;
          
          gap: clamp(12px, 3vw, 28px);
        }
      `}</style>

      <section className="hero-section">

        {/* Mobile Background */}
        <div className="md:hidden absolute inset-0 w-full h-full">
          <Image
            src="/heroImgPhn.png"
            alt="Retro pixel art background mobile"
            fill
            className="object-cover object-top"
            priority
            sizes="100vw"
          />
        </div>

        {/* Desktop/Tablet Background */}
        <div className="hidden md:block absolute inset-0 w-full h-full">
          <Image
            src="/image.png"
            alt="Retro pixel art background"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>

        {/* Hero Content */}
        <div className="hero-content">
          <HeroHeading />
          <GetStartedButton />
        </div>

      </section>
    </>
  );
}