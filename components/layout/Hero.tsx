import clsx from 'clsx'
import type { ComponentPropsWithoutRef } from 'react'
import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import styles from './hero.module.css'

export type HeroProps = ComponentPropsWithoutRef<'div'>

export default function Hero({ id, className, children, ...rest }: HeroProps) {
  return (
    <Section
      tag="div"
      className={clsx(styles.hero, className)}
      id={id}
      {...rest}
    >
      <Container>{children}</Container>
    </Section>
  )
}
