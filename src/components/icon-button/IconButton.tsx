import React, { ComponentPropsWithoutRef, ReactNode, forwardRef } from 'react'

import s from './IconButton.module.scss'

type DefaultButtonPropsType = ComponentPropsWithoutRef<'button'>

export type IconButtonProps = DefaultButtonPropsType & {
  active?: boolean
  children: ReactNode
  colorful?: boolean
  size?: number
  className?: string
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ active, children, colorful, size = 35, className = '', ...rest }, ref) => {
    const buttonClasses = [
      s.button,
      active ? s.active : '',
      colorful ? '' : s.notColorful,
      className,
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <button
        ref={ref}
        type={'button'}
        className={buttonClasses}
        style={{ '--size': `${size}px` } as React.CSSProperties}
        {...rest}
      >
        {children}
      </button>
    )
  }
)

IconButton.displayName = 'IconButton'
