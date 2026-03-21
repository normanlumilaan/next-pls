import type { AssetFieldsFragment } from '@/lib/contentful/__generated__/graphql'
import type { MediaImageType } from '@/utils/types'

// Unified media props creation function
export const createMediaProps = (
  asset: AssetFieldsFragment | null | undefined,
): MediaImageType | null => {
  const src = asset?.url ?? null
  const width = asset?.width ?? null
  const height = asset?.height ?? null
  if (!src || !width || !height) return null

  return {
    src,
    alt: asset?.title ?? '',
    width,
    height,
  }
}
