import Image from 'next/image'

export const Faq = () => {
  return (
    <section className={'grid grid-cols-2'}>
      <div>
        <span className={'display-large'}>Gyakran ismételt kérdések</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae,
          consectetur cum dolorum earum est ex excepturi exercitationem fugiat
          impedit labore maxime molestiae neque odio omnis quia repellendus sit
          tenetur voluptas.
        </p>
      </div>
      <div className={'relative'}>
        <Image
          layout="fill"
          alt={'faq image'}
          src={'https://placekitten.com/400'}
        />
      </div>
    </section>
  )
}

export default Faq
