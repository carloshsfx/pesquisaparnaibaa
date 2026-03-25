import { AppShell } from "@/components/layout/app-shell";
import { ResultEditor } from "@/components/editor/result-editor";

export default async function DocumentoDetalhePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <AppShell>
      <div className="mb-4 rounded-lg bg-white p-4 shadow-soft">
        <h3 className="font-semibold">Documento #{id}</h3>
        <p className="text-sm text-slate-500">Tela preparada para edição, exclusão e persistência com Supabase.</p>
      </div>
      <ResultEditor initialText="Documento carregado do histórico." />
    </AppShell>
  );
}
