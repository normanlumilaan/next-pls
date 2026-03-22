import Link from 'next/link'
import type { ComponentPropsWithoutRef } from 'react'
import AppLogo from '@/components/graphics/AppLogo'
import Container from '@/components/layout/Container'
import MainMenu from '@/components/menus/MainMenu'
import { mainMenuItems } from '@/data/main-menu'
import { getAppBaseUrl, getAppName } from '@/utils/app'

export type HeaderProps = ComponentPropsWithoutRef<'header'>

export default function Header({ className, ...rest }: HeaderProps) {
  return (
    <header
      id="header"
      data-testid="header"
      className="relative z-20 header py-4 shadow-md"
      {...rest}
    >
      <Container>
        <div className="flex items-center w-full gap-4">
          <div>
            <Link href={getAppBaseUrl()} aria-label={getAppName()}>
              <AppLogo />
            </Link>
          </div>
          <div className="ml-auto">
            <MainMenu items={mainMenuItems} />
          </div>
        </div>
      </Container>
    </header>
  )
}
