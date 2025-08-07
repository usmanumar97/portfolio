"use client";

import { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { easing } from "maath";
import { useMediaQuery } from "react-responsive";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { Astronaut } from "../components/Astronaut";

export default function Hero() {
  // Match teacher: scale down on desktop, smaller again on tablets/phones
  const isTablet = useMediaQuery({ maxWidth: 1024 });
  const isMobile = useMediaQuery({ maxWidth: 640 });

  const modelScale = isMobile ? 0.23 : isTablet ? 0.32 : 0.38;
  const modelY = isMobile ? -1.5 : isTablet ? -1.3 : -1.1;
  const cameraPosZ = isMobile ? 4 : isTablet ? 4.2 : 4.5;

  return (
    <section
      id="hero"
      className="relative w-screen max-w-none min-h-screen overflow-hidden flex items-start justify-center md:items-start md:justify-start"
    >
      {/* Heading */}
      <HeroText />

      {/* Parallax layers */}
      <ParallaxBackground />

      {/* Full‑bleed canvas */}
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas camera={{ position: [0, 1, cameraPosZ] }} shadows>
          <Suspense fallback={null}>
            {/* Bob & rotate gently */}
            <Float rotationIntensity={1} floatIntensity={1.2}>
              <Astronaut scale={modelScale} position={[0, modelY, 0]} />
            </Float>
            <Rig />
          </Suspense>
        </Canvas>
      </figure>
    </section>
  );
}

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 4.5],
      0.5,
      delta
    );
  });
}
