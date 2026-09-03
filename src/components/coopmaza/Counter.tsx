import { useEffect, useState } from "react";

export function Counter({
  to,
  prefix = "",
  suffix = "",
  duration = 1200,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  // Always render the final value on the server and on initial mount
  const [val, setVal] = useState(to);

  useEffect(() => {
    // Reset to 0 to begin the count up
    setVal(0);

    const steps = 30; // Total increments
    const stepTime = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      if (currentStep >= steps) {
        setVal(to);
        clearInterval(timer);
      } else {
        // Calculate incremental value safely
        const nextVal = Math.round((to / steps) * currentStep);
        setVal(nextVal);
      }
    }, stepTime);

    return () => {
      clearInterval(timer);
    };
  }, [to, duration]);

  return (
    <span 
      className="inline-block notranslate" 
      translate="no" 
      suppressHydrationWarning
    >
      {prefix}
      {val.toLocaleString("es-DO")}
      {suffix}
    </span>
  );
}
