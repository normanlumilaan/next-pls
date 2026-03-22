import type { Document } from '@contentful/rich-text-types'
import type { MediaImageType } from '@/utils/types'

export type PageBlock =
  | {
      type: 'article'
      id: string
      slug: string | null
      title: string | null
      content: string | null
      media: MediaImageType | null
    }
  | {
      type: 'gallery'
      id: string
      title: string | null
      description: string | null
      images: MediaImageType[]
    }
  | {
      type: 'unknown'
      id: string
      contentType: string
    }

export type PageModel = {
  id: string
  slug: string | null
  title: string | null
  content: Document | null
  blocks: PageBlock[]
}
