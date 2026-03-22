import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import MediaImage from '@/components/media/MediaImage'
import type { PageBlock } from '@/lib/contentful/models/page'

export default function ArticleBlock({
  block,
}: {
  block: Extract<PageBlock, { type: 'article' }>
}) {
  return (
    <Section id={`article-${block.id}`} className="py-16">
      <Container className="flex flex-col gap-6">
        {block.media ? (
          <MediaImage
            src={block.media.src}
            alt={block.media.alt}
            width={block.media.width}
            height={block.media.height}
            className="rounded-lg"
          />
        ) : null}

        <article className="flex flex-col gap-3">
          {block.title ? (
            <h2 className="text-3xl font-bold">{block.title}</h2>
          ) : null}
          {block.content ? (
            <div className="whitespace-pre-wrap">{block.content}</div>
          ) : null}
        </article>
      </Container>
    </Section>
  )
}
