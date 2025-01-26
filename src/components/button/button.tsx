import { ComponentPropsWithoutRef, ElementType } from 'react'

import { clsx } from 'clsx'

import s from './button.module.scss'

export type ButtonVariant = 'link' | 'outlined' | 'primary' | 'secondary'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  fullWidth?: boolean
  variant?: ButtonVariant
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const { as: Component = 'button', className, fullWidth, variant = 'primary', ...rest } = props

  const classNames = clsx(s.button, s[variant], fullWidth && s.fullWidth, className)

  return <Component className={classNames} {...rest} />
}
