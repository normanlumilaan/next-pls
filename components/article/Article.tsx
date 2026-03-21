import MediaImage from '@/components/media/MediaImage'

import type { MediaImageType } from '@/utils/types'

type ArticleProps = {
  title: string | null | undefined
  content: string | null | undefined
  media?: MediaImageType | null
}

export default function CardArticle({ title, content, media }: ArticleProps) {
  return (
    <article>
      <header>
        <h2 className="text-2xl font-bold">{title}</h2>
      </header>
      {media && (
        <MediaImage
          className="my-6"
          src={media.src}
          alt={media.alt}
          width={media.width}
          height={media.height}
        />
      )}
      <main className="text-base">{content}</main>
    </article>
  )
}
