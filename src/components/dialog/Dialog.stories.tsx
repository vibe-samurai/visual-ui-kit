import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import { Dialog, DialogProps } from './Dialog'
import { Button } from '../button'

const meta = {
  component: Dialog,
  title: 'Components/Dialog',
} satisfies Meta<typeof Dialog>

export default meta

type Story = StoryObj<typeof meta>

const DefaultDialogWithState = (args: DialogProps) => {
  const [open, setOpen] = useState(false)

  function handleModalClosed() {
    setOpen(false)
  }

  function handleModalOpened() {
    setOpen(true)
  }

  return (
    <div>
      <Button onClick={handleModalOpened}>Open modal</Button>
      <Dialog {...args} onClose={handleModalClosed} open={open} />
    </div>
  )
}

const TwoButtonsDialogWithState = (args: DialogProps) => {
  const [open, setOpen] = useState(false)

  function handleModalClosed() {
    setOpen(false)
  }

  function handleModalOpened() {
    setOpen(true)
  }

  return (
    <div>
      <Button onClick={handleModalOpened}>Open modal</Button>
      <Dialog
        {...args}
        onCancelButtonClick={handleModalClosed}
        onClose={handleModalClosed}
        open={open}
      />
    </div>
  )
}

export const Default: Story = {
  args: {
    open: true,
    confirmButtonText: 'Confirm',
    onConfirmButtonClick: () => {
      alert('Testing')
    },
    title: 'Dialog',
    children: <p>Lorem text</p>,
  },
  render: args => <DefaultDialogWithState {...args} />,
}

export const TwoButtons: Story = {
  args: {
    open: true,
    confirmButtonText: 'Ok',
    cancelButtonText: 'Cancel',
    onConfirmButtonClick: () => {
      alert('Testing')
    },
    title: 'Dialog',
    children: <p>Lorem text</p>,
  },
  render: args => <TwoButtonsDialogWithState {...args} />,
}
