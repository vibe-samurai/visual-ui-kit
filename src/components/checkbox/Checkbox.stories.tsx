import { useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from '@/components'

const meta = {
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Components/Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta

type Story = StoryObj<typeof meta>

// Создаем отдельный компонент для контролируемой версии
const ControlledCheckbox = (args: React.ComponentProps<typeof Checkbox>) => {
  const [checked, setChecked] = useState(false)

  return (
    <Checkbox
      {...args}
      checked={checked}
      label={'Click here'}
      onChange={() => setChecked(!checked)}
    />
  )
}

export const DefaultCheck: Story = {
  args: {
    disabled: false,
    checked: true,
  },
}
export const DefaultUncheck: Story = {
  args: {
    disabled: false,
    checked: false,
  },
}
export const LabelCheck: Story = {
  args: {
    disabled: false,
    checked: true,
    label: 'Check-box',
  },
}
export const LabelCheckUncheck: Story = {
  args: {
    disabled: false,
    checked: false,
    label: 'Check-box',
  },
}
export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
export const DisabledCheck: Story = {
  args: {
    disabled: true,
    checked: true,
  },
}
export const DisabledLabel: Story = {
  args: {
    disabled: true,
    checked: true,
    label: 'Check-box',
  },
}

export const Controlled: Story = {
  render: args => <ControlledCheckbox {...args} />,
}
