import { memo, type ReactNode } from "react";

interface PitchProps {
  children: ReactNode;
  className?: string;
}

interface PitchRowProps {
  children: ReactNode;
  className?: string;
}

export const Pitch = memo<PitchProps>(function Pitch({ children, className = "" }) {
  return (
    <div
      className={`bg-pitch-stripes relative mx-auto aspect-[3/4] w-full max-w-[820px] overflow-hidden rounded-2xl border border-border shadow-card ${className}`}
      role="img"
      aria-label="Football pitch"
    >
      {/* Pitch markings */}
      <svg
        viewBox="0 0 300 400"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <pattern id="pitch-stripes" patternUnits="userSpaceOnUse" width="72" height="400">
            <rect width="36" height="400" fill="var(--pitch-light)" />
            <rect x="36" width="36" height="400" fill="var(--pitch-dark)" />
          </pattern>
        </defs>
        <g
          fill="none"
          stroke="var(--pitch-line)"
          strokeWidth="1.2"
          vectorEffect="non-scaling-stroke"
        >
          {/* Outer boundary */}
          <rect x="8" y="8" width="284" height="384" rx="2" />
          {/* Halfway line */}
          <line x1="8" y1="200" x2="292" y2="200" />
          {/* Center circle + spot */}
          <circle cx="150" cy="200" r="34" />
          <circle cx="150" cy="200" r="1.6" fill="var(--pitch-line)" />
          {/* Top penalty area */}
          <rect x="70" y="8" width="160" height="56" />
          <rect x="110" y="8" width="80" height="22" />
          <circle cx="150" cy="46" r="1.6" fill="var(--pitch-line)" />
          {/* Bottom penalty area */}
          <rect x="70" y="336" width="160" height="56" />
          <rect x="110" y="370" width="80" height="22" />
          <circle cx="150" cy="354" r="1.6" fill="var(--pitch-line)" />
        </g>
      </svg>

      <div className="relative z-10 grid h-full grid-rows-4">{children}</div>
    </div>
  );
});

export const PitchRow = memo<PitchRowProps>(function PitchRow({ children, className = "" }) {
  return (
    <div className={`flex items-center justify-around px-2 sm:px-4 ${className}`}>{children}</div>
  );
});
