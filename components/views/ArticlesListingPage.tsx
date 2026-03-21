import Container from '@/components/layout/Container'
import Hero from '@/components/layout/Hero'
import Section from '@/components/layout/Section'

export default function ArticlesListingPage() {
  return (
    <>
      <Hero
        id="hero"
        className="py-24 min-h-[80dvh] text-white flex flex-col items-start justify-end"
      >
        <h1 className="text-4xl font-bold">Home page hero</h1>
        <strong>Welcome to the home page</strong>
      </Hero>
      <Section id="welcome">
        <Container>
          <h1>Home</h1>
        </Container>
      </Section>
    </>
  )
}
