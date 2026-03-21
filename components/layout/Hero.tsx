import clsx from 'clsx'
import Image from 'next/image'
import type { ComponentPropsWithoutRef } from 'react'
import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'

export type HeroProps = ComponentPropsWithoutRef<'div'> & {
  title?: string
  subtitle?: string
  backgroundImage?: string
}

export default function Hero({
  id,
  className,
  children,
  title,
  subtitle,
  backgroundImage,
  ...rest
}: HeroProps) {
  return (
    <Section
      tag="div"
      className={clsx(
        'layout-hero relative w-full h-[80vh] bg-cover bg-center',
        className,
      )}
      id={id}
      {...rest}
    >
      <Container className="relative z-10 py-10 flex flex-col items-start justify-end h-full">
        {title && <h1 className="text-4xl font-bold">{title}</h1>}
        {subtitle && <p className="text-lg">{subtitle}</p>}
        {children}
      </Container>
      {backgroundImage && (
        <Image
          src={backgroundImage}
          alt={title ?? ''}
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 z-0 object-cover"
        />
      )}
    </Section>
  )
}
