import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import { Pagination } from './Pagination'

const meta: Meta<typeof Pagination> = {
  argTypes: {
    currentPage: { control: { min: 1, type: 'number' } },
    onPageChange: { action: 'page changed' },
    onRowsPerPageChange: { action: 'rows per page changed' },

    totalPages: { control: { min: 1, type: 'number' } },
  },
  component: Pagination,
  title: 'Components/Pagination',
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    currentPage: 1,
    rowsPerPageOptions: [5, 10, 25],
    totalPages: 25,
  },
  render: function Render(args) {
    const [currentPage, setCurrentPage] = useState(args.currentPage || 1)

    const handlePageChange = (page: number) => {
      setCurrentPage(page)
      args.onPageChange(page)
    }

    return <Pagination {...args} currentPage={currentPage} onPageChange={handlePageChange} />
  },
}
