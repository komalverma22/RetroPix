'use client';

import Image from 'next/image';
import HeroHeading from './HeroHeading';
import GetStartedButton from './GetStartedButton';
import GalleryDecoration from '../Gallery/GalleryDecoration';

export default function HeroSection() {
  return (
    <>
      <section className="w-full relative">
        {/* Background image - full screen height */}
        <div className="w-full h-[800px]  top-0 z-0">
          <Image
            src="/image.png"
            alt="Retro pixel art background"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>

        {/* Hero Content - positioned on top of image */}
       <div className="absolute inset-0 flex flex-col items-center z-20 pt-16 sm:pt-20 md:pt-24 lg:pt-28 xl:pt-46">
          {/* Hero Heading */}
          <HeroHeading />

          {/* Get Started Button */}
          <GetStartedButton />

          
        </div>
      </section>
      <GalleryDecoration />
    </>
  );
}