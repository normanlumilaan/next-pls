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
      className={clsx(
        'layout-container w-full max-w-7xl px-4 mx-auto',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  )
}
