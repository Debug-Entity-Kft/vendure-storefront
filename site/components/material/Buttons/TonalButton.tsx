'use client'

import { Button } from '@mui/material'
import { MyButtonProps } from '@components/material/Buttons/FilledButton'

export default function TonalButton({
  children,
  title,
  onClick,
  ...props
}: MyButtonProps) {
  return (
    <Button
      onClick={onClick}
      sx={{
        textTransform: 'none',
        backgroundColor: 'var(--md-sys-color-secondary-container) !important',
        color: 'var(--md-sys-color-on-secondary-container) !important',
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
