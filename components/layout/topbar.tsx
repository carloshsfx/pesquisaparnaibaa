"use client";

import { useRouter } from "next/navigation";
import { supabaseClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";

export function Topbar() {
  const router = useRouter();

  async function handleLogout() {
    await supabaseClient?.auth.signOut();
    router.push("/login");
  }

  return (
    <header className="no-print flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4">
      <div>
        <p className="text-sm text-slate-500">Sistema Legislativo</p>
        <h2 className="text-lg font-semibold text-slate-900">LegisDoc</h2>
      </div>
      <Button variant="secondary" onClick={handleLogout}>
        Sair
      </Button>
    </header>
  );
}
