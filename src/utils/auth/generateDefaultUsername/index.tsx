export const generateDefaultUsername = (firstname: string) => {
  return '@' + firstname.replace(/\s+/g, '').toLowerCase()
}
