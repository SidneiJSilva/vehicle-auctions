# 🚗 Vehicle Auctions

The goal was to build a simple, well-structured application to display a list of auction vehicles with filtering, sorting, pagination, and a detailed view for each item using React and modern front-end tools.

---

## 📸 Overview

The application allows users to:

- Browse a list of auction vehicles
- Filter by make, model, bid range, and favorites
- Sort by make, mileage, starting bid, and auction date
- Mark/unmark vehicles as favorites
- Navigate to a detail page for any selected vehicle
- Control pagination and items per page

All with a clean, responsive, and user-friendly layout.

---

## 🚀 Tech Stack

- **Next.js** (App Router)
- **React**
- **TypeScript**
- **styled-components** – component-level styling
- **Shadcn/UI** – for modern UI elements and form controls
- **Jest** + **React Testing Library** – for unit testing

---

## 📁 Project Structure

```
src/
├── app/                  # Next.js routes
│   └── vehicle/[id]/     # Dynamic route for vehicle details
├── views/                # Page-level components
│   ├── home/             # Vehicle listing
│   └── vehicle-list/     # Vehicle details
├── components/           # Reusable UI components
├── helpers/              # Utility functions
├── types/                # TypeScript interfaces and types
└── tests/                # Unit tests with Jest + RTL
```

---

## 🧪 Testing

This project includes tests for:

- `VehicleCard` component rendering
- Redirection behavior using `router.push`

To run tests:

```bash
npm install
npm run test
```

---

## 📦 Installation & Running Locally

Clone the project and install dependencies:

```bash
git clone https://github.com/SidneiJSilva/vehicle-auctions.git
cd vehicle-auctions
npm install
```

Start the development server:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧭 Final Notes

- This project was built with **simplicity and clarity** in mind, following the KIS (Keep It Simple) principle.
- Code is modular, readable, and easy to maintain.
- `styled-components` was used to demonstrate clean component-scoped styling.
- Testing covers key component and behaviors.
