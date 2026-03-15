import clsx from 'clsx'
import type { ComponentPropsWithoutRef } from 'react'

export type SectionProps = ComponentPropsWithoutRef<'section'> & {
  tag?: 'section' | 'div'
}

/**
 * A section component
 * @param {SectionProps} props - The props for the section component
 * @param {string} props.tag - The tag for the section layout component
 * @param {React.ReactNode} props.children - The children for the section layout component
 * @param {string} props.className - The class name for the section layout component
 * @param {React.HTMLAttributes<HTMLSectionElement>} props.rest - The rest of the props for the section layout component
 * @returns
 */
export default function Section({
  tag = 'section',
  children,
  className,
  ...rest
}: SectionProps) {
  const Tag = tag

  return (
    <Tag className={clsx('section', className)} {...rest}>
      {children}
    </Tag>
  )
}
