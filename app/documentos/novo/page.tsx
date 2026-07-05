"use client";

import { useState } from "react";
import { AppShell } from "@/components/layout/app-shell";
import { DocumentForm } from "@/components/forms/document-form";
import { ResultEditor } from "@/components/editor/result-editor";

export default function NovoDocumentoPage() {
  const [resultado, setResultado] = useState<string>("");

  return (
    <AppShell>
      <div className="space-y-6">
        <DocumentForm onGenerated={setResultado} />
        {resultado ? <ResultEditor initialText={resultado} /> : null}
      </div>
    </AppShell>
  );
}
