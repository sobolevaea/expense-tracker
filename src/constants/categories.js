export const CATEGORIES = [
  { id: 'food', name: 'Еда' },
  { id: 'transport', name: 'Транспорт' },
  { id: 'entertainment', name: 'Развлечения' },
  { id: 'shopping', name: 'Покупки' },
  { id: 'other', name: 'Прочее' }
]

export const getCategoriesNames = () => CATEGORIES.map(({name}) => name)