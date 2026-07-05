import { z } from "zod";

export const documentoSchema = z.object({
  tipo: z.enum(["Indicacao", "Requerimento", "Projeto de Lei", "Mocao", "Oficio", "Parecer"]),
  nivel: z.enum(["simples", "profissional", "mais tecnico"]),
  vereador: z.string().min(2),
  cidade: z.string().min(2),
  estado: z.string().length(2),
  numero: z.string().min(1),
  ano: z.string().regex(/^\d{4}$/),
  dataDocumento: z.string().min(8),
  textoBruto: z.string().min(20)
});

export type DocumentoSchema = z.infer<typeof documentoSchema>;
