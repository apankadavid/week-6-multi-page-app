import { useState } from "react";
import VisitCounter from "../components/VisitCounter";
import VisitMessage from "../components/VisitMessage";

function Home() {
  const [visitCount, setVisitCount] = useState(0);

  function handleVisit() {
    setVisitCount((previousCount) => previousCount + 1);
  }

  return (
    <section className="mx-auto max-w-4xl py-12">
      <h1 className="mb-4 text-3xl font-bold text-primary">
        Welcome to the Home Page
      </h1>

      <p className="mb-8 text-gray-600">
        This page demonstrates how shared state works between sibling components.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        <VisitCounter
          count={visitCount}
          onVisit={handleVisit}
        />

        <VisitMessage count={visitCount} />
      </div>
    </section>
  );
}

export default Home;
