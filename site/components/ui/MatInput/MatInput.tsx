import cn from 'clsx'
import React, { InputHTMLAttributes } from 'react'
import {
  // FilledTextFieldProps,
  // OutlinedTextFieldProps,
  // StandardTextFieldProps,
  TextField,
} from '@mui/material'
import { BaseTextFieldProps } from '@mui/material/TextField/TextField'

export interface InputProps extends BaseTextFieldProps {
  className?: string
  onChange?: (...args: any[]) => any
  variant?: 'filled' | 'outlined' | 'standard'
}

const MatInput: React.FC<InputProps> = (props) => {
  const { className, children, onChange, ...rest } = props

  const handleOnChange = (e: any) => {
    if (onChange) {
      onChange(e.target.value)
    }
    return null
  }

  return (
    <TextField
      className={className}
      onChange={handleOnChange}
      autoComplete="off"
      autoCorrect="off"
      autoCapitalize="off"
      spellCheck="false"
      {...rest}
      variant={props.variant ?? 'outlined'}
    />
  )
}

export default MatInput
