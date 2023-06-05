import { FC, useEffect, useState, useCallback } from 'react'
import { Logo, Button, Input } from '@components/ui'
import useLogin from '@framework/auth/use-login'
import { useUI } from '@components/ui/context'
import { validate } from 'email-validator'
import TonalButton from '@components/material/Buttons/TonalButton'
import FilledButton from '@components/material/Buttons/FilledButton'
import MatInput from '@components/ui/MatInput'
import useTranslation from 'next-translate/useTranslation'

const LoginView = () => {
  // Form State
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [dirty, setDirty] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const { setModalView, closeModal } = useUI()
  const { t } = useTranslation('auth')

  const login = useLogin()

  const handleLogin = async (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault()

    if (!dirty && !disabled) {
      setDirty(true)
      handleValidation()
    }

    try {
      setLoading(true)
      setMessage('')
      await login({
        email,
        password,
      })
      setLoading(false)
      closeModal()
    } catch (e: any) {
      setMessage(e.errors[0].message)
      setLoading(false)
      setDisabled(false)
    }
  }

  const handleValidation = useCallback(() => {
    // Test for Alphanumeric password
    const validPassword = /^(?=.*[a-zA-Z])(?=.*[0-9])/.test(password)

    // Unable to send form unless fields are valid.
    if (dirty) {
      setDisabled(!validate(email) || password.length < 7 || !validPassword)
    }
  }, [email, password, dirty])

  useEffect(() => {
    handleValidation()
  }, [handleValidation])

  return (
    <form
      onSubmit={handleLogin}
      className="w-80 flex flex-col justify-between p-3"
    >
      <div className="flex justify-center pb-8 ">
        <Logo variant={'wide'} />
      </div>

      <div className="flex flex-col space-y-3">
        {message && (
          <div className="error-container error-container-text text-red rounded-lg p-3">
            {message} {` `}
            <a
              className="error-text inline font-bold hover:underline cursor-pointer"
              onClick={() => setModalView('FORGOT_VIEW')}
            >
              {t('forgotYourPassword')}
            </a>
          </div>
        )}

        <MatInput
          label={t('common:user.email')}
          type="email"
          onChange={setEmail}
        />

        <MatInput
          label={t('common:user.password')}
          type="password"
          onChange={setPassword}
        />

        <FilledButton
          className={'!mt-4'}
          title={t('login')}
          variant="slim"
          type="submit"
          loading={loading}
          disabled={disabled}
        />

        <div className="pt-1 text-center text-sm">
          <span className="text-accent-7">{t('noAccount')}</span>
          {` `}
          <a
            className="text-accent-9 font-bold hover:underline cursor-pointer"
            onClick={() => setModalView('SIGNUP_VIEW')}
          >
            {t('goRegister')}
          </a>
        </div>
      </div>
    </form>
  )
}

export default LoginView
