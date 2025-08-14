"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import CopyEmailButton from "../components/CopyEmailButton";
import LogosMarquee from "../components/LogosMarquee";
import CareerTimeline from "../components/Timeline";
import { SectionHeading } from "../components/SectionHeading";
import DailyQuoteCard from "../components/DailyQuoteCard";
const World = dynamic(
  () => import("../components/World").then((m) => m.World),
  {
    ssr: false,
  }
);

export default function About() {
  return (
    <section className="c-space section-spacing">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <Image
            src="/assets/coding-pov.png"
            alt="Coding point of view illustration"
            width={1800}
            height={1200}
            unoptimized
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
            priority
          />
          <div className="z-10">
            <p className="headtext">Hi, I am Osman Janjua</p>
            <p className="subtext">
              Over the last 4 years, I developed my frontend and backend dev
              skills to deliver dynamic and responsive software and web
              applications.
            </p>
          </div>
          <div className="absolute inset-x-0 -bottom-4 h-1/2 sm:h-1/3 pointer-events-none bg-gradient-to-t from-indigo-900/50 to-transparent" />
        </div>

        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <DailyQuoteCard />
        </div>

        {/* Grid 3 */}
        <div className="bg-black/90 grid-3 relative overflow-hidden rounded-2xl">
          {/* Globe behind content */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-visible scale-125">
            <World
              globeConfig={{
                globeColor: "#000000", // black earth
                polygonColor: "rgba(255,255,255,1)", // white borders
                atmosphereColor: "#e0e0e0", // white glow
                atmosphereAltitude: 0.4,
                ambientLight: "#cccccc",
                directionalLeftLight: "#ffffff",
                directionalTopLight: "#ffffff", // now also white
                pointLight: "#ffffff",
                pointSize: 1,
                arcTime: 2000,
                arcLength: 0.9,
                rings: 1,
                maxRings: 3,
                emissive: "#000000",
                emissiveIntensity: 0.0,
                shininess: 1.2,
              }}
              data={[
                {
                  order: 0,
                  startLat: 51.5074,
                  startLng: -0.1278,
                  endLat: 51.5074,
                  endLng: -0.1278,
                  arcAlt: 0.1,
                  color: "#ffffff",
                },
              ]}
            />
          </div>

          <div className="relative z-10 w-[50%] pl-6 md:pl-8 pt-3">
            <p className="headtext text-white">Time Zone</p>
            <p className="subtext text-gray-300">
              I&apos;m based in London, and open to remote work worldwide.
            </p>
          </div>
        </div>

        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="flex h-full w-full items-center justify-center">
            <LogosMarquee />
          </div>
        </div>

        {/* Career Progression  */}
        {/* <div className="md:col-span-6 mt-40">
          <SectionHeading
            title="My Journey"
            subtitle="A look at the roles and experiences that have shaped my skills."
          />
          <div className="mt-6">
            <CareerTimeline />
          </div>
        </div> */}
      </div>
    </section>
  );
}
