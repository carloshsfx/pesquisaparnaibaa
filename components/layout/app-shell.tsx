import type { PropsWithChildren } from "react";
import { Sidebar } from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";

export function AppShell({ children }: PropsWithChildren) {
  return (
    <div>
      <Sidebar />
      <div className="min-h-screen lg:ml-64">
        <Topbar />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
