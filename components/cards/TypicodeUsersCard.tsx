import type { TypicodeUser } from '@/lib/typicode/types'

export type TypicodeUsersCardProps = {
  users: TypicodeUser[] | null
  error: string | null
  isLoading: boolean
  onReload: () => void
}

/**
 * Presentational card for displaying Typicode users.
 */
export default function TypicodeUsersCard({
  users,
  error,
  isLoading,
  onReload,
}: TypicodeUsersCardProps) {
  return (
    <div className="rounded-xl border border-black/10 bg-black/5 p-6 dark:border-white/10 dark:bg-white/5">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold">Dummy API users</h2>
          <p className="text-sm text-black/60 dark:text-white/70">
            Fetched from JSONPlaceholder (Typicode)
          </p>
        </div>
        <button
          type="button"
          onClick={onReload}
          className="inline-flex items-center justify-center rounded-md bg-black/5 px-3 py-2 text-sm font-medium hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black/30 dark:bg-white/10 dark:hover:bg-white/15 dark:focus-visible:outline-white/70"
        >
          Reload
        </button>
      </div>

      <div className="mt-5">
        {isLoading ? (
          <div className="space-y-3">
            <div className="h-4 w-56 animate-pulse rounded bg-black/10 dark:bg-white/10" />
            <div className="h-4 w-72 animate-pulse rounded bg-black/10 dark:bg-white/10" />
            <div className="h-4 w-64 animate-pulse rounded bg-black/10 dark:bg-white/10" />
          </div>
        ) : error ? (
          <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-4">
            <p className="text-sm font-medium">Couldn’t load users.</p>
            <p className="mt-1 text-sm text-black/60 dark:text-white/70">
              {error}
            </p>
          </div>
        ) : users?.length ? (
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {users.map(u => (
              <li
                key={u.id}
                className="rounded-lg border border-black/10 bg-white/70 p-4 dark:border-white/10 dark:bg-black/10"
              >
                <p className="font-semibold">{u.name}</p>
                <p className="mt-1 text-sm text-black/60 dark:text-white/70">
                  {u.email}
                </p>
                <p className="mt-1 text-sm text-black/60 dark:text-white/70">
                  {u.company?.name ?? '—'}
                  <span className="text-black/30 dark:text-white/40"> · </span>
                  {u.website}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-black/60 dark:text-white/70">
            No users found.
          </p>
        )}
      </div>
    </div>
  )
}
