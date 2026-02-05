import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCalendar,
  faShield,
} from "@fortawesome/free-solid-svg-icons";

type CounterKeys = "customers" | "events" | "awards";

const stats = [
  { icon: faUser, label: "Customers", count: 653, key: "customers" },
  { icon: faCalendar, label: "Events", count: 823, key: "events" },
  { icon: faShield, label: "Awards", count: 45, key: "awards" },
] as const;

const Stats = () => {
  const [counters, setCounters] = useState<Record<CounterKeys, number>>({
    customers: 0,
    events: 0,
    awards: 0,
  });

  const hasAnimated = useRef(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      stats.forEach((stat) => {
        let current = 0;
        const increment = stat.count / steps;

        const timer = setInterval(() => {
          current += increment;

          setCounters((prev) => ({
            ...prev,
            [stat.key]:
              current >= stat.count ? stat.count : Math.floor(current),
          }));

          if (current >= stat.count) {
            clearInterval(timer);
          }
        }, interval);
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateCounters();
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
    >
      {stats.map((stat) => (
        <div key={stat.key} className="flex flex-col items-center">
          <FontAwesomeIcon
            icon={stat.icon}
            className="text-white text-3xl mb-3"
          />
          <p className="text-white text-lg font-semibold mb-2">
            {stat.label}
          </p>
          <p className="text-2xl lg:text-3xl font-bold">
            {counters[stat.key]}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
