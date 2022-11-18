// .storybook/YourTheme.js

import { create } from '@storybook/theming';

export default create({
  base: 'dark',

  colorPrimary: '#F0B339',
  colorSecondary: 'grey',

  // UI
  appBg: 'lightgrey',
  appContentBg: 'white',
  appBorderColor: 'lightgrey',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'white',
  barSelectedColor: 'black',
  barBg: 'grey',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'BestDeal',
  brandUrl: 'https://www.bestdeal.com.br/#/',
  brandImage: 'https://www.bestdeal.com.br/img/bestdeal_horizontal_logo.1d0bd5f8.png',
  brandTarget: '_self',
});