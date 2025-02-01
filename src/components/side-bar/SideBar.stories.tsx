import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import { Sidebar, SidebarItem, SideBarItemProps } from '@/components'
import {
  CreateActiveIcon,
  CreateIcon,
  FavoritesActiveIcon,
  FavoritesIcon,
  HomeActiveIcon,
  HomeIcon,
  LogOutActiveIcon,
  LogOutIcon,
  MessengerActiveIcon,
  MessengerIcon,
  MyProfileActiveIcon,
  MyProfileIcon,
  SearchActiveIcon,
  SearchIcon,
  StatisticsActiveIcon,
  StatisticsIcon,
} from '@assets/icons'

const meta = {
  component: Sidebar,
  title: 'Components/Sidebar',
} satisfies Meta<typeof Sidebar>

export default meta

type MenuExampleArgs = {
  options: SideBarItemProps[]
}

type Story = StoryObj<typeof Sidebar | MenuExampleArgs | SideBarItemProps>

const options: SideBarItemProps[] = [
  {
    icon: HomeIcon,
    iconActive: HomeActiveIcon,
    title: 'Home',
    url: '#',
    isDisabled: false,
    LinkComponent: ({ href, className, children }) => (
      <a href={href} className={className}>
        {children}
      </a>
    ),
  },
  {
    icon: CreateIcon,
    iconActive: CreateActiveIcon,
    title: 'Create',
    url: '#',
    isDisabled: false,
    LinkComponent: ({ href, className, children }) => (
      <a href={href} className={className}>
        {children}
      </a>
    ),
  },
  {
    icon: MyProfileIcon,
    iconActive: MyProfileActiveIcon,
    title: 'My Profile',
    url: '#',
    isDisabled: false,
    LinkComponent: ({ href, className, children }) => (
      <a href={href} className={className}>
        {children}
      </a>
    ),
  },
  {
    icon: MessengerIcon,
    iconActive: MessengerActiveIcon,
    title: 'Messenger',
    url: '#',
    isDisabled: false,
    LinkComponent: ({ href, className, children }) => (
      <a href={href} className={className}>
        {children}
      </a>
    ),
  },
  {
    icon: SearchIcon,
    iconActive: SearchActiveIcon,
    title: 'Search',
    url: '#',
    isDisabled: true,
    LinkComponent: ({ href, className, children }) => (
      <a href={href} className={className}>
        {children}
      </a>
    ),
  },
  {
    icon: StatisticsIcon,
    iconActive: StatisticsActiveIcon,
    title: 'Statistics',
    url: '#',
    isDisabled: false,
    LinkComponent: ({ href, className, children }) => (
      <a href={href} className={className}>
        {children}
      </a>
    ),
  },
  {
    icon: FavoritesIcon,
    iconActive: FavoritesActiveIcon,
    title: 'Favorites',
    url: '#',
    isDisabled: false,
    LinkComponent: ({ href, className, children }) => (
      <a href={href} className={className}>
        {children}
      </a>
    ),
  },
  {
    icon: LogOutIcon,
    iconActive: LogOutActiveIcon,
    title: 'Log Out',
    url: '#',
    isDisabled: false,
    LinkComponent: ({ href, className, children }) => (
      <a href={href} className={className}>
        {children}
      </a>
    ),
  },
]

const MenuExampleComponent = ({ options }: MenuExampleArgs) => {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  return (
    <Sidebar>
      {options.map((option, index) => (
        <SidebarItem
          key={index}
          {...option}
          isActive={index === activeIndex}
          LinkComponent={({ href, className, children }) => (
            <a
              href={href}
              className={className}
              onClick={event => {
                if (option.isDisabled) {
                  event.preventDefault()
                } else {
                  event.preventDefault()
                  setActiveIndex(index)
                  alert('Опа! Типо переход по ссылке 😉')
                }
              }}
            >
              {children}
            </a>
          )}
        />
      ))}
    </Sidebar>
  )
}

export const MenuExample: Story = {
  args: {
    options,
  },
  render: (args: MenuExampleArgs) => <MenuExampleComponent options={args.options} />,
}
