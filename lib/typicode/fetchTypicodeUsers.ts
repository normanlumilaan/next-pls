import type { TypicodeUser } from '@/lib/typicode/types'

function parseTypicodeUsers(json: unknown): TypicodeUser[] {
  if (!Array.isArray(json)) return []

  return json
    .filter(
      (v): v is Record<string, unknown> => typeof v === 'object' && v !== null,
    )
    .map((v): TypicodeUser => {
      const company = v.company
      const companyName =
        typeof company === 'object' && company !== null
          ? (company as Record<string, unknown>).name
          : undefined

      return {
        id: typeof v.id === 'number' ? v.id : Number(v.id),
        name: typeof v.name === 'string' ? v.name : '',
        email: typeof v.email === 'string' ? v.email : '',
        website: typeof v.website === 'string' ? v.website : '',
        company:
          typeof companyName === 'string' ? { name: companyName } : undefined,
      }
    })
    .filter(u => Number.isFinite(u.id) && u.name && u.email)
}

export type FetchTypicodeUsersOptions = {
  limit?: number
  signal?: AbortSignal
}

/**
 * Fetch users from JSONPlaceholder (Typicode).
 * Returns a normalized list (may be empty).
 */
export async function fetchTypicodeUsers({
  limit = 5,
  signal,
}: FetchTypicodeUsersOptions = {}): Promise<TypicodeUser[]> {
  const url = new URL('https://jsonplaceholder.typicode.com/users')
  url.searchParams.set('_limit', String(limit))

  const res = await fetch(url, { signal })
  if (!res.ok) {
    throw new Error(`Request failed (${res.status})`)
  }

  const json: unknown = await res.json()
  return parseTypicodeUsers(json)
}
