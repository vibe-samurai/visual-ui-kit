import * as RadioGroup from '@radix-ui/react-radio-group'
import { clsx } from 'clsx'
import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { Typography } from '@/components'

import s from './RadioGroupItem.module.scss'

export type Option = {
  label: string
  value: string
} & ComponentPropsWithoutRef<typeof RadioGroup.Root>

export const RadioGroupItem = forwardRef<HTMLButtonElement, Option>(
  ({ label, value, ...props }, ref) => {
    return (
      <div className={s.container}>
        <div className={clsx(s.wrapper)}>
          <RadioGroup.Item
            className={s.radio}
            disabled={props.disabled}
            id={value}
            ref={ref}
            value={value}
          >
            <RadioGroup.Indicator className={s.indicator} />
          </RadioGroup.Item>
        </div>
        <Typography
          as={'label'}
          className={clsx(s.label, props.disabled && s.disabledLabel)}
          htmlFor={value}
          variant={'regular-text-14'}
        >
          {label}
        </Typography>
      </div>
    )
  }
)
