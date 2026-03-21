export function firstNonNull<T>(
  items: ReadonlyArray<T | null> | null | undefined,
): T | null {
  if (!items?.length) return null
  for (const item of items) {
    if (item != null) return item
  }
  return null
}

export function requireFirstNonNull<T>(
  items: ReadonlyArray<T | null> | null | undefined,
  message: string,
): T {
  const item = firstNonNull(items)
  if (!item) throw new Error(message)
  return item
}

export async function fetchAllCollectionItems<
  TCollection extends {
    items: ReadonlyArray<unknown>
    total?: number | null
  },
>(
  fetchPage: (limit: number, skip: number) => Promise<TCollection>,
  { pageSize = 100 }: { pageSize?: number } = {},
): Promise<TCollection['items'] extends ReadonlyArray<infer T> ? T[] : never> {
  const items: unknown[] = []
  let skip = 0
  let total = Number.POSITIVE_INFINITY

  while (skip < total) {
    const page = await fetchPage(pageSize, skip)
    items.push(...page.items)

    // Prefer server-reported total; fall back to "stop when page is short"
    if (typeof page.total === 'number') {
      total = page.total
    } else if (page.items.length < pageSize) {
      break
    }

    skip += pageSize
  }

  return items as any
}
