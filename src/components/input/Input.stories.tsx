import { Meta, StoryObj } from '@storybook/react'

import { Input } from './Input'

const meta = {
  component: Input,
  title: 'Components/Input',
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: 'email',
    label: 'Email',
    placeholder: 'Epam@epam.com',
    type: 'email',
  },
}

export const Password: Story = {
  args: {
    id: 'password',
    label: 'Password',
    placeholder: 'Epam@epam.com',
    type: 'password',
  },
}

export const SearchMode: Story = {
  args: {
    id: 'search',
    placeholder: 'Input search',
    type: 'search',
  },
}

export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%' }}>
      <Input
        id={'disabled-input'}
        label={'Email'}
        placeholder={'Epam@epam.com'}
        type={'text'}
        disabled
      />
      <Input
        id={'disabled-password'}
        label={'Password'}
        placeholder={'Password'}
        type={'password'}
        disabled
      />
      <div style={{ paddingTop: '20px' }}>
        <Input id={'disabled-search'} placeholder={'Input search'} type={'search'} disabled />
      </div>
    </div>
  ),
}

export const ErrorMessage: Story = {
  args: {
    errorMessage: 'Error text',
    id: 'error-input',
    label: 'Email',
    placeholder: 'Epam@epam.com',
    type: 'text',
  },
  render: args => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%' }}>
      <Input {...args} />
      <Input {...{ ...args, id: 'error-password', label: 'Password', type: 'password' }} />
      <Input
        {...{
          ...args,
          id: 'error-search',
          label: 'Search',
          placeholder: 'Input search',
          type: 'search',
        }}
      />
    </div>
  ),
}
