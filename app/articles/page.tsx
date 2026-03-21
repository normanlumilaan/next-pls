import Article from '@/components/cards/Article'
import Header from '@/components/header/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/layout/Hero'
import PageLayout from '@/components/layout/PageLayout'
import { getArticleBySlug } from '@/lib/contentful/article'

export async function generateMetadata() {
  const { title } = await getArticleBySlug('articles/first-in-contentful')

  return {
    title,
  }
}

export default async function Page() {
  const article = await getArticleBySlug('articles/first-in-contentful')

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
      {article && <Article title={article.title} content={article.content} />}

      <Footer />
    </PageLayout>
  )
}
