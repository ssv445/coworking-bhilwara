'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import VisitForm from './VisitForm';
import { CONTACT, telHref } from '@/lib/business';

const HASH = '#visit';

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function VisitModal() {
  const [open, setOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

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

  // toggle modal-open class for body-scroll lock
  useEffect(() => {
    document.documentElement.classList.toggle('modal-open', open);
    return () => document.documentElement.classList.remove('modal-open');
  }, [open]);

  // a11y: inert background, capture+restore focus, focus initial input
  useEffect(() => {
    if (!open) return;

    triggerRef.current = (document.activeElement as HTMLElement) ?? null;

    const otherTops = Array.from(document.body.children).filter(
      (el) => !(el as HTMLElement).classList.contains('visit-modal'),
    ) as HTMLElement[];
    otherTops.forEach((el) => el.setAttribute('inert', ''));

    // focus the first input on next paint so layout settles
    const id = window.requestAnimationFrame(() => {
      const nameInput = document.getElementById('visit-name') as HTMLElement | null;
      const fallback = cardRef.current?.querySelector<HTMLElement>(FOCUSABLE_SELECTOR);
      (nameInput ?? fallback)?.focus();
    });

    return () => {
      window.cancelAnimationFrame(id);
      otherTops.forEach((el) => el.removeAttribute('inert'));
      // restore focus to trigger element
      const t = triggerRef.current;
      if (t && typeof t.focus === 'function') {
        t.focus();
      }
    };
  }, [open]);

  // Escape + focus trap
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        close();
        return;
      }
      if (e.key !== 'Tab') return;
      const card = cardRef.current;
      if (!card) return;
      const nodes = card.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
      if (nodes.length === 0) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      const active = document.activeElement as HTMLElement | null;
      if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, close]);

  if (!open) return null;

  return (
    <div className="visit-modal is-open" role="dialog" aria-modal="true" aria-labelledby="visit-modal-title">
      <div className="visit-modal-overlay" onClick={close} aria-hidden="true" />
      <div className="visit-modal-card" ref={cardRef}>
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
          Prefer to call? <a href={telHref}>{CONTACT.phoneDisplay}</a> · Mon–Sat
        </p>
      </div>
    </div>
  );
}
