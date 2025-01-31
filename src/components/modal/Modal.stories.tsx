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

export const Default: Story = {
  args: {
    open: true,
    title: 'Modal',
    children: (
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. At voluptatum voluptas velit
        perferendis quis odit vero obcaecati iste beatae quisquam quas, ullam numquam modi adipisci
        ut magnam sit ea? Nostrum.
      </p>
    ),
  },
  render: (args: ModalProps) => {
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
        <Modal {...args} onClose={handleModalClosed} open={open} />
      </div>
    )
  },
}
