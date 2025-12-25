import { useSelector } from "react-redux"
import { ListGroup } from "react-bootstrap"

import CardWrapper from "./CardWrapper.jsx"
import ExpensesPieChart from "./ExpensesPieChart.jsx"
import { formatRuble } from "../utils/formatCurrency"
import { getCategoryName } from "../constants/categories"
import { selectTotalAmount, selectAmountByCategoryFiltered } from "../store/expensesSlice"

const Summary = () => {
  const total = useSelector(selectTotalAmount)
  const totalsByCategory = useSelector(selectAmountByCategoryFiltered)

  return (
    <CardWrapper>
      <h5 className="card-header">Итого</h5>
      <div className="card-body">
        <div className="d-flex justify-content-center flex-column">
          <span className='fs-5 fw-semibold mb-0 d-flex justify-content-between'>Всего потрачено: {formatRuble(total)}</span>
          {totalsByCategory.length !== 0 && (
            <>
              <ExpensesPieChart />
              <hr></hr>
              <ListGroup as="ul" className="my-2">
                {totalsByCategory.map(({ category, total }) => (
                  <ListGroup.Item as='li' key={category} className="d-flex justify-content-between">
                    <span className="fw-semibold">{getCategoryName(category)}</span>
                    <span className="fw-bold">{formatRuble(total)}</span>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </>
          )}
        </div>
      </div>
    </CardWrapper>
  )
}

export default Summary