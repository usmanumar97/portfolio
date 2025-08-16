import { SectionHeading } from "../components/SectionHeading";
import CareerTimeline from "../components/Timeline";

export default function CareerProgression() {
  return (
    <section className="relative c-space section-spacing">
      <div className="w-full max-w-5xl md:col-span-6 mt-40 mx-auto">
        <SectionHeading
          title="My Journey"
          subtitle="A look at the roles and experiences that have shaped my skills."
        />
        <div className="mt-6">
          <CareerTimeline />
        </div>
      </div>
    </section>
  );
}
