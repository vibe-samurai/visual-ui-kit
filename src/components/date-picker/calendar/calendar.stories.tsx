import { Meta, StoryObj } from '@storybook/react'
import { format } from 'date-fns'
import { useState } from 'react'
import { DateRange } from 'react-day-picker'

import { Calendar } from './calendar'

const meta = {
  component: Calendar,
  tags: ['autodocs'],
} satisfies Meta<typeof Calendar>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
  render: args => {
    return <Calendar {...args} />
  },
}

export const SingleCalendar: Story = {
  args: {},
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [date, setDate] = useState<Date>()

    return (
      <>
        <Calendar mode={'single'} onSelect={setDate} selected={date} />
        <div style={{ color: '#AAA' }}>
          {date ? format(date, 'dd/MM/yyyy') : format(new Date(), 'dd/MM/yyyy')}
        </div>
      </>
    )
  },
}

export const RangeCalendar: Story = {
  args: {},
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [date, setDate] = useState<DateRange>()
    const dateFormat = 'dd/MM/yyyy'

    return (
      <>
        <Calendar mode={'range'} onSelect={setDate} selected={date} />
        <div>
          {date?.to && date.from
            ? `${format(date.from, dateFormat)} - ${format(date.to, dateFormat)}`
            : format(new Date(), dateFormat)}
        </div>
      </>
    )
  },
}
