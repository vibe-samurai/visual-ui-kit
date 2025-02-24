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
    const styles = {
      container: clsx(s.container, props.disabled ? s['is-disabled'] : ''),
      wrapper: clsx(s.wrapper, props.disabled ? s['is-disabled'] : ''),
      label: clsx(s.label, props.disabled && s.disabledLabel),
    }

    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
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
          className={styles.label}
          htmlFor={value}
          variant={'regular-text-14'}
        >
          {label}
        </Typography>
      </div>
    )
  }
)
