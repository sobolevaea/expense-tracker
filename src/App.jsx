import ExpenseItem from "./components/ExpenseItem.jsx" // Форма добавления (элемент)
import ExpenseList from "./components/ExpenseList.jsx" // Список расходов
import Summary from "./components/Summary.jsx" // Блок итогов

const App = () => {
  return (
    <div className="d-flex flex-column h-100 justify-content-center align-items-center m-4">
      <ExpenseItem />
      <ExpenseList />
      <Summary />
    </div>
  )
}

export default App