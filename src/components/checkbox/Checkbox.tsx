import { forwardRef, ForwardedRef } from 'react'

import { CheckIcon } from '@/assets/icons'
import { Typography } from '@/components'
import * as RadixCheckbox from '@radix-ui/react-checkbox'
import { clsx } from 'clsx'

import s from './Checkbox.module.scss'

export type CheckboxProps = {
  checked: boolean
  className?: string
  disabled?: boolean
  id?: string
  label?: string
  onCheckedChange?: (checked: boolean) => void
}

export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
  (
    { checked, className, disabled, id, label, onCheckedChange },
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    const styles = {
      label: clsx(s.label, disabled && s.disabled, className),
      indicator: clsx(s.indicator, checked && disabled && s['check-disabled']),
    }

    return (
      <Typography as={'label'} className={styles.label} variant={'regular-text-14'}>
        <RadixCheckbox.Root
          checked={checked}
          className={s.checkbox}
          disabled={disabled}
          id={id}
          onCheckedChange={onCheckedChange}
          ref={ref}
        >
          <div className={s.frame}></div>
          {checked && (
            <RadixCheckbox.Indicator className={styles.indicator} forceMount>
              <CheckIcon />
            </RadixCheckbox.Indicator>
          )}
        </RadixCheckbox.Root>
        {label}
      </Typography>
    )
  }
)
