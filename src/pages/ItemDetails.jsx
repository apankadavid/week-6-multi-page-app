import { useParams, Link } from "react-router-dom";

function ItemDetails() {
  const { itemId } = useParams();

  return (
    <section className="mx-auto max-w-3xl py-12">
      <h1 className="mb-4 text-3xl font-bold text-primary">
        Item Details
      </h1>

      <div className="rounded-lg border border-gray-200 p-6">
        <p className="mb-2 text-gray-600">
          You are viewing the details for:
        </p>

        <p className="mb-6 text-2xl font-bold">
          Item ID: {itemId}
        </p>

        <Link
          to="/items/101"
          className="inline-block rounded bg-primary px-4 py-2 text-white"
        >
          View Item 101
        </Link>
      </div>
    </section>
  );
}

export default ItemDetails;