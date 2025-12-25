import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { useSelector } from 'react-redux'

import { formatRuble } from '../utils/formatCurrency'
import { getCategoryName } from '../constants/categories'
import { selectAmountByCategoryFiltered } from '../store/expensesSlice.js'

const COLORS = [
  '#7cb3e3ff',
  '#00C49F',
  '#FFBB28',
  '#FF8042',
  '#845EC2',
]

const ExpensesPieChart = () => {
  const data = useSelector(selectAmountByCategoryFiltered)

  if (data.length === 0) {
    return <div className="text-muted">Нет данных для графика</div>
  }

  const chartData = data.map(item => ({
    name: getCategoryName(item.category),
    value: item.total,
  }))

  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
            label
          >
            {chartData.map((_, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip formatter={(value) => formatRuble(value)} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ExpensesPieChart
