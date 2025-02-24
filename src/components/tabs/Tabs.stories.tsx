import { Tabs, TabsContent, TabsList, TabsTrigger } from './Tabs'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      control: 'text',
      description: 'Значение по умолчанию для активной вкладки',
    },
  },
}

export default meta

type Story = StoryObj<typeof Tabs>

export const Default: Story = {
  render: args => (
    <Tabs {...args}>
      <TabsList style={{ marginBottom: '20px' }}>
        <TabsTrigger value={'tab1'}>Tab 1</TabsTrigger>
        <TabsTrigger value={'tab2'}>Tab 2</TabsTrigger>
        <TabsTrigger value={'tab3'}>Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value={'tab1'}>Content for Tab 1</TabsContent>
      <TabsContent value={'tab2'}>Content for Tab 2</TabsContent>
      <TabsContent value={'tab3'}>Content for Tab 3</TabsContent>
    </Tabs>
  ),
  args: {
    defaultValue: 'tab1',
  },
}

export const Disabled: Story = {
  render: args => (
    <Tabs {...args}>
      <TabsList style={{ marginBottom: '20px' }}>
        <TabsTrigger value={'tab1'} disabled>
          Tab 1 (Disabled)
        </TabsTrigger>
        <TabsTrigger value={'tab2'} disabled>
          Tab 2 (Disabled)
        </TabsTrigger>
        <TabsTrigger value={'tab3'} disabled>
          Tab 3 (Disabled)
        </TabsTrigger>
      </TabsList>
      <TabsContent value={'tab1'}>Content for Tab 1</TabsContent>
      <TabsContent value={'tab2'}>Content for Tab 2</TabsContent>
      <TabsContent value={'tab3'}>Content for Tab 3</TabsContent>
    </Tabs>
  ),
  args: {
    defaultValue: 'tab1',
  },
}
