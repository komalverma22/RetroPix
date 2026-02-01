'use client';

import GalleryHeading from './GalleryHeading';
import GalleryGrid from './GalleryGrid';


export default function Gallery() {
  return (
    <section
      className="w-full py-20 md:py-12 px-4 md:px-8"
      style={{
        backgroundColor: '#4E72C0',
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <GalleryHeading />

        {/* Gallery Grid */}
        <GalleryGrid />
      </div>
    </section>
  );
}
