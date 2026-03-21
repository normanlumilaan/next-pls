import type { ComponentPropsWithoutRef } from 'react'

export type ArticleProps = {
  title: string
  content: string
} & ComponentPropsWithoutRef<'article'>

export default function Article({
  title,
  content,
}: {
  title: string
  content: string
}) {
  return (
    <article>
      <header>
        <h2 className="text-2xl font-bold">{title}</h2>
      </header>
      <main className="text-base">{content}</main>
    </article>
  )
}
