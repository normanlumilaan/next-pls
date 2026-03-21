import Link from 'next/link'
import MediaImage from '@/components/media/MediaImage'
import type { MediaImageType } from '@/utils/types'

export type ArticlesListItemProps = {
  title: string
  content: string
  media: MediaImageType | null
  slug: string
}

export default function ArticlesListItem({
  title,
  content,
  media,
  slug,
}: ArticlesListItemProps) {
  return (
    <Link href={slug}>
      <li className="flex gap-4">
        {media && (
          <MediaImage
            src={media.src}
            alt={media.alt}
            width={media.width}
            height={media.height}
            className="w-24 h-24 object-cover"
          />
        )}
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="text-sm text-gray-500">{content}</p>
        </div>
      </li>
    </Link>
  )
}
