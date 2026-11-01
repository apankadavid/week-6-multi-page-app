# Kreativ – Multi-Page Sign-Up Application

A responsive multi-page React application extending a Figma-inspired sign-up form with client-side routing, shared state management, form validation, accessibility improvements, and performance optimisation.

## Live Demo

- **Vercel:** [https://week-6-multi-page-app.vercel.app/](https://week-6-multi-page-app.vercel.app/)
- **GitHub:** [https://github.com/apankadavid/week-6-multi-page-app](https://github.com/apankadavid/week-6-multi-page-app)

## Features

- Responsive design for mobile and desktop screens.
- Multi-page navigation using React Router.
- Active navigation highlighting with `NavLink`.
- Home, Sign Up, Thank You, Item Details, and 404 pages.
- Dynamic item routes using URL parameters and `useParams`.
- Shared state between sibling components using lifted state.
- Form state management using React's `useReducer`.
- Controlled form inputs and validation.
- Clear validation error messages.
- Password visibility toggle and password requirement hints.
- Custom location dropdown.
- Form submission states: idle, submitting, success, and error.
- Simulated sign-up API for testing.
- Keyboard navigation and visible focus indicators.
- Skip-to-main-content link.
- Lazy-loaded page components using `React.lazy()` and `Suspense`.

## Technologies Used

- React
- Vite
- JavaScript
- Tailwind CSS
- React Router DOM
- ESLint

## Design Tokens

The project uses reusable design tokens configured in `tailwind.config.js`, including:

- Primary: `#27485D`
- Accent: `#476D73`
- Muted: `#767676`
- Danger: `#B42318`
- Panel gradient colours
- Form maximum width: 400px

## Application Routes

| Route | Description |
|---|---|
| `/` | Home page with shared visit counter |
| `/form` | Sign-up form |
| `/thank-you` | Successful registration page |
| `/items/:itemId` | Dynamic item details page |
| `*` | Custom 404 page |

## State Management

The application demonstrates two approaches to React state management:

**Lifted State**

The Home page manages the visit counter state and shares it with two sibling components:

- `VisitCounter`
- `VisitMessage`

Both components receive the same state through props.

**Reducer-Based Form State**

The sign-up form uses `useReducer` to manage form values, touched fields, submission status, and error messages through named actions.

## Getting Started

To run the project locally:

1. Clone the repository.
2. Open the project folder in your terminal.
3. Install dependencies:

   `npm install`

4. Start the development server:

   `npm run dev`

5. Open the local URL displayed in your terminal.

To create and preview a production build:

`npm run build`

`npm run preview`

## Testing the Form

The application uses a simulated sign-up function rather than a real backend.

To test the error response for an already registered email, enter:

` taken@example.com `

For a successful submission, use another valid email address and meet all password requirements.

## Accessibility Audit

Accessibility testing was performed using axe DevTools on the Home and Sign Up pages.

| Page | Initial Issues | After Fixes |
|---|---:|---:|
| Home | 0 | 0 |
| Sign Up | 4 | 0 |

### Accessibility Improvements

| Issue | WCAG Criterion | Fix |
|---|---|---|
| Password instruction text contrast | WCAG 2.1 – 1.4.3 | Changed `#777777` to `#767676` |
| Optional location label contrast | WCAG 2.1 – 1.4.3 | Changed muted colour from `#CCCCCC` to `#767676` |
| Sign-in prompt contrast | WCAG 2.1 – 1.4.3 | Changed muted colour from `#CCCCCC` to `#767676` |

Additional accessibility improvements:

- Added a skip-to-main-content link.
- Added visible keyboard focus indicators.
- Improved page landmark structure.
- Tested keyboard navigation through interactive elements.

## Lighthouse Performance Audit

Mobile Lighthouse results:

| Category | Initial | Final |
|---|---:|---:|
| Performance | 56 | 97 |
| Accessibility | 91 | 100 |
| Best Practices | 100 | 100 |
| SEO | 82 | 82 |

**Testing note:** The initial score was recorded using the Vite development server, while the final score was recorded using the Vite production preview. These results are useful observations, but they are not a strictly controlled before-and-after comparison.

### Performance Optimisation

- Implemented route-based code splitting using `React.lazy()`.
- Used `Suspense` to display a loading fallback while pages load.
- Created and tested an optimised production build using Vite.

## Screenshots and Evidence

The `lighthouse` folder contains the audit evidence:

- `before-home-mobile.png`
- `after-home-mobile.png`
- `axe-home-after.png`
- `axe-signup-after.png`

## Acknowledgements

The original sign-up form design was inspired by the Figma Community design:

[Sign-up Form – Figma Community](https://www.figma.com/design/qXigmQDNySMZkGdrYP8JAC/Sign-up-form--Community-?node-id=4-18)

Original designer: Oluyomi Flourish.

## Author

Apanka David