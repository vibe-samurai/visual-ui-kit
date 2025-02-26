import React from 'react'

import { Button, SelectBox, Typography } from '@/components'
import { RussianFlagIcon } from '@assets/icons/RussianFlagIcon'
import { UKFlagIcon } from '@assets/icons/UKFlagIcon'
import { SelectItem } from '@components/select-box/select-item'

import s from './Header.module.scss'

type LinkProps = {
  href: string
  children: React.ReactNode
}

type Props = {
  isAuth: boolean
  loginLink?: string
  signupLink?: string
  LinkComponent?: React.ComponentType<LinkProps>
}

const Header = ({ isAuth, loginLink, signupLink, LinkComponent }: Props) => {
  const placeholder = (
    <div className={s['select-value']}>
      <RussianFlagIcon />
      Russian
    </div>
  )

  return (
    <header className={s['header-container']}>
      <div className={s.headerWrapper}>
        <Typography as={'a'} variant={'large'} href={'/'}>
          Visual-Vibe
        </Typography>
        <div className={s['functional-container']}>
          <div className={s['select']}>
            <SelectBox placeholder={placeholder}>
              <SelectItem value={'en'}>
                <div className={s['select-value']}>
                  <UKFlagIcon />
                  <span>English</span>
                </div>
              </SelectItem>
              <SelectItem value={'ru'}>
                <div className={s['select-value']}>
                  <RussianFlagIcon />
                  <span>Russian</span>
                </div>
              </SelectItem>
            </SelectBox>
          </div>
          {!isAuth && (
            <>
              <Button asChild variant={'link'}>
                {LinkComponent ? (
                  <LinkComponent href={loginLink || '#'}>Login</LinkComponent>
                ) : (
                  <a href={loginLink || '#'}>Login</a>
                )}
              </Button>
              <Button asChild variant={'primary'}>
                {LinkComponent ? (
                  <LinkComponent href={signupLink || '#'}>Sign Up</LinkComponent>
                ) : (
                  <a href={signupLink || '#'}>Sign Up</a>
                )}
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  )
}

Header.displayName = 'Header'
export { Header }
