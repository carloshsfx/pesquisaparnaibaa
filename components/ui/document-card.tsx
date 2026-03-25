interface Props {
  title: string;
  value: string;
  subtitle?: string;
}

export function DocumentCard({ title, value, subtitle }: Props) {
  return (
    <div className="rounded-xl bg-white p-5 shadow-soft">
      <p className="text-sm text-slate-500">{title}</p>
      <p className="mt-2 text-2xl font-bold">{value}</p>
      {subtitle ? <p className="mt-1 text-xs text-slate-400">{subtitle}</p> : null}
    </div>
  );
}
