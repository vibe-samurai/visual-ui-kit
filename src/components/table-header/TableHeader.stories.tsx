import { useState } from 'react'

import { Table } from '../table'

import { Sort, TableHeader } from './index'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Table.Root,
  tags: ['autodocs'],
  title: 'Components/Table Header',
} satisfies Meta<typeof Table.Root>

export default meta
type Story = StoryObj<typeof meta>

const columns = [
  {
    key: 'userId',
    title: 'User ID',
  },
  {
    key: 'UserName',
    sortable: true,
    title: 'UserName',
  },
  {
    key: 'ProfileLink',
    title: 'Profile link',
  },
  {
    key: 'DateAdded',
    sortable: true,
    dateFilter: true,
    title: 'Date added',
  },
  {
    key: 'actions',
    title: '',
  },
]

const data = [
  {
    userId: '21331QErQe23',
    UserName: 'Ivan Yakymenko',
    ProfileLink: 'Ivan.sr.yakimenko',
    DateAdded: '26.07.2024',
    actions: 'more',
  },
  {
    userId: '21331QErQe21',
    UserName: 'Kirill_Mikulich',
    ProfileLink: 'Kirill_Mikulich',
    DateAdded: '02.12.2023',
    actions: 'more',
  },
  {
    userId: '21331QErQe28',
    UserName: 'Anton.Antonov',
    ProfileLink: 'Anton.Antonov',
    DateAdded: '12.02.2022',
    actions: 'more',
  },
]

const SortableTable = () => {
  const [sort, setSort] = useState<Sort>(null)

  const handleMoreClick = (id: string) => {
    alert(`Open modal for row: ${id}`)
  }

  const sortedData = [...data].sort((a, b) => {
    if (!sort) return 0
    const key = sort.key as keyof typeof a

    if (a[key] < b[key]) return sort.direction === 'asc' ? -1 : 1
    if (a[key] > b[key]) return sort.direction === 'asc' ? 1 : -1

    return 0
  })

  return (
    <Table.Root>
      <TableHeader columns={columns} onSort={setSort} sort={sort} />
      <Table.Body>
        {sortedData.map(item => (
          <Table.Row key={item.userId}>
            <Table.Cell>{item.userId}</Table.Cell>
            <Table.Cell>{item.UserName}</Table.Cell>
            <Table.Cell>{item.ProfileLink}</Table.Cell>
            <Table.Cell>{item.DateAdded}</Table.Cell>
            <Table.Cell
              withMoreIcon={item.actions === 'more'}
              onClickMore={handleMoreClick}
              rowId={item.userId}
            ></Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  )
}

export const Default: Story = {
  render: () => <SortableTable />,
}
