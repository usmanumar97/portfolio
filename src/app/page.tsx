import Hero from "./sections/Hero";
import About from "./sections/About";
import CareerProgression from "./sections/CareerProgression";

export default function Home() {
  return (
    <>
      {/* full-bleed hero (edge-to-edge, no purple bar) */}
      <Hero />

      {/* page-wide container for everything else */}
      <div className="container mx-auto max-w-7xl px-8">
        {/* About */}
        <About />
        <CareerProgression />
        <section className="min-h-screen" />
        <section className="min-h-screen" />
        <section className="min-h-screen" />
        <section className="min-h-screen" />
        <section className="min-h-screen" />
        <section className="min-h-screen" />

        {/* projects / experience / testimonial / contact / footer */}
      </div>
    </>
  );
}
