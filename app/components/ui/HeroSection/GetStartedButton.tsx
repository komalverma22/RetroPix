'use client';

export default function GetStartedButton() {
  return (
    <button
      className="px-8 py-4 rounded-full border-4 border-[#035DA5] bg-[#8FD14F] text-[#035DA5] font-bold hover:bg-[#F77FBE] hover:border-[#F77FBE] hover:text-white transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95"
      style={{
        fontFamily: "'Pixelify Sans', sans-serif",
        fontSize: '24px',
        letterSpacing: '2%',
      }}
    >
      Get Started
    </button>
  );
}
