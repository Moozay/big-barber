import Hero from "@/components/hero";
import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";
import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";

export default async function Index() {
  return (
    <>
      <Hero />
      <main className="flex-1 flex flex-col gap-6 px-4">
        <div className="flex flex-col items-center gap-10">
          <div className="font-bold text-5xl">
          Service We Provide
          </div>
          <div className="w-2/3 text-center mb-20">
          At BIG BARBER’s, we bring you nostalgia with a modern twist. From the authentic barber chairs, our old-fashioned hot lather and straightedge razor shaves to our relaxing head and neck massages, V’s Barbershop sets a new standard for barbershops. Whether you’re looking for a traditional short haircut or a more contemporary men’s hairstyle, we invite you to visit one of our barbers and experience for yourself why V’s is simply a cut above the rest!
          </div>
        </div>
      </main>
    </>
  );
}
