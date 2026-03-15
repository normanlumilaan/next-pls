import clsx from 'clsx'
import Link from 'next/link'
import type { ComponentPropsWithoutRef } from 'react'
import AppLogo from '@/components/graphics/AppLogo'
import Container from '@/components/layout/Container'
import { getAppBaseUrl, getAppName } from '@/utils/app'

export type HeaderProps = ComponentPropsWithoutRef<'header'>

export default function Header({ className, ...rest }: HeaderProps) {
  return (
    <header
      id="header"
      data-testid="header"
      className={clsx('header py-4', className)}
      {...rest}
    >
      <Container>
        <div className="columns-2 gap-4">
          <div className="flex justify-start">
            <Link href={getAppBaseUrl()} aria-label={getAppName()}>
              <AppLogo />
            </Link>
          </div>
          <div className="flex justify-end">B</div>
        </div>
      </Container>
    </header>
  )
}
