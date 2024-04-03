export const formatDate = (raw: string | number | Date) => {
  const date = new Date(raw)
  date.setUTCHours(12)
  return {
    time: +date,
    string: date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }
}

export const truncateText = (text: string, length: number) => {
  if (text.length > length) {
    return text.substring(0, length) + '...'
  }
  return text
}
