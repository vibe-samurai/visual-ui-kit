import { Button, SelectBox, Typography } from '@/components'
import { RussianFlagIcon } from '@assets/icons/RussianFlagIcon'
import { UKFlagIcon } from '@assets/icons/UKFlagIcon'
import { SelectItem } from '@components/select-box/select-item'

import s from './Header.module.scss'

const Header = () => {
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
        <Button as={'a'} variant={'link'}>
          <a href={'/auth/login'}>Log in</a>
        </Button>
        <Button as={'a'} variant={'primary'}>
          <a href={'/auth/signup'}>Sign up</a>
        </Button>
      </div>
    </header>
  )
}

Header.displayName = 'Header'
export { Header }
