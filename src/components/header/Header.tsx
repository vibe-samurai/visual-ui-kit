import React, { useState } from 'react'

import { Button, SelectBox, Typography } from '@/components'
import { BellOutlineIcon } from '@assets/icons/BellOutlineIcon'
import { RussianFlagIcon } from '@assets/icons/RussianFlagIcon'
import { UKFlagIcon } from '@assets/icons/UKFlagIcon'
import { SelectItem } from '@components/select-box/select-item'

import s from './Header.module.scss'

type LinkProps = {
  href: string
  children: React.ReactNode
}

export type Props = {
  isAuth: boolean
  loginLink?: string
  signupLink?: string
  LinkComponent?: React.ComponentType<LinkProps>
  count?: number
  defaultLocale: 'ru' | 'en'
  handleOpenNotifications: (value: boolean) => void
  locale: 'ru' | 'en'
  onLocaleChange: (lang: 'en' | 'ru') => void
}

const LOCALE_TEXTS = {
  ru: {
    login: 'Вход',
    signup: 'Регистрация',
    russian: 'Русский',
    english: 'Английский',
  },
  en: {
    login: 'Log In',
    signup: 'Sign Up',
    russian: 'Russian',
    english: 'English',
  },
}

const Header = ({
  isAuth,
  loginLink,
  signupLink,
  LinkComponent,
  count = 0,
  locale,
  onLocaleChange,
}: Props) => {
  const texts = LOCALE_TEXTS[locale as 'en' | 'ru']

  const handleLocaleChange = (lang: string) => {
    onLocaleChange(lang as 'ru' | 'en')
  }

  const renderLink = (href: string | undefined, children: React.ReactNode) => {
    if (LinkComponent) {
      return <LinkComponent href={href || '#'}>{children}</LinkComponent>
    }

    return <a href={href || '#'}>{children}</a>
  }

  return (
    <header className={s['header-container']}>
      <Typography as={'a'} variant={'large'} href={'/'}>
        Visual-Vibe
      </Typography>
      <div className={s['functional-container']}>
        <div className={s['select']}>
          {isAuth && (
            <div className={s.bell} onClick={() => handleOpenNotifications}>
              <BellOutlineIcon />
              {count > 0 && <div className={s.count}>{count}</div>}
            </div>
          )}
          <SelectBox
            placeholder={
              <div className={s['select-value']}>
                {locale === 'ru' ? <RussianFlagIcon /> : <UKFlagIcon />}
                {locale === 'ru' ? texts.russian : texts.english}
              </div>
            }
            onValueChange={handleLocaleChange}
            value={locale}
          >
            <SelectItem value={'en'}>
              <div className={s['select-value']}>
                <UKFlagIcon />
                <span>{texts.english}</span>
              </div>
            </SelectItem>
            <SelectItem value={'ru'}>
              <div className={s['select-value']}>
                <RussianFlagIcon />
                <span>{texts.russian}</span>
              </div>
            </SelectItem>
          </SelectBox>
        </div>
        {!isAuth && (
          <>
            <Button asChild variant={'link'}>
              {renderLink(loginLink, texts.login)}
            </Button>
            <Button asChild variant={'primary'}>
              {renderLink(signupLink, texts.signup)}
            </Button>
          </>
        )}
      </div>
    </header>
  )
}

Header.displayName = 'Header'
export { Header }
