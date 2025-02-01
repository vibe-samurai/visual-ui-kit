import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import { Modal, ModalProps } from './Modal'
import { Button } from '../button'

const meta = {
  component: Modal,
  title: 'Components/Modal',
} satisfies Meta<typeof Modal>

export default meta

type Story = StoryObj<typeof meta>

const ModalWithState = (args: ModalProps) => {
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
      <Modal {...args} onClose={handleModalClosed} open={open} />
    </div>
  )
}

export const Default: Story = {
  args: {
    open: true,
    title: 'Modal',
    children:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At voluptatum voluptas velit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. At voluptatum voluptas velit',
  },
  render: args => <ModalWithState {...args} />,
}
