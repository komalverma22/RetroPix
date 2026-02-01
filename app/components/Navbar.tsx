'use client';

import Link from 'next/link';
import { Press_Start_2P } from 'next/font/google';
import { Button } from "@/components/ui/8bit/button"
import Image from 'next/image';
const pressStart = Press_Start_2P({ 
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full px-12 py-5 flex items-center justify-between z-50">
      {/* Brand Name */}
      <Link href="/" className={`font-bold text-2xl md:text-[21px] text-[#02121E] ${pressStart.className}`}
      >
        RetroPix
      </Link>

      {/* Navigation Links */}
      <div className="hidden lg:flex gap-12 absolute left-1/2 transform -translate-x-1/2">
        <Link href="#home" className="text-[#02121E] transition-colors"
          style={{ fontFamily: "'Pixelify Sans'", fontSize: '26px', letterSpacing: '-1%' }}
        >
          Home
        </Link>
        <Link href="#features" className="text-[#02121E]"
          style={{ fontFamily: "'Pixelify Sans'", fontSize: '26px', letterSpacing: '-1%' }}
        >
          Upload
        </Link>
      <Link href="#features" className="text-[#02121E]"
          style={{ fontFamily: "'Pixelify Sans'", fontSize: '26px', letterSpacing: '-1%' }}
        >
          FAQ
        </Link>
      </div>

      {/* Star the Repo Button */}
      <Button 
  variant="outline"
  className='bg-transparent text-[#02121E] flex items-center gap-2'
  style={{ fontFamily: "'Pixelify Sans'", fontSize: '21px', letterSpacing: '-1%' }}
>
  <Image 
    src="/githubStar.png" 
    alt="star" 
    width={20} 
    height={20}
  />
  Star the repo
</Button>
    </nav>
  );
}