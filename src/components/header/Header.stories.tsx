import { Meta, StoryObj } from '@storybook/react'

import { Header } from './Header'

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
}

export default meta

export const Default: StoryObj<typeof Header> = {
  args: {
    isAuth: false,
    defaultLocale: 'en',
  },
}

export const Auth: StoryObj<typeof Header> = {
  args: {
    isAuth: true,
    defaultLocale: 'ru',
    count: 3,
  },
}
