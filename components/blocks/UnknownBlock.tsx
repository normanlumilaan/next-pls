import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import type { PageBlock } from '@/lib/contentful/models/page'

export default function UnknownBlock({
  block,
}: {
  block: Extract<PageBlock, { type: 'unknown' }>
}) {
  if (process.env.NODE_ENV === 'production') return null

  return (
    <Section id={`unknown-${block.id}`} className="py-8">
      <Container>
        <div className="rounded-lg border border-dashed border-gray-300 p-4 text-sm text-gray-600">
          Unsupported block type: <strong>{block.contentType}</strong> (id:{' '}
          {block.id})
        </div>
      </Container>
    </Section>
  )
}
