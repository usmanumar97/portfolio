"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";

export default function ParallaxBackground() {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { damping: 50 });

  const mountain3Y = useTransform(x, [0, 0.5], ["0%", "70%"]);
  const planetsX = useTransform(x, [0, 0.5], ["0%", "-20%"]);
  const mountain2Y = useTransform(x, [0, 0.5], ["0%", "30%"]);
  const mountain1Y = useTransform(x, [0, 0.5], ["0%", "0%"]);

  return (
    /* w-screen ensures it spans the full viewport regardless of any parent container */
    <section className="absolute inset-0 w-screen">
      <div className="relative w-screen h-screen overflow-hidden">
        {/* Sky */}
        <motion.div
          className="absolute inset-0 w-full h-full -z-50"
          style={{
            backgroundImage: "url(/assets/sky.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
        />
        {/* Mountain 3 */}
        <motion.div
          className="absolute inset-0 w-full h-full -z-40"
          style={{
            backgroundImage: "url(/assets/mountain-3.png)",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            y: mountain3Y,
          }}
        />
        {/* Planets */}
        <motion.div
          className="absolute inset-0 w-full h-full -z-30"
          style={{
            backgroundImage: "url(/assets/planets.png)",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            x: planetsX,
          }}
        />
        {/* Mountain 2 */}
        <motion.div
          className="absolute inset-0 w-full h-full -z-20"
          style={{
            backgroundImage: "url(/assets/mountain-2.png)",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            y: mountain2Y,
          }}
        />
        {/* Mountain 1 */}
        <motion.div
          className="absolute inset-0 w-full h-full -z-10"
          style={{
            backgroundImage: "url(/assets/mountain-1.png)",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            y: mountain1Y,
          }}
        />
      </div>
    </section>
  );
}
