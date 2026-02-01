'use client';

export default function GalleryGrid() {
  // Array to represent the gallery images (8 items in masonry layout)
  const galleryItems = [
    { id: 1, colSpan: 1, rowSpan: 2 }, // Left tall
    { id: 2, colSpan: 1, rowSpan: 1 }, // Middle top
    { id: 3, colSpan: 1, rowSpan: 1 }, // Middle top right
    { id: 4, colSpan: 1, rowSpan: 1 }, // Right tall top
    { id: 5, colSpan: 1, rowSpan: 1 }, // Middle bottom
    { id: 6, colSpan: 1, rowSpan: 1 }, // Middle bottom right
    { id: 7, colSpan: 1, rowSpan: 1 }, // Right bottom
    { id: 8, colSpan: 1, rowSpan: 1 }, // Far right
  ];

  return (
    <div
      className="grid gap-6 auto-rows-max"
      style={{
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gridAutoFlow: 'dense',
      }}
    >
      {/* Item 1 - Tall on left */}
      <div
        className="bg-white rounded-md overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
        style={{
          gridColumn: 'span 1',
          gridRow: 'span 2',
          minHeight: '400px',
        }}
      >
        <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
          <span style={{ fontSize: '48px' }}>🎨</span>
        </div>
      </div>

      {/* Item 2 - Top middle */}
      <div
        className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
        style={{
          gridColumn: 'span 1',
          gridRow: 'span 1',
          minHeight: '250px',
        }}
      >
        <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
          <span style={{ fontSize: '48px' }}>🖼️</span>
        </div>
      </div>

      {/* Item 3 - Top right area */}
      <div
        className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
        style={{
          gridColumn: 'span 1',
          gridRow: 'span 1',
          minHeight: '250px',
        }}
      >
        <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
          <span style={{ fontSize: '48px' }}>🎮</span>
        </div>
      </div>

      {/* Item 4 - Tall on right */}
      <div
        className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
        style={{
          gridColumn: 'span 1',
          gridRow: 'span 2',
          minHeight: '400px',
        }}
      >
        <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
          <span style={{ fontSize: '48px' }}>✨</span>
        </div>
      </div>

      {/* Item 5 - Middle bottom */}
      <div
        className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
        style={{
          gridColumn: 'span 1',
          gridRow: 'span 1',
          minHeight: '250px',
        }}
      >
        <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
          <span style={{ fontSize: '48px' }}>🌟</span>
        </div>
      </div>

      {/* Item 6 - Bottom center right */}
      <div
        className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
        style={{
          gridColumn: 'span 1',
          gridRow: 'span 1',
          minHeight: '250px',
        }}
      >
        <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
          <span style={{ fontSize: '48px' }}>🚀</span>
        </div>
      </div>
    </div>
  );
}
