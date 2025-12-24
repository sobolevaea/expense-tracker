import { useDispatch, useSelector } from "react-redux"
import { DropdownButton, Dropdown } from "react-bootstrap"

import { selectExpensesItems, removeExpense } from "../store/expensesSlice"
import { getCategoryName } from "../constants/categories"

const ExpenseList = () => {
  const dispatch = useDispatch()
  const items = useSelector(selectExpensesItems)
  console.log(items)
  // реализовать готовые компоненты react bootstrap dropdown

  if (items.length === 0) {
    return <div className="text-muted">Нет расходов</div>
  }
  const renderedExpenses = !items ? 'Нет расходов' : items.map(({ id, category }) => {
    return (
      <DropdownButton id="dropdown-item-button" variant='light' className='mb-2' title={category}>
        <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
        <Dropdown.Item as="button">Action</Dropdown.Item>
        <Dropdown.Item as="button">Another action</Dropdown.Item>
        <Dropdown.Item as="button">Something else</Dropdown.Item>
      </DropdownButton>
    )
  })

  return (
    <div className="container-fluid h-100 mb-4">
      <div className="row justify-content-center align-content-center h-100">
        <div className="col-12">
          <div className="card">
            <h5 className="card-header">Список расходов</h5>
            <div className="card-body">
              <div className="d-flex align-items-center ">
                {!items && <div className="text-muted">Нет расходов</div>}
                {!!items &&
                  <ul className="list-unstyled m-0 w-100">
                    {items.map(({ id, category, amount, description, date }) => (
                      <li key={id} className="mb-2 w-100">
                        <Dropdown className="w-100">
                          <Dropdown.Toggle variant="light" className="w-100 d-flex align-items-center justify-content-between text-start">
                            <div className="d-flex justify-content-between flex-grow-1 me-2">
                              <span>{getCategoryName(category)}</span>
                              <span>{`${amount} ₽`}</span>
                            </div>
                          </Dropdown.Toggle>

                          <Dropdown.Menu className="w-100">
                            <Dropdown.ItemText>
                              <div className="fw-semibold">{description}</div>
                              <div className="text-muted small">{date}</div>
                            </Dropdown.ItemText>
                            <Dropdown.Divider />

                            <Dropdown.Item
                              as="button"
                              className="text-danger"
                              onClick={() => dispatch(removeExpense(id))}
                            >
                              Удалить
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </li>
                    ))}
                  </ul>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExpenseList