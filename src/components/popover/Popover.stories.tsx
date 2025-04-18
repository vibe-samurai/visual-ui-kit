import { Meta, StoryObj } from '@storybook/react'
import React, { useRef, useState } from 'react'

import { Popover } from './Popover'
import { BellOutlineIcon } from '../../assets/icons/BellOutlineIcon'
import { BurgerMenuIcon } from '../../assets/icons/BurgerMenuIcon'
import { Button } from '../button'
import { Typography } from '../typography'

const meta: Meta<typeof Popover> = {
  title: 'Components/Popover',
  component: Popover,
  tags: ['autodocs'],
  argTypes: {
    align: {
      options: ['start', 'center', 'end'],
      control: { type: 'radio' },
    },
    side: {
      options: ['top', 'right', 'bottom', 'left'],
      control: { type: 'radio' },
    },
  },
}

export default meta
type Story = StoryObj<typeof Popover>

export const NotificationPopover = () => {
  const [isOpen, setIsOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)

  const triggerElement = (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <BellOutlineIcon />
      <span
        style={{
          position: 'absolute',
          top: '-5px',
          right: '-5px',
          background: 'red',
          borderRadius: '50%',
          width: '18px',
          height: '18px',
          color: 'white',
          fontSize: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        3
      </span>
    </div>
  )

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Popover
        trigger={
          <button
            type={'button'}
            ref={triggerRef}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
            }}
          >
            {triggerElement}
          </button>
        }
        anchorRef={triggerRef}
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        side={'bottom'}
        align={'end'}
        sideOffset={10}
        contentOffset={{ top: -28, left: -3 }}
      >
        <div style={{ padding: '16px', width: '350px' }}>
          <Typography variant={'h3'} style={{ marginBottom: '16px' }}>
            Уведомления
          </Typography>
          <div>
            <div style={{ padding: '8px 0', borderBottom: '1px solid #e2e8f0' }}>
              Новое сообщение
            </div>
            <div style={{ padding: '8px 0', borderBottom: '1px solid #e2e8f0' }}>
              Обновление системы
            </div>
            <div style={{ padding: '8px 0' }}>Напоминание</div>
          </div>
        </div>
      </Popover>
    </div>
  )
}

const BurgerMenuPopover = () => {
  const [isOpen, setIsOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)

  const fullScreenPopoverStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: '100vw',
    maxWidth: '100vw',
    height: '100vh',
    maxHeight: '100vh',
    border: 'none',
    borderRadius: 0,
    transition: 'transform 0.3s ease',
    transform: 'translateX(100%)',
  }

  const openStateStyle: React.CSSProperties = {
    transform: 'translateX(0)',
  }

  return (
    <div style={{ padding: '20px' }}>
      <Popover
        trigger={
          <button ref={triggerRef} type={'button'}>
            <BurgerMenuIcon />
          </button>
        }
        anchorRef={triggerRef}
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        side={'right'}
        align={'start'}
        sideOffset={0}
        arrow={false}
        contentOffset={{ top: 0, left: 0 }}
        contentStyle={{
          ...fullScreenPopoverStyle,
          ...(isOpen ? openStateStyle : {}),
        }}
      >
        <nav
          style={{
            padding: '16px',
            height: '100vh',
            boxSizing: 'border-box',
          }}
        >
          <ul style={{ listStyle: 'none', padding: '8px 32px', margin: 0 }}>
            <li style={{ padding: '32px 0' }}>
              <a href={'#'}>Главная</a>
            </li>
            <li style={{ padding: '32px 0' }}>
              <a href={'#'}>Профиль</a>
            </li>
            <li style={{ padding: '32px 0' }}>
              <a href={'#'}>Настройки</a>
            </li>
            <li style={{ padding: '32px 0' }}>
              <a href={'#'}>Выйти</a>
            </li>
          </ul>
        </nav>
      </Popover>
    </div>
  )
}

const InteractivePopover = () => {
  const [isOpen, setIsOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
      <Popover
        trigger={
          <Button ref={triggerRef} variant={'primary'}>
            Открыть попап
          </Button>
        }
        anchorRef={triggerRef}
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        align={'center'}
        side={'bottom'}
        sideOffset={40}
        contentOffset={{ top: -28, left: -3 }}
      >
        <div style={{ padding: '16px', minWidth: '200px' }}>
          <Typography variant={'h3'} style={{ marginBottom: '16px' }}>
            Пример контента
          </Typography>
          <p>Здесь может быть любое содержимое</p>
        </div>
      </Popover>
    </div>
  )
}

export const BurgerMenu: Story = {
  render: () => <BurgerMenuPopover />,
}

export const Interactive: Story = {
  render: () => <InteractivePopover />,
}
