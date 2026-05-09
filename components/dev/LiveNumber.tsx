'use client';

import { useEffect, useRef, useState } from 'react';

interface Props {
  value: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
}

export default function LiveNumber({
  value,
  decimals = 0,
  suffix = '',
  prefix = '',
}: Props) {
  const [shown, setShown] = useState(value);
  const prev = useRef(value);
  useEffect(() => {
    if (prev.current === value) return;
    let raf: number;
    const start = performance.now();
    const from = prev.current;
    const dur = 600;
    const step = (t: number) => {
      const k = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - k, 3);
      setShown(from + (value - from) * eased);
      if (k < 1) raf = requestAnimationFrame(step);
      else prev.current = value;
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [value]);
  return (
    <span className="tabnums">
      {prefix}
      {shown.toFixed(decimals)}
      {suffix}
    </span>
  );
}
