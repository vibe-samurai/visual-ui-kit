import { clsx } from 'clsx'
import { useState } from 'react'
import { PropsRangeRequired, PropsSingleRequired } from 'react-day-picker'

import { Calendar } from './calendar/Calendar'
import s from './Date-picker.module.scss'
import { DateFormatter } from './utils/DateFormatter/DateFormatter'
import { Popover, PopoverContent, PopoverTrigger } from './utils/Popover/Popover'
import { validateDate } from './utils/validateDate'

type SingleModeProps = Pick<PropsSingleRequired, 'mode' | 'onSelect' | 'selected'>
type RangeModeProps = Pick<PropsRangeRequired, 'mode' | 'onSelect' | 'selected'>
type DatePickerProps = { disabled?: boolean } & (RangeModeProps | SingleModeProps)
type ErrorMessageProps = {
  mode: 'range' | 'single'
}

export const DatePicker = ({ disabled = false, ...props }: DatePickerProps) => {
  const [active, setActivate] = useState(false)
  const [error, setError] = useState(false)

  const onSelectHandler = (selectedDate: Date) => {
    setError(!validateDate(selectedDate))
  }

  const className = clsx(s.button, {
    [s.button_active]: active,
    [s.button_disabled]: disabled,
    [s.button_error]: error,
    [s.range]: props.mode === 'range',
    [s.single]: props.mode === 'single',
  })

  const ErrorMessage = ({ mode }: ErrorMessageProps) => {
    return mode === 'single' ? (
      <span className={s.error}>Error</span>
    ) : (
      <span className={s.error}>Error, select current month or last month</span>
    )
  }

  return (
    <Popover onOpenChange={setActivate}>
      <div className={s.wrapper}>
        <PopoverTrigger asChild={false} className={className} disabled={disabled}>
          <DateFormatter
            className={s.dateFormatter}
            date={props.selected}
            disabled={disabled}
            error={error}
          />
        </PopoverTrigger>
        {error && <ErrorMessage mode={props.mode} />}
      </div>
      <PopoverContent align={'start'}>
        <Calendar onDayClick={onSelectHandler} {...props} required />
      </PopoverContent>
    </Popover>
  )
}
