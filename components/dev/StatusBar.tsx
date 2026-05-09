'use client';

import LiveNumber from './LiveNumber';

interface Props {
  desksFree: number;
  totalDesks: number;
}

export default function StatusBar({ desksFree, totalDesks }: Props) {
  const items: { icon: 'dot' | 'warn'; lbl: string; val: React.ReactNode; hint: string }[] = [
    { icon: 'dot', lbl: 'uptime', val: <LiveNumber value={99.97} decimals={2} suffix="%" />, hint: 'last 30d' },
    { icon: 'dot', lbl: 'wifi', val: '940 / 890 Mbps', hint: 'gigabit ↑↓' },
    { icon: 'dot', lbl: 'desks', val: <><LiveNumber value={desksFree} />/{totalDesks}</>, hint: 'free now' },
    { icon: 'warn', lbl: 'ups', val: '6KV · 8h', hint: 'tested last week' },
    { icon: 'dot', lbl: 'temp', val: '23°C', hint: 'ac, powerful' },
    { icon: 'dot', lbl: 'tea', val: 'brewing', hint: 'opt-in, paid, real' },
  ];
  return (
    <div className="statusbar" role="status" aria-label="Live workspace status">
      <div className="statusbar-static">
        {items.map((it, i) => (
          <span key={i} className="status-cell">
            <span className={`dot${it.icon === 'warn' ? ' warn' : ''}`}></span>
            <span className="lbl">{it.lbl}</span>
            <strong>{it.val}</strong>
            <span className="dim status-hint">· {it.hint}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
