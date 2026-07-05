# LegisDoc

Sistema web para geração de documentos legislativos com IA para Câmaras Municipais.

## Stack
- Next.js (App Router) + TypeScript
- Tailwind CSS
- Supabase Auth + Banco
- API Route server-side para IA

## Rodando localmente
1. Copie `.env.example` para `.env.local`.
2. Preencha variáveis de Supabase e OpenAI.
3. Instale dependências: `npm install`
4. Rode: `npm run dev`

## Fluxo de geração
1. Frontend envia formulário para `/api/gerar-documento`.
2. Backend valida com `zod`.
3. Backend monta prompt em `lib/prompts/legislativo.ts`.
4. IA é chamada por `lib/ai/generate-document.ts`.
5. Resultado é salvo na tabela `documentos` quando usuário autenticado.
6. Texto retorna ao painel editável.

## Migração Supabase
Execute `supabase/migrations/0001_init.sql` no SQL Editor do projeto Supabase.

## Observações
- Sem `OPENAI_API_KEY`, o sistema gera resultado em modo mock para desenvolvimento.
- Estrutura pronta para exportação futura PDF/DOCX e para ajustes de prompt por Câmara.
