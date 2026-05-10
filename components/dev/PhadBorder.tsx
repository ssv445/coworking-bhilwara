/**
 * Phad-inspired horizontal border.
 * Geometric band only — no figures. Tile width 48px, height 20px, repeats.
 * Palette pulled from a real Phad scroll: vermillion red, mustard, parchment, ink.
 */
type Variant = 'full' | 'thin';

export default function PhadBorder({ variant = 'full' }: { variant?: Variant }) {
  if (variant === 'thin') {
    return (
      <div className="phad-border phad-border-thin" aria-hidden="true">
        <svg width="100%" height="6" preserveAspectRatio="none">
          <defs>
            <pattern id="phad-thin" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
              <rect width="6" height="2" fill="var(--phad-red)" />
              <rect y="2" width="6" height="2" fill="var(--phad-mustard)" />
              <rect y="4" width="6" height="2" fill="var(--phad-red)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#phad-thin)" />
        </svg>
      </div>
    );
  }

  return (
    <div className="phad-border" aria-hidden="true">
      <svg width="100%" height="22" preserveAspectRatio="none">
        <defs>
          <pattern
            id="phad-tile"
            x="0"
            y="0"
            width="48"
            height="22"
            patternUnits="userSpaceOnUse"
          >
            {/* top red band */}
            <rect width="48" height="3" fill="var(--phad-red)" />
            {/* thin ink rule */}
            <rect y="3" width="48" height="0.6" fill="var(--phad-ink)" />
            {/* parchment band */}
            <rect y="3.6" width="48" height="14.8" fill="var(--phad-cream)" />
            {/* diamond — center */}
            <polygon points="24,5.5 30,11 24,16.5 18,11" fill="var(--phad-red)" />
            <polygon points="24,7.8 27.5,11 24,14.2 20.5,11" fill="var(--phad-mustard)" />
            {/* dots — flank, mustard rings */}
            <circle cx="6" cy="11" r="1.6" fill="var(--phad-mustard)" />
            <circle cx="42" cy="11" r="1.6" fill="var(--phad-mustard)" />
            {/* thin ink rule */}
            <rect y="18.4" width="48" height="0.6" fill="var(--phad-ink)" />
            {/* bottom red band */}
            <rect y="19" width="48" height="3" fill="var(--phad-red)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#phad-tile)" />
      </svg>
    </div>
  );
}
