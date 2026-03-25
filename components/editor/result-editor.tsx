"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { OPCOES_AJUSTE } from "@/types";

interface Props {
  initialText: string;
}

export function ResultEditor({ initialText }: Props) {
  const [text, setText] = useState(initialText);

  function exportTxt() {
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "legisdoc-documento.txt";
    link.click();
  }

  return (
    <section className="space-y-4 rounded-xl bg-white p-5 shadow-soft">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-lg font-semibold">Editor do documento final</h3>
        <div className="no-print flex flex-wrap gap-2">
          <Button variant="secondary" onClick={() => navigator.clipboard.writeText(text)}>Copiar texto</Button>
          <Button variant="secondary" onClick={() => window.print()}>Imprimir</Button>
          <Button variant="secondary" onClick={exportTxt}>Exportar .txt</Button>
        </div>
      </div>
      <textarea className="min-h-96 w-full rounded-lg border p-3" value={text} onChange={(e) => setText(e.target.value)} />
      <div>
        <p className="mb-2 text-sm font-semibold">Opções de ajuste:</p>
        <ul className="grid gap-2 text-sm md:grid-cols-2">
          {OPCOES_AJUSTE.map((opcao) => (
            <li key={opcao} className="rounded-lg bg-slate-100 p-2">{opcao}</li>
          ))}
        </ul>
      </div>
      <p className="text-xs text-slate-500">Estrutura pronta para PDF/Word via novos adaptadores de exportação.</p>
    </section>
  );
}
