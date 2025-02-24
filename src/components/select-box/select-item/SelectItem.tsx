import * as SelectRadix from '@radix-ui/react-select'
import { ComponentPropsWithoutRef, ForwardedRef, forwardRef } from 'react'

import s from './SelectItem.module.scss'

type SelectItemProps = {} & ComponentPropsWithoutRef<typeof SelectRadix.Item>

export const SelectItem = forwardRef<HTMLDivElement, SelectItemProps>(
  ({ children, ...rest }, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <SelectRadix.Item className={s.item} ref={ref} {...rest}>
        <SelectRadix.ItemText>{children}</SelectRadix.ItemText>
      </SelectRadix.Item>
    )
  }
)

SelectItem.displayName = 'SelectItem'
