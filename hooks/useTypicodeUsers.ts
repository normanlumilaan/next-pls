'use client'

import { useCallback, useEffect, useState } from 'react'
import { fetchTypicodeUsers } from '@/lib/typicode/fetchTypicodeUsers'
import type { TypicodeUser } from '@/lib/typicode/types'

export type UseTypicodeUsersResult = {
  users: TypicodeUser[] | null
  error: string | null
  isLoading: boolean
  reload: () => void
}

/**
 * Client-side users fetch state for JSONPlaceholder (Typicode).
 */
export function useTypicodeUsers(limit = 5): UseTypicodeUsersResult {
  const [users, setUsers] = useState<TypicodeUser[] | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const load = useCallback(
    async (signal?: AbortSignal) => {
      setIsLoading(true)
      setError(null)

      try {
        const data = await fetchTypicodeUsers({ limit, signal })
        setUsers(data)
      } catch (e) {
        if (e instanceof DOMException && e.name === 'AbortError') return
        setUsers(null)
        setError(e instanceof Error ? e.message : 'Unknown error')
      } finally {
        setIsLoading(false)
      }
    },
    [limit],
  )

  useEffect(() => {
    const controller = new AbortController()
    void load(controller.signal)
    return () => controller.abort()
  }, [load])

  const reload = useCallback(() => {
    void load()
  }, [load])

  return { users, error, isLoading, reload }
}
