import { clsx } from 'clsx'
import { ComponentPropsWithoutRef } from 'react'

import { Typography } from '@/components'
import { DateFilterIcon } from '@assets/icons/DateFilterIcon'
import { SortDownIcon, SortUpIcon } from '@assets/icons/SortIcons'

import { Table } from './../table'
import s from './TableHeader.module.scss'

export type Sort = {
  direction: 'asc' | 'desc'
  key: string
} | null

export type Column = {
  key: string
  sortable?: boolean // если нужна иконка '▲' : '▼'
  title: string
  dateFilter?: boolean // если нужна <DateFilterIcon />
  moreAction?: (id: string) => void // только для передачи коллбэка для модалки для ...
}

export type TableHeaderProps = Omit<
  {
    columns: Column[]
    onSort?: (sort: Sort) => void
    sort?: Sort
  } & ComponentPropsWithoutRef<'thead'>,
  'children'
>

export const TableHeader = ({ columns, onSort, sort, ...restProps }: TableHeaderProps) => {
  const handleSort = (key: string, sortable?: boolean) => () => {
    if (!onSort || sortable !== true) return

    if (sort?.key !== key) {
      return onSort({ direction: 'asc', key })
    }

    return onSort({
      direction: sort.direction === 'asc' ? 'desc' : 'asc',
      key,
    })
  }

  const renderSortIcon = (dateFilter?: boolean, isSorted?: boolean, direction?: 'asc' | 'desc') => {
    if (dateFilter) return <DateFilterIcon />
    if (isSorted) return direction === 'asc' ? <SortUpIcon /> : <SortDownIcon />

    return <SortUpIcon />
  }

  return (
    <Table.Head {...restProps} className={s.root}>
      <Table.Row>
        {columns.map(({ key, sortable, title, dateFilter }) => {
          const isSorted = sort?.key === key
          const classes = clsx(sortable && s.hover)

          return (
            <Table.HeadCell className={classes} key={key} onClick={handleSort(key, sortable)}>
              <Typography as={'span'} variant={'bold-text-14'}>
                {title}
              </Typography>

              {sortable && (
                <span className={s.arrow}>
                  {renderSortIcon(dateFilter, isSorted, sort?.direction)}
                </span>
              )}
            </Table.HeadCell>
          )
        })}
      </Table.Row>
    </Table.Head>
  )
}
