"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

export default function CodeBlock({
  code,
  language = "python",
  filename = "script.py",
}: CodeBlockProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#1e1e1e]">
      {/* Barre d'en-tête */}
      <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-2">
        <div className="flex items-center gap-2">
          {/* Points style macOS */}
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>
          <span className="ml-2 text-xs text-white/30">{filename}</span>
        </div>
        <span className="rounded-md border border-white/[0.06] bg-white/[0.04] px-2 py-0.5 text-[10px] uppercase tracking-wider text-white/25">
          {language}
        </span>
      </div>

      {/* Contenu du code */}
      <div className="overflow-x-auto text-sm">
        <SyntaxHighlighter
          language={language}
          style={vscDarkPlus}
          showLineNumbers
          wrapLongLines
          customStyle={{
            margin: 0,
            padding: "16px",
            background: "transparent",
            fontSize: "13px",
            lineHeight: "1.6",
          }}
          lineNumberStyle={{
            color: "rgba(255,255,255,0.15)",
            minWidth: "2.5em",
            paddingRight: "1em",
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
