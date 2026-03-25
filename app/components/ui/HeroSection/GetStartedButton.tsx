'use client';
import { Button } from "@/components/ui/8bit/button";
import Link from "next/link";

export default function GetStartedButton() {
  return (
    <Link href="/uploadImg">
      <Button
        borderColor="bg-[#035DA5]"
        className="bg-[#AAF48B] text-[#035DA5] border-2 border-[#035DA5] font-bold hover:bg-[#7BC13C] hover:text-[#035DA5] hover:translate-y-1 transition-all shadow-[0_8px_0_0_#035DA5] hover:shadow-[0_4px_0_0_#035DA5] text-[clamp(10px,2.5vw,18px)] py-4 md:py-6 px-4 md:px-6"
        style={{ fontFamily: "'Press Start 2P', cursive" }}
      >
        Get Started
      </Button>
    </Link>
  );
}