import { ArticleBySlugDocument } from './__generated__/graphql'
import { fetchGraphQL } from './api'
import { requireFirstNonNull } from './utils'

export async function getArticleBySlug(slug: string) {
  const data = await fetchGraphQL(ArticleBySlugDocument, { slug })

  return requireFirstNonNull(
    data.articleCollection?.items,
    `Article not found for contentfulID "${slug}"`,
  )
}

export type ArticleBySlugItem = Awaited<ReturnType<typeof getArticleBySlug>>
