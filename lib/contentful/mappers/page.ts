import type { Document } from '@contentful/rich-text-types'
import type { PageBySlugQuery } from '@/lib/contentful/__generated__/graphql'
import { createMediaProps } from '@/utils/media'
import type { PageBlock, PageModel } from '../models/page'

type ContentfulPage = NonNullable<
  NonNullable<PageBySlugQuery['pageCollection']>['items'][number]
>

type ContentfulBlock = NonNullable<
  NonNullable<
    NonNullable<ContentfulPage['customContentCollection']>['items'][number]
  >
>

function isRichTextDocument(value: unknown): value is Document {
  if (!value || typeof value !== 'object') return false
  // Contentful Rich Text Document always has nodeType + content array
  const v = value as { nodeType?: unknown; content?: unknown }
  return v.nodeType === 'document' && Array.isArray(v.content)
}

export function mapContentfulPageToModel(page: ContentfulPage): PageModel {
  const blocks: PageBlock[] =
    page.customContentCollection?.items
      ?.filter((b): b is ContentfulBlock => b != null)
      .map(block => {
        switch (block.__typename) {
          case 'Article': {
            const media =
              createMediaProps(block.mediaCollection?.items?.[0]) ?? null
            return {
              type: 'article',
              id: block.sys.id,
              slug: block.slug ?? null,
              title: block.title ?? null,
              content: block.content ?? null,
              media,
            }
          }
          case 'Gallery': {
            const images =
              block.imagesCollectionCollection?.items
                ?.map(asset => createMediaProps(asset) ?? null)
                .filter((x): x is NonNullable<typeof x> => x != null) ?? []

            return {
              type: 'gallery',
              id: block.sys.id,
              title: block.title ?? null,
              description: block.description ?? null,
              images,
            }
          }
          default:
            return {
              type: 'unknown',
              id: block.sys.id,
              contentType: block.__typename,
            }
        }
      }) ?? []

  const contentJson = page.content?.json
  const content = isRichTextDocument(contentJson) ? contentJson : null

  return {
    id: page.sys.id,
    slug: page.slug ?? null,
    title: page.title ?? null,
    content,
    blocks,
  }
}
