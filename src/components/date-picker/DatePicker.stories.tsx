import { action } from '@storybook/addon-actions'
import { Meta, StoryObj } from '@storybook/react'
import { addDays } from 'date-fns'

import { DatePicker } from './datePicker'

const meta = {
  component: DatePicker,
  title: 'Components/Date Picker',
} satisfies Meta<typeof DatePicker>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Date',
  },
}

export const Error: Story = {
  args: {
    errorText: 'Error text',
    label: 'Date',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Date',
  },
}

export const NoLabel: Story = {
  args: {},
}

export const DateRange: Story = {
  args: {
    label: 'Date',
    range: true,
  },
}
export const DateRangeSelected: Story = {
  args: {
    endDate: addDays(new Date(), 5),
    label: 'Date',
    range: true,
    startDate: new Date(),
  },
}

export const OnChangeEvent: Story = {
  args: {
    label: 'Date',
    onChange: action('onChange'),
    onClick: action('onClick'),
  },
}
