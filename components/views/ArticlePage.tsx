import Article from '@/components/article/Article'
import Container from '@/components/layout/Container'
import Hero from '@/components/layout/Hero'

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
    <>
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
    </>
  )
}
