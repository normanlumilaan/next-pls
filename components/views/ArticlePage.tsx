import clsx from 'clsx'
import Article from '@/components/article/Article'
import Header from '@/components/header/Header'
import Container from '@/components/layout/Container'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/layout/Hero'
import PageLayout from '@/components/layout/PageLayout'

import type { MediaImageType } from '@/utils/types'

export interface ArticlePageProps {
  slug: string
  title: string
  content: string
  media?: MediaImageType
}

export default function ArticlePage({
  slug,
  title,
  content,
  media,
}: ArticlePageProps) {
  return (
    <PageLayout className={clsx('page-article', `page-article-${slug}`)}>
      <Header />
      <Hero
        id="hero"
        className="py-24 min-h-[80dvh] text-white flex flex-col items-start justify-end"
      >
        <h1 className="text-4xl font-bold">Articles here</h1>
        <strong>Welcome to the home page</strong>
      </Hero>
      <Container>
        <Article title={title} content={content} media={media} />
      </Container>
      <Footer />
    </PageLayout>
  )
}
