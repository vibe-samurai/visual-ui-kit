import clsx from 'clsx'
import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './Card.module.scss'

export type CardProps<T extends ElementType = 'div'> = {
  as?: T
  padding?: string
} & ComponentPropsWithoutRef<T>

export const Card = <T extends ElementType = 'div'>(props: CardProps<T>) => {
  const { as: Component = 'div', className, padding, children, style, ...rest } = props

  return (
    <Component className={clsx(s.card, className)} style={{ ...style, padding }} {...rest}>
      {children}
    </Component>
  )
}
