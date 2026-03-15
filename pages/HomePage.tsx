import Header from '@/components/header/Header'
import Container from '@/components/layout/Container'
import PageLayout from '@/components/layout/PageLayout'
import Section from '@/components/layout/Section'

export default function HomePage() {
  return (
    <PageLayout>
      <Header />
      <Section>
        <Container>
          <h1>Home</h1>
        </Container>
      </Section>
    </PageLayout>
  )
}
