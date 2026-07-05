import { AppShell } from "@/components/layout/app-shell";
import { HistoryItem } from "@/components/historico/history-item";

const mock = [
  { id: "demo-1", tipo: "Indicacao", vereador: "Exemplo", createdAt: new Date().toISOString() }
];

export default function HistoricoPage() {
  return (
    <AppShell>
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Histórico</h3>
        <div className="grid gap-3">
          {mock.map((item) => (
            <HistoryItem key={item.id} {...item} />
          ))}
        </div>
      </section>
    </AppShell>
  );
}
