import { dirname, join } from 'path'

import { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: [
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-interactions'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  docs: {
    //👇 See the table below for the list of supported options
    defaultName: 'Documentation',
  },
  viteFinal: config => {
    config.build = config.build || {}
    config.build.sourcemap = false

    return config
  },
}

export default config

function getAbsolutePath(value: string): string {
  return dirname(require.resolve(join(value, 'package.json')))
}
