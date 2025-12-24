export const CATEGORIES = [
  { id: 'food', name: 'Еда' },
  { id: 'transport', name: 'Транспорт' },
  { id: 'entertainment', name: 'Развлечения' },
  { id: 'shopping', name: 'Покупки' },
  { id: 'other', name: 'Прочее' }
]

export const getCategories = () => CATEGORIES.map(c => c)

export const getCategoriesNames = () => CATEGORIES.map(c => c.name)

export const getCategoryName = (id) => CATEGORIES.find(c => c.id === id)?.name ?? id

export const getCategoriesIds = () => CATEGORIES.map(c => c.id)