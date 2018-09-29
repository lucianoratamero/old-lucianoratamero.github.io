import theme from 'mdx-deck/themes';

const colors = {
  red: '#ed4a4a',
  red_lighter: '#ff5d5d',
  red_light: '#ffe6e6',
  green: '#24d58d',
  green_dark: '#20bf7e',
  green_light: '#d8f8eb',
  green1_gradation: '#24ce86',
  green2_gradation: '#24b4ae',
  orange: '#FEC138',
  grey: '#b0b0b0',
  grey_dark: '#7b7b7b',
  grey_darker: '#555555',
  grey_dark_dark: '#363636',
  grey_light: '#dddddd',
  grey_extralight: '#f1f1f1',
  blue: '#4a9ced',
  blue_lighter: '#6cbdff',
  blue_light: '#D9EAFB',
  purple_illustration: '#9e73c6',
  orange_illustration: '#fc883a',
}

export default {
  ...theme,
  font: '"Open Sans", sans',
  colors: {
    background: colors.grey_extralight,
    text: colors.grey_dark_dark,
    link: colors.blue,
  },
  pre: { textAlign: 'center' },
  h1: { color: colors.red },
  h2: { color: colors.red },
  h3: { color: colors.red },
  h4: { color: colors.red },
  h5: { color: colors.red },
  h6: { color: colors.red },
  img: { maxWidth: '14em', display: 'block', margin: '1em auto' },
  ul: { textAlign: 'center', padding: 0 },
  li: { listStyle: 'none' },
  css: {
    ...theme.css,
    '.company-logo img': { maxHeight: '1.4em' },
    '@media screen and (min-width: 64em) and (max-width: 78em)': {
      fontSize: '24px'
    },
  }
};
