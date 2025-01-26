import { clsx } from 'clsx'
import s from './text-area.module.scss'

export type TextAreaProps = {
  error?: string
  label?: string
  disabled?: boolean
}

export const TextArea = ({ error, label, disabled }: TextAreaProps) => {
  return (
    <div className={s.container}>
      {label && <label className={clsx(s.label, { [s.disabled]: disabled })}>{label}</label>}
      <textarea className={clsx({ [s.error]: error }, s.textarea)} disabled={disabled}></textarea>
      {error && <span className={s.errorSpan}>{error}</span>}
    </div>
  )
}
