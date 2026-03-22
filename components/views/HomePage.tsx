import Container from '@/components/layout/Container'
import Hero from '@/components/layout/Hero'
import Section from '@/components/layout/Section'

export default function HomePage() {
  return (
    <>
      <Hero
        id="hero"
        title="Home"
        subtitle="Welcome to the home page"
        src="https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Home"
      />
      <Section id="welcome">
        <Container>
          <h1>Home</h1>
        </Container>
      </Section>
    </>
  )
}
