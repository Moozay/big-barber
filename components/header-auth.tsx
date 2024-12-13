import { signOutAction } from "@/app/actions";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { createClient } from "@/utils/supabase/server";

export default  function AuthButton() {

    return (
      <>
        <div className="flex gap-4 items-center">
            <Button
              asChild
              size="sm"
              variant={"default"}
              className=""
            >
              <Link href="/reservation">CREATE RESERVATION</Link>
            </Button>
          </div>
      </>
    );
  
}
