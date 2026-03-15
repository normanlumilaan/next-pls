import clsx from 'clsx'
import type { ComponentPropsWithoutRef } from 'react'

export type PageLayoutProps = ComponentPropsWithoutRef<'div'>

export default function PageLayout({
  className,
  children,
  ...rest
}: PageLayoutProps) {
  return (
    <div className={clsx('page-layout', className)} {...rest}>
      {children}
    </div>
  )
}
