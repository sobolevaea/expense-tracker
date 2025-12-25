import { createSelector, createSlice, nanoid } from '@reduxjs/toolkit'

import { loadExpenses } from '../utils/expensesStorage.js'

const initialState = {
  items: loadExpenses() || '',
}

const expensesSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    addExpense: {
      reducer(state, action) {
        state.items.unshift(action.payload)
      },
      prepare(values) {
        return {
          payload: {
            id: nanoid(),
            amount: Number(values.sum),
            category: values.category,
            description: values.description,
            date: values.date,
          },
        }
      },
    },

    removeExpense(state, action) {
      state.items = state.items.filter(
        expense => expense.id !== action.payload
      )
    },
  },
})

const selectExpenses = state => state.expenses

const selectExpensesItems = createSelector(
  selectExpenses,
  (expenses) => expenses.items,
)

export const selectSortedExpensesItems = createSelector(
  selectExpensesItems,
  (items) => [...items].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  ),
)

export const selectTotalAmount = createSelector(
  selectExpensesItems,
  (items) => items.reduce((sum, { amount }) => sum + amount, 0)
)

export const selectAmountByCategory = createSelector(
  selectExpensesItems,
  (items) => items.reduce((acc, { category, amount }) => {
    console.log(category, amount)
    acc[category] = (acc[category] ?? 0) + amount
    return acc
  }, {})
)

export const selectAmountByCategoryFiltered = createSelector(
  selectAmountByCategory,
  (amountsByCategory) =>
    Object.entries(amountsByCategory)
      .filter(([, total]) => total > 0)
      .map(([category, total]) => ({
        category,
        total,
      }))
)

export const { addExpense, removeExpense } = expensesSlice.actions
export default expensesSlice.reducer
