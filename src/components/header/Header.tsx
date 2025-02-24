import { Button, SelectBox, Typography } from '@/components'
import { RussianFlagIcon } from '@assets/icons/RussianFlagIcon'
import { UKFlagIcon } from '@assets/icons/UKFlagIcon'
import { SelectItem } from '@components/select-box/select-item'

import s from './Header.module.scss'

type Props = {
  isAuth: boolean
  loginLink?: string
  signupLink?: string
}
const Header = ({ isAuth, loginLink, signupLink }: Props) => {
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
              <a href={loginLink}>Login</a>
            </Button>
            <Button asChild variant={'primary'}>
              <a href={signupLink}>Sign Up</a>
            </Button>
          </>
        )}
      </div>
    </header>
  )
}

Header.displayName = 'Header'
export { Header }
