import { AppShell } from "@/components/layout/app-shell";

export default function ConfiguracoesPage() {
  return (
    <AppShell>
      <section className="rounded-xl bg-white p-5 shadow-soft">
        <h3 className="text-lg font-semibold">Configurações</h3>
        <p className="mt-2 text-sm text-slate-600">Área para parâmetros da Câmara, assinatura, templates oficiais e integrações futuras.</p>
      </section>
    </AppShell>
  );
}
