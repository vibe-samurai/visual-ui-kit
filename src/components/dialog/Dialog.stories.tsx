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
        onConfirmButtonClick={handleModalClosed}
        open={open}
      />
    </div>
  )
}

export const Default: Story = {
  args: {
    open: true,
    confirmButtonText: 'confirm',
    onConfirmButtonClick: () => {
      alert('Testing')
    },
    title: 'Modal',
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
      alert('first')
    },
    title: 'Modal',
    children: <p style={{ marginBottom: '18px' }}>Lorem text</p>,
    invertButtons: false,
  },
  render: args => <TwoButtonsDialogWithState {...args} />,
}
