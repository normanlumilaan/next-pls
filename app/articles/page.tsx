import Header from '@/components/header/Header'
import Hero from '@/components/layout/Hero'
import PageLayout from '@/components/layout/PageLayout'

export default function Page() {
  return (
    <PageLayout>
      <Header />
      <Hero
        id="hero"
        className="py-24 min-h-[80dvh] text-white flex flex-col items-start justify-end"
      >
        <h1 className="text-4xl font-bold">Articles here</h1>
        <strong>Welcome to the home page</strong>
      </Hero>
    </PageLayout>
  )
}
