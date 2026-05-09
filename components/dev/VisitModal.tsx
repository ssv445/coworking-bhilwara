'use client';

import { useCallback, useEffect, useState } from 'react';
import VisitForm from './VisitForm';

const HASH = '#visit';

export default function VisitModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sync = () => setOpen(window.location.hash === HASH);
    sync();
    window.addEventListener('hashchange', sync);
    return () => window.removeEventListener('hashchange', sync);
  }, []);

  const close = useCallback(() => {
    if (typeof window !== 'undefined' && window.location.hash === HASH) {
      history.replaceState(null, '', window.location.pathname + window.location.search);
    }
    setOpen(false);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('modal-open', open);
    return () => document.documentElement.classList.remove('modal-open');
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, close]);

  if (!open) return null;

  return (
    <div className="visit-modal is-open" role="dialog" aria-modal="true" aria-labelledby="visit-modal-title">
      <div className="visit-modal-overlay" onClick={close} aria-hidden="true" />
      <div className="visit-modal-card">
        <button
          type="button"
          className="visit-modal-close"
          onClick={close}
          aria-label="Close"
        >
          ×
        </button>
        <div className="section-label">say hi</div>
        <h3 id="visit-modal-title" className="visit-modal-title display">
          Tell the host who you are.
        </h3>
        <p className="visit-modal-sub dim">
          A short message · the host gets back within ~2 hours, Mon–Sat.
        </p>
        <VisitForm />
        <p className="visit-modal-foot dim">
          Prefer to call? <a href="tel:+919116011130">+91 9116011130</a> · Mon–Sat
        </p>
      </div>
    </div>
  );
}
