import RichText from '@/components/contentful/RichText'
import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import type { PageModel } from '@/lib/contentful/models/page'

export default function PageContent({
  content,
}: {
  content: PageModel['content']
}) {
  if (!content) return null

  return (
    <Section id="page-content" className="py-16">
      <Container>
        <RichText document={content} />
      </Container>
    </Section>
  )
}
