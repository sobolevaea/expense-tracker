import ExpenseForm from "./ExpenseForm.jsx"
import { ListGroupItem } from "react-bootstrap"

import { Dropdown } from "react-bootstrap"

import { selectSortedExpensesItems, removeExpense } from "../store/expensesSlice"
import { getCategoryName } from "../constants/categories"
import { formatDate } from "../utils/formatDate"
import { formatRuble } from "../utils/formatCurrency"

const ExpenseItem = ({ id, description, category, amount, date}) => {

  return (
    <ListGroupItem key={id} className="mb-2 w-100">
      
    </ListGroupItem>
  )
}

export default ExpenseItem