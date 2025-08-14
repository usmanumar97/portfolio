"use client";
import React, { useRef } from "react";
import CareerTimeline from "./Timeline";

export default function StickyTimelineSection() {
  // This is the element that will scroll while the screen is "frozen"
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative">
      {/* Give the section enough height so the user spends time here */}
      <div className="h-[220vh]">
        {/* Sticky viewport frame */}
        <div className="sticky top-0 h-screen">
          {/* The only thing that scrolls */}
          <div
            ref={scrollRef}
            className="h-full overflow-y-auto overscroll-contain pr-2"
          >
            {/* Pass the scrollRef so the timeline listens to THIS scroller */}
            <CareerTimeline scrollRef={scrollRef} />
          </div>
        </div>
      </div>
    </section>
  );
}
