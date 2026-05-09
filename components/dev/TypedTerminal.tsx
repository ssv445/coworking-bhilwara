'use client';

import { Fragment, useEffect, useRef, useState } from 'react';

export interface TermLine {
  kind?: 'ok' | 'warn' | 'out' | 'muted' | 'cmd' | 'prompt';
  text: string;
}

export interface TermBlock {
  cmd: string;
  lines: TermLine[];
}

interface Props {
  blocks: TermBlock[];
  speed?: number;
  linePause?: number;
  hold?: number;
  restart?: boolean;
  delayStart?: number;
}

export default function TypedTerminal({
  blocks,
  speed = 28,
  linePause = 280,
  hold = 4000,
  restart = true,
  delayStart = 0,
}: Props) {
  const [started, setStarted] = useState(delayStart === 0);
  const [phase, setPhase] = useState({ block: 0, typedChars: 0, line: 0 });
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (started) return;
    const id = setTimeout(() => setStarted(true), delayStart);
    return () => clearTimeout(id);
  }, [started, delayStart]);

  useEffect(() => {
    if (!started) return;
    if (timer.current) clearTimeout(timer.current);
    const b = blocks[phase.block];
    if (!b) return;
    if (phase.typedChars < b.cmd.length) {
      timer.current = setTimeout(
        () => setPhase((p) => ({ ...p, typedChars: p.typedChars + 1 })),
        speed + Math.random() * 30,
      );
    } else if (phase.line < b.lines.length) {
      timer.current = setTimeout(
        () => setPhase((p) => ({ ...p, line: p.line + 1 })),
        linePause,
      );
    } else if (phase.block < blocks.length - 1) {
      timer.current = setTimeout(
        () => setPhase({ block: phase.block + 1, typedChars: 0, line: 0 }),
        hold,
      );
    } else if (restart) {
      timer.current = setTimeout(
        () => setPhase({ block: 0, typedChars: 0, line: 0 }),
        hold * 1.6,
      );
    }
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [phase, blocks, speed, linePause, hold, restart, started]);

  return (
    <div className="term-output">
      {blocks.slice(0, phase.block + 1).map((b, bi) => {
        const isCurrent = bi === phase.block;
        const cmdText = isCurrent ? b.cmd.slice(0, phase.typedChars) : b.cmd;
        const cmdDone = !isCurrent || phase.typedChars >= b.cmd.length;
        const linesShown = isCurrent ? b.lines.slice(0, phase.line) : b.lines;
        return (
          <Fragment key={bi}>
            <span className="term-line prompt">
              <span className="u">shyam@bhilwara</span>:
              <span className="p">~/cowork</span>
              <span className="arr">$</span>
              <span className="cmd">{cmdText}</span>
              {isCurrent && !cmdDone && (
                <span style={{ color: 'var(--accent)' }}>▋</span>
              )}
            </span>
            {linesShown.map((l, i) => (
              <span
                key={i}
                className={`term-line ${l.kind || 'out'}`}
                dangerouslySetInnerHTML={{ __html: l.text }}
              ></span>
            ))}
            {isCurrent &&
              cmdDone &&
              phase.line >= b.lines.length &&
              bi === blocks.length - 1 && (
                <span className="term-line prompt">
                  <span className="u">shyam@bhilwara</span>:
                  <span className="p">~/cowork</span>
                  <span className="arr">$</span>
                  <span style={{ color: 'var(--accent)' }}>▋</span>
                </span>
              )}
          </Fragment>
        );
      })}
    </div>
  );
}
