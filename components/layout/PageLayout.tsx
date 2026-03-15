import clsx from 'clsx'
import type { ComponentPropsWithoutRef } from 'react'
import Container from '@/components/layout/Container'

export type PageLayoutProps = ComponentPropsWithoutRef<'div'>

export default function PageLayout({
  className,
  children,
  ...rest
}: PageLayoutProps) {
  return (
    <Container className={clsx('page-layout', className)} {...rest}>
      {children}
    </Container>
  )
}
