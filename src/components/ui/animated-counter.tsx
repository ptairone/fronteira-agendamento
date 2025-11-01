import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: number | string;
  duration?: number;
  suffix?: string;
  className?: string;
}

export const AnimatedCounter = ({ value, duration = 2000, suffix = "", className = "" }: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);
  
  const numericValue = typeof value === 'string' ? parseInt(value.replace(/\D/g, '')) : value;
  const hasPlus = typeof value === 'string' && value.includes('+');

  useEffect(() => {
    if (!isInView || isNaN(numericValue)) return;
    
    const startTime = Date.now();
    const endTime = startTime + duration;
    
    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * numericValue);
      
      setCount(currentCount);
      
      if (now < endTime) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(numericValue);
      }
    };
    
    requestAnimationFrame(updateCount);
  }, [isInView, numericValue, duration]);

  return (
    <span ref={ref} className={className}>
      {count}{hasPlus && '+'}{suffix}
    </span>
  );
};
