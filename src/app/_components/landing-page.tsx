import Link from "next/link";

const npmTypedSoap = "https://www.npmjs.com/package/typed-soap";
const npmTsoapCli = "https://www.npmjs.com/package/tsoap-cli";
const github = "https://github.com/Deodat-Lawson/tsoap";

function CodeBlock({
  title,
  children,
}: {
  title?: string;
  children: string;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] text-left shadow-inner">
      {title ? (
        <div className="border-b border-white/10 px-4 py-2 text-xs font-medium text-white/50">
          {title}
        </div>
      ) : null}
      <pre className="overflow-x-auto p-4 font-mono text-[13px] leading-relaxed text-white/90">
        <code>{children.trim()}</code>
      </pre>
    </div>
  );
}

function FeatureCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-white/20 hover:bg-white/[0.06]">
      <h3 className="text-lg font-semibold tracking-tight text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-white/70">{children}</p>
    </div>
  );
}

export function LandingPage({ liveGreeting }: { liveGreeting: string }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <header className="sticky top-0 z-10 border-b border-white/10 bg-[#2e026d]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold tracking-tight">TSOAP</span>
            <span className="hidden text-sm text-white/50 sm:inline">
              typed SOAP for TypeScript
            </span>
          </div>
          <nav className="flex flex-wrap items-center justify-end gap-3 text-sm font-medium">
            <Link
              className="text-white/80 transition hover:text-white"
              href="#features"
            >
              Features
            </Link>
            <Link
              className="text-white/80 transition hover:text-white"
              href="#packages"
            >
              Packages
            </Link>
            <a
              className="rounded-full bg-white/10 px-3 py-1.5 text-white transition hover:bg-white/20"
              href={npmTypedSoap}
              target="_blank"
              rel="noreferrer"
            >
              typed-soap
            </a>
            <a
              className="rounded-full bg-white/10 px-3 py-1.5 text-white transition hover:bg-white/20"
              href={npmTsoapCli}
              target="_blank"
              rel="noreferrer"
            >
              tsoap-cli
            </a>
            <a
              className="text-[hsl(280,100%,75%)] transition hover:underline"
              href={github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-5xl px-4 pb-20 pt-16 text-center sm:pt-24">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[hsl(280,100%,75%)]">
            End-to-end typesafe SOAP
          </p>
          <h1 className="text-balance text-4xl font-extrabold tracking-tight sm:text-6xl sm:leading-[1.1]">
            Move fast with{" "}
            <span className="text-[hsl(280,100%,75%)]">WSDLs</span>
            <br />
            and break nothing.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-white/75 sm:text-xl">
            Generate typed RPC wrappers from your WSDLs with{" "}
            <span className="text-white/80">tsoap-cli</span>, then call services
            with <span className="text-white/80">typed-soap</span>—full
            autocomplete, compile-time checks, and a clean async API. No
            manual <code className="text-[hsl(280,100%,80%)]">any</code>{" "}
            workflow.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              className="rounded-full bg-white px-8 py-3 text-base font-semibold text-[#2e026d] shadow-lg transition hover:bg-white/90"
              href={npmTypedSoap}
              target="_blank"
              rel="noreferrer"
            >
              typed-soap on npm
            </a>
            <a
              className="rounded-full border border-white/25 bg-white/10 px-8 py-3 text-base font-semibold text-white transition hover:bg-white/20"
              href={npmTsoapCli}
              target="_blank"
              rel="noreferrer"
            >
              tsoap-cli on npm
            </a>
          </div>
          <p className="mt-10 text-sm text-white/45">
            {liveGreeting} — this site is built with the T3 stack (Next.js + tRPC).
          </p>
        </section>

        <section
          id="features"
          className="mx-auto max-w-5xl px-4 pb-20"
          aria-labelledby="features-heading"
        >
          <h2
            id="features-heading"
            className="mb-10 text-center text-3xl font-bold tracking-tight"
          >
            Why typed SOAP
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard title="Automatic end-to-end types">
              Generated interfaces mirror your WSDL. Change the server contract
              and TypeScript surfaces the mismatch on the client before you
              ship.
            </FeatureCard>
            <FeatureCard title="Snappy DX">
              Service → port → operation autocomplete, like an SDK for your SOAP
              API—without maintaining hand-written wrappers.
            </FeatureCard>
            <FeatureCard title="Fits your stack">
              Works with Node 18+, TypeScript 5.x, and the battle-tested{" "}
              <code className="text-white/80">soap</code> runtime under the
              hood.
            </FeatureCard>
            <FeatureCard title="Cleaner calls than raw soap">
              No four-tuple return—<code className="text-white/80">typed-soap</code>{" "}
              returns the result directly with a typed shape.
            </FeatureCard>
            <FeatureCard title="Numeric XSD coverage">
              Types like <code className="text-white/80">unsignedInt</code>{" "}
              deserialize to numbers where raw <code className="text-white/80">soap</code>{" "}
              leaves strings behind.
            </FeatureCard>
            <FeatureCard title="CLI + runtime pair">
              <code className="text-white/80">tsoap-cli</code> generates once;
              <code className="text-white/80"> typed-soap</code> runs at
              runtime—check generated files into git for reproducible CI.
            </FeatureCard>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 pb-20">
          <h2 className="mb-10 text-center text-3xl font-bold tracking-tight">
            From <code className="text-[hsl(280,100%,80%)]">any</code> to typed
          </h2>
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-medium text-white/50">
                Raw soap (no types)
              </p>
              <CodeBlock title="node-soap">
                {`import soap from 'soap';

const client = await soap.createClientAsync('http://example.com?wsdl');

// No types, 4-tuple return, easy to get wrong
const [result] = await client.GetWeatherAsync({ city: 'NYC' });
//     ^? any`}
              </CodeBlock>
            </div>
            <div>
              <p className="mb-3 text-sm font-medium text-[hsl(280,100%,75%)]">
                typed-soap + generated client
              </p>
              <CodeBlock title="generated + typed-soap">
                {`import { createWeatherServiceClient } from './generated/weather.js';

const client = await createWeatherServiceClient(
  'http://example.com/weather?wsdl',
);

const result = await client.WeatherService.WeatherPort.GetWeather({
  city: 'NYC',
});
//     ^? { temperature: number; description: string }`}
              </CodeBlock>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 pb-20">
          <h2 className="mb-10 text-center text-3xl font-bold tracking-tight">
            Three steps to a typed client
          </h2>
          <div className="grid gap-10 lg:grid-cols-3">
            <div>
              <p className="mb-2 text-sm font-semibold text-[hsl(280,100%,75%)]">
                1. Generate
              </p>
              <CodeBlock>
                {`npx tsoap generate \\
  -i ./weather.wsdl \\
  -o ./src/generated`}
              </CodeBlock>
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold text-[hsl(280,100%,75%)]">
                2. Create a client
              </p>
              <CodeBlock>
                {`import { createWeatherServiceClient }
  from './src/generated/weather.js';

const client = await createWeatherServiceClient(
  'http://example.com/weather?wsdl',
);`}
              </CodeBlock>
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold text-[hsl(280,100%,75%)]">
                3. Call operations
              </p>
              <CodeBlock>
                {`const result =
  await client.WeatherService.WeatherPort.GetWeather({
    city: 'NYC',
  });

console.log(result.temperature);`}
              </CodeBlock>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 pb-20">
          <h2 className="mb-10 text-center text-3xl font-bold tracking-tight">
            soap vs typed-soap
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.05]">
                  <th className="px-4 py-3 font-semibold">Aspect</th>
                  <th className="px-4 py-3 font-semibold text-white/70">
                    soap package
                  </th>
                  <th className="px-4 py-3 font-semibold text-[hsl(280,100%,80%)]">
                    typed-soap
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                <tr>
                  <td className="px-4 py-3 text-white/80">Call pattern</td>
                  <td className="px-4 py-3 text-white/80">
                    <code className="text-xs">client.OpAsync(args)</code>
                  </td>
                  <td className="px-4 py-3 text-white/80">
                    <code className="text-xs">client.Service.Port.Op(args)</code>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-white/80">Return value</td>
                  <td className="px-4 py-3 text-white/60">
                    Four-element tuple
                  </td>
                  <td className="px-4 py-3 text-white/80">Result only</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-white/80">Types</td>
                  <td className="px-4 py-3 text-white/60">Mostly any</td>
                  <td className="px-4 py-3 text-white/80">From WSDL</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-white/80">Numeric XSD types</td>
                  <td className="px-4 py-3 text-white/60">
                    Often strings
                  </td>
                  <td className="px-4 py-3 text-white/80">
                    Deserialized to number where supported
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section
          id="packages"
          className="mx-auto max-w-5xl px-4 pb-24"
          aria-labelledby="packages-heading"
        >
          <h2
            id="packages-heading"
            className="mb-10 text-center text-3xl font-bold tracking-tight"
          >
            Packages
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-8">
              <h3 className="text-xl font-bold">typed-soap</h3>
              <p className="mt-2 text-sm text-white/65">
                Runtime client for type-safe SOAP calls. Wraps{" "}
                <code className="text-white/80">soap</code> with a typed proxy,
                direct async results, and extra numeric deserializers.
              </p>
              <p className="mt-4 text-xs text-white/45">
                Peer: <code className="text-white/60">soap</code> ^1.1.6 · Node
                18+
              </p>
              <a
                className="mt-6 inline-flex w-fit items-center rounded-full bg-white px-8 py-2.5 text-sm font-semibold text-[#2e026d] transition hover:bg-white/90"
                href={npmTypedSoap}
                target="_blank"
                rel="noreferrer"
              >
                View on npm
              </a>
            </div>
            <div className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-8">
              <h3 className="text-xl font-bold">tsoap-cli</h3>
              <p className="mt-2 text-sm text-white/65">
                Code generator: read a WSDL path or URL and emit TypeScript
                interfaces plus a factory that calls{" "}
                <code className="text-white/80">createSoapClient</code> from
                typed-soap.
              </p>
              <p className="mt-4 text-xs text-white/45">
                Dev dependency · install alongside typed-soap
              </p>
              <a
                className="mt-6 inline-flex w-fit items-center rounded-full border border-white/25 bg-white/10 px-8 py-2.5 text-sm font-semibold text-white transition hover:bg-white/20"
                href={npmTsoapCli}
                target="_blank"
                rel="noreferrer"
              >
                View on npm
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-10 text-center text-sm text-white/60">
        <p>
          MIT ·{" "}
          <a className="underline hover:text-white" href={github}>
            Deodat-Lawson/tsoap
          </a>
        </p>
        <p className="mt-2 text-sm text-white/65">
          Inspired by the{" "}
          <a
            className="underline hover:text-white"
            href="https://trpc.io"
            target="_blank"
            rel="noreferrer"
          >
            tRPC
          </a>{" "}
          landing experience · Not affiliated with tRPC.
        </p>
      </footer>
    </div>
  );
}
