import { ComponentProps } from 'react'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from '@radix-ui/react-dialog'
import { clsx } from 'clsx'

import s from './modal.module.scss'
import Close from '@/assets/icons/Close'

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
} & ComponentProps<'div'>

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
                <h2 className={classNames.title}>{title}</h2>
              </DialogTitle>
              {showCloseButton && (
                <DialogClose className={classNames.closeButton}>
                  <Close />
                </DialogClose>
              )}
            </header>
            <div className={classNames.contentBox}>{children}</div>
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
