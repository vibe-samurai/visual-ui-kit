import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover'
import { clsx } from 'clsx'
import { format } from 'date-fns'
import React, { useState } from 'react'
import { DateRange } from 'react-day-picker'

import { CalendarIcon as CalendarClassic, CalendarOutlineIcon } from '@/assets/icons'
import { Button, Calendar } from '@/components'

import s from './datePicker.module.scss'

interface DatePickerProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  date?: Date
  endDate?: Date
  errorText?: string
  label?: string
  range?: boolean
  startDate?: Date
  onChange?: (date: Date | DateRange | undefined) => void
}

export function DatePicker({
  className,
  date,
  endDate,
  errorText,
  label,
  range = false,
  startDate,
  onChange,
  ...props
}: DatePickerProps) {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: startDate,
    to: endDate,
  })

  const [selected, setSelected] = useState<Date | undefined>(date)

  const [open, setOpen] = useState(false)

  const dateFormat = 'dd/LL/yyyy'
  let popoverText: React.JSX.Element | string

  if (range && dateRange?.from && dateRange?.to) {
    popoverText = `${format(dateRange.from, dateFormat)} - ${format(dateRange.to, dateFormat)}`
  } else if (selected) {
    popoverText = format(selected, dateFormat)
  } else {
    popoverText = <span>Pick a date</span>
  }

  const handleSelect = (date: Date | DateRange | undefined) => {
    if (range) {
      setDateRange(date as DateRange)
    } else {
      setSelected(date as Date)
    }
    onChange?.(date)
  }

  const CalendarIcon = open ? CalendarClassic : CalendarOutlineIcon

  return (
    <div className={clsx(s['date-picker'], className)}>
      <Popover onOpenChange={setOpen}>
        {label && (
          <label className={clsx(s.label, props.disabled && s['is-disabled'])}>{label}</label>
        )}
        <PopoverTrigger asChild>
          <Button
            className={clsx(
              s.button,
              range && s['is-range'],
              open && s['is-open'],
              errorText && s['is-error']
            )}
            id={'date'}
            variant={'outlined'}
            {...props}
          >
            {popoverText}
            <CalendarIcon className={clsx(s.icon, errorText && s['is-error'])} />
          </Button>
        </PopoverTrigger>
        <span className={s['error-text']}>{errorText ? errorText : ''}</span>
        <PopoverContent align={'start'} className={s['popover-content']}>
          {range ? (
            <Calendar
              defaultMonth={dateRange?.from || new Date()}
              mode={'range'}
              onSelect={handleSelect}
              selected={dateRange}
            />
          ) : (
            <Calendar
              defaultMonth={date}
              mode={'single'}
              onSelect={handleSelect}
              selected={selected}
            />
          )}
        </PopoverContent>
      </Popover>
    </div>
  )
}
