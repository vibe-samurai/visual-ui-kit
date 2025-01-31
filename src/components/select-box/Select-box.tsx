import {
  ComponentPropsWithoutRef,
  ForwardedRef,
  ReactNode,
  forwardRef,
  useId,
  useState,
} from 'react'
import * as SelectRadix from '@radix-ui/react-select'
import clsx from 'clsx'
import s from './Select-box.module.scss'
import { Typography } from '../typography/Typography'
import { ArrowDownIcon } from '@assets/icons/ArrowDownIcon'

export type SelectProps = {
  id?: string
  label?: string
  placeholder?: ReactNode
  small?: boolean
  renderValue?: (value: string) => ReactNode
} & ComponentPropsWithoutRef<typeof SelectRadix.Root>

export const SelectBox = forwardRef<HTMLButtonElement, SelectProps>(
  (
    { children, id, label, placeholder, small, renderValue, ...rest },
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    const generatedId = useId()
    const idToUse = id ?? generatedId
    const [internalValue, setInternalValue] = useState(rest.defaultValue)
    const value = rest.value !== undefined ? rest.value : internalValue

    const handleValueChange = (value: string) => {
      setInternalValue(value)
      rest.onValueChange?.(value)
    }

    return (
      <div className={s.wrapper}>
        {!!label && (
          <Typography className={s.label} variant="regular-text-14">
            <label htmlFor={idToUse}>{label}</label>
          </Typography>
        )}
        <SelectRadix.Root {...rest} value={value} onValueChange={handleValueChange}>
          <SelectRadix.Trigger className={clsx(s.trigger, small && s.small)} id={idToUse} ref={ref}>
            <div className={s.valueContainer}>
              {renderValue ? (
                <SelectRadix.Value placeholder={placeholder} asChild>
                  {renderValue(value as string)}
                </SelectRadix.Value>
              ) : (
                <SelectRadix.Value placeholder={placeholder} />
              )}
            </div>

            <ArrowDownIcon className={s.dropDownArrowIcon} height={24} width={24} />
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
