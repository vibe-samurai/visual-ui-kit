import { Meta, StoryObj } from '@storybook/react'

import { Dialog, DialogProps } from './Dialog'
import { Button } from '../button'
import { useState } from 'react'

const meta = {
  component: Dialog,
  title: 'Components/Dialog',
} satisfies Meta<typeof Dialog>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    open: true,
    confirmButtonText: 'fadsfa',
    onConfirmButtonClick: () => {
      console.log('first')
    },
    title: 'Modal',
    children: <p>Lorem text</p>,
  },
  render: (args: DialogProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
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
        <Dialog {...args} open={open} onClose={handleModalClosed} />
      </div>
    )
  },
}

export const TwoButtons: Story = {
  args: {
    open: true,
    confirmButtonText: 'Ok',
    cancelButtonText: 'Cancel',
    onConfirmButtonClick: () => {
      console.log('first')
    },
    title: 'Modal',
    children: <p style={{ marginBottom: '18px' }}>Lorem text</p>,
    invertButtons: false,
  },
  render: (args: DialogProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
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
          open={open}
          onClose={handleModalClosed}
          onCancelButtonClick={handleModalClosed}
          onConfirmButtonClick={handleModalClosed}
        />
      </div>
    )
  },
}
