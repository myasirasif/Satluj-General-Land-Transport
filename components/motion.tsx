"use client";

import { animate, motion, MotionConfig, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

export function Reveal({
  children,
  delay = 0,
  className,
  x = 0,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  x?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: x ? 0 : 28, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function CountUp({ to, decimals = 0, suffix = "" }: { to: number; decimals?: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, to, { duration: 1.6, ease: "easeOut", onUpdate: setValue });
    return () => controls.stop();
  }, [inView, reduce, to]);

  return (
    <span ref={ref} className="tabular-nums">
      {(reduce ? to : value).toFixed(decimals)}
      {suffix}
    </span>
  );
}
