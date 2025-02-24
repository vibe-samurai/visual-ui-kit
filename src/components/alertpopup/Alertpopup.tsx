import { clsx } from 'clsx'
import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import { CrossWhiteIcon } from '@/assets/icons'
import { Typography } from '@/components'

import s from './Alertpopup.module.scss'

type PropsType = {
  alertType: 'error' | 'success'
  callback?: () => void
  duration?: number
  message: string
}

export const Alertpopup = (props: PropsType): React.ReactElement => {
  const { alertType, callback, duration = 5000, message } = props
  const [open, setOpen] = useState(true)
  const [alertMessage, setAlertMessage] = useState<null | string>(message)

  const handleAlertPopupClose = (): void => {
    setOpen(false)
    setAlertMessage(null)
    if (callback) {
      callback()
    }
  }

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>

    if (message) {
      setOpen(true)

      timer = setTimeout(() => {
        handleAlertPopupClose()
      }, duration)
    }

    return () => clearTimeout(timer)
  }, [])

  return createPortal(
    open && (
      <div
        aria-live={'assertive'}
        className={clsx(s.container, alertType === 'success' ? s.success : s.error)}
        role={'alert'}
      >
        <Typography variant={'regular-text-16'} className={s.message}>
          {alertType === 'error' && <span>Error! </span>}
          {alertMessage}
        </Typography>
        <CrossWhiteIcon className={s.cross} onClick={handleAlertPopupClose} />
      </div>
    ),
    document.querySelector('body') as HTMLElement
  )
}
