"use client";

import { useEffect, useState } from "react";

const DESTINATION = "OCT 26 1985";

/** DeLorean time circuits: a live clock in the present row, a fixed 1985 destination row. */
export default function TimeCircuits() {
  const [now, setNow] = useState<string>("--:--:--");
  const [date, setDate] = useState<string>("--- -- ----");

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setNow(
        d.toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }),
      );
      setDate(
        d
          .toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })
          .toUpperCase(),
      );
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="bevel-sm panel relative overflow-hidden">
      <div className="grid grid-cols-2 divide-x divide-line">
        <Row label="Present time" date={date} time={now} />
        <Row label="Destination" date={DESTINATION} time="88 MPH" dim />
      </div>
    </div>
  );
}

function Row({
  label,
  date,
  time,
  dim,
}: {
  label: string;
  date: string;
  time: string;
  dim?: boolean;
}) {
  return (
    <div className={`px-3.5 py-2.5 ${dim ? "bg-panel-2/40" : ""}`}>
      <p className="label mb-1 text-[9px]">{label}</p>
      <p className={`seg text-[11px] leading-tight ${dim ? "opacity-80" : ""}`}>
        <span className="block">{date}</span>
        <span className="block text-[15px]">{time}</span>
      </p>
    </div>
  );
}
