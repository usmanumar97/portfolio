// "use client";

// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
// import "react-vertical-timeline-component/style.min.css";

// export default function Test() {
//   return (
//     <VerticalTimeline>
//       <VerticalTimelineElement
//         className="vertical-timeline-element--work"
//         contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
//         contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
//         date="2011 - present"
//         iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
//         // icon={<WorkIcon />}
//       >
//         <h3 className="vertical-timeline-element-title">Creative Director</h3>
//         <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
//         <p>
//           Creative Direction, User Experience, Visual Design, Project
//           Management, Team Leading
//         </p>
//       </VerticalTimelineElement>
//       <VerticalTimelineElement
//         className="vertical-timeline-element--work"
//         date="2010 - 2011"
//         iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
//         // icon={<WorkIcon />}
//       >
//         <h3 className="vertical-timeline-element-title">Art Director</h3>
//         <h4 className="vertical-timeline-element-subtitle">
//           San Francisco, CA
//         </h4>
//         <p>
//           Creative Direction, User Experience, Visual Design, SEO, Online
//           Marketing
//         </p>
//       </VerticalTimelineElement>
//       <VerticalTimelineElement
//         className="vertical-timeline-element--work"
//         date="2008 - 2010"
//         iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
//         // icon={<WorkIcon />}
//       >
//         <h3 className="vertical-timeline-element-title">Web Designer</h3>
//         <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
//         <p>User Experience, Visual Design</p>
//       </VerticalTimelineElement>
//       <VerticalTimelineElement
//         className="vertical-timeline-element--work"
//         date="2006 - 2008"
//         iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
//         // icon={<WorkIcon />}
//       >
//         <h3 className="vertical-timeline-element-title">Web Designer</h3>
//         <h4 className="vertical-timeline-element-subtitle">
//           San Francisco, CA
//         </h4>
//         <p>User Experience, Visual Design</p>
//       </VerticalTimelineElement>
//       <VerticalTimelineElement
//         className="vertical-timeline-element--education"
//         date="April 2013"
//         iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
//         // icon={<SchoolIcon />}
//       >
//         <h3 className="vertical-timeline-element-title">
//           Content Marketing for Web, Mobile and Social Media
//         </h3>
//         <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
//         <p>Strategy, Social Media</p>
//       </VerticalTimelineElement>
//       <VerticalTimelineElement
//         className="vertical-timeline-element--education"
//         date="November 2012"
//         iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
//         // icon={<SchoolIcon />}
//       >
//         <h3 className="vertical-timeline-element-title">
//           Agile Development Scrum Master
//         </h3>
//         <h4 className="vertical-timeline-element-subtitle">Certification</h4>
//         <p>Creative Direction, User Experience, Visual Design</p>
//       </VerticalTimelineElement>
//       <VerticalTimelineElement
//         className="vertical-timeline-element--education"
//         date="2002 - 2006"
//         iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
//         // icon={<SchoolIcon />}
//       >
//         <h3 className="vertical-timeline-element-title">
//           Bachelor of Science in Interactive Digital Media Visual Imaging
//         </h3>
//         <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
//         <p>Creative Direction, Visual Design</p>
//       </VerticalTimelineElement>
//       <VerticalTimelineElement
//         iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
//         // icon={<StarIcon />}
//       />
//     </VerticalTimeline>
//   );
// }

"use client";
import { useEffect, useRef } from "react";

export default function RainBackground() {
  const frontRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);

  const makeItRain = () => {
    if (!frontRef.current || !backRef.current) return;
    frontRef.current.innerHTML = "";
    backRef.current.innerHTML = "";

    let increment = 0;
    let drops = "";
    let backDrops = "";

    while (increment < 100) {
      const randoHundo = Math.floor(Math.random() * 98) + 1; // 1–98
      const randoFiver = Math.floor(Math.random() * 4) + 2; // 2–5

      increment += randoFiver;

      // Front drops
      drops += `
        <div class="absolute bottom-full w-[15px] h-[120px] pointer-events-none animate-drop"
             style="left:${increment}%;
             bottom:${randoFiver + randoFiver - 1 + 100}%;
             animation-delay:0.${randoHundo}s;
             animation-duration:0.5${randoHundo}s;">
          <div class="w-px h-[60%] ml-[7px] bg-gradient-to-b from-transparent to-white/25 animate-stem"
               style="animation-delay:0.${randoHundo}s; animation-duration:0.5${randoHundo}s;"></div>
          <div class="w-[15px] h-[10px] border-t-2 border-dotted border-white/50 rounded-full opacity-0 scale-0 animate-splat hidden"
               style="animation-delay:0.${randoHundo}s; animation-duration:0.5${randoHundo}s;"></div>
        </div>
      `;

      // Back drops
      backDrops += `
        <div class="absolute bottom-full w-[15px] h-[120px] pointer-events-none animate-drop"
             style="right:${increment}%;
             bottom:${randoFiver + randoFiver - 1 + 100}%;
             animation-delay:0.${randoHundo}s;
             animation-duration:0.5${randoHundo}s;">
          <div class="w-px h-[60%] ml-[7px] bg-gradient-to-b from-transparent to-white/25 animate-stem"
               style="animation-delay:0.${randoHundo}s; animation-duration:0.5${randoHundo}s;"></div>
          <div class="w-[15px] h-[10px] border-t-2 border-dotted border-white/50 rounded-full opacity-0 scale-0 animate-splat hidden"
               style="animation-delay:0.${randoHundo}s; animation-duration:0.5${randoHundo}s;"></div>
        </div>
      `;
    }

    frontRef.current.innerHTML = drops;
    backRef.current.innerHTML = backDrops;
  };

  useEffect(() => {
    makeItRain();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden bg-gradient-to-b from-[#202020] to-[#111119] -z-10">
      <div ref={frontRef} className="absolute inset-0"></div>
      <div ref={backRef} className="absolute inset-0 opacity-50"></div>
    </div>
  );
}
