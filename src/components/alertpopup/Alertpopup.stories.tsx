import { Meta, StoryObj } from '@storybook/react'

import { Alertpopup } from './alertpopup'

const meta = {
  component: Alertpopup,
  title: 'Components/Alertpopup',
} satisfies Meta<typeof Alertpopup>

export default meta

type Story = StoryObj<typeof meta>

export const Success: Story = {
  args: {
    alertType: 'success',
    duration: 5000,
    message: 'Name was successfully changed',
  },
}

export const Error: Story = {
  args: {
    alertType: 'error',
    duration: 5000,
    message: 'E-mail is invalid',
  },
}
