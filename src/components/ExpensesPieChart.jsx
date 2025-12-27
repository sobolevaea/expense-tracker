import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { COLORS } from '../constants/colors.js'
import { formatRuble } from '../utils/index.js'
import { getCategoryName } from '../constants/categories.js'
import { selectAmountByCategoryFiltered } from '../store/expensesSlice.js'

const ExpensesPieChart = () => {
  const { t } = useTranslation()
  const data = useSelector(selectAmountByCategoryFiltered)

  if (data.length === 0) {
    return <div className="text-muted">{t('text.noChartData')}</div>
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
