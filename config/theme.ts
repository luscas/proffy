import { createStitches } from '@stitches/react'

export const {
  styled,
  globalCss,
} = createStitches({
  theme: {
    colors: {
      textBase: '#6A6180',
      gray: '#F0F0F7',
      primary: '#8257E5',
      purple: '#774DD6',
      purpleLighten: '#9871F5',
      purpleDarken: '#6842C2',
      green: '#04D361',
      greenLighten: '#24EF7F',
      greenDarken: '#01ac4e',
      textPurpleBase: '#D4C2FF',
      title: '#32264D',
      linesInWhite: '#E6E6F0',
      label: '#9C98A6',
      textLight: '#A0A0B2',
      complements: '#9C98A6'
    },
  },
  media: {
    xs: '(min-width: 375px)',
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
    xl: '(min-width: 1280px)',
    '2xl': '(min-width: 1536px)',
  },
  utils: {
    marginX: (value : any) => ({ marginLeft: value, marginRight: value }),
    marginY: (value : any) => ({ marginTop: value, marginBottom: value }),
    paddingY: (value : any) => ({ paddingTop: value, paddingBottom: value }),
    paddingX: (value : any) => ({ paddingLeft: value, paddingRight: value }),
    rounded: (value : number) => ({ borderRadius: value }),
  },
})