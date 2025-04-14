import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'

import { Header, Props } from './Header'

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
}

export default meta

const HeaderWithLocale = (args: Omit<Props, 'onLocaleChange'>) => {
  const [locale, setLocale] = useState<'en' | 'ru'>(args.locale || 'en')

  return (
    <Header
      {...args}
      locale={locale}
      onLocaleChange={lang => {
        console.log('Language changed:', lang)
        setLocale(lang)
      }}
    />
  )
}

export const Default: StoryObj<typeof Header> = {
  render: args => <HeaderWithLocale {...args} />,
  args: {
    isAuth: false,
    locale: 'en',
  },
}

export const Auth: StoryObj<typeof Header> = {
  render: args => <HeaderWithLocale {...args} />,
  args: {
    isAuth: true,
    locale: 'ru',
    count: 3,
  },
}
