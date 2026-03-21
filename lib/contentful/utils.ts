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
