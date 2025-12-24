import { CATEGORIES, getCategories } from "../constants/categories"

import { ListGroup } from "react-bootstrap"

const Summary = () => {
  const categories = getCategories()

  return (
    <div className="container-fluid h-100">
      <div className="row justify-content-center align-content-center h-100">
        <div className="col-12">
          <div className="card">
            <h5 className="card-header">Итого</h5>
            <div className="card-body">
              <div className="d-flex justify-content-center flex-column">
                <h6 className='mb-0'>Всего потрачено: {1} ₽</h6>
                <hr></hr>
                <p className="mt-0 my-2">По категориям:</p>
                <ListGroup className="my-2">
                  {categories.map(c => (
                    <ListGroup.Item key={c.id}><b>{c.name}:</b> {3000} ₽</ListGroup.Item>
                  ))}
                </ListGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Summary