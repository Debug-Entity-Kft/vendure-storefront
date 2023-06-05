'use client'

import { IconButton } from '@mui/material'
import { ReactNode } from 'react'

export default function TonalIconButton({
  children,
  onClick,
  ...props
}: {
  children: ReactNode
  onClick: () => void
}) {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        textTransform: 'none',
        backgroundColor: 'var(--md-sys-color-secondary-container) !important',
        color: 'var(--md-sys-color-on-secondary-container) !important',
        height: '40px',
        width: '40px',
      }}
      {...props}
    >
      {children}
    </IconButton>
  )
}
