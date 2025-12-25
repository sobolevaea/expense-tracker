import { useSelector } from "react-redux"
import { ListGroup } from "react-bootstrap"

import ExpensesPieChart from "./ExpensesPieChart.jsx"
import { getCategories, getCategoryName } from "../constants/categories"
import { formatRuble } from "../utils/formatCurrency"
import { selectTotalAmount, selectAmountByCategoryFiltered } from "../store/expensesSlice"

const Summary = () => {
  const categories = getCategories()
  const total = useSelector(selectTotalAmount)
  const totalsByCategory = useSelector(selectAmountByCategoryFiltered)

  return (
    <div className="container py-3">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 col-xl-6">
          <div className="card">
            <h5 className="card-header">Итого</h5>
            <div className="card-body">
              <div className="d-flex justify-content-center flex-column">
                <div className="d-flex justify-content-between">
                  <span className='fs-5 fw-semibold mb-0'>Траты за всё время</span>
                  <span className="fs-5 mb-0 fw-bold text-primary">{formatRuble(total)}</span>
                </div>
                {totalsByCategory.length !== 0 && (
                  <>
                    <ExpensesPieChart />
                    <hr></hr>
                    <ListGroup className="my-2">
                      {totalsByCategory.map(({ category, total }) => (
                        <ListGroup.Item key={category} className="d-flex justify-content-between">
                          <span className="fw-semibold">{getCategoryName(category)}</span>
                          <span className="fw-bold">{formatRuble(total)}</span>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Summary