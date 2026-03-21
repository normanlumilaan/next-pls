import ArticlesListingPage from '@/components/views/ArticlesListingPage'
import { getContentfulArticleCollection } from '@/lib/contentful/api/article'
import { fetchAllCollectionItems } from '@/lib/contentful/utils'
import { createMediaProps } from '@/utils/media'

export async function generateMetadata() {
  return {
    title: 'Articles',
  }
}

export default async function Page() {
  const items = await fetchAllCollectionItems(getContentfulArticleCollection, {
    pageSize: 100,
  })

  const articles = items
    .filter(item => Boolean(item.slug))
    .map(item => ({
      slug: `/articles/${item.slug as string}`,
      title: item.title ?? '',
      content: item.content ?? '',
      media: createMediaProps(item.mediaCollection?.items?.[0]),
    }))

  return <ArticlesListingPage items={articles} />
}
