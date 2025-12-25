import { useTranslation } from 'react-i18next'

import ExpenseForm from "./ExpenseForm.jsx"
import CardWrapper from "./CardWrapper.jsx"

const AddExpense = () => {
  const { t } = useTranslation()

  return (
    <CardWrapper>
      <h5 className="card-header">Добавление новой траты</h5>
      <div className="card-body">
        <div className="d-flex align-items-center">
          <ExpenseForm />
        </div>
      </div>
    </CardWrapper>
  )
}

export default AddExpense