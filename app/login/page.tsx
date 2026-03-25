"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabaseClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleLogin(event: React.FormEvent) {
    event.preventDefault();
    setError("");

    if (!supabaseClient) {
      setError("Configure as variáveis do Supabase para autenticação real.");
      return;
    }

    const { error: authError } = await supabaseClient.auth.signInWithPassword({ email, password });
    if (authError) {
      setError(authError.message);
      return;
    }

    router.push("/dashboard");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 p-4">
      <form onSubmit={handleLogin} className="w-full max-w-md rounded-xl bg-white p-6 shadow-soft">
        <h1 className="text-2xl font-bold text-brand-900">LegisDoc</h1>
        <p className="mt-1 text-sm text-slate-600">Acesse com email e senha.</p>
        <div className="mt-5 space-y-3">
          <input type="email" className="w-full rounded-lg border p-2" placeholder="email@camara.gov.br" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" className="w-full rounded-lg border p-2" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
          {error ? <p className="text-sm text-red-600">{error}</p> : null}
          <Button type="submit" className="w-full">Entrar</Button>
        </div>
      </form>
    </main>
  );
}
