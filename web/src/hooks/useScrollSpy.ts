import { useEffect, useState } from 'react';

type Options = {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
};

export default function useScrollSpy(ids: string[], options?: Options) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as Element[];
    if (elements.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      // Find the entry closest to top that is intersecting
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => (a.boundingClientRect.top > b.boundingClientRect.top ? 1 : -1));
      if (visible[0]) {
        setActiveId(visible[0].target.id);
      }
    }, options ?? { rootMargin: '-80px 0px -60% 0px', threshold: [0, 0.5, 1] });

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids.join(','), options?.rootMargin, options?.threshold]);

  return activeId;
}

