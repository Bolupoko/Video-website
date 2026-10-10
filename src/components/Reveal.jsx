import { useEffect, useRef, useState } from "react";

function Reveal({ children, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <div
        className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
          visible
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100"
        } ${className}`}
      >
        {children}
      </div>
    </div>
  );
}

export default Reveal;