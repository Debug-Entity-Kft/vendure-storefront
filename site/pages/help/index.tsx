import { Layout } from '@components/common'
import { Container } from '@components/ui'
import { GetStaticPropsContext } from 'next'
import commerce from '@lib/api/commerce'
import Faq from '@components/help/Faq'

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
    <Container clean className="mx-auto max-w-8xl p-6">
      <h1 className={'text-center headline-large mb-6'}>
        Hogyan tudunk segíteni?
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
        amet est ipsa modi nesciunt numquam placeat qui repellat saepe tenetur?
        Asperiores autem corporis dolorem eveniet facilis magni numquam odit
        quos!
      </p>

      <Faq />
    </Container>
  )
}

HelpPage.Layout = Layout

export default HelpPage
