import { Dropdown } from "react-bootstrap"
import { ListGroup } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { useTranslation } from "react-i18next"

import { formatDate } from "../utils/formatDate.js"
import { formatRuble } from "../utils/formatCurrency.js"
import { removeExpense } from "../store/expensesSlice.js"
import { getCategoryName } from "../constants/categories.js"

const ExpenseItem = ({ expense }) => {
  const { t } = useTranslation()
  const { id, description, category, amount, date } = expense
  const dispatch = useDispatch()

  return (
    <ListGroup.Item as='li' key={id} className="mb-2 w-100">
      <Dropdown className="w-100">
        <Dropdown.Toggle variant="light" className="w-100 d-flex align-items-center justify-content-between text-start">
          <div className="d-flex justify-content-between align-items-center flex-grow-1 me-2">
            <div className="d-flex flex-column">
              <span className="fw-bold">{description}</span>
              <span className="">{getCategoryName(category)}</span>
            </div>
            <span>{formatRuble(amount)}</span>
          </div>
        </Dropdown.Toggle>

        <Dropdown.Menu className="w-100">
          <Dropdown.ItemText>
            <span className="text-muted small"><b>{t('text.date')}:</b> {formatDate(date)}</span>
          </Dropdown.ItemText>
          <Dropdown.Divider />
          <Dropdown.Item
            as="button"
            className="text-danger"
            onClick={() => dispatch(removeExpense(id))}
          >
            {t('buttons.delete')}
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </ListGroup.Item>
  )
}

export default ExpenseItem