import { notFound } from 'next/navigation'
import ArticlePage from '@/components/views/ArticlePage'
import {
  getContentfulArticleBySlug,
  getContentfulArticleCollection,
} from '@/lib/contentful/api/article'
import { createMediaProps } from '@/utils/media'

export async function generateStaticParams() {
  const params: Array<{ slug: string }> = []
  const pageSize = 100
  let skip = 0
  let total = Number.POSITIVE_INFINITY

  while (skip < total) {
    const collection = await getContentfulArticleCollection(pageSize, skip)
    total = collection.total ?? 0

    for (const item of collection.items) {
      const id = item.slug ?? null
      if (!id) continue

      params.push({ slug: id })
    }

    skip += pageSize
  }

  return params
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string } | Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = await getContentfulArticleBySlug(slug)

  return {
    title: article.title ?? '',
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  if (!slug) {
    notFound()
  }
  const article = await getContentfulArticleBySlug(slug)

  return (
    <ArticlePage
      slug={slug}
      title={article.title ?? ''}
      content={article.content ?? ''}
      media={createMediaProps(article.mediaCollection?.items?.[0]) ?? undefined}
    />
  )
}
