<<<<<<< HEAD
import { FC } from 'react'

import { Button } from '../button'
import { Modal, ModalProps } from '../modal'
import { clsx } from 'clsx'

import s from './Dialog.module.scss'
=======
import { clsx } from 'clsx'

import { Button } from '@/components'
import { Modal, ModalProps } from '@components/modal/Modal'

import s from './dialog.module.scss'
>>>>>>> e3289ef77e6b61ade85137513c98f6019775fda1

export type DialogProps = {
  cancelButtonText?: string

  confirmButtonText: string
  /** If true, confirm button will be secondary and cancel button will be primary
   * defaults to true
   * */
  invertButtons?: boolean

  /** If not provided, onClose will be executed on Cancel click*/
  onCancelButtonClick?: () => void
  onConfirmButtonClick: () => void
} & ModalProps

<<<<<<< HEAD
export const Dialog: FC<DialogProps> = ({
=======
export const Dialog = ({
>>>>>>> e3289ef77e6b61ade85137513c98f6019775fda1
  cancelButtonText,
  children,
  confirmButtonText,
  invertButtons = true,
  onCancelButtonClick,
  onConfirmButtonClick,
  ...rest
<<<<<<< HEAD
}) => {
=======
}: DialogProps) => {
>>>>>>> e3289ef77e6b61ade85137513c98f6019775fda1
  const { onClose } = rest
  const showCancelButton = !!cancelButtonText

  function handleConfirmButtonClicked() {
    onConfirmButtonClick()
  }

  function handleCancelButtonClicked() {
    if (onCancelButtonClick) {
      onCancelButtonClick()
    } else if (onClose) {
      onClose()
    }
  }

  const classNames = {
    buttonsBox: clsx(s.buttonsBox, showCancelButton && s.hasCancelButton),
  }

  const confirmButtonVariant = getConfirmButtonVariant(invertButtons, showCancelButton)
  const cancelButtonVariant = invertButtons ? 'primary' : 'secondary'

  return (
    <Modal {...rest}>
      {children}
      <div className={classNames.buttonsBox}>
        {showCancelButton && (
          <Button onClick={handleCancelButtonClicked} variant={cancelButtonVariant}>
            {cancelButtonText}
          </Button>
        )}
        <Button onClick={handleConfirmButtonClicked} variant={confirmButtonVariant}>
          {confirmButtonText}
        </Button>
      </div>
    </Modal>
  )
}

const getConfirmButtonVariant = (
  invertButtons: boolean,
  showCancelButton: boolean
): 'primary' | 'secondary' => {
  if (showCancelButton) {
    return invertButtons ? 'secondary' : 'primary'
  }

  return 'primary'
}
