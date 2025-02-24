import { Meta, StoryObj } from '@storybook/react'

import { Header } from '@/components/header/Header'

const meta = {
  component: Header,
  title: 'Components/Header',
} satisfies Meta<typeof Header>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    isAuth: false,
  },
}

export const IsAuth: Story = {
  args: {
    isAuth: true,
    loginLink: '/auth/login',
    signupLink: '/auth/signup',
  },
}
