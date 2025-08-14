"use client";

import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Collapse from "@mui/material/Collapse";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import TerminalIcon from "@mui/icons-material/Terminal";

type TLItem = {
  year: string | number;
  title: string;
  company?: string;
  summary?: string;
  details?: string[];
  tags?: string[];
  icon?: React.ReactNode;
};

type Props = {
  items?: TLItem[];
  scrollRef?: React.RefObject<HTMLDivElement | null>;
};

const DEFAULT_ITEMS: TLItem[] = [
  {
    year: "2015-2019",
    title: "Graduated with B.Sc. in Information Technology",
    company: "Middlesex University, Dubai",
    summary:
      "Built a strong foundation in software engineering and information systems.",
    tags: ["Information Technology", "Software Engineering"],
    icon: <SchoolIcon />,
    details: [
      "Specialized in software development and systems architecture",
      "Completed final-year project applying modern web technologies",
    ],
  },
  {
    year: "2019-2020",
    title: "Software Engineer Intern",
    company: "Emirates NBD",
    summary:
      "Backend engineering for microservices in a large-scale banking system.",
    tags: ["Node.js", "Microservices", "Banking"],
    icon: <WorkIcon />,
    details: [
      "Developed backend services using Node.js for internal banking systems",
      "Built and optimized microservices to improve system scalability",
      "Collaborated with senior engineers to integrate APIs and services",
    ],
  },
  {
    year: "2021–2023",
    title: "Software Engineer",
    company: "First Abu Dhabi Bank (FAB)",
    summary:
      "Developed and maintained microservices and cloud-based data solutions.",
    tags: ["Node.js", "Microservices", "AWS S3", "Cloud Computing"],
    icon: <WorkIcon />,
    details: [
      "Designed and maintained scalable microservices for financial platforms",
      "Implemented secure data storage and retrieval solutions using AWS S3",
      "Collaborated across teams to improve deployment pipelines and performance",
    ],
  },
  {
    year: "2023-2024",
    title: "Graduated with M.Sc. in Data Science",
    company: "Middlesex University, London",
    summary: "Specialized in applied machine learning and data engineering.",
    tags: ["Data Science", "Machine Learning"],
    icon: <SchoolIcon />,
    details: [
      "Focused on predictive modeling, NLP, and big data analytics",
      "Thesis on scalable ML pipelines for business applications",
    ],
  },
  {
    year: "Mar 2024 – Aug 2024",
    title: "Data Science Consultant",
    company: "Eighteen",
    summary:
      "Delivered data-driven solutions to improve lead generation and marketing.",
    tags: ["Machine Learning", "Lead Generation", "Marketing Analytics"],
    icon: <WorkIcon />,
    details: [
      "Collected and processed data from multiple real estate platforms such as Zameen",
      "Developed predictive models to improve sales lead targeting",
      "Created marketing analytics dashboards to optimize campaigns",
    ],
  },
  {
    year: "Sep 2024 – Present",
    title: "AI & Analytics Engineer",
    company: "WeTrackAds",
    summary:
      "Building AI solutions to enhance marketing performance and automation.",
    tags: ["AI Engineering", "Analytics", "Automation", "Lead Generation"],
    icon: <TerminalIcon />,
    details: [
      "Developed AI models to improve lead generation and campaign optimization",
      "Designed and integrated intelligent agents for marketing automation",
      "Architected scalable data and AI pipelines to support business growth",
    ],
  },
];

export default function CareerTimeline({
  items = DEFAULT_ITEMS,
  scrollRef,
}: Props) {
  const [expanded, setExpanded] = React.useState<number | null>(0);
  const [activeIndex, setActiveIndex] = React.useState<number>(0);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  React.useEffect(() => {
    if (!isMobile) setExpanded(activeIndex);
  }, [activeIndex, isMobile]);

  React.useEffect(() => {
    if (isMobile) setExpanded(null);
  }, [isMobile]);

  // ---- properly typed refs ------------------------------------
  const itemRefs = React.useRef<Array<HTMLDivElement | null>>([]);
  const setItemRef = React.useCallback(
    (index: number) => (el: HTMLDivElement | null) => {
      itemRefs.current[index] = el;
    },
    []
  );
  // --------------------------------------------------------------

  const toggle = (i: number) => setExpanded((prev) => (prev === i ? null : i));

  // Highlight nearest-to-center using the provided scroller (if any)
  React.useEffect(() => {
    let ticking = false;

    const scroller = scrollRef?.current ?? null;
    const useWindow = !scroller;

    const getCenterY = () =>
      useWindow ? window.innerHeight / 2 : scroller!.clientHeight / 2;

    const calcActive = () => {
      const center = getCenterY();
      let best = 0;
      let bestDist = Number.POSITIVE_INFINITY;

      itemRefs.current.forEach((el, idx) => {
        if (!el) return;
        const r = el.getBoundingClientRect(); // relative to viewport
        const mid = r.top + r.height / 2;
        const dist = Math.abs(mid - center);
        if (dist < bestDist) {
          bestDist = dist;
          best = idx;
        }
      });

      setActiveIndex(best);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(calcActive);
        ticking = true;
      }
    };

    calcActive(); // initial

    if (useWindow) {
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll, { passive: true });
      return () => {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
      };
    } else {
      scroller.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll, { passive: true });
      return () => {
        scroller.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
      };
    }
  }, [scrollRef]);

  return (
    <Timeline
      position="alternate"
      sx={{
        maxWidth: 980,
        mx: "auto",
        "& .MuiTimelineItem-root:before": { flex: 0, padding: 0 },
      }}
    >
      {items.map((e, i) => {
        const isOpen = expanded === i;
        const isActive = activeIndex === i;

        return (
          <TimelineItem key={`${e.year}-${i}`}>
            <TimelineOppositeContent
              sx={{ m: "auto 0", px: 2, color: "rgba(255,255,255,.35)" }}
              variant="body2"
            >
              {e.year}
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineConnector
                sx={{
                  width: 2,
                  bgcolor: "transparent",
                  backgroundImage:
                    "repeating-linear-gradient(to bottom, rgba(255,255,255,.18) 0 6px, transparent 6px 12px)",
                }}
              />
              <TimelineDot
                onClick={() => toggle(i)}
                tabIndex={0}
                role="button"
                aria-expanded={isOpen}
                aria-label={`${e.title} — toggle details`}
                sx={{
                  cursor: "pointer",
                  bgcolor: isActive ? "#7a57db" : "#4B85F6",
                  color: "#0B0F1A",
                  boxShadow: isActive
                    ? "0 0 0 8px rgba(122,87,219,.28)"
                    : isOpen
                    ? "0 0 0 6px rgba(75,133,246,.25)"
                    : "0 0 0 3px rgba(75,133,246,.18)",
                  transform: isActive ? "scale(1.08)" : "scale(1)",
                  transition:
                    "box-shadow .22s ease, transform .22s ease, background-color .22s ease",
                }}
              >
                {e.icon ?? <WorkIcon />}
              </TimelineDot>
              <TimelineConnector
                sx={{
                  width: 2,
                  bgcolor: "transparent",
                  backgroundImage:
                    "repeating-linear-gradient(to bottom, rgba(255,255,255,.18) 0 6px, transparent 6px 12px)",
                }}
              />
            </TimelineSeparator>

            <TimelineContent sx={{ py: 1, px: 0, textAlign: "left" }}>
              <Box
                component="div"
                ref={setItemRef(i)}
                onClick={() => toggle(i)}
                role={isMobile ? undefined : "button"}
                aria-expanded={isOpen}
                sx={{
                  cursor: isMobile ? "default" : "pointer",
                  borderRadius: 2,
                  p: { xs: 1.5, md: 2 },
                  pr: { xs: 2, md: 3 },
                  color: "#fff",
                  bgcolor: "rgba(44,48,78,.35)",
                  border: "1px solid rgba(255,255,255,.06)",
                  boxShadow: isOpen
                    ? "0 8px 30px rgba(0,0,0,.35)"
                    : "0 4px 16px rgba(0,0,0,.25)",
                  transition:
                    "transform .2s ease, box-shadow .2s ease, background .2s",
                  textAlign: "left",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  "&:hover": { transform: "translateY(-2px)" },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 800, lineHeight: 1.15, mb: 0.5 }}
                >
                  {e.title}
                </Typography>
                {e.company && (
                  <Typography
                    variant="body2"
                    sx={{
                      color: "rgba(255,255,255,.65)",
                      mb: { xs: 0, md: 1 },
                    }}
                  >
                    {e.company}
                  </Typography>
                )}

                {e.summary && (
                  <Typography
                    variant="body2"
                    sx={{ color: "rgba(255,255,255,.8)" }}
                  >
                    {e.summary}
                  </Typography>
                )}

                {!!e?.tags?.length && (
                  <Box
                    sx={{ mt: 1.25, display: "flex", gap: 1, flexWrap: "wrap" }}
                  >
                    {e.tags.map((t) => (
                      <Chip
                        key={t}
                        label={t}
                        size="small"
                        sx={{
                          color: "#CFE0FF",
                          bgcolor: "rgba(91,118,209,.18)",
                          border: "1px solid rgba(91,118,209,.35)",
                        }}
                      />
                    ))}
                  </Box>
                )}

                <Collapse in={isOpen} timeout={220} unmountOnExit>
                  {!!e?.details?.length && (
                    <Box sx={{ mt: 1.5, width: "100%" }}>
                      {e.details.map((d, idx) => (
                        <Typography
                          key={idx}
                          variant="body2"
                          sx={{
                            display: "flex",
                            gap: 1,
                            alignItems: "flex-start",
                            color: "rgba(255,255,255,.88)",
                            "&::before": {
                              content: '""',
                              mt: "9px",
                              width: 6,
                              height: 6,
                              borderRadius: "50%",
                              background:
                                "radial-gradient(circle at 30% 30%, #7a57db, #5c33cc)",
                              flex: "0 0 6px",
                            },
                          }}
                        >
                          {d}
                        </Typography>
                      ))}
                    </Box>
                  )}
                </Collapse>
              </Box>
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
}
