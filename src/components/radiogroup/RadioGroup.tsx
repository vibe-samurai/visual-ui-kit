import * as Radio from '@radix-ui/react-radio-group'
import { clsx } from 'clsx'
import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { Option, RadioGroupItem } from '@components/radiogroup/radioGroup-item'

import s from './RadioGroup.module.scss'

export type RadioProps = {
  options?: Option[]
  disabled?: boolean
} & Omit<ComponentPropsWithoutRef<typeof Radio.Root>, 'children'>

export const RadioGroup = forwardRef<HTMLDivElement, RadioProps>(
  ({ className, disabled, options, ...rest }, ref) => {
    const classes = {
      root: clsx(s.root, className),
    }

    return (
      <Radio.Root className={classes.root} disabled={disabled} ref={ref} {...rest}>
        {options?.map(option => (
          <RadioGroupItem key={option.value} disabled={disabled} {...option} />
        ))}
      </Radio.Root>
    )
  }
)
