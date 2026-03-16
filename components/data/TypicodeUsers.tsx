'use client'

import TypicodeUsersCard from '@/components/cards/TypicodeUsersCard'
import { useTypicodeUsers } from '@/hooks/useTypicodeUsers'

/**
 * UI glue component that fetches and renders Typicode users.
 */
export default function TypicodeUsers() {
  const { users, error, isLoading, reload } = useTypicodeUsers(5)

  return (
    <TypicodeUsersCard
      users={users}
      error={error}
      isLoading={isLoading}
      onReload={reload}
    />
  )
}
