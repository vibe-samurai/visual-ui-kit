import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { clsx } from 'clsx'
import { ComponentPropsWithoutRef, forwardRef, ReactNode, useId } from 'react'

import { CheckIcon } from '@/assets/icons'
import { Typography } from '@/components'

import s from './Checkbox.module.scss'

export type CheckboxProps = {
  label?: null | string | ReactNode
  onChange?: (checked: CheckboxPrimitive.CheckedState) => void
} & ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>

export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
  ({ className, id, label, onChange, ...props }, ref) => {
    const innerId = useId()
    const finalId = id ?? innerId

    return (
      <div className={clsx(s.container, className)}>
        <div className={clsx(s.wrapper, props.disabled ? s['is-disabled'] : '')}>
          <CheckboxPrimitive.Root
            className={s.root}
            onCheckedChange={onChange}
            ref={ref}
            {...props}
          >
            <CheckboxPrimitive.Indicator asChild>
              <CheckIcon className={clsx(s.check, props.disabled && s.disabled)} />
            </CheckboxPrimitive.Indicator>
          </CheckboxPrimitive.Root>
        </div>
        {label && (
          <Typography
            as={'label'}
            className={clsx(props.disabled ? s.disabledLabel : s.label)}
            htmlFor={finalId}
            variant={'medium-text-14'}
          >
            {label}
          </Typography>
        )}
      </div>
    )
  }
)

Checkbox.displayName = 'Checkbox'
