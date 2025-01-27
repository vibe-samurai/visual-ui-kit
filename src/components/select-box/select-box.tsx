import { ComponentPropsWithoutRef, ForwardedRef, ReactNode, forwardRef, useId } from 'react'
import * as SelectRadix from '@radix-ui/react-select'
import clsx from 'clsx'
import s from './select-box.module.scss'
import { Typography } from '../typography/Typography'
import { ArrowDown } from '../../assets/icons/ArrowDown'

export type SelectProps = {
  id?: string
  label?: string
  placeholder?: ReactNode
  small?: boolean
} & ComponentPropsWithoutRef<typeof SelectRadix.Root>

export const SelectBox = forwardRef<HTMLButtonElement, SelectProps>(
  ({ children, id, label, placeholder, small, ...rest }, ref: ForwardedRef<HTMLButtonElement>) => {
    const generatedId = useId()
    const idToUse = id ?? generatedId

    return (
      <div className={s.wrapper}>
        {!!label && (
          <Typography className={s.label} variant="regular-text-14">
            <label htmlFor={idToUse}>{label}</label>
          </Typography>
        )}
        <SelectRadix.Root {...rest}>
          <SelectRadix.Trigger className={clsx(s.trigger, small && s.small)} id={idToUse} ref={ref}>
            <SelectRadix.Value placeholder={placeholder} />
            <ArrowDown className={s.dropDownArrowIcon} height={24} width={24} />
          </SelectRadix.Trigger>
          <SelectRadix.Portal>
            <SelectRadix.Content
              className={clsx(s.content, small && s.small)}
              collisionPadding={0}
              position={'popper'}
            >
              <SelectRadix.Viewport className={s.viewport}>{children}</SelectRadix.Viewport>
            </SelectRadix.Content>
          </SelectRadix.Portal>
        </SelectRadix.Root>
      </div>
    )
  }
)
