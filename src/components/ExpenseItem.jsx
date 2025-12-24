import ExpenseForm from "./ExpenseForm.jsx"

const ExpenseItem = () => {

  return (
    <div className="container-fluid h-100 mb-4">
      <div className="row justify-content-center align-content-center h-100">
        <div className="col-12">
          <div className="card">
            <h5 className="card-header">Добавление новой траты</h5>
            <div className="card-body">
              <div className="d-flex align-items-center ">
                <ExpenseForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExpenseItem