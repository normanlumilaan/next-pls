import TypicodeUsers from '@/components/data/TypicodeUsers'
import Header from '@/components/header/Header'
import Container from '@/components/layout/Container'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/layout/Hero'
import PageLayout from '@/components/layout/PageLayout'
import Section from '@/components/layout/Section'

export default function HomePage() {
  return (
    <PageLayout>
      <Header />
      <Hero
        id="hero"
        className="py-24 min-h-[80dvh] text-white flex flex-col items-start justify-end"
      >
        <h1 className="text-4xl font-bold">Your AI-Powered Travel Companion</h1>
        <strong>Welcome to the home page</strong>
      </Hero>
      <Section id="welcome">
        <Container>
          <h1>Home</h1>
          <div className="mt-6">
            <TypicodeUsers />
          </div>
        </Container>
      </Section>
      <Footer />
    </PageLayout>
  )
}
