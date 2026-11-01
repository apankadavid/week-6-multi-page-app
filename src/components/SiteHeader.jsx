
function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-6 pt-6 lg:pl-16 lg:pr-[151px] lg:pt-10">

      {/* Logo */}
      <a
        href="#"
        className="text-2xl font-bold leading-6 text-primary"
      >
        Kreativ
      </a>

      {/* Primary navigation */}
      <nav aria-label="Primary">
        <ul className="flex gap-6">
          <li>
            <a
              href="#"
              className="text-base font-bold leading-6 text-primary lg:text-white"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#"
              className="text-base font-bold leading-6 text-primary lg:text-white"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

    </header>
  );
}

export default SiteHeader;
