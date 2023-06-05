'use client'

import { IconButton } from '@mui/material'
import { ReactNode } from 'react'

export default function FilledIconButton({
  children,
  ...props
}: {
  children: ReactNode
}) {
  return (
    <IconButton
      sx={{
        textTransform: 'none',
        backgroundColor: 'var(--md-sys-color-primary) !important',
        color: 'var(--md-sys-color-on-primary) !important',
        height: '40px',
        width: '40px',
      }}
      {...props}
    >
      {children}
    </IconButton>
  )
}
