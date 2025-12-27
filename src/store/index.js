import { configureStore } from '@reduxjs/toolkit'

import expensesReducer from './expensesSlice.js'
import { saveExpenses } from '../utils/index.js'

const store = configureStore({
  reducer: {
    expenses: expensesReducer,
  },
  devTools: true,
})

store.subscribe(() => {
  const state = store.getState()
  saveExpenses(state.expenses.items)
})

export default store