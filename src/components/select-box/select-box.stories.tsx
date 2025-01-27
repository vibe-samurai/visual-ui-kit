import { Meta, StoryObj } from '@storybook/react'

import { SelectBox } from './select-box'
import { SelectItem } from './select-item/select-item'

const meta: Meta<typeof SelectBox> = {
  argTypes: {
    label: {
      description: 'Label text to display above the Select.',
    },
    disabled: {
      description: 'Disables the Select options and applies disabled styles.',
      control: 'boolean',
    },
  },
  component: SelectBox,
  tags: ['autodocs'],
  title: 'UI/SelectBox',
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <>
        <SelectItem value={'Select-box-1'}>First-select-box</SelectItem>
        <SelectItem value={'Select-box-2'}>Second-select-box</SelectItem>
        <SelectItem value={'Select-box-3'}>Third-select-box</SelectItem>
      </>
    ),
    label: 'Select-box',
    placeholder: 'Select-box',
  },
}

export const Disabled: Story = {
  args: {
    children: (
      <>
        <SelectItem value={'Select-box-1'}>Uno-box</SelectItem>
        <SelectItem value={'Select-box-2'}>Dos-box</SelectItem>
        <SelectItem value={'Select-box-2'}>Tres-box</SelectItem>
      </>
    ),
    disabled: true,
    label: 'Select-box',
    placeholder: 'Select-box',
  },
}
