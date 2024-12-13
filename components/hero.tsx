import NextLogo from "./next-logo";
import { Button } from "./ui/button";
import Link from "next/link";
import SupabaseLogo from "./supabase-logo";

export default function Header() {
  return (
    <div
      className="flex flex-col gap-8 bg-cover bg-center bg-no-repeat h-screen text-white bg-blend-darken bg-black bg-opacity-50 w-full"
      style={{ backgroundImage: "url('/imgs/hero-banner.jpg')" }}
    >
      <div className="flex flex-col items-center text-center px-4 md:px-16">
        <div className="flex p-8 mt-5 text-4xl md:text-6xl lg:text-9xl font-bold">
          BARBERS & HAIR CUTTING
        </div>
        <div className="flex p-4 md:p-8 font-bold text-base md:text-lg lg:text-xl leading-relaxed w-full md:w-2/3 lg:w-1/2">
          SINCE 1999, V's BARBERSHOP HAS BEEN ON A MISSION TO REDEFINE THE MEN'S GROOMING INDUSTRY. WITH OVER 60
          AUTHENTIC BARBERSHOPS NATIONWIDE, A CURATED SELECTION OF MEN'S GROOMING PRODUCTS AND PREMIUM SERVICE
          OFFERINGS... V's IS BRINGING BACK HANDSOME. ONE GENTLEMAN AT A TIME.
        </div>
        <Button
          asChild
          size="sm"
          variant={"default"}
          className="flex max-w-[200px] bg-orange-400 hover:bg-orange-300 mt-6"
        >
          <Link href="/reservation">CREATE RESERVATION</Link>
        </Button>
      </div>
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
    </div>
  );
}
