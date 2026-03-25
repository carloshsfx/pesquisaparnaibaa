import Link from "next/link";

interface Props {
  id: string;
  tipo: string;
  vereador: string;
  createdAt: string;
}

export function HistoryItem({ id, tipo, vereador, createdAt }: Props) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-soft">
      <h4 className="font-semibold">{tipo}</h4>
      <p className="text-sm text-slate-600">Vereador: {vereador}</p>
      <p className="text-xs text-slate-500">Gerado em: {new Date(createdAt).toLocaleString("pt-BR")}</p>
      <Link href={`/documentos/${id}`} className="mt-3 inline-block text-sm text-brand-700">Abrir documento</Link>
    </article>
  );
}
