"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

const links = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/documentos/novo", label: "Novo Documento" },
  { href: "/historico", label: "Histórico" },
  { href: "/referencias", label: "Referências" },
  { href: "/configuracoes", label: "Configurações" }
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-20 hidden w-64 bg-brand-900 text-white shadow-soft lg:block">
      <div className="border-b border-brand-700 p-6">
        <h1 className="text-2xl font-bold">LegisDoc</h1>
        <p className="text-sm text-brand-100">Documentos Legislativos com IA</p>
      </div>
      <nav className="space-y-1 p-4">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={clsx(
              "block rounded-lg px-3 py-2 text-sm",
              pathname.startsWith(link.href) ? "bg-brand-700" : "text-brand-100 hover:bg-brand-700/70"
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
