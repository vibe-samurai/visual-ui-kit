import React from 'react'

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

type Props = {
  isAuth: boolean
  loginLink?: string
  signupLink?: string
  LinkComponent?: React.ComponentType<LinkProps>
}

const Header = ({ isAuth, loginLink, signupLink, LinkComponent }: Props) => {
  const count = 3

  const placeholder = (
    <div className={s['select-value']}>
      <RussianFlagIcon />
      Russian
    </div>
  )

  return (
    <header className={s['header-container']}>
      <Typography as={'a'} variant={'large'} href={'/'}>
        Visual-Vibe
      </Typography>
      <div className={s['functional-container']}>
        <div className={s['select']}>
          {isAuth && (
            <div className={s.bell}>
              <BellOutlineIcon />
              {count > 0 && <div className={s.count}>{count}</div>}
            </div>
          )}
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
                <LinkComponent href={loginLink || '#'}>Log in</LinkComponent>
              ) : (
                <a href={loginLink || '#'}>Log In</a>
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
    </header>
  )
}

Header.displayName = 'Header'
export { Header }
