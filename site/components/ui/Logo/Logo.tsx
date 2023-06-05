import debugLogoSmall from '../../../public/logo/debug-logo-small.svg'
import debugLogoWide from '../../../public/logo/debug-logo-wide.svg'
import debugLogoWideWhite from '../../../public/logo/debug-logo-wide-white.svg'

import Image from 'next/image'
import { useMediaQuery } from '@mui/material'

export interface LogoProps {
  className?: string
  variant?: 'small' | 'wide'
  width?: number
  height?: number
}

const Logo = ({
  className = '',
  variant = 'small',
  width,
  height,
  ...props
}: LogoProps) => {
  const isDark = useMediaQuery('(prefers-color-scheme: dark)')

  if (!width || !height) {
    if (variant === 'small') {
      width = 32
      height = 32
    } else {
      width = 240
      height = 64
    }
  }

  return (
    <Image
      src={
        variant === 'small'
          ? debugLogoSmall
          : isDark
          ? debugLogoWideWhite
          : debugLogoWide
      }
      alt="Logo"
      width={width}
      height={height}
      {...props}
    />
  )
}

export default Logo
