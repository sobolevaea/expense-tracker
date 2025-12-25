import { ListGroup } from "react-bootstrap"
import { useSelector } from "react-redux"
import { useTranslation } from "react-i18next"

import ExpenseItem from "./ExpenseItem.jsx"
import CardWrapper from "./CardWrapper.jsx"
import { selectSortedExpensesItems } from "../store/expensesSlice.js"

const ExpenseList = () => {
  const { t } = useTranslation()
  const expenses = useSelector(selectSortedExpensesItems)

  const rendredExpenses = expenses.map(expense => <ExpenseItem key={expense.id} expense={expense} />)

  return (
    <CardWrapper>
      <h5 className="card-header">{t('titles.expenseList')}</h5>
      <div className="card-body">
        <div className="d-flex align-expenses-center ">
          {expenses.length === 0 && <div className="text-muted w-100">{t('text.noExpenses')}</div>}
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