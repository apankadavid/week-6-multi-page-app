# Kreativ Sign-Up Form

A responsive sign-up form recreated from a Figma Community design using React, Vite, and Tailwind CSS.

## Live site

- Vercel: [https://week-5-figma-form-yz43.vercel.app/](https://week-5-figma-form-yz43.vercel.app/)
- GitHub Pages:[https://apankadavid.github.io/week-5-figma-form/]

## Features

- Responsive layout for mobile and desktop screens.
- Controlled form inputs using React state.
- Form validation for full name, email, phone number, and password.
- Clear validation error messages.
- Password visibility toggle.
- Password requirement hints.
- Custom location dropdown with a styled chevron.
- Submission states: idle, submitting, success, and error.
- Simulated sign-up submission for testing.

## Technologies Used

- React
- Vite
- Tailwind CSS
- JavaScript

## Design tokens

All repeated colors and sizes live in `tailwind.config.js`: `primary`, `accent`, `muted`, `danger`, `panelStart`, `panelEnd`, and the `form` max width (400px).

## Getting Started

To run the project locally:

1. Clone the repository.
2. Open the project folder in your terminal.
3. Install the dependencies:

   `npm install`

4. Start the development server:

   `npm run dev`

5. Open the local URL displayed in your terminal.

## Testing the Form

The form uses a simulated sign-up function rather than a real backend.

To test the error response for an already registered email, enter:

` taken@example.com `

For a successful test, use another valid email address and meet all the password requirements.

## Design notes

- The two near-identical greys in the design (`#CCCCCC` and `#C4C4C4`) became one `muted` token.
- The faint decorative background wave was left out.
- The Location label is black, not grey, to improve readability.
- `muted` text on white has low contrast, which comes from the original design. Error messages use a darker `danger` red instead.

## Acknowledgements

Design reference: [Sign-up form (Figma Community)](https://www.figma.com/design/qXigmQDNySMZkGdrYP8JAC/Sign-up-form--Community-?node-id=4-18&t=95HAsu2Pce8rOHGK-4) by Oluyomi Flourish

Original designer: [Oluyomi Flourish]

## Author

Apanka David