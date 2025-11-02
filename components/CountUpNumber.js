"use client";
import { useEffect, useState } from "react";

export default function CountUpNumber({ value, prefix = "", suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value);
    if (start === end) return;

    let totalMilSecDur = 1200;
    let incrementTime = 20;

    let timer = setInterval(() => {
      start += Math.ceil(end / (totalMilSecDur / incrementTime));
      if (start >= end) {
        clearInterval(timer);
        start = end;
      }
      setCount(start);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}
