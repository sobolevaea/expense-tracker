const STORAGE_KEY = 'expenses'

export const loadExpenses = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : []
  } catch (e) {
    console.error(e)
    return []
  }
}

export const saveExpenses = (expenses) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses))
}

export const formatRuble = (value) => {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0,
  }).format(value)
}

export const formatDate = (isoDate) => {
  return new Intl.DateTimeFormat('ru-RU').format(new Date(isoDate))
}
