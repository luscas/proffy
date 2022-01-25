import { createStitches } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      gray: '#F0F0F7',
      primary: '#8257E5',
      purple: '#774DD6',
      purpleLighten: '#9871F5',
      purpleDarken: '#6842C2',
      green: '#04D361',
      greenLighten: '#24EF7F',
      greenDarken: '#01ac4e',
      textPurpleBase: '#D4C2FF',
    },
  },
  media: {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
    xl: '(min-width: 1280px)',
    '2xl': '(min-width: 1536px)',
  },
  utils: {
    marginX: (value : any) => ({ marginLeft: value, marginRight: value }),
    paddingY: (value : any) => ({ paddingTop: value, paddingBottom: value }),
    paddingX: (value : any) => ({ paddingLeft: value, paddingRight: value }),
    rounded: (value : string) => ({ borderRadius: value == 'lg' ? 6 : 4, }),
  },
})