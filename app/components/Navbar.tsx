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
    <nav className="fixed top-0 left-0 w-full px-3 sm:px-12 py-5 flex items-center justify-between z-50 backdrop-blur-md bg-[#E4F1FE]">
      {/* Brand Name */}
      <Link href="/" className={`font-bold text-sm sm:text-2xl md:text-[21px] text-[#02121E] ${pressStart.className}`}
      >
        RetroPix
      </Link>

      <div className="hidden lg:flex gap-12 absolute left-1/2 transform -translate-x-1/2">
        <Link href="/" className="text-[#02121E] transition-colors hover:text-[#035DA5]"
          style={{ fontFamily: "'Pixelify Sans'", fontSize: '26px', letterSpacing: '-1%' }}
        >
          Home
        </Link>
        <Link href="/uploadImg" className="text-[#02121E] transition-colors hover:text-[#035DA5]"
          style={{ fontFamily: "'Pixelify Sans'", fontSize: '26px', letterSpacing: '-1%' }}
        >
          Upload
        </Link>
        <Link href="/#faq" className="text-[#02121E] transition-colors hover:text-[#035DA5]"
          style={{ fontFamily: "'Pixelify Sans'", fontSize: '26px', letterSpacing: '-1%' }}
        >
          FAQ
        </Link>
      </div>

      {/* Star the Repo Button */}
      <Link href="https://github.com/komalverma22/RetroPix" target="_blank" rel="noopener noreferrer">
        <Button 
          variant="outline"
          className='bg-transparent text-[#02121E] flex items-center gap-2 hover:text-[#035DA5]  hover:bg-[#AAF48B] 
transition-colors duration-300'
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
      </Link>
    </nav>
  );
}