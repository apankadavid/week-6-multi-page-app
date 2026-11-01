import { useState } from "react";

function FormField({
  id,
  label,
  type,
  placeholder,
  value,
  onChange,
  onBlur,
  hint,
  error,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  const inputType =
    isPassword && showPassword ? "text" : type;

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-base text-black">
        {label}
      </label>

      <div className="relative">
        <input
          id={id}
          name={id}
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          aria-invalid={Boolean(error)}
          aria-describedby={
            error ? `${id}-error` : undefined
          }
          className={`h-10 w-full rounded border bg-white px-4 ${
            isPassword ? "pr-11" : ""
          } text-sm focus:outline-none focus:ring-1 ${
            error
              ? "border-danger focus:border-danger focus:ring-danger"
              : "border-muted focus:border-primary focus:ring-primary"
          }`}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((previous) => !previous)}
            aria-label={
              showPassword ? "Hide password" : "Show password"
            }
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#999999]"
          >
            {showPassword ? (
              // Eye-open icon
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                className="h-5 w-5"
              >
                <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            ) : (
              // Eye-close icon
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                className="h-5 w-5"
              >
                <path d="m3 3 18 18" />
                <path d="M10.6 10.6a2 2 0 0 0 2.8 2.8" />
                <path d="M9.9 5.2A10.8 10.8 0 0 1 12 5c6.5 0 10 7 10 7a14.8 14.8 0 0 1-3.2 3.9M6.2 6.2C3.5 8.1 2 12 2 12s3.5 7 10 7a10.8 10.8 0 0 0 4.1-.8" />
              </svg>
            )}
          </button>
        )}
      </div>

      {error && (
        <p id={`${id}-error`} className="text-xs text-danger">
          {error}
        </p>
      )}

      {hint && !error && (
        <div className="mt-2 flex flex-col gap-1">
          {hint.map((message, index) => (
            <p key={index} className="text-xs text-[#767676]">
              {message}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default FormField;