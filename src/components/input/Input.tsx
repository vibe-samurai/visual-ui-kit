import React, { ChangeEvent, KeyboardEvent, useState } from 'react'

import { HidePassIcon, SearchIcon, ShowPassIcon } from '@/assets/icons'
import { Typography } from '@/components'
import { clsx } from 'clsx'

import s from './Input.module.scss'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode
  errorMessage?: string
  label?: string
  onChangeValue?: (value: string) => void
  onEnter?: (e: KeyboardEvent<HTMLInputElement>) => void
  type?: 'email' | 'password' | 'search' | 'text'
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      disabled,
      errorMessage,
      label,
      onChange,
      onChangeValue,
      onEnter,
      onKeyDown,
      placeholder,
      value,
      type = 'text',
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false)
    const [isFocused, setIsFocused] = useState(false)

    const isPassword = type === 'password'
    const isSearch = type === 'search'
    const finalType = isPassword && showPassword ? 'text' : type

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e)
      onChangeValue?.(e.currentTarget.value)
    }

    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.code === 'Enter') {
        onEnter?.(e)
      }
      onKeyDown?.(e)
    }

    const togglePasswordVisibility = () => setShowPassword(prev => !prev)

    const renderPasswordToggleIcon = () =>
      showPassword ? (
        <HidePassIcon />
      ) : (
        <ShowPassIcon className={s['password-toggle-icon']} data-disabled={disabled} />
      )

    const styles = {
      input: clsx(s.input, isSearch && s['input-search'], isFocused && s['input-focused']),
      root: clsx(s['input-container'], className),
      searchIcon: clsx(s['search-icon-fill'], isFocused && s['search-icon-fill-focus']),
    }

    return (
      <div className={styles.root}>
        {label && (
          <Typography as={'label'} className={s.label} variant={'regular-text-14'}>
            {label}
          </Typography>
        )}
        <div className={s['input-wrapper']}>
          {isSearch && (
            <span className={s['search-icon']}>
              <SearchIcon
                className={styles.searchIcon}
                data-disabled={disabled}
                data-value={value}
                data-error={errorMessage}
              />
            </span>
          )}
          <input
            aria-invalid={!!errorMessage}
            aria-label={label}
            className={styles.input}
            data-error={errorMessage}
            disabled={disabled}
            onBlur={() => setIsFocused(false)}
            onChange={handleChange}
            onFocus={() => setIsFocused(true)}
            onKeyDown={handleKeyPress}
            placeholder={isFocused ? '' : placeholder}
            ref={ref}
            type={finalType}
            {...props}
          />
          {isPassword && (
            <button
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              className={s['password-toggle']}
              disabled={disabled}
              onClick={togglePasswordVisibility}
              type={'button'}
            >
              {renderPasswordToggleIcon()}
            </button>
          )}
        </div>
        {errorMessage && (
          <div className={s['input-error-message']}>
            <Typography variant={'regular-text-14'}>{errorMessage}</Typography>
          </div>
        )}
      </div>
    )
  }
)
