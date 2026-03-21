import clsx from 'clsx'
import type { ComponentPropsWithoutRef } from 'react'
import Container from '@/components/layout/Container'
import { getAppName } from '@/utils/app'
import styles from './footer.module.css'

export type FooterProps = ComponentPropsWithoutRef<'footer'>

export default function Footer({
  id,
  className,
  children,
  ...rest
}: FooterProps) {
  return (
    <footer
      id={id}
      className={clsx(styles.footer, 'py-4 text-white', className)}
      {...rest}
    >
      <Container>
        <div className="text-center text-sm text-gray-400">
          <span>
            © {new Date().getFullYear()} {getAppName()}. All rights reserved.
          </span>
        </div>
      </Container>
    </footer>
  )
}
