import ArticlesListItem from '@/components/article/ArticlesListItem'
import Container from '@/components/layout/Container'
import Hero from '@/components/layout/Hero'
import Section from '@/components/layout/Section'
import type { MediaImageType } from '@/utils/types'

export type ArticlesListingItemProps = {
  slug: string
  title: string
  content: string
  media: MediaImageType | null
}

export type ArticlesListingPageProps = {
  items: ArticlesListingItemProps[]
}

export default function ArticlesListingPage({
  items,
}: ArticlesListingPageProps) {
  return (
    <>
      <Hero
        title="Articles"
        subtitle="Welcome to the articles page"
        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Alt text here"
      />
      <Section id="articles" className="py-16">
        <Container>
          <ul className="flex flex-col gap-8 max-w-screen-md mx-auto">
            {items.map(item => (
              <ArticlesListItem
                key={item.slug}
                slug={item.slug}
                title={item.title}
                content={`${item.content.slice(0, 160)}...`}
                media={item.media}
              />
            ))}
          </ul>
        </Container>
      </Section>
    </>
  )
}
