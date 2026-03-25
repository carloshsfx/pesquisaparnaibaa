import OpenAI from "openai";

const client = process.env.OPENAI_API_KEY
  ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  : null;

export async function generateDocumentWithAI(prompt: string): Promise<string> {
  if (!client) {
    return `DOCUMENTO GERADO (MODO MOCK)\n\n${prompt}\n\n[Integração real pronta: configure OPENAI_API_KEY para produção.]`;
  }

  const response = await client.responses.create({
    model: process.env.OPENAI_MODEL ?? "gpt-4.1-mini",
    input: prompt,
    temperature: 0.2
  });

  return response.output_text;
}
