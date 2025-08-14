import { SectionHeading } from "../components/SectionHeading";
import CareerTimeline from "../components/Timeline";

export default function CareerProgression() {
  return (
    <div className="md:col-span-6 mt-40">
      <SectionHeading
        title="My Journey"
        subtitle="A look at the roles and experiences that have shaped my skills."
      />
      <div className="mt-6">
        <CareerTimeline />
      </div>
    </div>
  );
}
