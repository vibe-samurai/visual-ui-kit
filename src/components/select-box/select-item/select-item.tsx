import { ComponentPropsWithoutRef, ForwardedRef, forwardRef } from 'react'
import * as SelectRadix from '@radix-ui/react-select'
import s from './select-item.module.scss'

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