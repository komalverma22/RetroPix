'use client';

import GalleryHeading from './GalleryHeading';
// import GalleryGrid from './GalleryGrid';
import Galleryy from '../CircularGallery';
// import GalleryDecoration from './GalleryDecoration';


export default function Gallery() {
  return (
    <section
      className="w-full py-20 md:py-12 px-4 relative"
      style={{
        backgroundColor: '#4E72C0',
      }}
    >
      <div className="max-w-7xl pt-10 mx-auto">
        {/* Heading */}
        <GalleryHeading />

        {/* Gallery Grid */}
       <Galleryy/>
      </div>
      {/* Gallery Decoration - Overlay on top */}
      {/* <div className="absolute inset-0 pointer-events-none w-full h-full">
        <div className="absolute bottom-[-20px] left-0 right-0 w-full">
          <GalleryDecoration />
        </div>
      </div> */}
    </section>
  );
}
