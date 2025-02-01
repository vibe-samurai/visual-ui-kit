import { clsx } from 'clsx'
import { ComponentProps } from 'react'

import s from './SideBar.module.scss'

type Props = ComponentProps<'div'>

export const Sidebar = ({ children, className, ...props }: Props) => {
  return (
    <div className={clsx(s.sidebar, className)} {...props} data-sidebar={'sidebar'}>
      {children}
    </div>
  )
}
