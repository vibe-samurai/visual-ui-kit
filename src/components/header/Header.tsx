import React from 'react'

import { Button, SelectBox, Typography } from '@/components'
import { RussianFlagIcon, UKFlagIcon } from '@assets/icons'
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
  locale: 'ru' | 'en'
  onLocaleChange: (lang: 'en' | 'ru') => void
  bellChildren?: React.ReactNode
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
  locale,
  onLocaleChange,
  bellChildren,
}: Props) => {
  const texts = LOCALE_TEXTS[locale]

  const renderLink = (href: string | undefined, children: React.ReactNode) => {
    return LinkComponent ? (
      <LinkComponent href={href || '#'}>{children}</LinkComponent>
    ) : (
      <a href={href || '#'}>{children}</a>
    )
  }

  return (
    <header className={s['header-container']}>
      <Typography as={'a'} variant={'large'} href={'/'}>
        Visual-Vibe
      </Typography>
      <div className={s['functional-container']}>
        {bellChildren && <div className={s['notification-bell']}>{bellChildren}</div>}

        <div className={s['select']}>
          <SelectBox
            placeholder={
              <div className={s['select-value']}>
                {locale === 'ru' ? <RussianFlagIcon /> : <UKFlagIcon />}
                {locale === 'ru' ? texts.russian : texts.english}
              </div>
            }
            onValueChange={lang => onLocaleChange(lang as 'en' | 'ru')}
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
            <Button asChild variant={'link'} className={s['button-login']}>
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
