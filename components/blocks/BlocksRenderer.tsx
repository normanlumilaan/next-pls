import ArticleBlock from '@/components/blocks/ArticleBlock'
import GalleryBlock from '@/components/blocks/GalleryBlock'
import UnknownBlock from '@/components/blocks/UnknownBlock'
import type { PageBlock } from '@/lib/contentful/models/page'

export default function BlocksRenderer({ blocks }: { blocks: PageBlock[] }) {
  return (
    <>
      {blocks.map(block => {
        switch (block.type) {
          case 'article':
            return <ArticleBlock key={block.id} block={block} />
          case 'gallery':
            return <GalleryBlock key={block.id} block={block} />
          case 'unknown':
            return <UnknownBlock key={block.id} block={block} />
          default:
            return null
        }
      })}
    </>
  )
}
