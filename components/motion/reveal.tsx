"use client";
import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  const root = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const tween = gsap.fromTo(content.current, { opacity: 0, y: 48 }, {
        opacity: 1, y: 0, duration: 1.25, ease: "power3.out", paused: true,
      });
      ScrollTrigger.create({
        trigger: root.current, start: "top 96%", end: "bottom 8%",
        onEnter: () => tween.timeScale(1).play(),
        onEnterBack: () => tween.timeScale(1).play(),
        onLeave: () => tween.timeScale(3.5).reverse(),
        onLeaveBack: () => tween.timeScale(3.5).reverse(),
      });
    }, root);
    return () => media.revert();
  }, []);
  return <div ref={root} className={className}><div ref={content}>{children}</div></div>;
}
