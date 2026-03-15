import clsx from 'clsx'
import type { ComponentPropsWithoutRef } from 'react'

export type ContainerProps = ComponentPropsWithoutRef<'div'>

export default function Container({
  className,
  children,
  ...rest
}: ContainerProps) {
  return (
    <div
      className={clsx('layout-container max-w-7xl px-2 mx-auto', className)}
      {...rest}
    >
      {children}
    </div>
  )
}
