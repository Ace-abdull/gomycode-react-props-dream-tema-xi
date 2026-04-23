import { createFileRoute } from "@tanstack/react-router";
import { PlayerCard } from "@/components/PlayerCard";
import { Pitch, PitchRow } from "@/components/Pitch";

import vanDerSar from "@/assets/players/van_der_sar.jpg";
import maldini from "@/assets/players/maldini.jpg";
import cannavaro from "@/assets/players/cannavaro.jpg";
import robertoCarlos from "@/assets/players/roberto_carlos.jpg";
import marcelo from "@/assets/players/marcelo.jpg";
import royKeane from "@/assets/players/roy_keane.jpg";
import kaka from "@/assets/players/kaka.jpg";
import ozil from "@/assets/players/ozil.webp";
import messi from "@/assets/players/messi.jpg";
import cr7 from "@/assets/players/cr7.jpg";
import neymar from "@/assets/players/neymar.jpg";
import mourinho from "@/assets/players/mourinho.jpg";

type Player = {
  name: string;
  rating: number;
  position: string;
  nation: string;
  club: string;
  image: string;
};

const goalkeeper: Player = {
  name: "Van der Sar",
  rating: 89,
  position: "GK",
  nation: "NED",
  club: "MUN",
  image: vanDerSar,
};

const defenders: Player[] = [
  {
    name: "R. Carlos",
    rating: 91,
    position: "LB",
    nation: "BRA",
    club: "RMA",
    image: robertoCarlos,
  },
  { name: "Maldini", rating: 94, position: "CB", nation: "ITA", club: "MIL", image: maldini },
  { name: "Cannavaro", rating: 92, position: "CB", nation: "ITA", club: "RMA", image: cannavaro },
  { name: "Marcelo", rating: 88, position: "RB", nation: "BRA", club: "RMA", image: marcelo },
];

const midfielders: Player[] = [
  { name: "Roy Keane", rating: 89, position: "CDM", nation: "IRL", club: "MUN", image: royKeane },
  { name: "Kaká", rating: 93, position: "CAM", nation: "BRA", club: "MIL", image: kaka },
  { name: "Özil", rating: 88, position: "CM", nation: "GER", club: "ARS", image: ozil },
];

const forwards: Player[] = [
  { name: "Neymar", rating: 91, position: "LW", nation: "BRA", club: "PSG", image: neymar },
  { name: "Messi", rating: 95, position: "ST", nation: "ARG", club: "FCB", image: messi },
  { name: "Ronaldo", rating: 94, position: "RW", nation: "POR", club: "RMA", image: cr7 },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dream XI — Football Team Project" },
      {
        name: "description",
        content:
          "A FIFA-style dream XI lineup of football legends arranged in a 4-3-3 formation on a stadium pitch.",
      },
      { property: "og:title", content: "Dream XI — Football Team Project" },
      {
        property: "og:description",
        content: "A FIFA-style dream XI lineup of football legends arranged in a 4-3-3 formation.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-stadium min-h-screen">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        {/* Header */}
        <header className="flex flex-col gap-6 border-b border-border pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
              Matchday Squad
            </p>
            <h1 className="mt-2 text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Dream XI <span className="text-accent">·</span> 4-3-3
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
              A timeless lineup of legends. Tap a card to feel the chemistry — built FIFA-style on a
              real stadium pitch.
            </p>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-border bg-card/70 px-5 py-4 backdrop-blur">
            <img
              src={mourinho}
              alt="Manager"
              className="h-12 w-12 rounded-full object-cover ring-2 ring-accent"
            />
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                Manager
              </p>
              <p className="text-lg font-bold text-foreground">José Mourinho</p>
            </div>
          </div>
        </header>

        {/* Pitch */}
        <section className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <Pitch>
            <PitchRow>
              {forwards.map((p) => (
                <PlayerCard key={p.name} {...p} />
              ))}
            </PitchRow>
            <PitchRow>
              {midfielders.map((p) => (
                <PlayerCard key={p.name} {...p} />
              ))}
            </PitchRow>
            <PitchRow>
              {defenders.map((p) => (
                <PlayerCard key={p.name} {...p} />
              ))}
            </PitchRow>
            <PitchRow>
              <PlayerCard {...goalkeeper} />
            </PitchRow>
          </Pitch>

          {/* Squad info */}
          <aside className="space-y-5">
            <div className="rounded-2xl border border-border bg-card/70 p-6 shadow-card backdrop-blur">
              <p className="text-xs font-bold uppercase tracking-widest text-accent">Formation</p>
              <p className="mt-1 text-3xl font-black text-foreground">4-3-3 Attack</p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                High press, inverted full-backs, and a creative trio behind a clinical front three.
                Built for fluid, vertical football.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "Avg Rating", value: "91" },
                { label: "Chemistry", value: "100" },
                { label: "Squad Cost", value: "∞" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-border bg-card/60 p-4 text-center backdrop-blur"
                >
                  <p className="text-2xl font-black text-accent">{stat.value}</p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-border bg-card/70 p-6 shadow-card backdrop-blur">
              <p className="text-xs font-bold uppercase tracking-widest text-accent">Captain</p>
              <p className="mt-1 text-2xl font-black text-foreground">Paolo Maldini</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                The benchmark for defensive elegance. Reads the game two moves ahead and keeps the
                back line composed under any pressure.
              </p>
            </div>
          </aside>
        </section>

        <footer className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>Built with TanStack Start · running on localhost:5173</p>
          <p className="font-mono">v1.0 · clean build</p>
        </footer>
      </div>
    </main>
  );
}
