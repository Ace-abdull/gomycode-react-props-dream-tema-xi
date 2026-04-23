import { memo, useMemo } from "react";
import { PlayerCard } from "@/components/PlayerCard";
import { Pitch, PitchRow } from "@/components/Pitch";
import { goalkeeper, defenders, midfielders, forwards, manager, type Player } from "@/data/players";

interface TeamStats {
  avgRating: number;
  chemistry: number;
  totalPlayers: number;
}

const TEAM_STATS: TeamStats = {
  avgRating: 91,
  chemistry: 100,
  totalPlayers: 11,
};

const FORMATION_INFO = {
  name: "4-3-3 Attack",
  description:
    "High press, inverted full-backs, creative midfield control, and a clinical front three.",
};

const CAPTAIN_INFO = {
  name: "Paolo Maldini",
  description:
    "Defensive elegance, elite reading of the game, and complete control of the back line.",
};

export default memo(function TeamApp() {
  const allPlayers = useMemo(() => [goalkeeper, ...defenders, ...midfielders, ...forwards], []);

  const calculatedStats = useMemo(() => {
    const totalRating = allPlayers.reduce((sum, player) => sum + player.rating, 0);
    return {
      avgRating: Math.round(totalRating / allPlayers.length),
      chemistry: TEAM_STATS.chemistry,
      totalPlayers: allPlayers.length,
    };
  }, [allPlayers]);

  return (
    <main className="bg-stadium min-h-screen" role="main" aria-label="Football team lineup">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header className="flex flex-col gap-6 border-b border-border pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
              Matchday Squad
            </p>
            <h1 className="mt-2 text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Dream XI{" "}
              <span className="text-accent" aria-hidden="true">
                ·
              </span>{" "}
              4-3-3
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
              A timeless lineup of legends. Built FIFA-style on a real stadium pitch.
            </p>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-border bg-card/70 px-5 py-4 backdrop-blur">
            <img
              src={manager.image}
              alt={`Portrait of ${manager.name}, team manager`}
              className="h-12 w-12 rounded-full object-cover ring-2 ring-accent"
              loading="lazy"
            />
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                Manager
              </p>
              <p className="text-lg font-bold text-foreground">{manager.name}</p>
            </div>
          </div>
        </header>

        <section className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <Pitch aria-label="Football pitch with player positions">
            <PitchRow aria-label="Forward line">
              {forwards.map((player) => (
                <PlayerCard key={player.name} {...player} />
              ))}
            </PitchRow>
            <PitchRow aria-label="Midfield line">
              {midfielders.map((player) => (
                <PlayerCard key={player.name} {...player} />
              ))}
            </PitchRow>
            <PitchRow aria-label="Defensive line">
              {defenders.map((player) => (
                <PlayerCard key={player.name} {...player} />
              ))}
            </PitchRow>
            <PitchRow aria-label="Goalkeeper position">
              <PlayerCard {...goalkeeper} />
            </PitchRow>
          </Pitch>

          <aside className="space-y-5" aria-label="Team information">
            <div className="rounded-2xl border border-border bg-card/70 p-6 shadow-card backdrop-blur">
              <p className="text-xs font-bold uppercase tracking-widest text-accent">Formation</p>
              <p className="mt-1 text-3xl font-black text-foreground">{FORMATION_INFO.name}</p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {FORMATION_INFO.description}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                {
                  label: "Avg Rating",
                  value: calculatedStats.avgRating,
                  ariaLabel: `Average rating: ${calculatedStats.avgRating}`,
                },
                {
                  label: "Chemistry",
                  value: calculatedStats.chemistry,
                  ariaLabel: `Team chemistry: ${calculatedStats.chemistry}`,
                },
                {
                  label: "Legends",
                  value: calculatedStats.totalPlayers,
                  ariaLabel: `Total legendary players: ${calculatedStats.totalPlayers}`,
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-border bg-card/60 p-4 text-center backdrop-blur"
                  aria-label={stat.ariaLabel}
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
              <p className="mt-1 text-2xl font-black text-foreground">{CAPTAIN_INFO.name}</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {CAPTAIN_INFO.description}
              </p>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
});
