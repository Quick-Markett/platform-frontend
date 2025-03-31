export const formatCityName = (city: string) => {
  return city
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace('ç', 'c')
    .replace(/\s+/g, '-')
    .toLowerCase()
}
