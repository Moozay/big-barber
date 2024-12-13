import NextLogo from "./next-logo";
import { Button } from "./ui/button";
import Link from "next/link";
import SupabaseLogo from "./supabase-logo";

export default function Header() {
  return (
    <div className="flex flex-col gap-16 bg-cover bg-center bg-no-repeat h-screen text-white bg-blend-darken bg-black bg-opacity-50 w-full"
      style={{ backgroundImage: "url('/imgs/hero-banner.jpg')" }}
    >
      <div className="flex flex-col items-center">
      <div className="flex p-20 mt-5 text-9xl font-bold text-center">BARBERS & HAIR CUTTING</div>
      <div className="flex p-20 font-bold leading-relaxed w-2/3 text-center">SINCE 1999, V's BARBERSHOP HAS BEEN ON A MISSION TO REDEFINE THE MEN'S GROOMING INDUSTRY. WITH OVER 60 AUTHENTIC BARBERSHOPS NATIONWIDE, A CURATED SELECTION OF MEN'S GROOMING PRODUCTS AND PREMIUM SERVICE OFFERINGS... V's IS BRINGING BACK HANDSOME. ONE GENTLEMAN AT A TIME.</div>
      <Button
              asChild
              size="sm"
              variant={"default"}
              className="flex max-w-60 bg-orange-400 hover:bg-orange-300"
            >
              <Link href="/reservation">CREATE RESERVATION</Link>
            </Button>
      </div>
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
     
    </div>
  );
}
