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
    { icon: 'dot', lbl: 'cable', val: 'Cat6 @ desk', hint: 'no contention' },
    { icon: 'dot', lbl: 'desks', val: <><LiveNumber value={desksFree} />/{totalDesks}</>, hint: 'free now' },
    { icon: 'warn', lbl: 'ups', val: '6KV · 8h', hint: 'tested last tuesday' },
    { icon: 'dot', lbl: 'tea', val: 'brewing', hint: 'opt-in, paid, real' },
    { icon: 'dot', lbl: 'pin', val: '311001', hint: 'subhash nagar, bhilwara' },
    { icon: 'dot', lbl: 'temp', val: '23°C', hint: 'ac, powerful' },
  ];
  const loop = [...items, ...items];
  return (
    <div className="statusbar" role="status" aria-label="Live workspace status">
      <div className="statusbar-track">
        {loop.map((it, i) => (
          <span key={i} className="status-cell">
            <span className={`dot${it.icon === 'warn' ? ' warn' : ''}`}></span>
            <span className="lbl">{it.lbl}</span>
            <strong>{it.val}</strong>
            <span className="dim" style={{ fontSize: 11 }}>· {it.hint}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
