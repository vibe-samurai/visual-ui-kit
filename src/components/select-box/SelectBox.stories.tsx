import { Meta, StoryObj } from '@storybook/react'

import { RussianFlagIcon } from '@assets/icons/RussianFlagIcon'
import { UKFlagIcon } from '@assets/icons/UKFlagIcon'

import { SelectItem } from './select-item'
import { SelectBox } from './SelectBox'

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
  title: 'Components/SelectBox',
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

export const WithFlags: Story = {
  args: {
    children: (
      <>
        <SelectItem value={'en'}>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <UKFlagIcon />
            English
          </div>
        </SelectItem>
        <SelectItem value={'ru'}>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <RussianFlagIcon />
            Russian
          </div>
        </SelectItem>
      </>
    ),
    renderValue: value => (
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        {value === 'en' ? <UKFlagIcon /> : <RussianFlagIcon />}
        {value === 'en' ? 'English' : 'Russian'}
      </div>
    ),
    placeholder: (
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <RussianFlagIcon />
        Russian
      </div>
    ),
  },
}
