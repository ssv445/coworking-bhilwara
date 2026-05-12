'use client';

import { useState } from 'react';
import { WA_NUMBER } from './whatsapp';

const INTENTS: { id: string; label: string; tag: string }[] = [
  { id: 'visit', label: 'Visit the office', tag: 'walking in this week' },
  { id: 'daypass', label: 'Day / week pass', tag: 'drop-in pricing' },
  { id: 'monthly', label: 'Reserved seat', tag: 'monthly · ₹3,000' },
  { id: 'question', label: 'Just a question', tag: 'no commitment' },
];

export default function VisitForm() {
  const [name, setName] = useState('');
  const [query, setQuery] = useState('');
  const [intent, setIntent] = useState<string>('visit');

  const intentLabel = INTENTS.find((i) => i.id === intent)?.label ?? 'Visit the office';

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !query.trim()) return;
    const text =
      `Hi Shyam — ${intentLabel.toLowerCase()}.\n\n` +
      `Name: ${name.trim()}\n\n` +
      `${query.trim()}\n\n` +
      `— sent from coworkingspacebhilwara.com`;
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return (
    <form className="visit-form" onSubmit={handleSubmit} noValidate>
      <div className="visit-form-row">
        <label className="visit-form-label" htmlFor="visit-name">
          <span className="accent">$</span> --name
        </label>
        <input
          id="visit-name"
          className="visit-form-input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          autoComplete="name"
          required
        />
      </div>

      <div className="visit-form-row">
        <span className="visit-form-label">
          <span className="accent">$</span> --intent
        </span>
        <div className="visit-form-intents">
          {INTENTS.map((i) => (
            <label
              key={i.id}
              className={`visit-form-intent${intent === i.id ? ' is-active' : ''}`}
            >
              <input
                type="radio"
                name="intent"
                value={i.id}
                checked={intent === i.id}
                onChange={() => setIntent(i.id)}
              />
              <span className="visit-form-intent-label">{i.label}</span>
              <span className="dim visit-form-intent-tag">· {i.tag}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="visit-form-row">
        <label className="visit-form-label" htmlFor="visit-query">
          <span className="accent">$</span> --message
        </label>
        <textarea
          id="visit-query"
          className="visit-form-input visit-form-textarea"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={
            intent === 'visit'
              ? 'When would suit? Any day Mon–Sat works for me.'
              : intent === 'question'
                ? 'What\'s on your mind?'
                : 'A line about what you\'re thinking — the host will reply.'
          }
          rows={3}
          required
        />
      </div>

      <div className="visit-form-actions">
        <button
          type="submit"
          className="dev-btn dev-btn-primary"
          disabled={!name.trim() || !query.trim()}
        >
          Send message
          <span aria-hidden="true">→</span>
        </button>
        <span className="dim visit-form-hint">
          Host replies within ~2h, Mon–Sat.
        </span>
      </div>
    </form>
  );
}
