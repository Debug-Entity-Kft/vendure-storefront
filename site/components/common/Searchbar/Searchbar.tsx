import { FC, memo, useEffect } from 'react'
import cn from 'clsx'
import s from './Searchbar.module.css'
import { useRouter } from 'next/router'
import MatInput from '@components/ui/MatInput'
import { TextField } from '@mui/material'

interface Props {
  className?: string
  id?: string
}

const Searchbar: FC<Props> = ({ className, id = 'search' }) => {
  const router = useRouter()

  useEffect(() => {
    void router.prefetch('/search')
  }, [router])

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault()

    if (e.key === 'Enter') {
      const q = e.currentTarget.value

      router.push(
        {
          pathname: `/search`,
          query: q ? { q } : {},
        },
        undefined,
        { shallow: true }
      )
    }
  }

  return (
    <div className={cn(s.root, className)}>
      <label className="hidden" htmlFor={id}>
        Search
      </label>
      <TextField
        variant={'outlined'}
        sx={{
          width: '100%',
          '.MuiOutlinedInput-root': {
            borderRadius: '3rem !important',
            width: '100%',
            '& fieldset': {
              borderRadius: '3rem !important',
            },
          },
          '.MuiInputBase-input': {
            background: 'var(--md-sys-color-surface)',
            color: 'var(--md-sys-color-on-surface)',
            borderRadius: '3rem !important',
          },
          '.MuiOutlinedInput-input': {
            padding: '.75rem 1rem !important',
          },
        }}
        id={id}
        className={s.input}
        placeholder="Search for products..."
        defaultValue={router.query.q}
        onKeyUp={handleKeyUp}
      />
      <div className={s.iconContainer}>
        <svg
          className={s.icon}
          fill="var(--md-sys-color-on-surface)"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          />
        </svg>
      </div>
    </div>
  )
}

export default memo(Searchbar)
