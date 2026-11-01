function SelectField({ id, label, value, onChange, options, optional = false }) {
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={id}
        className="flex items-center gap-1 text-base text-black"
      >
        {label}
        {optional && (
          <span className="text-xs text-muted">(Optional)</span>
        )}
      </label>

      <div className="relative">
        <select
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          className="h-10 w-full appearance-none rounded border border-muted bg-white px-4 pr-10 text-xs focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        >
          <option value="" disabled>
            Select Location
          </option>

          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        {/* Custom dropdown arrow */}
        <svg
          aria-hidden="true"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#999999]"
        >
          <path d="M4 6l4 4 4-4" />
        </svg>
      </div>
    </div>
  );
}

export default SelectField;
