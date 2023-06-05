'use client'

import { IconButton } from '@mui/material'
import { ReactNode } from 'react'

export default function OutlinedIconButton({
  children,
  ...props
}: {
  children: ReactNode
}) {
  return (
    <IconButton
      sx={{
        textTransform: 'none',
        backgroundColor: 'transparent !important',
        color: 'var(--md-sys-color-on-surface-variant) !important',
        border: '1px solid var(--md-sys-color-outline) !important',
        height: '40px',
        width: '40px',
      }}
      {...props}
    >
      {children}
    </IconButton>
  )
}
