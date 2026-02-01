'use client';
import { Button } from "@/components/ui/8bit/button"
import Link from "next/link";

export default function GetStartedButton() {
  return (
    <Link href="/uploadImg">
      <Button 
        borderColor="bg-[#035DA5]"
        className=" bg-[#AAF48B] text-[#035DA5] border-2 border-[#035DA5] py-6 text-xl font-bold hover:bg-[#7BC13C] hover:text-[#035DA5] hover:translate-y-1 transition-all shadow-[0_8px_0_0_#035DA5] hover:shadow-[0_4px_0_0_#035DA5] hover:bg-opacity-90 "
        style={{ fontFamily: "'Press Start 2P', cursive" }}
      >
        Get Started
      </Button>
    </Link>
  );
}
