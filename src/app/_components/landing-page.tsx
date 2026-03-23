import Link from "next/link";
import { AfterCode, BeforeCode, CodeDemo } from "./code-demo";

const npmTypedSoap = "https://www.npmjs.com/package/typed-soap";
const npmTsoapCli = "https://www.npmjs.com/package/tsoap-cli";
const github = "https://github.com/Deodat-Lawson/tsoap";

/* -------------------------------------------------------------------------- */
/*  Reusable sub-components                                                    */
/* -------------------------------------------------------------------------- */

function FeatureCard({
  icon,
  title,
  children,
  className = "",
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`glass-card-glow flex flex-col gap-3 p-6 opacity-0 animate-fade-in ${className}`}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/10 text-brand-400">
        {icon}
      </div>
      <h3 className="text-base font-semibold tracking-tight text-white">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-white/60">{children}</p>
    </div>
  );
}

function SectionHeading({
  badge,
  children,
  sub,
}: {
  badge?: string;
  children: React.ReactNode;
  sub?: React.ReactNode;
}) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      {badge && (
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-brand-400">
          {badge}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {children}
      </h2>
      {sub && (
        <p className="mt-4 text-base leading-relaxed text-white/55">{sub}</p>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  SVG icons (inline, no dependency)                                          */
/* -------------------------------------------------------------------------- */

const icons = {
  shield: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className="h-5 w-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
      />
    </svg>
  ),
  bolt: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className="h-5 w-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
      />
    </svg>
  ),
  puzzle: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className="h-5 w-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.401.604-.401.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.959.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z"
      />
    </svg>
  ),
  arrow: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className="h-5 w-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  ),
  hash: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className="h-5 w-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.6 19.5m-2.1-19.5-3.6 19.5"
      />
    </svg>
  ),
  terminal: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className="h-5 w-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
      />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 16 16" fill="currentColor" className="h-5 w-5">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  ),
  npm: (
    <svg viewBox="0 0 780 250" fill="currentColor" className="h-4 w-auto">
      <path d="M240 250h100v-50h100V0H240v250zm50-200h50v150h-50V50zm-190 0h50v200H0V0h100v50zm400 0h50v200H350V0h100v50zm200 0h50v150h50V0h-200v200h50V50z" />
    </svg>
  ),
};

/* -------------------------------------------------------------------------- */
/*  Page                                                                       */
/* -------------------------------------------------------------------------- */

export function LandingPage({ liveGreeting }: { liveGreeting: string }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050510] font-sans text-white">
      {/* ---- ambient background glow ---- */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
      >
        <div className="absolute -top-[400px] left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-brand-700/20 blur-[160px] animate-pulse-slow" />
        <div className="absolute top-[60%] -right-[200px] h-[600px] w-[600px] rounded-full bg-brand-900/15 blur-[140px] animate-pulse-slow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-[30%] -left-[200px] h-[500px] w-[500px] rounded-full bg-indigo-900/10 blur-[140px] animate-pulse-slow" style={{ animationDelay: "3s" }} />
      </div>

      {/* ================================================================== */}
      {/*  HEADER                                                             */}
      {/* ================================================================== */}
      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#050510]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="text-xl font-bold tracking-tight text-white">
              TSOAP
            </span>
            <span className="hidden rounded-full bg-brand-500/10 px-2 py-0.5 text-[11px] font-medium text-brand-400 sm:inline">
              typed SOAP
            </span>
          </Link>

          <nav className="flex items-center gap-1 sm:gap-2">
            <Link
              className="rounded-lg px-3 py-2 text-sm font-medium text-white/60 transition hover:bg-white/[0.05] hover:text-white"
              href="#features"
            >
              Features
            </Link>
            <Link
              className="rounded-lg px-3 py-2 text-sm font-medium text-white/60 transition hover:bg-white/[0.05] hover:text-white"
              href="#get-started"
            >
              Get Started
            </Link>
            <Link
              className="rounded-lg px-3 py-2 text-sm font-medium text-white/60 transition hover:bg-white/[0.05] hover:text-white"
              href="#packages"
            >
              Packages
            </Link>

            <div className="ml-2 hidden h-5 w-px bg-white/10 sm:block" />

            <a
              className="ml-2 flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-white/60 transition hover:bg-white/[0.05] hover:text-white"
              href={github}
              target="_blank"
              rel="noreferrer"
            >
              {icons.github}
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* ================================================================ */}
        {/*  HERO                                                             */}
        {/* ================================================================ */}
        <section className="relative mx-auto max-w-6xl px-6 pb-24 pt-20 text-center sm:pb-32 sm:pt-32">
          <div className="animate-fade-in">
            <p className="mb-6 inline-block rounded-full border border-brand-500/20 bg-brand-500/10 px-4 py-1.5 text-sm font-medium text-brand-300">
              End-to-end typesafe SOAP
            </p>
          </div>

          <h1 className="animate-fade-in opacity-0 text-balance text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl" style={{ animationDelay: "0.1s" }}>
            Move fast with{" "}
            <span className="text-gradient">WSDLs</span>
            <br />
            and break nothing.
          </h1>

          <p className="mx-auto mt-8 max-w-2xl animate-fade-in opacity-0 text-pretty text-lg leading-relaxed text-white/55 sm:text-xl" style={{ animationDelay: "0.2s" }}>
            Generate typed RPC wrappers from your WSDLs with{" "}
            <span className="font-medium text-white/75">tsoap-cli</span>, then
            call services with{" "}
            <span className="font-medium text-white/75">typed-soap</span> — full
            autocomplete, compile-time checks, and a clean async API.
          </p>

          <div className="mt-10 flex animate-fade-in opacity-0 flex-wrap items-center justify-center gap-4" style={{ animationDelay: "0.3s" }}>
            <a
              className="group relative inline-flex items-center gap-2 rounded-full bg-brand-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition hover:bg-brand-500 hover:shadow-brand-500/30"
              href="#get-started"
            >
              Quickstart
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.04] px-7 py-3 text-sm font-semibold text-white/80 transition hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
              href={github}
              target="_blank"
              rel="noreferrer"
            >
              {icons.github}
              Star on GitHub
            </a>
          </div>

          <p className="mt-16 animate-fade-in opacity-0 text-xs text-white/30" style={{ animationDelay: "0.5s" }}>
            {liveGreeting} — built with the T3 stack
          </p>
        </section>

        {/* ================================================================ */}
        {/*  FEATURES                                                         */}
        {/* ================================================================ */}
        <section
          id="features"
          className="mx-auto max-w-6xl px-6 pb-28"
          aria-labelledby="features-heading"
        >
          <SectionHeading
            badge="Features"
            sub="Everything you need to tame SOAP services in TypeScript."
          >
            <span id="features-heading">Why typed SOAP</span>
          </SectionHeading>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={icons.shield}
              title="Automatic end-to-end types"
              className="animate-stagger-1"
            >
              Generated interfaces mirror your WSDL. Change the server contract
              and TypeScript surfaces the mismatch before you ship.
            </FeatureCard>
            <FeatureCard
              icon={icons.bolt}
              title="Snappy DX"
              className="animate-stagger-2"
            >
              Service, port, and operation autocomplete — like an SDK for your
              SOAP API, without maintaining hand-written wrappers.
            </FeatureCard>
            <FeatureCard
              icon={icons.puzzle}
              title="Fits your stack"
              className="animate-stagger-3"
            >
              Works with Node 18+, TypeScript 5.x, and the battle-tested{" "}
              <code className="text-white/70">soap</code> runtime under the
              hood.
            </FeatureCard>
            <FeatureCard
              icon={icons.arrow}
              title="Cleaner calls"
              className="animate-stagger-4"
            >
              No four-tuple return —{" "}
              <code className="text-white/70">typed-soap</code> returns the
              result directly with a fully typed shape.
            </FeatureCard>
            <FeatureCard
              icon={icons.hash}
              title="Numeric XSD coverage"
              className="animate-stagger-5"
            >
              Types like <code className="text-white/70">unsignedInt</code>{" "}
              deserialize to real numbers where raw{" "}
              <code className="text-white/70">soap</code> leaves strings.
            </FeatureCard>
            <FeatureCard
              icon={icons.terminal}
              title="CLI + runtime pair"
              className="animate-stagger-6"
            >
              <code className="text-white/70">tsoap-cli</code> generates once;{" "}
              <code className="text-white/70">typed-soap</code> runs at
              runtime — check generated files into git for reproducible CI.
            </FeatureCard>
          </div>
        </section>

        {/* ================================================================ */}
        {/*  CODE WALKTHROUGH (interactive tabbed demo, tRPC-style)            */}
        {/* ================================================================ */}
        <section
          id="get-started"
          className="mx-auto max-w-6xl px-6 pb-28"
        >
          <SectionHeading
            badge="Get started"
            sub="It's quick and easy to get a fully typed SOAP client running."
          >
            Simple to use with{" "}
            <span className="text-gradient">unmatched developer experience</span>
          </SectionHeading>

          <CodeDemo />
        </section>

        {/* ================================================================ */}
        {/*  BEFORE / AFTER COMPARISON                                        */}
        {/* ================================================================ */}
        <section className="mx-auto max-w-6xl px-6 pb-28">
          <SectionHeading>
            From <code className="text-brand-400">any</code> to typed
          </SectionHeading>

          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <div className="mb-3 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-red-400/60" />
                <span className="text-sm font-medium text-white/40">
                  Raw soap (no types)
                </span>
              </div>
              <BeforeCode />
            </div>
            <div>
              <div className="mb-3 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-400/60" />
                <span className="text-sm font-medium text-brand-400">
                  typed-soap + generated client
                </span>
              </div>
              <AfterCode />
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/*  COMPARISON TABLE                                                 */}
        {/* ================================================================ */}
        <section className="mx-auto max-w-6xl px-6 pb-28">
          <SectionHeading>
            <code className="text-white/60">soap</code> vs{" "}
            <span className="text-gradient">typed-soap</span>
          </SectionHeading>

          <div className="overflow-x-auto rounded-2xl border border-white/[0.08]">
            <table className="w-full min-w-[600px] text-left text-sm">
              <thead>
                <tr className="border-b border-white/[0.08] bg-white/[0.03]">
                  <th className="px-6 py-4 font-semibold text-white/80">
                    Aspect
                  </th>
                  <th className="px-6 py-4 font-semibold text-white/40">
                    soap
                  </th>
                  <th className="px-6 py-4 font-semibold text-brand-400">
                    typed-soap
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06]">
                {[
                  [
                    "Call pattern",
                    "client.OpAsync(args)",
                    "client.Service.Port.Op(args)",
                  ],
                  ["Return value", "Four-element tuple", "Result only"],
                  ["Types", "Mostly any", "Generated from WSDL"],
                  [
                    "Numeric XSD types",
                    "Often strings",
                    "Deserialized to number",
                  ],
                  [
                    "Autocomplete",
                    "Limited",
                    "Full Service → Port → Op",
                  ],
                ].map(([aspect, soap, typed]) => (
                  <tr
                    key={aspect}
                    className="transition hover:bg-white/[0.02]"
                  >
                    <td className="px-6 py-4 font-medium text-white/70">
                      {aspect}
                    </td>
                    <td className="px-6 py-4 text-white/40">{soap}</td>
                    <td className="px-6 py-4 text-white/80">{typed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ================================================================ */}
        {/*  QUOTE / CTA                                                      */}
        {/* ================================================================ */}
        <section className="mx-auto max-w-4xl px-6 pb-28 text-center">
          <div className="glass-card px-8 py-12 sm:px-14 sm:py-16">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              You may not need hand-written SOAP wrappers
            </h2>
            <blockquote className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/55">
              &ldquo;We built TSOAP so teams can stop writing manual WSDL
              mappings and focus on shipping features. Let the CLI handle the
              boilerplate — your TypeScript compiler will keep everything in
              sync.&rdquo;
            </blockquote>
            <div className="mt-8 flex items-center justify-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500/20 text-sm font-bold text-brand-300">
                DL
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-white/80">
                  Deodat-Lawson
                </p>
                <p className="text-xs text-white/40">Creator of TSOAP</p>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/*  PACKAGES                                                         */}
        {/* ================================================================ */}
        <section
          id="packages"
          className="mx-auto max-w-6xl px-6 pb-28"
          aria-labelledby="packages-heading"
        >
          <SectionHeading badge="Packages">
            <span id="packages-heading">Install and get started</span>
          </SectionHeading>

          <div className="grid gap-6 md:grid-cols-2">
            {/* typed-soap */}
            <div className="glass-card-glow flex flex-col p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/10 text-brand-400">
                  {icons.shield}
                </div>
                <h3 className="text-xl font-bold">typed-soap</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/55">
                Runtime client for type-safe SOAP calls. Wraps{" "}
                <code className="text-white/70">soap</code> with a typed proxy,
                direct async results, and extra numeric deserializers.
              </p>
              <p className="mt-4 text-xs text-white/35">
                Peer: <code className="text-white/50">soap</code> ^1.1.6 · Node
                18+
              </p>
              <div className="mt-auto pt-6">
                <a
                  className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/20 transition hover:bg-brand-500"
                  href={npmTypedSoap}
                  target="_blank"
                  rel="noreferrer"
                >
                  View on npm
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-3.5 w-3.5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Zm7.25-.75a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0V6.31l-5.47 5.47a.75.75 0 1 1-1.06-1.06l5.47-5.47H12.25a.75.75 0 0 1-.75-.75Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* tsoap-cli */}
            <div className="glass-card-glow flex flex-col p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/10 text-brand-400">
                  {icons.terminal}
                </div>
                <h3 className="text-xl font-bold">tsoap-cli</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/55">
                Code generator: read a WSDL path or URL and emit TypeScript
                interfaces plus a factory that calls{" "}
                <code className="text-white/70">createSoapClient</code> from
                typed-soap.
              </p>
              <p className="mt-4 text-xs text-white/35">
                Dev dependency · install alongside typed-soap
              </p>
              <div className="mt-auto pt-6">
                <a
                  className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.04] px-6 py-2.5 text-sm font-semibold text-white/80 transition hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
                  href={npmTsoapCli}
                  target="_blank"
                  rel="noreferrer"
                >
                  View on npm
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-3.5 w-3.5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Zm7.25-.75a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0V6.31l-5.47 5.47a.75.75 0 1 1-1.06-1.06l5.47-5.47H12.25a.75.75 0 0 1-.75-.75Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ==================================================================== */}
      {/*  FOOTER                                                               */}
      {/* ==================================================================== */}
      <footer className="border-t border-white/[0.06] bg-[#050510]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:grid-cols-3">
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white/80">Docs</h4>
            <ul className="space-y-2 text-sm text-white/40">
              <li>
                <a
                  className="transition hover:text-white/70"
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                >
                  Getting Started
                </a>
              </li>
              <li>
                <a
                  className="transition hover:text-white/70"
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                >
                  CLI Reference
                </a>
              </li>
              <li>
                <a
                  className="transition hover:text-white/70"
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                >
                  API Reference
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white/80">
              Packages
            </h4>
            <ul className="space-y-2 text-sm text-white/40">
              <li>
                <a
                  className="transition hover:text-white/70"
                  href={npmTypedSoap}
                  target="_blank"
                  rel="noreferrer"
                >
                  typed-soap
                </a>
              </li>
              <li>
                <a
                  className="transition hover:text-white/70"
                  href={npmTsoapCli}
                  target="_blank"
                  rel="noreferrer"
                >
                  tsoap-cli
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white/80">
              Community
            </h4>
            <ul className="space-y-2 text-sm text-white/40">
              <li>
                <a
                  className="transition hover:text-white/70"
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  className="transition hover:text-white/70"
                  href={`${github}/issues`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Issues
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.06] px-6 py-6">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 sm:flex-row">
            <p className="text-xs text-white/30">
              MIT License ·{" "}
              <a
                className="underline transition hover:text-white/50"
                href={github}
                target="_blank"
                rel="noreferrer"
              >
                Deodat-Lawson/tsoap
              </a>
            </p>
            <p className="text-xs text-white/20">
              Inspired by{" "}
              <a
                className="underline transition hover:text-white/40"
                href="https://trpc.io"
                target="_blank"
                rel="noreferrer"
              >
                tRPC
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
