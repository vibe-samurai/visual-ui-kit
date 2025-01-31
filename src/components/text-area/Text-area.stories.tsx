import type { Meta, StoryObj } from '@storybook/react'
import { TextArea } from './Text-area'

const meta: Meta<typeof TextArea> = {
  argTypes: {
    error: {
      description: 'String describing the error message to display below the textarea.',
    },
    label: {
      description: 'Label text to display above the textarea.',
    },
    disabled: {
      description: 'Disables the textarea and applies disabled styles.',
      control: 'boolean',
    },
  },
  component: TextArea,
  tags: ['autodocs'],
  title: 'UI/TextArea',
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const WithLabel: Story = {
  args: {
    label: 'Text Area',
  },
}

export const WithError: Story = {
  args: {
    label: 'Text Area',
    error: 'This field is required',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Text Area',
    disabled: true,
  },
}
