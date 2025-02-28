import { clsx } from 'clsx'
import { ComponentPropsWithoutRef } from 'react'

import s from './TextArea.module.scss'

export type TextAreaProps = ComponentPropsWithoutRef<'textarea'> & {
  error?: string
  label?: string
  disabled?: boolean
}

export const TextArea = ({ error, label, disabled, ...rest }: TextAreaProps) => {
  return (
    <div className={s.container}>
      {label && <label className={clsx(s.label, { [s.disabled]: disabled })}>{label}</label>}
      <textarea
        className={clsx({ [s.error]: error }, s.textarea)}
        disabled={disabled}
        {...rest}
      ></textarea>
      {error && <span className={s.errorSpan}>{error}</span>}
    </div>
  )
}
