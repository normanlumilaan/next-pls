import clsx from 'clsx'
import Image, { type ImageProps } from 'next/image'
import type { MediaImageType } from '@/utils/types'

export type MediaImageProps = MediaImageType &
  ImageProps & {
    caption?: string | undefined
  }

export default function MediaImage({
  src,
  alt,
  width,
  height,
  className,
  caption,
  ...rest
}: MediaImageProps) {
  return (
    <figure className={clsx('m-0 p-0')}>
      <Image
        className={clsx('block w-full h-auto', className)}
        src={src}
        alt={alt}
        width={width}
        height={height}
        {...rest}
      />
      {caption && (
        <figcaption className="text-sm text-gray-500">{caption}</figcaption>
      )}
    </figure>
  )
}
