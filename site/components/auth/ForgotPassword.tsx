import { FC, useEffect, useState, useCallback, SyntheticEvent } from 'react'
import { validate } from 'email-validator'
import { useUI } from '@components/ui/context'
import { Logo, Button, Input } from '@components/ui'
import FilledButton from '@components/material/Buttons/FilledButton'
import MatInput from '@components/ui/MatInput'

interface Props {}

const ForgotPassword: FC<Props> = () => {
  // Form State
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [dirty, setDirty] = useState(false)
  const [disabled, setDisabled] = useState(false)

  const { setModalView, closeModal } = useUI()

  const handleResetPassword = async (e: SyntheticEvent<EventTarget>) => {
    e.preventDefault()

    if (!dirty && !disabled) {
      setDirty(true)
      handleValidation()
    }
  }

  const handleValidation = useCallback(() => {
    // Unable to send form unless fields are valid.
    if (dirty) {
      setDisabled(!validate(email))
    }
  }, [email, dirty])

  useEffect(() => {
    handleValidation()
  }, [handleValidation])

  return (
    <form
      onSubmit={handleResetPassword}
      className="w-80 flex flex-col justify-between p-3"
    >
      <div className="flex justify-center pb-8 ">
        <Logo variant={'wide'} />
      </div>
      <div className="flex flex-col space-y-4">
        {message && (
          <div className="text-red border border-red p-3">{message}</div>
        )}

        <MatInput placeholder="Email" onChange={setEmail} type="email" />
        <div className="pt-2 w-full flex flex-col">
          <FilledButton
            title={'Jelszó visszaállítása'}
            type="submit"
            loading={loading}
            disabled={disabled}
          />
        </div>

        <span className="pt-3 text-center text-sm">
          <span className="text-accent-7">Van már fiókod?</span>
          {` `}
          <a
            className="text-accent-9 font-bold hover:underline cursor-pointer"
            onClick={() => setModalView('LOGIN_VIEW')}
          >
            Lépj be
          </a>
        </span>
      </div>
    </form>
  )
}

export default ForgotPassword
