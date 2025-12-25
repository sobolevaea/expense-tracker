<div align="right" style='display: flex; gap: 1px; justify-content: end'>
  <a href="README.md">
    <img src="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/ru.svg" width="32" style="border: 2px solid transparent; border-radius: 4px; padding: 2px;" alt="Русский язык" title="Русский язык"/>
  </a>
  <a href="#">
    <img src="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/us.svg" width="32" style="border: 2px solid #ccc; border-radius: 4px; padding: 2px;" alt="Английский язык" title="Английский язык"/>
  </a>
</div>

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
