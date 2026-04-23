import { memo, useState } from "react";

export interface Player {
  name: string;
  rating: number;
  position: string;
  nation: string;
  club: string;
  image: string;
  stats?: {
    pace: number;
    shooting: number;
    dribbling: number;
  };
}

export const PlayerCard = memo<Player>(function PlayerCard({
  name,
  rating,
  position,
  nation,
  club,
  image,
  stats = { pace: 92, shooting: 94, dribbling: 95 },
}) {
  const [imageError, setImageError] = useState(false);

  return (
    <article
      className="group relative w-[140px] select-none sm:w-[160px]"
      role="article"
      aria-label={`Football player ${name}, rated ${rating}, position ${position}`}
    >
      <div className="bg-card-fifa shadow-card relative aspect-[2/3] overflow-hidden rounded-xl ring-1 ring-black/10 transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-glow focus-within:ring-2 focus-within:ring-accent">
        <div className="absolute left-3 top-3 flex flex-col items-center gap-0.5">
          <span
            className="text-shadow-soft text-2xl font-black leading-none text-gold-foreground"
            aria-label={`Rating: ${rating}`}
          >
            {rating}
          </span>
          <span
            className="text-shadow-soft text-[10px] font-bold tracking-widest text-gold-foreground/80"
            aria-label={`Position: ${position}`}
          >
            {position}
          </span>
          <span
            className="mt-1 text-[10px] font-semibold text-gold-foreground/70"
            aria-label={`Nationality: ${nation}`}
          >
            {nation}
          </span>
          <span
            className="text-[10px] font-semibold text-gold-foreground/70"
            aria-label={`Club: ${club}`}
          >
            {club}
          </span>
        </div>

        <div className="absolute inset-0 flex items-end justify-end pr-1">
          <img
            src={imageError ? "/placeholder-player.png" : image}
            alt={`Portrait of ${name}, ${position} for ${club}`}
            loading="lazy"
            onError={() => setImageError(true)}
            className="h-[80%] w-[78%] object-cover object-top opacity-95 mix-blend-luminosity contrast-110 saturate-110"
          />
        </div>

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent px-3 pb-3 pt-6">
          <p className="text-shadow-soft truncate text-center text-sm font-black uppercase tracking-wide text-gold-foreground">
            {name}
          </p>
          <div className="mt-1 flex items-center justify-center gap-1.5 text-[9px] font-bold uppercase tracking-wider text-gold-foreground/85">
            <span aria-label={`Pace: ${stats.pace}`}>PAC {stats.pace}</span>
            <span className="opacity-50" aria-hidden="true">
              •
            </span>
            <span aria-label={`Shooting: ${stats.shooting}`}>SHO {stats.shooting}</span>
            <span className="opacity-50" aria-hidden="true">
              •
            </span>
            <span aria-label={`Dribbling: ${stats.dribbling}`}>DRI {stats.dribbling}</span>
          </div>
        </div>
      </div>
    </article>
  );
});
