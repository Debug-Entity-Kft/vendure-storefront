import { FC } from 'react'
import Link from 'next/link'
import s from './Navbar.module.scss'
import NavbarRoot from './NavbarRoot'
import { Logo, Container } from '@components/ui'
import { Searchbar, UserNav } from '@components/common'
import useTranslation from 'next-translate/useTranslation'
import {
  MdHelpCenter,
  MdLiveHelp,
  MdOutlineHelpOutline,
  MdHelpOutline,
} from 'react-icons/md'
import TonalButton from '@components/material/Buttons/TonalButton'
import OutlinedButton from '@components/material/Buttons/OutlinedButton'

interface Link {
  href: string
  label: string
}

interface NavbarProps {
  links?: Link[]
}

const Navbar = ({ links }: NavbarProps) => {
  const { t } = useTranslation('common')

  return (
    <NavbarRoot>
      <Container clean className="mx-auto max-w-8xl px-6">
        <div className={s.nav}>
          <div className="flex items-center flex-1">
            <Link href="/">
              <a className={s.logo} aria-label="Logo">
                <Logo variant={'wide'} height={32} width={32 * 3.9} />
              </a>
            </Link>
            {/*<nav className={s.navMenu}>*/}
            {/*  /!*<Link href="/search">*!/*/}
            {/*  /!*  <a className={s.link}>{t('all')}</a>*!/*/}
            {/*  /!*</Link>*!/*/}
            {/*  /!*{links?.map((l) => (*!/*/}
            {/*  /!*  <Link href={l.href} key={l.href}>*!/*/}
            {/*  /!*    <a className={s.link}>{l.label}</a>*!/*/}
            {/*  /!*  </Link>*!/*/}
            {/*  /!*))}*!/*/}
            {/*</nav>*/}
          </div>
          {process.env.COMMERCE_SEARCH_ENABLED && (
            <div className="justify-center flex-1 hidden lg:flex">
              <Searchbar />
            </div>
          )}
          <div className="flex items-center justify-end flex-1 space-x-8">
            <UserNav />
          </div>
        </div>
        {process.env.COMMERCE_SEARCH_ENABLED && (
          <div className="flex pb-4 lg:px-6 lg:hidden">
            <Searchbar id="mobile-search" />
          </div>
        )}
      </Container>
      <Container clean className="mx-auto max-w-8xl px-6">
        <section className={s.bottomContainer}>
          <ul className={s.navMenu}>
            <Link href="/search">
              <a className={s.link}>{t('all')}</a>
            </Link>

            {links?.map((l) => (
              <Link href={l.href} key={l.href}>
                <a className={s.link}>{l.label}</a>
              </Link>
            ))}
          </ul>

          <Link href={'/help'}>
            <a className={s.helpLink} href="/help">
              <MdOutlineHelpOutline />
              <span>Segítség</span>
            </a>
          </Link>
        </section>
      </Container>
    </NavbarRoot>
  )
}

export default Navbar
