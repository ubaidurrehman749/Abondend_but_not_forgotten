import { useId, useLayoutEffect, useMemo, useRef } from 'react';
import gsap from 'gsap';
import type { Mission } from '../types/mission';
import { STATUS_GLYPH, STATUS_TEXT, bodyOf, formatDate } from '../data/display';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { useReveal } from '../hooks/useReveal';
import './Timeline.css';

export interface TimelineProps {
  missions: Pick<Mission, 'id' | 'name' | 'date' | 'location' | 'goal' | 'status' | 'verified'>[];
  /** Called when a learner opens an object from the timeline. */
  onSelect?: (id: string) => void;
  /** Render unverified records. Defaults to dev builds only. */
  allowUnverified?: boolean;
}

const BODY_GLYPH = { Moon: '☾', Mars: '♂', 'Deep space': '✦' } as const;

export function Timeline({
  missions,
  onSelect,
  allowUnverified = import.meta.env.DEV,
}: TimelineProps) {
  const headingId = `${useId()}-heading`;

  const items = useMemo(
    () =>
      missions
        .filter((m) => m.verified || allowUnverified)
        .slice()
        .sort((a, b) => a.date.localeCompare(b.date)),
    [missions, allowUnverified],
  );

  // The rail draws itself downward when the timeline scrolls into view.
  const track = useRef<HTMLDivElement>(null);
  const rail = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();
  useLayoutEffect(() => {
    const trackEl = track.current;
    const railEl = rail.current;
    if (!trackEl || !railEl || reduced) return;
    gsap.set(railEl, { scaleY: 0, transformOrigin: 'top' });
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        gsap.to(railEl, { scaleY: 1, duration: 1.4, ease: 'power2.inOut' });
      },
      { threshold: 0.1 },
    );
    io.observe(trackEl);
    return () => {
      io.disconnect();
      gsap.killTweensOf(railEl);
      gsap.set(railEl, { clearProps: 'transform' });
    };
  }, [reduced, items.length]);

  if (items.length === 0) return null;

  return (
    <section className="timeline" aria-labelledby={headingId}>
      <h2 id={headingId} className="timeline__title">
        <span className="timeline__eyebrow">Mission timeline</span>
        <span className="timeline__sr-only">: </span>
        <span className="timeline__name">Machines across time</span>
      </h2>

      <div ref={track} className="timeline__track">
        <span ref={rail} className="timeline__rail" aria-hidden="true" />
        <ol className="timeline__list">
          {items.map((m) => (
            <TimelineItem key={m.id} mission={m} onSelect={onSelect} />
          ))}
        </ol>
      </div>
    </section>
  );
}

function TimelineItem({
  mission: m,
  onSelect,
}: {
  mission: TimelineProps['missions'][number];
  onSelect?: (id: string) => void;
}) {
  const ref = useReveal<HTMLLIElement>();
  const body = bodyOf(m.location);
  return (
    <li ref={ref} className="timeline__item">
      <time className="timeline__date" dateTime={m.date}>
        {formatDate(m.date)}
      </time>
      <div className="timeline__card">
        <div className="timeline__tags">
          <span className="timeline__tag timeline__tag--body">
            <span aria-hidden="true">{BODY_GLYPH[body]}</span>
            {body}
          </span>
          <span className={`timeline__tag timeline__tag--${m.status.value}`}>
            <span aria-hidden="true">{STATUS_GLYPH[m.status.value]}</span>
            {STATUS_TEXT[m.status.value]}
          </span>
        </div>
        <h3 className="timeline__object">
          {onSelect ? (
            <button type="button" className="timeline__link" onClick={() => onSelect(m.id)}>
              {m.name}
            </button>
          ) : (
            m.name
          )}
        </h3>
        <p className="timeline__goal">{m.goal}</p>
      </div>
    </li>
  );
}
