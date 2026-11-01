import { useState } from "react";
import FormField from "./components/FormField";
import SelectField from "./components/SelectField";
import { validate } from "./validation";
import { fakeSignUp } from "./api";
import SiteHeader from "./components/SiteHeader";

const locations = [
  "Accra",
  "Kumasi",
  "Tamale",
  "Takoradi",
  "Cape Coast",
];

function App() {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    location: "",
  });

  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const errors = validate(values);
  const isValid = Object.keys(errors).length === 0;

  function handleChange(event) {
    const { name, value } = event.target;

    setValues((previousValues) => ({
      ...previousValues,
      [name]: value,
    }));
  }

  function handleBlur(event) {
    const { name } = event.target;

    setTouched((previous) => ({
      ...previous,
      [name]: true,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setTouched({
      fullName: true,
      email: true,
      phone: true,
      password: true,
    });

    if (!isValid) return;
    if (status === "submitting") return;

    setErrorMessage("");
    setStatus("submitting");

    try {
      await fakeSignUp(values);
      setStatus("success");
    } catch (error) {
      setErrorMessage(error.message);
      setStatus("error");
    }
  }

  return (
    <div className="relative min-h-screen lg:grid lg:grid-cols-[787fr_653fr]">
      <SiteHeader />

      {/* Left: Form section */}
      <main className="px-6 pb-6 pt-24 lg:pt-[200px]">
        <div className="mx-auto w-full max-w-form">

          {/* Page heading */}
          <h1 className="mb-20 text-2xl font-bold leading-9 text-black">
            Let’s get you started
          </h1>

          {/* Success message or signup form */}
          {status === "success" ? (
            <p
              role="status"
              className="text-base font-bold text-primary"
            >
              Account created. Welcome, {values.fullName}!
            </p>
          ) : (
            <form
              noValidate
              onSubmit={handleSubmit}
              className="flex w-full flex-col gap-6"
            >
              <FormField
                id="fullName"
                label="Full name"
                placeholder="Ade Tiger"
                value={values.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched.fullName
                    ? errors.fullName
                    : undefined
                }
              />

              <FormField
                id="email"
                label="Email address"
                type="email"
                placeholder="yourname@email.com"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched.email
                    ? errors.email
                    : undefined
                }
              />

              <FormField
                id="phone"
                label="Phone number"
                type="tel"
                placeholder="Enter your phone number"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched.phone
                    ? errors.phone
                    : undefined
                }
              />

              <FormField
                id="password"
                label="Create password"
                type="password"
                placeholder="Create a password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                hint={[
                  "Password must contain a minimum of 8 characters",
                  "Password must contain at least one symbol e.g. @, !",
                ]}
                error={
                  touched.password
                    ? errors.password
                    : undefined
                }
              />

              <SelectField
                id="location"
                label="Location"
                value={values.location}
                onChange={handleChange}
                options={locations}
                optional
              />

              {/* Submission error */}
              {status === "error" && (
                <p
                  role="alert"
                  className="text-xs text-danger"
                >
                  {errorMessage}
                </p>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-2 h-10 w-full rounded border border-primary bg-primary text-base font-bold text-white disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "submitting"
                  ? "Signing up..."
                  : "Sign Up"}
              </button>
            </form>
          )}

          {/* Login link */}
          <div className="mt-8 flex items-center justify-center gap-2 text-base">
            <span className="text-muted">
              Already a user?
            </span>

            <a href="#" className="text-accent">
              Login
            </a>
          </div>

        </div>
      </main>

      {/* Right: Desktop quote panel */}
      <aside className="hidden flex-col justify-center bg-gradient-to-br from-panelStart to-panelEnd p-12 lg:flex">
        <blockquote className="text-5xl font-bold leading-[72px] text-[#E4E4E4] xl:text-[64px] xl:leading-[96px]">
          “Creativity is intelligence having fun."
        </blockquote>

        <p className="mt-4 text-base text-white">
          - Albert Einstein
        </p>

      </aside>

    </div>
  );
}

export default App;

