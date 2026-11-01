export function validate(values) {
  const errors = {};

  // Full name: required, at least 2 characters
  const fullName = values.fullName.trim();

  if (!fullName) {
    errors.fullName = "Enter your full name";
  } else if (fullName.length < 2) {
    errors.fullName = "Your name must contain at least 2 characters";
  }

  // Email: required and valid format
  const email = values.email.trim();

  if (!email) {
    errors.email = "Enter your email address";
  } else if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    errors.email = "Enter a valid email address";
  }

  // Phone: required, at least 10 digits
  const phoneDigits = values.phone.replace(/\D/g, "");

  if (!phoneDigits) {
    errors.phone = "Enter your phone number";
  } else if (phoneDigits.length < 10) {
    errors.phone = "Phone number must contain at least 10 digits";
  }

  // Password: at least 8 characters and one symbol
  if (values.password.length < 8) {
    errors.password = "Password must contain at least 8 characters";
  } else if (!/[^A-Za-z0-9]/.test(values.password)) {
    errors.password = "Password must contain at least one symbol, e.g. @ or !";
  }

  // Location is optional, so it needs no validation rule.

  return errors;
}
