import { FC, useEffect, useState, useCallback, SyntheticEvent } from 'react'
import { validate } from 'email-validator'
import { Info } from '@components/icons'
import { useUI } from '@components/ui/context'
import { Logo } from '@components/ui'
import useSignup from '@framework/auth/use-signup'
import MatInput from '@components/ui/MatInput'
import useTranslation from 'next-translate/useTranslation'
import FilledButton from '@components/material/Buttons/FilledButton'

interface Props {}

const SignUpView: FC<Props> = () => {
  // Form State
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [dirty, setDirty] = useState(false)
  const [disabled, setDisabled] = useState(false)

  const { t } = useTranslation('common')

  const signup = useSignup()
  const { setModalView, closeModal } = useUI()

  const handleSignup = async (e: SyntheticEvent<EventTarget>) => {
    e.preventDefault()

    if (!dirty && !disabled) {
      setDirty(true)
      handleValidation()
    }

    try {
      setLoading(true)
      setMessage('')
      await signup({
        email,
        firstName,
        lastName,
        password,
      })
      setLoading(false)
      closeModal()
    } catch (errors: any) {
      setMessage(errors[0].message)
      setLoading(false)
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
      onSubmit={handleSignup}
      className="w-80 flex flex-col justify-between p-3"
    >
      <div className="flex justify-center pb-8 ">
        <Logo variant={'wide'} />
      </div>

      <div className="flex flex-col space-y-4">
        {message && (
          <div className="text-red border border-red p-3">{message}</div>
        )}

        <MatInput label={t('common:user.firstName')} onChange={setFirstName} />

        <MatInput label={t('common:user.lastName')} onChange={setLastName} />

        <MatInput
          type="email"
          label={t('common:user.email')}
          onChange={setEmail}
        />

        <MatInput
          type="password"
          label={t('common:user.password')}
          onChange={setPassword}
        />

        <span className="secondary-container on-secondary-container-text p-4 rounded-lg">
          <span className="inline-block align-middle ">
            <Info width="15" height="15" />
          </span>{' '}
          <span className="leading-6 text-sm">
            <strong>Info</strong>: Passwords must be longer than 7 chars and
            include numbers.{' '}
          </span>
        </span>

        <div className="pt-2 w-full flex flex-col">
          <FilledButton
            title={t('auth:register')}
            type="submit"
            loading={loading}
            disabled={disabled}
          />
        </div>

        <span className="pt-1 text-center text-sm">
          <span className="">{t('auth:haveAccount')}</span>
          {` `}
          <a
            className=" font-bold hover:underline cursor-pointer"
            onClick={() => setModalView('LOGIN_VIEW')}
          >
            {t('auth:login')}
          </a>
        </span>
      </div>
    </form>
  )
}

export default SignUpView
