"use client";

import { useEffect, useState } from "react";
import type { DaySchedule } from "@/lib/site";

const DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function fmtTime(minutes: number): string {
  if (minutes === 720) return "noon";
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  const ampm = h >= 12 ? "pm" : "am";
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return m ? `${h12}:${String(m).padStart(2, "0")} ${ampm}` : `${h12} ${ampm}`;
}

/** Current weekday + minutes-since-midnight in the restaurant's timezone. */
function chicagoNow(): { day: number; minutes: number } {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Chicago",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  }).formatToParts(new Date());
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
  const minutes = (parseInt(get("hour"), 10) % 24) * 60 + parseInt(get("minute"), 10);
  return { day, minutes };
}

/** Live open/closed badge. Renders nothing until mounted to avoid hydration mismatch. */
export function OpenNow({ schedule, className = "" }: { schedule: DaySchedule[]; className?: string }) {
  const [now, setNow] = useState<{ day: number; minutes: number } | null>(null);

  useEffect(() => {
    const update = () => setNow(chicagoNow());
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, []);

  if (!now) return null;

  const today = schedule[now.day];
  const isOpen = now.minutes >= today.open && now.minutes < today.close;

  let label: string;
  if (isOpen) {
    label = `Open now · closes ${fmtTime(today.close)}`;
  } else if (now.minutes < today.open) {
    label = `Closed · opens ${fmtTime(today.open)} today`;
  } else {
    const nextDay = (now.day + 1) % 7;
    label = `Closed · opens ${DAY_NAMES[nextDay]} ${fmtTime(schedule[nextDay].open)}`;
  }

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold ${className}`}
    >
      <span
        className={`h-2 w-2 shrink-0 rounded-full ${isOpen ? "bg-green-500" : "bg-red-400"}`}
        aria-hidden="true"
      />
      {label}
    </span>
  );
}
