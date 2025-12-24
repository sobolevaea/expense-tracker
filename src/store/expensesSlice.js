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
            createdAt: new Date().toLocaleDateString('sv-SE'),
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

export const selectExpensesItems = createSelector(
  selectExpenses,
  expensesState => expensesState.items,
)

export const { addExpense, removeExpense } = expensesSlice.actions
export default expensesSlice.reducer
