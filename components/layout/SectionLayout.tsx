import clsx from 'clsx'
import type { ComponentPropsWithoutRef } from 'react'

export type SectionLayoutProps = ComponentPropsWithoutRef<'section'>

/**
 * A section layout component
 * @param {SectionLayoutProps} props - The props for the section layout component
 * @param {React.ReactNode} props.children - The children for the section layout component
 * @param {string} props.className - The class name for the section layout component
 * @param {React.HTMLAttributes<HTMLSectionElement>} props.rest - The rest of the props for the section layout component
 * @returns
 */
export default function SectionLayout({
  children,
  className,
  ...rest
}: SectionLayoutProps) {
  return (
    <section className={clsx('section-layout columns-12', className)} {...rest}>
      {children}
    </section>
  )
}
