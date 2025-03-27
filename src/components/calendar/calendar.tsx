import { clsx } from 'clsx'
import * as React from 'react'
import { DayPicker } from 'react-day-picker'

import { ChevronLeftIcon, ChevronRightIcon } from '@/assets/icons'

import s from './calendar.module.scss'

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
  return (
    <DayPicker
      className={clsx(s['day-picker'], className)}
      classNames={{
        caption: s.caption,
        caption_label: s['caption-label'],
        day: s.day,
        day_button: s['day-button'],
        hidden: s.hidden,
        month: s.month,
        month_caption: s['month-caption'],
        nav: s.nav,
        outside: s.outside,
        range_end: s['range-end'],
        range_middle: s['range-middle'],
        range_start: s['range-start'],
        selected: clsx(s.selected, props.mode === 'range' && s['is-range']),
        today: s.today,
        weekday: s.weekday,
        weekdays: s.weekdays,
        weeks: s.weeks,
        ...classNames,
      }}
      components={{
        Button: ({ className, ...props }) => (
          <button type={'button'} {...props} className={clsx(className, s.button)} />
        ),
        Chevron: ({ orientation, ...props }) => {
          if (orientation === 'left') {
            return <ChevronLeftIcon {...props} className={s.chevron} />
          } else {
            return <ChevronRightIcon {...props} className={s.chevron} />
          }
        },
      }}
      modifiers={{
        weekends: { dayOfWeek: [5, 6] },
      }}
      modifiersClassNames={{
        weekends: clsx(s.weekends),
      }}
      showOutsideDays={showOutsideDays}
      {...props}
    />
  )
}

Calendar.displayName = 'Calendar'

export { Calendar }
