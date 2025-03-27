'use client'

import clsx from 'clsx'
import React, { useState } from 'react'

import styles from './Pagination.module.scss'

export type PaginationProps = {
  currentPage: number
  onPageChange: (page: number) => void
  onRowsPerPageChange: (rowsPerPage: number) => void
  rowsPerPage?: number
  rowsPerPageOptions: number[]
  totalPages: number
}

export const Pagination = ({
  currentPage,
  onPageChange,
  onRowsPerPageChange,
  rowsPerPageOptions,
  totalPages,
}: PaginationProps) => {
  const [selectedRowsPerPage, setSelectedRowsPerPage] = useState(rowsPerPageOptions[0])

  const getVisiblePages = () => {
    const pages: (number | string)[] = []
    const maxVisiblePages = 5

    if (currentPage <= 3) {
      for (let i = 1; i <= Math.min(maxVisiblePages, totalPages); i++) {
        pages.push(i)
      }
      if (totalPages > 5) {
        pages.push('...', totalPages)
      }
    } else if (currentPage >= totalPages - 2) {
      pages.push(1, '...')
      for (let i = totalPages - maxVisiblePages + 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      pages.push(1, '...')
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        if (i > 1 && i < totalPages) {
          pages.push(i)
        }
      }
      pages.push('...', totalPages)
    }

    return pages
  }

  const paginationRange = getVisiblePages()

  const handleRowsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const rowsPerPage = parseInt(event.target.value, 10)

    setSelectedRowsPerPage(rowsPerPage)
    onRowsPerPageChange(rowsPerPage)
    onPageChange(1)
  }

  return (
    <div className={styles.pagination}>
      <button
        type={'button'}
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className={styles.button}
      >
        {'<'}
      </button>

      {paginationRange.map((page, index) =>
        typeof page === 'number' ? (
          <button
            type={'button'}
            key={index}
            onClick={() => onPageChange(page)}
            className={clsx(styles.pageButton, page === currentPage ? styles.active : '')}
          >
            {page}
          </button>
        ) : (
          <span key={index} className={styles.ellipsis}>
            {page}
          </span>
        )
      )}

      <button
        type={'button'}
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className={styles.button}
      >
        {'>'}
      </button>

      <div className={styles.rowsPerPage}>
        <label htmlFor={'rows-per-page'}>Show</label>
        <select
          id={'rows-per-page'}
          value={selectedRowsPerPage}
          onChange={handleRowsPerPageChange}
          className={styles.select}
        >
          {rowsPerPageOptions.map((option, index) => (
            <option key={index} value={option} className={styles.option}>
              {option}
            </option>
          ))}
        </select>
        <label>on page</label>
      </div>
    </div>
  )
}
