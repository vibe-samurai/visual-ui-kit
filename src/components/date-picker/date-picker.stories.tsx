import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { DateRange } from 'react-day-picker'

import { DatePicker } from './date-picker'

const meta = {
  component: DatePicker,
  tags: ['autodocs'],
} satisfies Meta<typeof DatePicker>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { mode: 'single', selected: undefined },
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [date, setDate] = useState<Date>(new Date())

    return <DatePicker mode={'single'} onSelect={setDate} selected={date} />
  },
}

export const RangeDatePicker: Story = {
  args: { mode: 'range', selected: undefined },
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [date, setDate] = useState<DateRange>({ from: new Date(), to: new Date() })

    return <DatePicker mode={'range'} onSelect={setDate} selected={date} />
  },
}

export const DisabledDatePicker: Story = {
  args: { mode: 'single', selected: undefined },
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [date, setDate] = useState<Date>(new Date())

    return <DatePicker disabled mode={'single'} onSelect={setDate} selected={date} />
  },
}
