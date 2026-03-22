import Container from '@/components/layout/Container'
import Hero from '@/components/layout/Hero'
import Section from '@/components/layout/Section'

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
        title={title}
        subtitle="Welcome to the article page"
        src={media?.src ?? ''}
        alt="Alt text here"
      />
      <Section id="article" className="py-16">
        <Container>
          <article>{content}</article>
        </Container>
      </Section>
    </>
  )
}
