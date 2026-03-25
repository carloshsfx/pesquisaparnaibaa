"use client";

import { useState } from "react";
import type { DocumentoInput, DocumentoTipo, NivelRedacao } from "@/types";
import { Button } from "@/components/ui/button";

const TIPOS: DocumentoTipo[] = ["Indicacao", "Requerimento", "Projeto de Lei", "Mocao", "Oficio", "Parecer"];
const NIVEIS: NivelRedacao[] = ["simples", "profissional", "mais tecnico"];

const initialState: DocumentoInput = {
  tipo: "Indicacao",
  nivel: "profissional",
  vereador: "",
  cidade: "",
  estado: "",
  numero: "",
  ano: String(new Date().getFullYear()),
  dataDocumento: new Date().toISOString().slice(0, 10),
  textoBruto: ""
};

interface Props {
  onGenerated: (result: string) => void;
}

export function DocumentForm({ onGenerated }: Props) {
  const [form, setForm] = useState<DocumentoInput>(initialState);
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);
    const response = await fetch("/api/gerar-documento", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    const json = await response.json();
    onGenerated(json.resultado ?? "Falha ao gerar documento.");
    setLoading(false);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-xl bg-white p-5 shadow-soft">
      <h3 className="text-lg font-semibold">Nova geração de documento</h3>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm">Tipo
          <select className="mt-1 w-full rounded-lg border p-2" value={form.tipo} onChange={(e) => setForm({ ...form, tipo: e.target.value as DocumentoTipo })}>
            {TIPOS.map((tipo) => <option key={tipo}>{tipo}</option>)}
          </select>
        </label>
        <label className="text-sm">Nível
          <select className="mt-1 w-full rounded-lg border p-2" value={form.nivel} onChange={(e) => setForm({ ...form, nivel: e.target.value as NivelRedacao })}>
            {NIVEIS.map((nivel) => <option key={nivel}>{nivel}</option>)}
          </select>
        </label>
        <label className="text-sm">Vereador<input className="mt-1 w-full rounded-lg border p-2" value={form.vereador} onChange={(e) => setForm({ ...form, vereador: e.target.value })} required /></label>
        <label className="text-sm">Cidade<input className="mt-1 w-full rounded-lg border p-2" value={form.cidade} onChange={(e) => setForm({ ...form, cidade: e.target.value })} required /></label>
        <label className="text-sm">UF<input className="mt-1 w-full rounded-lg border p-2 uppercase" maxLength={2} value={form.estado} onChange={(e) => setForm({ ...form, estado: e.target.value.toUpperCase() })} required /></label>
        <label className="text-sm">Número<input className="mt-1 w-full rounded-lg border p-2" value={form.numero} onChange={(e) => setForm({ ...form, numero: e.target.value })} required /></label>
        <label className="text-sm">Ano<input className="mt-1 w-full rounded-lg border p-2" value={form.ano} onChange={(e) => setForm({ ...form, ano: e.target.value })} required /></label>
        <label className="text-sm">Data<input type="date" className="mt-1 w-full rounded-lg border p-2" value={form.dataDocumento} onChange={(e) => setForm({ ...form, dataDocumento: e.target.value })} required /></label>
      </div>
      <label className="block text-sm">Fala bruta do vereador
        <textarea className="mt-1 min-h-40 w-full rounded-lg border p-3" value={form.textoBruto} onChange={(e) => setForm({ ...form, textoBruto: e.target.value })} required />
      </label>
      <Button type="submit" disabled={loading}>{loading ? "Gerando..." : "Gerar documento"}</Button>
    </form>
  );
}
