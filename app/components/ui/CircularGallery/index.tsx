'use client';

import CircularGallery from './CircularGallery';
// import GalleryHeading from './CircularHeading';

export default function Galleryy(){
    return(
        <div>


            <div style={{ height: '600px', position: 'relative' }}>
              <CircularGallery 
                bend={0} 
                textColor="#ffffff" 
                borderRadius={0.05} 
                scrollSpeed={1.0}
                scrollEase={0.03}
              />
            </div>
        </div>
    )
}