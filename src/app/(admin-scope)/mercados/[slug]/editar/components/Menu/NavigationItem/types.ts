export interface NavigationItemProps {
  copy: {
    title: string
    items: {
      id: string
      label: string
    }[]
  }
  currentSelectedItem: string
  handleToggleSideMenu: () => void
  setCurrentSelectedItem: (arg: string) => void
}
