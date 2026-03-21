export type ArticleProps = {
  title: string | null | undefined
  content: string | null | undefined
}

export default function Article({ title, content }: ArticleProps) {
  return (
    <article>
      <header>
        <h2 className="text-2xl font-bold">{title}</h2>
      </header>
      <main className="text-base">{content}</main>
    </article>
  )
}
