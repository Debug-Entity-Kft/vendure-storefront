'use client'

import { Button } from '@mui/material'
import { ReactNode } from 'react'

export interface MyButtonProps {
  title: string
  onClick?: () => void

  children?: ReactNode

  // rest
  [x: string]: any
}

export default function FilledButton({
  title,
  onClick,
  ...props
}: MyButtonProps) {
  return (
    <Button
      onClick={onClick}
      sx={{
        textTransform: 'none',
        backgroundColor: 'var(--md-sys-color-primary) !important',
        color: 'var(--md-sys-color-on-primary) !important',
        height: '40px',
        borderRadius: '20px',
        paddingInline: '24px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}
      {...props}
    >
      <span className={'label-large'}>{title}</span>
    </Button>
  )
}
