import '@assets/main.css'
import '@assets/chrome-bug.css'
import 'keen-slider/keen-slider.min.css'

import { FC, useEffect, Component, ReactNode } from 'react'
import type { AppProps } from 'next/app'
import { Head } from '@components/common'
import { ManagedUIContext } from '@components/ui/context'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { lightTheme, darkTheme } from '@lib/theme'
import { useMediaQuery } from '@mui/material'

const Noop = ({ children }: { children: ReactNode }) => <>{children}</>

export default function MyApp({
  Component,
  pageProps,
}: {
  Component: FC & { Layout?: FC }
  pageProps: any
}) {
  const isDark = useMediaQuery('(prefers-color-scheme: dark)')
  const Layout = (Component as any).Layout || Noop

  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])

  return (
    <>
      <Head />
      <ManagedUIContext>
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Layout pageProps={pageProps}>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </ManagedUIContext>
    </>
  )
}
