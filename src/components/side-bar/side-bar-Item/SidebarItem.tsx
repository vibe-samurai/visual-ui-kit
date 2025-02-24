import { clsx } from 'clsx'
import { ComponentType, ReactNode } from 'react'

import { Typography } from '@/components'

import s from './SideBarItem.module.scss'

export type SideBarItemProps = {
  icon?: ComponentType<{ className?: string }>
  iconActive?: ComponentType<{ className?: string }>
  title: string
  url: string
  className?: string
  isActive?: boolean
  isDisabled?: boolean
  LinkComponent: ComponentType<{ href: string; className?: string; children: ReactNode }>
}

export const SidebarItem = ({
  icon: Icon,
  iconActive: IconActive,
  title,
  url,
  isActive,
  isDisabled,
  className,
  LinkComponent,
}: SideBarItemProps) => {
  const itemClasses = clsx(
    s['sidebar-item'],
    isDisabled && s['sidebar-item-disabled'],
    isActive && s['sidebar-item-active'],
    className
  )
  const IconToRender = isActive ? IconActive : Icon

  return (
    <LinkComponent href={url} className={itemClasses}>
      {IconToRender ? <IconToRender /> : null}
      <Typography as={'span'} variant={'medium-text-14'}>
        {title}
      </Typography>
    </LinkComponent>
  )
}
