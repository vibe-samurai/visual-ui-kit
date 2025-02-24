import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { ComponentPropsWithoutRef, forwardRef } from 'react'

import s from './Button.module.scss'

export type ButtonVariant = 'link' | 'outlined' | 'primary' | 'secondary'

export type ButtonProps = {
  asChild?: boolean
  fullWidth?: boolean
  variant?: ButtonVariant
} & ComponentPropsWithoutRef<'button'>

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild, className, fullWidth, variant = 'primary', ...rest }, ref) => {
    const Component = asChild ? Slot : 'button'

    const classNames = clsx(s.button, s[variant], fullWidth && s.fullWidth, className)

    return <Component {...rest} className={classNames} ref={ref} />
  }
)
