import * as PopoverPrimitive from '@radix-ui/react-popover'
import { clsx } from 'clsx'
import React, { forwardRef, ReactNode } from 'react'

import s from './Popover.module.scss'

type ArrowProps = {
  width?: number
  height?: number
  fill?: string
  stroke?: string
  strokeWidth?: number
}

export type PopoverProps = {
  /** Элемент-триггер (колокольчик или бургер) */
  trigger: ReactNode
  children: ReactNode
  /** Референс на триггер (для точного позиционирования) */
  anchorRef?: React.RefObject<HTMLButtonElement | null>
  /** Открыт ли попап */
  isOpen?: boolean
  /** Колбек при изменении состояния */
  onOpenChange?: (open: boolean) => void
  /** Позиционирование относительно триггера */
  align?: 'start' | 'center' | 'end'
  side?: 'top' | 'right' | 'bottom' | 'left'
  /** Отступ от триггера */
  sideOffset?: number
  /** Настройки стрелки */
  arrow?: ArrowProps | boolean
  arrowClassName?: string
  /**
   * Сдвиги контента относительно триггера
   * @default { top: -28, left: -3 } для хэдера с уведомлениями
   */
  contentOffset?: {
    top?: number | string
    left?: number | string
    bottom?: number | string
    right?: number | string
  }
  /** Дополнительные inline-стили для контента */
  contentStyle?: React.CSSProperties
  /** Дополнительные классы */
  className?: string
  contentClassName?: string
}

const CustomArrow = ({
  width = 16,
  height = 8,
  fill = 'var(--Dark-500)',
  stroke = 'var(--Dark-100)',
  strokeWidth = 1,
}: ArrowProps) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    style={{
      display: 'block',
      overflow: 'visible',
    }}
  >
    <path d={`M0 0L${width / 2} ${height}L${width} 0Z`} fill={fill} />

    <path
      d={`M0 0L${width / 2} ${height}`}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinejoin={'miter'}
    />

    <path
      d={`M${width / 2} ${height}L${width} 0`}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinejoin={'miter'}
    />
  </svg>
)

export const Popover = forwardRef<HTMLDivElement, PopoverProps>(
  (
    {
      trigger,
      children,
      anchorRef,
      isOpen,
      onOpenChange,
      align = 'end',
      side = 'bottom',
      sideOffset = 8,
      arrow = true,
      arrowClassName,
      contentOffset = { top: 0, left: 0 },
      contentStyle,
      className,
      contentClassName,
    },
    ref
  ) => {
    const mergedContentStyle = {
      ...(contentOffset?.top !== undefined && { top: contentOffset.top }),
      ...(contentOffset?.left !== undefined && { left: contentOffset.left }),
      ...(contentOffset?.bottom !== undefined && { bottom: contentOffset.bottom }),
      ...(contentOffset?.right !== undefined && { right: contentOffset.right }),
      ...contentStyle,
    }

    return (
      <PopoverPrimitive.Root open={isOpen} onOpenChange={onOpenChange}>
        <PopoverPrimitive.Trigger asChild ref={anchorRef} className={className}>
          {trigger}
        </PopoverPrimitive.Trigger>

        <PopoverPrimitive.Portal>
          <PopoverPrimitive.Content
            ref={ref}
            align={align}
            side={side}
            sideOffset={sideOffset}
            style={mergedContentStyle}
            className={clsx(s.content, contentClassName)}
          >
            {children}
            {arrow && (
              <PopoverPrimitive.Arrow asChild className={clsx(s.arrow, arrowClassName)}>
                <CustomArrow {...(typeof arrow === 'object' ? arrow : {})} />
              </PopoverPrimitive.Arrow>
            )}
          </PopoverPrimitive.Content>
        </PopoverPrimitive.Portal>
      </PopoverPrimitive.Root>
    )
  }
)

Popover.displayName = 'Popover'
