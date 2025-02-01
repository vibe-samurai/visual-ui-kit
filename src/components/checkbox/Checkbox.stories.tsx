import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { Checkbox, CheckboxProps } from '@/components'

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: 'Components/Checkbox',
}

export default meta

type Story = StoryObj<typeof meta>

const CheckboxWithHooks = (args: CheckboxProps) => {
  const [checked, setChecked] = React.useState(args.checked || false)

  const onCheckedChange = () => {
    setChecked(prev => !prev)
    args.onCheckedChange?.(!checked)
  }

  return <Checkbox {...args} checked={checked} onCheckedChange={onCheckedChange} />
}

export const ControlledWithLabel: Story = {
  args: {
    checked: false,
    disabled: false,
    label: 'You agree to our Terms of Service and Privacy Policy',
  },
  render: (args: CheckboxProps) => <CheckboxWithHooks {...args} />,
}

export const Default: Story = {
  args: {
    checked: false,
    disabled: false,
    label: 'You agree to our Terms of Service and Privacy Policy',
  },
  render: args => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%' }}>
      <Checkbox {...args} />
      <Checkbox {...{ ...args, checked: true }} />
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    checked: false,
    disabled: true,
    label: 'You agree to our Terms of Service and Privacy Policy',
  },
  render: args => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%' }}>
      <Checkbox {...args} />
      <Checkbox {...{ ...args, checked: true }} />
    </div>
  ),
}
