"use client";
import Marquee from "react-fast-marquee";
import Image from "next/image";

export const logos = [
  // Languages
  { alt: "JavaScript", src: "https://cdn.simpleicons.org/javascript" },
  { alt: "TypeScript", src: "https://cdn.simpleicons.org/typescript" },
  { alt: "Python", src: "https://cdn.simpleicons.org/python" },

  // Libraries / Frameworks / Tools
  { alt: "React", src: "https://cdn.simpleicons.org/react" },
  { alt: "Next.js", src: "https://cdn.simpleicons.org/nextdotjs" },
  { alt: "Expo", src: "https://cdn.simpleicons.org/expo" },
  { alt: "NestJS", src: "https://cdn.simpleicons.org/nestjs" },
  { alt: "Three.js", src: "https://cdn.simpleicons.org/threedotjs" },
  { alt: "Tailwind CSS", src: "https://cdn.simpleicons.org/tailwindcss" },

  // Platform
  //   { alt: "AWS", src: "https://cdn.simpleicons.org/amazonaws" },

  // Domains (represented by well-known brands)
  {
    alt: "Artificial Intelligence (OpenAI)",
    src: "https://cdn.simpleicons.org/openai",
  },
  {
    alt: "Machine Learning (TensorFlow)",
    src: "https://cdn.simpleicons.org/tensorflow",
  },
];

export default function LogosMarquee() {
  return (
    <Marquee pauseOnHover speed={40}>
      {logos.map((logo, i) => (
        <Image
          key={logo.alt}
          src={logo.src}
          alt={logo.alt}
          // Max pixel width/height (keeps things crisp but small)
          width={320}
          height={150}
          // Display size: keep height 40px (h-10) and auto width
          className="h-10 w-auto mx-10"
          // Since these are small icons, fixed size hints are fine
          sizes="360px"
          // Optional: give the first one priority if it’s above-the-fold
          priority={i === 0}
        />
      ))}
    </Marquee>
  );
}
