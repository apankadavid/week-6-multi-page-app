
function VisitMessage({ count }) {
  return (
    <div className="rounded-lg border border-gray-200 p-5">
      <h2 className="mb-2 text-lg font-bold">
        Visit Message
      </h2>

      <p className="text-gray-600">
        {count === 0
          ? "Welcome! You haven't recorded a visit yet."
          : `You have recorded ${count} visit${count === 1 ? "" : "s"}.`}
      </p>
    </div>
  );
}

export default VisitMessage;
