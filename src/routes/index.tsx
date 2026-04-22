import { createFileRoute } from "@tanstack/react-router";

const squad = [
  { name: "Van der Sar", role: "Goalkeeper", note: "Commanding presence and elite shot stopping." },
  { name: "Maldini", role: "Defender", note: "Reads danger early and keeps the line calm." },
  { name: "Cannavaro", role: "Defender", note: "Aggressive duels with clean timing." },
  { name: "Kaká", role: "Midfielder", note: "Carries through the middle with elegance." },
  { name: "Messi", role: "Forward", note: "Creates angles other players never see." },
  {
    name: "Cristiano Ronaldo",
    role: "Forward",
    note: "Relentless finishing and movement in the box.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Football Team Project" },
      {
        name: "description",
        content:
          "A clean, stable football squad homepage running locally on port 5173 with TanStack Start.",
      },
      { property: "og:title", content: "Football Team Project" },
      {
        property: "og:description",
        content:
          "A clean, stable football squad homepage running locally on port 5173 with TanStack Start.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-app-gradient min-h-screen">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-10 sm:px-8 lg:px-12">
        <header className="border-border/80 flex items-center justify-between border-b pb-5">
          <div>
            <p className="text-muted-foreground text-sm uppercase tracking-[0.2em]">
              Local build restored
            </p>
            <h1 className="mt-2 text-4xl font-bold text-foreground sm:text-5xl">
              Football Team Project
            </h1>
          </div>
          <div className="rounded-lg border border-border bg-card px-4 py-3 text-right shadow-sm">
            <p className="text-muted-foreground text-xs uppercase tracking-[0.18em]">Dev URL</p>
            <p className="text-foreground text-lg font-bold">localhost:5173</p>
          </div>
        </header>

        <div className="grid flex-1 gap-8 py-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <section className="space-y-6">
            <div className="rounded-lg border border-border bg-card p-6 shadow-sm sm:p-8">
              <p className="text-primary text-sm font-semibold uppercase tracking-[0.22em]">
                Reset to stable
              </p>
              <h2 className="mt-3 max-w-2xl text-3xl font-bold text-foreground sm:text-4xl">
                Minimal home screen, clean router shell, and safe defaults for local npm development.
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl text-base leading-7">
                This page is intentionally lean so the project boots reliably first. Once local dev is
                stable, you can layer back richer football visuals without fighting broken startup config.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {squad.map((player) => (
                <article
                  key={player.name}
                  className="rounded-lg border border-border bg-card p-5 shadow-sm transition-transform duration-200 hover:-translate-y-1"
                >
                  <p className="text-primary text-xs font-semibold uppercase tracking-[0.18em]">
                    {player.role}
                  </p>
                  <h3 className="mt-3 text-xl font-bold text-foreground">{player.name}</h3>
                  <p className="text-muted-foreground mt-2 text-sm leading-6">{player.note}</p>
                </article>
              ))}
            </div>
          </section>

          <aside className="rounded-lg border border-border bg-card p-6 shadow-sm sm:p-8">
            <p className="text-muted-foreground text-sm uppercase tracking-[0.2em]">Checklist</p>
            <ul className="mt-5 space-y-4">
              {[
                "Router root kept intact",
                "Home route simplified",
                "Port stays on 5173 in local config",
                "Heavy dead UI removed",
                "Project ready for npm run dev",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="bg-primary mt-1.5 h-2.5 w-2.5 rounded-full" aria-hidden="true" />
                  <span className="text-foreground text-sm leading-6">{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </main>
  );
}
