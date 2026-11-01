
import { Link } from "react-router-dom";

function ThankYou() {
  return (
    <section className="mx-auto max-w-xl py-20 text-center">
      <h1 className="mb-4 text-3xl font-bold text-primary">
        Thank You for Signing Up!
      </h1>

      <p className="mb-8 text-gray-600">
        Your registration was successful. We're glad to have you here.
      </p>

      <Link
        to="/"
        className="inline-block rounded bg-primary px-6 py-3 font-semibold text-white"
      >
        Return Home
      </Link>
    </section>
  );
}

export default ThankYou;
