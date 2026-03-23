"use client";

import { useState } from "react";

/* -------------------------------------------------------------------------- */
/*  Syntax token helpers (One Dark Pro–inspired palette)                        */
/* -------------------------------------------------------------------------- */

const kw = "text-[#c678dd]";
const str = "text-[#98c379]";
const fn = "text-[#61afef]";
const comment = "text-[#5c6370] italic";
const op = "text-[#abb2bf]";
const prop = "text-[#e06c75]";
const type = "text-[#e5c07b]";
const plain = "text-[#abb2bf]";

function T({ c: cls, children }: { c: string; children: React.ReactNode }) {
  return <span className={cls}>{children}</span>;
}

/* -------------------------------------------------------------------------- */
/*  Step data                                                                  */
/* -------------------------------------------------------------------------- */

interface Step {
  title: string;
  description: React.ReactNode;
  filename: string;
  code: React.ReactNode;
  tooltip?: React.ReactNode;
  tooltipPosition?: { top: string; left: string };
}

const steps: Step[] = [
  {
    title: "Generate your types",
    filename: "terminal",
    description: (
      <>
        Point <code className="text-brand-300">tsoap-cli</code> at a local WSDL
        file or a remote URL and it emits TypeScript interfaces plus a factory
        function — one command, zero manual mapping.
      </>
    ),
    code: (
      <>
        <T c={fn}>npx</T> <T c={plain}>tsoap generate</T> <T c={op}>\</T>
        {"\n"}
        {"  "}<T c={str}>-i</T> <T c={plain}>./weather.wsdl</T> <T c={op}>\</T>
        {"\n"}
        {"  "}<T c={str}>-o</T> <T c={plain}>./src/generated</T>
      </>
    ),
  },
  {
    title: "Create a client",
    filename: "src/index.ts",
    description: (
      <>
        Import the generated factory and await a typed client. No manual
        typecasting, no guessing — the entire service structure is inferred for
        you.
      </>
    ),
    code: (
      <>
        <T c={kw}>import</T> <T c={op}>{"{ "}</T>
        <T c={type}>createWeatherServiceClient</T>
        <T c={op}>{" }"}</T> <T c={kw}>from</T>{" "}
        <T c={str}>&apos;./generated/weather.js&apos;</T>
        <T c={op}>;</T>
        {"\n\n"}
        <T c={kw}>const</T> <T c={plain}>client</T> <T c={op}>=</T>{" "}
        <T c={kw}>await</T> <T c={fn}>createWeatherServiceClient</T>
        <T c={op}>(</T>
        {"\n"}
        {"  "}<T c={str}>&apos;http://example.com/weather?wsdl&apos;</T>
        <T c={op}>,</T>
        {"\n"}
        <T c={op}>)</T><T c={op}>;</T>
      </>
    ),
    tooltip: (
      <div className="font-mono text-xs leading-relaxed">
        <T c={kw}>const</T> <T c={plain}>client</T><T c={op}>:</T>{" "}
        <T c={type}>TypedSoapClient</T><T c={op}>{"<"}</T>
        <T c={type}>WeatherService</T><T c={op}>{">"}</T>
      </div>
    ),
    tooltipPosition: { top: "3.7rem", left: "2.5rem" },
  },
  {
    title: "Call with full type safety",
    filename: "src/index.ts",
    description: (
      <>
        Navigate{" "}
        <code className="text-brand-300">Service → Port → Operation</code>{" "}
        with autocomplete. The return type matches the WSDL schema exactly — no
        more <code className="text-brand-300">any</code>.
      </>
    ),
    code: (
      <>
        <T c={kw}>const</T> <T c={plain}>result</T> <T c={op}>=</T>
        {"\n"}
        {"  "}<T c={kw}>await</T>{" "}
        <T c={plain}>client</T><T c={op}>.</T>
        <T c={prop}>WeatherService</T><T c={op}>.</T>
        <T c={prop}>WeatherPort</T><T c={op}>.</T>
        <T c={fn}>GetWeather</T><T c={op}>({"{"}</T>
        {"\n"}
        {"    "}<T c={prop}>city</T><T c={op}>:</T>{" "}
        <T c={str}>&apos;NYC&apos;</T><T c={op}>,</T>
        {"\n"}
        {"  "}<T c={op}>{"}"}</T><T c={op}>)</T><T c={op}>;</T>
        {"\n\n"}
        <T c={plain}>console</T><T c={op}>.</T><T c={fn}>log</T>
        <T c={op}>(</T><T c={plain}>result</T><T c={op}>.</T>
        <T c={prop}>temperature</T><T c={op}>)</T><T c={op}>;</T>
        {"\n"}
        <T c={comment}>{"//  ^? number — fully typed!"}</T>
      </>
    ),
    tooltip: (
      <div className="font-mono text-xs leading-relaxed">
        <T c={kw}>const</T> <T c={plain}>result</T><T c={op}>:</T>{" "}
        <T c={op}>{"{"}</T>
        {"\n"}
        {"  "}<T c={prop}>temperature</T><T c={op}>:</T>{" "}
        <T c={type}>number</T><T c={op}>;</T>
        {"\n"}
        {"  "}<T c={prop}>description</T><T c={op}>:</T>{" "}
        <T c={type}>string</T><T c={op}>;</T>
        {"\n"}
        <T c={op}>{"}"}</T>
      </div>
    ),
    tooltipPosition: { top: "0.6rem", left: "2.5rem" },
  },
];

/* -------------------------------------------------------------------------- */
/*  Component                                                                  */
/* -------------------------------------------------------------------------- */

export function CodeDemo() {
  const [active, setActive] = useState(0);
  const step = steps[active]!;

  return (
    <div className="grid items-start gap-8 lg:grid-cols-[1fr,340px]">
      {/* ---- Code panel ---- */}
      <div className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#0c0c1d] shadow-2xl shadow-brand-900/10">
        {/* title bar */}
        <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-2.5">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]/80" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]/80" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]/80" />
          <span className="ml-3 font-mono text-xs text-white/35">
            {step.filename}
          </span>
        </div>

        {/* code area */}
        <div className="relative min-h-[220px] overflow-x-auto p-6">
          <pre className="font-mono text-[13px] leading-[1.7]">
            <code>{step.code}</code>
          </pre>

          {/* type tooltip overlay */}
          {step.tooltip && step.tooltipPosition && (
            <div
              className="absolute z-10 rounded-lg border border-white/[0.1] bg-[#1e1e3a] px-3 py-2 shadow-xl transition-all duration-300"
              style={{
                top: step.tooltipPosition.top,
                right: "1.5rem",
              }}
            >
              <pre className="whitespace-pre">{step.tooltip}</pre>
            </div>
          )}
        </div>

        {/* language badge */}
        <div className="absolute bottom-3 right-4 rounded bg-white/[0.06] px-2 py-0.5 font-mono text-[10px] text-white/25">
          {active === 0 ? "bash" : "ts"}
        </div>
      </div>

      {/* ---- Step selectors ---- */}
      <div className="flex flex-col gap-2">
        {steps.map((s, i) => {
          const isActive = i === active;
          return (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`group flex items-start gap-4 rounded-xl border px-5 py-4 text-left transition-all duration-200 ${
                isActive
                  ? "border-brand-500/30 bg-brand-500/[0.08] shadow-lg shadow-brand-500/5"
                  : "border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12] hover:bg-white/[0.04]"
              }`}
            >
              <span
                className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                  isActive
                    ? "bg-brand-500 text-white"
                    : "bg-white/[0.08] text-white/40 group-hover:text-white/60"
                }`}
              >
                {i + 1}
              </span>
              <div className="min-w-0">
                <p
                  className={`text-sm font-semibold transition-colors ${
                    isActive ? "text-white" : "text-white/60 group-hover:text-white/80"
                  }`}
                >
                  {s.title}
                </p>
                {isActive && (
                  <p className="mt-1.5 text-xs leading-relaxed text-white/45">
                    {s.description}
                  </p>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Syntax-highlighted comparison blocks (used in before/after section)        */
/* -------------------------------------------------------------------------- */

export function HighlightedCodeBlock({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#0c0c1d] shadow-lg">
      {title && (
        <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/60" />
          <span className="ml-2 font-mono text-xs text-white/35">{title}</span>
        </div>
      )}
      <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-[1.7]">
        <code>{children}</code>
      </pre>
    </div>
  );
}

export function BeforeCode() {
  return (
    <HighlightedCodeBlock title="node-soap">
      <T c={kw}>import</T> <T c={plain}>soap</T> <T c={kw}>from</T>{" "}
      <T c={str}>&apos;soap&apos;</T><T c={op}>;</T>
      {"\n\n"}
      <T c={kw}>const</T> <T c={plain}>client</T> <T c={op}>=</T>{" "}
      <T c={kw}>await</T> <T c={plain}>soap</T><T c={op}>.</T>
      <T c={fn}>createClientAsync</T><T c={op}>(</T>
      {"\n"}
      {"  "}<T c={str}>&apos;http://example.com?wsdl&apos;</T><T c={op}>,</T>
      {"\n"}
      <T c={op}>)</T><T c={op}>;</T>
      {"\n\n"}
      <T c={comment}>{"// No types, 4-tuple return, easy to get wrong"}</T>
      {"\n"}
      <T c={kw}>const</T> <T c={op}>[</T><T c={plain}>result</T>
      <T c={op}>]</T> <T c={op}>=</T> <T c={kw}>await</T>{" "}
      <T c={plain}>client</T><T c={op}>.</T>
      <T c={fn}>GetWeatherAsync</T><T c={op}>({"{"}</T>
      {"\n"}
      {"  "}<T c={prop}>city</T><T c={op}>:</T>{" "}
      <T c={str}>&apos;NYC&apos;</T><T c={op}>,</T>
      {"\n"}
      <T c={op}>{"}"}</T><T c={op}>)</T><T c={op}>;</T>
      {"\n"}
      <T c={comment}>{"//     ^? any"}</T>
    </HighlightedCodeBlock>
  );
}

export function AfterCode() {
  return (
    <HighlightedCodeBlock title="generated + typed-soap">
      <T c={kw}>import</T> <T c={op}>{"{ "}</T>
      <T c={type}>createWeatherServiceClient</T>
      <T c={op}>{" }"}</T>
      {"\n"}
      {"  "}<T c={kw}>from</T>{" "}
      <T c={str}>&apos;./generated/weather.js&apos;</T><T c={op}>;</T>
      {"\n\n"}
      <T c={kw}>const</T> <T c={plain}>client</T> <T c={op}>=</T>{" "}
      <T c={kw}>await</T> <T c={fn}>createWeatherServiceClient</T>
      <T c={op}>(</T>
      {"\n"}
      {"  "}<T c={str}>&apos;http://example.com/weather?wsdl&apos;</T>
      <T c={op}>,</T>
      {"\n"}
      <T c={op}>)</T><T c={op}>;</T>
      {"\n\n"}
      <T c={kw}>const</T> <T c={plain}>result</T> <T c={op}>=</T>{" "}
      <T c={kw}>await</T> <T c={plain}>client</T>
      {"\n"}
      {"  "}<T c={op}>.</T><T c={prop}>WeatherService</T><T c={op}>.</T>
      <T c={prop}>WeatherPort</T><T c={op}>.</T>
      <T c={fn}>GetWeather</T><T c={op}>({"{"}</T>
      {"\n"}
      {"    "}<T c={prop}>city</T><T c={op}>:</T>{" "}
      <T c={str}>&apos;NYC&apos;</T><T c={op}>,</T>
      {"\n"}
      {"  "}<T c={op}>{"}"}</T><T c={op}>)</T><T c={op}>;</T>
      {"\n"}
      <T c={comment}>
        {"//  ^? { temperature: number; description: string }"}
      </T>
    </HighlightedCodeBlock>
  );
}
