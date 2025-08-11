"use client";

import { useEffect, useRef, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

type AnimateOnScrollProps = {
  children: ReactNode;
  className?: string;
  animation: 'fade-up' | 'fade-left' | 'fade-right' | 'zoom-in';
};

export function AnimateOnScroll({ children, className, animation }: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && element) {
          element.setAttribute('data-in-view', 'true');
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div ref={ref} data-aos={animation} className={className}>
      {children}
    </div>
  );
}
