"use client";

import { OrbitControls } from "@react-three/drei";
import { Astronaut } from "../components/Astronaut";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { Canvas } from "@react-three/fiber";

export default function Hero() {
  return (
    <section className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space">
      <HeroText />
      <ParallaxBackground />
      <figure
        className="absolute inset-0 "
        style={{ width: "100vh", height: "100vh" }}
      >
        <Canvas>
          <Astronaut scale={0.23} position={[0, -1.5, 0]} />
          <OrbitControls />
        </Canvas>
      </figure>
    </section>
  );
}
