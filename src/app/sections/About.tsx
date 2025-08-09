import Image from "next/image";
import Card from "../components/Card";

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
            width={400}
            height={300}
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
          <div
            className="absolute inset-x-0 -bottom-4 h-1/2 sm:h-1/3 pointer-events-none
             bg-gradient-to-t from-indigo-900/50 to-transparent"
          />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div className="flex items-center justify-center w-full h-full">
            <p className="flex items-end text-5xl text-gray-500">
              CODE IS CRAFT
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text={"GRASP"}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text={"SOLID"}
            />
            <Card
              style={{ rotate: "90deg", top: "30%", left: "70%" }}
              text={"Design Patterns"}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text={"Design Principles"}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text={"SRP"}
            />
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3"></div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4"></div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5"></div>
      </div>
    </section>
  );
}
