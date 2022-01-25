import type { AppProps } from 'next/app'
import { globalCss } from '../config/theme'

const resetCss = globalCss({
  'body': {
    fontFamily: 'Poppins',
  },
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  }
})

function MyApp({ Component, pageProps }: AppProps) {
  resetCss()

  return <Component {...pageProps} />
}

export default MyApp
