import { clsx } from 'clsx'

import { Button } from '@/components'
import { Modal, ModalProps } from '@components/modal/Modal'

import s from './dialog.module.scss'

export type DialogProps = {
  cancelButtonText?: string

  confirmButtonText: string
  /** If true, confirm button will be secondary and cancel button will be primary
   * defaults to true
   * */
  invertButtonsStyle?: boolean
  reverseButtonsPosition?: boolean
  fullWidthButtonMode?: boolean

  /** If not provided, onClose will be executed on Cancel click*/
  onCancelButtonClick?: () => void
  onConfirmButtonClick: () => void
} & ModalProps

export const Dialog = ({
  cancelButtonText,
  children,
  confirmButtonText,
  invertButtonsStyle = false,
  reverseButtonsPosition = false,
  fullWidthButtonMode = false,
  onCancelButtonClick,
  onConfirmButtonClick,
  ...rest
}: DialogProps) => {
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
    buttonsBox: clsx(
      s.buttonsBox,
      showCancelButton && s.hasCancelButton,
      showCancelButton && reverseButtonsPosition && s.reverseButtonsPosition
    ),
  }

  const confirmButtonVariant = getConfirmButtonVariant(invertButtonsStyle, showCancelButton)
  const cancelButtonVariant = invertButtonsStyle ? 'outlined' : 'primary'

  return (
    <Modal {...rest}>
      {children}
      <div className={classNames.buttonsBox}>
        <Button
          onClick={handleConfirmButtonClicked}
          variant={confirmButtonVariant}
          fullWidth={fullWidthButtonMode}
        >
          {confirmButtonText}
        </Button>
        {showCancelButton && (
          <Button onClick={handleCancelButtonClicked} variant={cancelButtonVariant}>
            {cancelButtonText}
          </Button>
        )}
      </div>
    </Modal>
  )
}

const getConfirmButtonVariant = (
  invertButtonsStyle: boolean,
  showCancelButton: boolean
): 'primary' | 'outlined' => {
  if (showCancelButton) {
    return invertButtonsStyle ? 'primary' : 'outlined'
  }

  return 'primary'
}
