import {
  ArticleBySlugDocument,
  ArticleCollectionDocument,
} from '../__generated__/graphql'
import { requireFirstNonNull } from '../utils'
import { fetchGraphQL } from './api'

export async function getContentfulArticleBySlug(slug: string) {
  const data = await fetchGraphQL(ArticleBySlugDocument, { slug })

  return requireFirstNonNull(
    data.articleCollection?.items,
    `Article not found for contentfulID "${slug}"`,
  )
}

export async function getContentfulArticleCollection(
  limit: number = 10,
  skip: number = 0,
) {
  const data = await fetchGraphQL(ArticleCollectionDocument, { limit, skip })

  const collection = data.articleCollection

  if (!collection) {
    throw new Error('Article collection not found')
  }

  return {
    ...collection,
    items: collection.items.filter(
      (item): item is NonNullable<typeof item> => item != null,
    ),
  }
}
