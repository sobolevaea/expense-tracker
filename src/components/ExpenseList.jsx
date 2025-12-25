import { useDispatch, useSelector } from "react-redux"
import { Dropdown } from "react-bootstrap"

import { selectSortedExpensesItems, removeExpense } from "../store/expensesSlice"
import { getCategoryName } from "../constants/categories"
import { formatDate } from "../utils/formatDate"
import { formatRuble } from "../utils/formatCurrency"

const ExpenseList = () => {
  const dispatch = useDispatch()
  const items = useSelector(selectSortedExpensesItems)
  console.log(items)

  return (
    <div className="container py-3">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 col-xl-6">
          <div className="card">
            <h5 className="card-header">Список расходов</h5>
            <div className="card-body">
              <div className="d-flex align-items-center ">
                {items.length === 0 && <div className="text-muted w-100">Нет расходов</div>}
                {!!items &&
                  <ul className="list-unstyled m-0 w-100">
                    {items.map(item => (
                      <ExpenseList key={item.id} item={item}/>
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