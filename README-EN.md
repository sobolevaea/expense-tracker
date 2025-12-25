<p align="right">
   <strong>English</strong> | <a href="README.md">Русский</a>
</p>

# Project "Expense Tracker":

[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=sobolevaea_expense-tracker&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=sobolevaea_expense-tracker)

Personal expense tracker application.
Allows adding and deleting expenses, viewing total expenses, category-wise sums, and visualizing data with chart.

### ▷ [Live demo](https://frontend-expense-tracker-w8dr.onrender.com)

## Framework

React with Redux Toolkit is used.
Why chosen:
- React allows building interactive UI with reusable components.
- Redux Toolkit simplifies state management and localStorage handling.
- A wide ecosystem (Formik, React-Bootstrap, Recharts) makes it easier to implement forms, lists and charts.

## Implemented features / challenges

- Expense chart
- Deploy
- Localization
- CI/CD

## Getting Started

Follow these steps to set up the project locally:

1. Clone the repository

```bash
git clone git@github.com:sobolevaea/expense-tracker.git
cd expense-tracker
```

2. Install dependencies

```bash
make install
```

3. Start the development server

```bash
make run
```

The application will open in your browser at http://localhost:5173/
