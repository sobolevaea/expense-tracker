import Summary from "./components/Summary.jsx"
import AddExpense from "./components/AddExpense.jsx"
import ExpenseList from "./components/ExpenseList.jsx"

const App = () => {
  return (
    <div className="d-flex flex-column h-100 justify-content-center align-items-center m-4">
      <AddExpense />
      <ExpenseList />
      <Summary />
    </div>
  )
}

export default App