import { AppShell } from "@/components/layout/app-shell";
import { DocumentCard } from "@/components/ui/document-card";

export default function DashboardPage() {
  return (
    <AppShell>
      <section className="grid gap-4 md:grid-cols-3">
        <DocumentCard title="Documentos gerados" value="0" subtitle="Conecte o Supabase para contagem real" />
        <DocumentCard title="Referências salvas" value="0" />
        <DocumentCard title="Status da IA" value="Pronto" subtitle="API segura no backend" />
      </section>
    </AppShell>
  );
}
