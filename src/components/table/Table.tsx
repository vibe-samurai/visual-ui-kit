import { clsx } from 'clsx'
import React, { ComponentPropsWithoutRef } from 'react'

import { MoreIcon } from '@/assets'

import s from './Table.module.scss'

const Root = ({ className, ...rest }: ComponentPropsWithoutRef<'table'>) => {
  const styles = clsx(s.root, className)

  return <table className={styles} {...rest} />
}

const Head = ({ className, ...rest }: ComponentPropsWithoutRef<'thead'>) => {
  const classes = clsx(s.head, className)

  return <thead className={classes} {...rest} />
}

const HeadCell = ({ className, ...rest }: ComponentPropsWithoutRef<'th'>) => {
  const classes = clsx(s.headCell, className)

  return <th className={classes} {...rest} />
}

const Body = ({ className, ...rest }: ComponentPropsWithoutRef<'tbody'>) => {
  const classes = clsx(s.body, className)

  return <tbody className={classes} {...rest} />
}

const Row = ({ className, ...rest }: ComponentPropsWithoutRef<'tr'>) => {
  const classes = clsx(s.row, className)

  return <tr className={classes} {...rest} />
}

export type TableCellProps = ComponentPropsWithoutRef<'td'> & {
  onClickMore?: (id: string) => void
  rowId?: string
  withMoreIcon?: boolean
}

const Cell = ({
  className,
  onClickMore,
  rowId,
  withMoreIcon,
  children,
  ...rest
}: TableCellProps) => {
  const handleClick = (e: React.MouseEvent) => {
    if (onClickMore && rowId) {
      e.stopPropagation()
      onClickMore(rowId)
    }
  }

  return (
    <td className={clsx(s.cell, className)} {...rest}>
      {withMoreIcon && (
        <button
          type={'button'}
          onClick={onClickMore ? handleClick : undefined}
          className={clsx(s.moreButton, { [s.clickable]: onClickMore })}
        >
          <MoreIcon />
        </button>
      )}
      {children}
    </td>
  )
}

export const Table = { Body, Cell, Head, HeadCell, Root, Row }
