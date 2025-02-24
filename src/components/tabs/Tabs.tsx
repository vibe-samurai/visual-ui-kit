import * as TabsRadix from '@radix-ui/react-tabs'
import clsx from 'clsx'
import { ComponentPropsWithoutRef, forwardRef } from 'react'

import s from './Tabs.module.scss'

type TabsProps = ComponentPropsWithoutRef<typeof TabsRadix.Root> & {
  defaultValue?: string
}

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  ({ onValueChange, children, className, defaultValue, ...rest }, ref) => {
    const classNames = {
      root: clsx(s.root, className),
    } as const

    return (
      <TabsRadix.Root
        className={classNames.root}
        onValueChange={onValueChange}
        defaultValue={defaultValue}
        ref={ref}
        {...rest}
      >
        {children}
      </TabsRadix.Root>
    )
  }
)

export type TabsListProps = ComponentPropsWithoutRef<typeof TabsRadix.List>

export const TabsList = forwardRef<HTMLDivElement, TabsListProps>(({ children, ...rest }, ref) => {
  return (
    <TabsRadix.List ref={ref} className={s.list} {...rest}>
      {children}
    </TabsRadix.List>
  )
})

export type TabsTriggerProps = ComponentPropsWithoutRef<typeof TabsRadix.Trigger>

export const TabsTrigger = forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ value, className, ...rest }, ref) => {
    const classNames = {
      trigger: clsx(s.trigger, className),
    } as const

    return <TabsRadix.Trigger value={value} className={classNames.trigger} ref={ref} {...rest} />
  }
)

export type TabsContentProps = ComponentPropsWithoutRef<typeof TabsRadix.Content>

export const TabsContent = forwardRef<HTMLDivElement, TabsContentProps>(
  ({ children, className, ...rest }, ref) => {
    const classNames = {
      content: clsx(s.content, className),
    } as const

    return (
      <TabsRadix.Content className={classNames.content} ref={ref} {...rest}>
        {children}
      </TabsRadix.Content>
    )
  }
)

Tabs.displayName = 'Tabs'
TabsList.displayName = 'TabsList'
TabsTrigger.displayName = 'TabsTrigger'
TabsContent.displayName = 'TabsContent'
