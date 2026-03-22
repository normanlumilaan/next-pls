import { PageBySlugDocument } from '../__generated__/graphql'
import { requireFirstNonNull } from '../utils'
import { fetchGraphQL } from './api'

export async function getContentfulPageBySlug(slug: string) {
  const data = await fetchGraphQL(PageBySlugDocument, { slug })

  return requireFirstNonNull(
    data.pageCollection?.items,
    `Page not found for slug "${slug}"`,
  )
}
