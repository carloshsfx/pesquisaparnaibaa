import { NextResponse } from "next/server";
import { documentoSchema } from "@/lib/validators/documento";
import { buildLegislativePrompt } from "@/lib/prompts/legislativo";
import { generateDocumentWithAI } from "@/lib/ai/generate-document";
import { getSupabaseServerClient } from "@/lib/supabase/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = documentoSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Dados inválidos", details: parsed.error.flatten() }, { status: 400 });
    }

    const prompt = buildLegislativePrompt(parsed.data);
    const resultado = await generateDocumentWithAI(prompt);

    const supabase = await getSupabaseServerClient();
    const {
      data: { user }
    } = await supabase.auth.getUser();

    if (user) {
      await supabase.from("documentos").insert({
        user_id: user.id,
        tipo: parsed.data.tipo,
        nivel: parsed.data.nivel,
        vereador: parsed.data.vereador,
        cidade: parsed.data.cidade,
        estado: parsed.data.estado,
        numero: parsed.data.numero,
        ano: parsed.data.ano,
        data_documento: parsed.data.dataDocumento,
        texto_bruto: parsed.data.textoBruto,
        resultado
      });
    }

    return NextResponse.json({ resultado });
  } catch (error) {
    return NextResponse.json({ error: "Falha interna na geração", detail: String(error) }, { status: 500 });
  }
}
