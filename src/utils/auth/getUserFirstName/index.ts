export const getUserFirstName = (email: string) => {
  const cleaned = email.replace(/[0-9]+$/, '')

  const firstName = cleaned
    .replace(/([A-Z])/g, ' $1')
    .trim()
    .split(' ')[0]

  return firstName.charAt(0).toUpperCase() + firstName.slice(1)
}
