<<<<<<< HEAD
import { ComponentProps } from 'react'

=======
>>>>>>> e3289ef77e6b61ade85137513c98f6019775fda1
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from '@radix-ui/react-dialog'
import { clsx } from 'clsx'
<<<<<<< HEAD

import s from './Modal.module.scss'
import CloseIcon from '@assets/icons/CloseIcon'

=======
import React from 'react'

import { Typography } from '@/components'
import CloseIcon from '@assets/icons/CloseIcon'

import s from './modal.module.scss'

>>>>>>> e3289ef77e6b61ade85137513c98f6019775fda1
export type ModalSize = 'lg' | 'md' | 'sm'

export type ModalProps = {
  onClose?: () => void
  /** The controlled open state of the dialog */
  open: boolean
  showCloseButton?: boolean
  /** 'sm' | 'md' | 'lg':
   * sm - 367px,
   * md - 532px,
   * lg - 764px.
   * For other values use className */
  size?: ModalSize
  title?: string
<<<<<<< HEAD
} & ComponentProps<'div'>
=======
} & React.ComponentProps<'div'>
>>>>>>> e3289ef77e6b61ade85137513c98f6019775fda1

export const Modal = ({
  children,
  className,
  onClose,
  open = false,
  showCloseButton = true,
  size = 'md',
  title,
}: ModalProps) => {
  function handleModalClosed() {
    onClose?.()
  }
<<<<<<< HEAD
=======

>>>>>>> e3289ef77e6b61ade85137513c98f6019775fda1
  const classNames = {
    closeButton: s.closeButton,
    content: getContentClassName(size, className),
    contentBox: s.contentBox,
    header: s.header,
    overlay: s.overlay,
    title: s.title,
  }

  return (
    <Dialog onOpenChange={handleModalClosed} open={open}>
      {open && (
        <DialogPortal forceMount>
          <DialogOverlay className={s.overlay} />
          <DialogContent className={classNames.content} forceMount>
            <header className={classNames.header}>
              <DialogTitle asChild>
<<<<<<< HEAD
                <h2 className={classNames.title}>{title}</h2>
=======
                <Typography as={'h2'} variant={'h2'}>
                  {title}
                </Typography>
>>>>>>> e3289ef77e6b61ade85137513c98f6019775fda1
              </DialogTitle>
              {showCloseButton && (
                <DialogClose className={classNames.closeButton}>
                  <CloseIcon />
                </DialogClose>
              )}
            </header>
<<<<<<< HEAD
            <div className={classNames.contentBox}>{children}</div>
=======
            <div className={classNames.contentBox}>
              {children}
            </div>
>>>>>>> e3289ef77e6b61ade85137513c98f6019775fda1
          </DialogContent>
        </DialogPortal>
      )}
    </Dialog>
  )
}

function getContentClassName(size: ModalSize, className?: string) {
  const sizeClassName = getSizeClassName(size)

  return clsx(className, s.content, sizeClassName)
}

function getSizeClassName(size: ModalSize) {
  if (size === 'sm') {
    return s.sm
  }
  if (size === 'md') {
    return s.md
  }
  if (size === 'lg') {
    return s.lg
  }
}
