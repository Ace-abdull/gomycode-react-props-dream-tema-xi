type PlayerCardProps = {
  name: string;
  rating: number;
  position: string;
  nation: string;
  club: string;
  image: string;
};

export function PlayerCard({ name, rating, position, nation, club, image }: PlayerCardProps) {
  return (
    <div className="group relative w-[140px] select-none sm:w-[160px]">
      <div className="bg-card-fifa shadow-card relative aspect-[2/3] overflow-hidden rounded-xl ring-1 ring-black/10 transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-glow">
        <div className="absolute left-3 top-3 flex flex-col items-center gap-0.5">
          <span className="text-shadow-soft text-2xl font-black leading-none text-gold-foreground">
            {rating}
          </span>
          <span className="text-shadow-soft text-[10px] font-bold tracking-widest text-gold-foreground/80">
            {position}
          </span>
          <span className="mt-1 text-[10px] font-semibold text-gold-foreground/70">{nation}</span>
          <span className="text-[10px] font-semibold text-gold-foreground/70">{club}</span>
        </div>

        <div className="absolute inset-0 flex items-end justify-end pr-1">
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="h-[80%] w-[78%] object-cover object-top opacity-95 mix-blend-luminosity contrast-110 saturate-110"
          />
        </div>

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent px-3 pb-3 pt-6">
          <p className="text-shadow-soft truncate text-center text-sm font-black uppercase tracking-wide text-gold-foreground">
            {name}
          </p>
          <div className="mt-1 flex items-center justify-center gap-1.5 text-[9px] font-bold uppercase tracking-wider text-gold-foreground/85">
            <span>PAC 92</span>
            <span className="opacity-50">•</span>
            <span>SHO 94</span>
            <span className="opacity-50">•</span>
            <span>DRI 95</span>
          </div>
        </div>
      </div>
    </div>
  );
}
