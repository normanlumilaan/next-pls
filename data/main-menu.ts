export interface MainMenuItem {
  id: string
  label: string
  href: string
}

export const mainMenuItems: MainMenuItem[] = [
  {
    id: 'main-menu-home',
    label: 'Home',
    href: '/',
  },
  {
    id: 'main-menu-about',
    label: 'Articles',
    href: '/articles',
  },
]
