import type { TermBlock } from './TypedTerminal';

export const INSTALL_BLOCK: TermBlock = {
  cmd: 'npm install ready-cowork',
  lines: [
    { kind: 'out', text: '<span class="muted">⠋ resolving 32 seats… vetting humans…</span>' },
    { kind: 'ok', text: 'reserved-desk@1.0.0 — your name on it' },
    { kind: 'ok', text: 'gigabit-cable@1 + wifi@1 — Cat6 to every desk' },
    { kind: 'ok', text: 'ups-daemon@6KV — 8h runtime through outages' },
    { kind: 'ok', text: 'colleagues@13 — vetted, not random' },
    { kind: 'warn', text: 'tea-coffee@optional — paid, real' },
    { kind: 'out', text: '' },
    { kind: 'out', text: 'added 1 desk in <span class="hi">0.18s</span>. <span class="bg-ok">19/32</span> seats remaining.' },
  ],
};

export const SSH_BLOCK: TermBlock = {
  cmd: 'ssh host@cowork-bhilwara',
  lines: [
    { kind: 'out', text: '<span class="muted">Last login: today, by 13 humans</span>' },
    { kind: 'out', text: 'Welcome to <span class="hi">Ready CoWork</span> · Bhilwara' },
    { kind: 'out', text: '' },
    { kind: 'out', text: '<span class="muted">Uptime :</span> 99.97%   <span class="muted">Outages today:</span> 0' },
    { kind: 'out', text: '<span class="muted">Wifi   :</span> 940 / 890 Mbps' },
    { kind: 'out', text: '<span class="muted">Members:</span> 13 online · <span class="hi">tea: brewing</span>' },
  ],
};

export const MANIFESTO_BLOCK: TermBlock = {
  cmd: 'cat manifesto.txt',
  lines: [
    { kind: 'out', text: '<span class="hi"># How we work, in 6 lines.</span>' },
    { kind: 'out', text: '1. Computer professionals only. Cultural fit.' },
    { kind: 'out', text: '2. No guests inside. Meet them outside.' },
    { kind: 'out', text: '3. Fair-use internet. Stream code, not Netflix.' },
    { kind: 'out', text: '4. Calls in meeting rooms, not at your desk.' },
    { kind: 'out', text: '5. BYO laptop. We supply the rest.' },
    { kind: 'out', text: '6. ₹3,000/mo. No contract. Walk anytime.' },
  ],
};
