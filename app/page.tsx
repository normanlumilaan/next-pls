import BlocksRenderer from '@/components/blocks/BlocksRenderer'
import PageContent from '@/components/blocks/PageContent'
import { getContentfulPageBySlug } from '@/lib/contentful/api/page'
import { mapContentfulPageToModel } from '@/lib/contentful/mappers/page'
import { createSeoDocmentTitle } from '@/utils/seo'

export const generateMetadata = async () => {
  const page = mapContentfulPageToModel(await getContentfulPageBySlug('home'))

  return {
    title: createSeoDocmentTitle(page.title ?? 'Home'),
    description: 'Welcome to the home page',
  }
}

export default async function Page() {
  const page = mapContentfulPageToModel(await getContentfulPageBySlug('home'))

  return (
    <>
      <PageContent content={page.content} />
      <BlocksRenderer blocks={page.blocks} />
    </>
  )
}
