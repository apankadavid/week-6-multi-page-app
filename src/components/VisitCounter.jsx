
function VisitCounter({ count, onVisit }) {
  return (
    <div className="rounded-lg border border-gray-200 p-5">
      <h2 className="mb-2 text-lg font-bold">
        Home Page Visits
      </h2>

      <p className="mb-4 text-3xl font-bold text-primary">
        {count}
      </p>

      <button
        onClick={onVisit}
        className="rounded bg-primary px-4 py-2 text-white"
      >
        Record a Visit
      </button>
    </div>
  );
}

export default VisitCounter;
