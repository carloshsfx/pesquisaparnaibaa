create extension if not exists "pgcrypto";

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  nome text,
  email text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.documentos (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  tipo text not null,
  nivel text not null,
  vereador text not null,
  cidade text not null,
  estado text not null,
  numero text not null,
  ano text not null,
  data_documento date not null,
  texto_bruto text not null,
  resultado text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.referencias (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  titulo text not null,
  conteudo text not null,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
alter table public.documentos enable row level security;
alter table public.referencias enable row level security;

create policy "profiles own" on public.profiles for all using (auth.uid() = id) with check (auth.uid() = id);
create policy "documentos own" on public.documentos for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "referencias own" on public.referencias for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
