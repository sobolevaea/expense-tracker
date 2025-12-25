export const formatDate = (isoDate) => {
  return new Intl.DateTimeFormat('ru-RU').format(new Date(isoDate))
}
