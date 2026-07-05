export type DocumentoTipo =
  | "Indicacao"
  | "Requerimento"
  | "Projeto de Lei"
  | "Mocao"
  | "Oficio"
  | "Parecer";

export type NivelRedacao = "simples" | "profissional" | "mais tecnico";

export interface DocumentoInput {
  tipo: DocumentoTipo;
  nivel: NivelRedacao;
  vereador: string;
  cidade: string;
  estado: string;
  numero: string;
  ano: string;
  dataDocumento: string;
  textoBruto: string;
}

export interface Documento extends DocumentoInput {
  id: string;
  userId: string;
  resultado: string;
  createdAt: string;
  updatedAt: string;
}

export interface Referencia {
  id: string;
  userId: string;
  titulo: string;
  conteudo: string;
  createdAt: string;
}

export const OPCOES_AJUSTE = [
  "Melhorar mais a indicação",
  "Melhorar mais a justificativa",
  "Deixar mais simples",
  "Manter mais fiel ao vereador",
  "Gerar versão mais técnica",
  "Gerar versão resumida",
  "Gerar duas versões",
  "Ajustar para leitura em plenário",
  "Converter para outro tipo",
  "Revisar sem alterar nada"
] as const;
