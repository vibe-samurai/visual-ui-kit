import * as Radio from '@radix-ui/react-radio-group'
import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { Option, RadioGroupItem } from '@components/radiogroup/radioGroup-item'

export type RadioProps = {
  options?: Option[]
  disabled?: boolean
} & Omit<ComponentPropsWithoutRef<typeof Radio.Root>, 'children'>

export const RadioGroup = forwardRef<HTMLDivElement, RadioProps>(
  ({ className, disabled, options, ...rest }, ref) => {
    return (
      <Radio.Root className={className} disabled={disabled} ref={ref} {...rest}>
        {options?.map(option => (
          <RadioGroupItem key={option.value} disabled={disabled} {...option} />
        ))}
      </Radio.Root>
    )
  }
)
