"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

interface LocalReferencia {
  titulo: string;
  conteudo: string;
}

export function ReferencePanel() {
  const [items, setItems] = useState<LocalReferencia[]>([]);
  const [titulo, setTitulo] = useState("");
  const [conteudo, setConteudo] = useState("");

  function addItem() {
    if (!titulo || !conteudo) return;
    setItems([{ titulo, conteudo }, ...items]);
    setTitulo("");
    setConteudo("");
  }

  return (
    <section className="rounded-xl bg-white p-5 shadow-soft">
      <h3 className="text-lg font-semibold">Referências e modelos da Câmara</h3>
      <div className="mt-4 grid gap-3">
        <input className="rounded-lg border p-2" placeholder="Título do modelo" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
        <textarea className="min-h-32 rounded-lg border p-2" placeholder="Conteúdo / padrão interno" value={conteudo} onChange={(e) => setConteudo(e.target.value)} />
        <Button onClick={addItem}>Salvar referência</Button>
      </div>
      <div className="mt-6 space-y-3">
        {items.map((item, index) => (
          <article key={`${item.titulo}-${index}`} className="rounded-lg border bg-slate-50 p-3">
            <h4 className="font-medium">{item.titulo}</h4>
            <p className="mt-1 whitespace-pre-wrap text-sm text-slate-700">{item.conteudo}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
