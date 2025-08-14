// import Test from "../components/TestComponent";

// export default function TestPage() {
//   return <Test />;
// }

import RainBackground from "../components/TestComponent";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <RainBackground />
      <section className="relative z-10 text-white p-10">
        <h1 className="text-4xl font-bold">Rainy Day Portfolio</h1>
      </section>
    </main>
  );
}
