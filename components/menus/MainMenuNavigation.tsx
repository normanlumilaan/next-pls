import Link from 'next/link'
import type { MainMenuItem } from '@/data/main-menu'

export const MainMenuNavigation = ({ items }: { items: MainMenuItem[] }) => {
  return (
    <nav>
      <ul className="list-none flex md:flex-row items-center gap-2">
        {items.map(({ label, href, id }) => (
          <li key={id}>
            <Link
              aria-label={label}
              className="inline-block px-4 py-2 no-underline md:hover:underline"
              data-testid={id}
              href={href}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
