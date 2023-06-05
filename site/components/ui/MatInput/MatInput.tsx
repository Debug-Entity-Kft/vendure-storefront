import cn from 'clsx'
import s from './MatInput.module.css'
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

  const rootClassName = cn(s.root, {}, className)

  const handleOnChange = (e: any) => {
    if (onChange) {
      onChange(e.target.value)
    }
    return null
  }

  return (
    <TextField
      className={rootClassName}
      onChange={handleOnChange}
      autoComplete="off"
      autoCorrect="off"
      autoCapitalize="off"
      spellCheck="false"
      {...rest}
      id="filled-basic"
      variant={props.variant ?? 'outlined'}
    />
  )
}

export default MatInput
