interface SearchParams {
  [key: string]: string | number | undefined
}

export const objectToQueryString = (obj: SearchParams): string => {
  return Object.entries(obj)
    .filter(([, value]) => value)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value as string)}`)
    .join('&')
}

export const formatDate = (date: string): string => {
  const originalDate = new Date(date)

  const year = originalDate.getUTCFullYear()
  const month = (originalDate.getUTCMonth() + 1).toString().padStart(2, '0')
  const day = originalDate.getUTCDate().toString().padStart(2, '0')

  return `${day}/${month}/${year}`
}
