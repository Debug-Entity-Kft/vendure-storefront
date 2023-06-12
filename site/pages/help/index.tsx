import { Layout } from '@components/common'
import { Container } from '@components/ui'
import { GetStaticPropsContext } from 'next'
import commerce from '@lib/api/commerce'
import Faq from '@components/help/Faq/Faq'
import { HelpTitle } from '@components/help/HelpTitle'
import SEO from '../../components/common/SEO'

export async function getStaticProps({
  preview,
  locale,
  locales,
}: GetStaticPropsContext) {
  const config = { locale, locales }
  const pagesPromise = commerce.getAllPages({ config, preview })
  const siteInfoPromise = commerce.getSiteInfo({ config, preview })
  const { pages } = await pagesPromise
  const { categories } = await siteInfoPromise

  return {
    props: { pages, categories },
  }
}

export const HelpPage = () => {
  return (
    <>
      <SEO title={'Hogyan tudunk segíteni?'} />
      <Container clean className="mx-auto max-w-7xl p-6">
        <HelpTitle />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          amet est ipsa modi nesciunt numquam placeat qui repellat saepe
          tenetur? Asperiores autem corporis dolorem eveniet facilis magni
          numquam odit quos!
        </p>

        <Faq />
      </Container>
    </>
  )
}

HelpPage.Layout = Layout

export default HelpPage
