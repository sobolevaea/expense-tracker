import { ListGroup } from "react-bootstrap"
import { useSelector } from "react-redux"

import ExpenseItem from "./ExpenseItem.jsx"
import CardWrapper from "./CardWrapper.jsx"
import { selectSortedExpensesItems } from "../store/expensesSlice.js"

const ExpenseList = () => {
  const expenses = useSelector(selectSortedExpensesItems)

  const rendredExpenses = expenses.map(expense => <ExpenseItem key={expense.id} expense={expense} />)

  return (
    <CardWrapper>
      <h5 className="card-header">Список расходов</h5>
      <div className="card-body">
        <div className="d-flex align-expenses-center ">
          {expenses.length === 0 && <div className="text-muted w-100">Нет расходов</div>}
          {!!expenses &&
            <ListGroup as="ul" className="list-unstyled m-0 w-100">
              {expenses && rendredExpenses}
            </ListGroup>
          }
        </div>
      </div>
    </CardWrapper>
  )
}

export default ExpenseList