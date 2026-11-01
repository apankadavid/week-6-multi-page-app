
import { Routes, Route, NavLink } from "react-router-dom";

import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/Home"));
const SignUp = lazy(() => import("./pages/SignUp"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const ItemDetails = lazy(() => import("./pages/ItemDetails"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  const navLinkClass = ({ isActive }) =>
    `rounded px-4 py-2 text-sm font-medium transition-colors
    ${
      isActive
        ? "bg-primary text-white"
        : "text-primary hover:bg-gray-100"
    }`;

  return (
    <div className="min-h-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>
      <header className="border-b border-gray-200 px-6 py-4">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-6xl items-center justify-between"
        >
          <span className="text-xl font-bold text-primary">
            Kreativ
          </span>

          <div className="flex flex-wrap gap-2">
            <NavLink to="/" end className={navLinkClass}>
              Home
            </NavLink>

            <NavLink to="/form" className={navLinkClass}>
              Sign Up
            </NavLink>

            <NavLink to="/thank-you" className={navLinkClass}>
              Thank You
            </NavLink>

            <NavLink to="/items/101" className={navLinkClass}>
              Sample Item
            </NavLink>
          </div>
        </nav>
      </header>

      <main
        id="main-content"
        tabIndex="-1"
        className="mx-auto max-w-6xl px-6 py-10"
      >
        <Suspense
          fallback={
            <p className="py-10 text-center text-primary" role="status">
              Loading page...
            </p>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<SignUp />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/items/:itemId" element={<ItemDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
