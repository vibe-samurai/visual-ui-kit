import { Card } from './Card'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Card,
  tags: ['autodocs'],
  title: 'Components/Card',
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const CardDemo: Story = {
  args: {
    children: 'Card Demo',
    padding: '24px',
  },
}
