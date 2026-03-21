/**
 * Fetch data from Contentful using the GraphQL API
 * @param document - The GraphQL document to execute
 * @param variables - Variables for the GraphQL query
 * @param preview - Whether to use the preview API
 * @returns The response from the Contentful API
 */
import type { TypedDocumentNode } from '@graphql-typed-document-node/core'
import { print } from 'graphql'

type GraphQLResponse<TResult> = {
  data?: TResult
  errors?: Array<{ message: string }>
}

export async function fetchGraphQL<TResult, TVariables>(
  document: TypedDocumentNode<TResult, TVariables>,
  variables: TVariables,
  preview = false,
): Promise<TResult> {
  const resolvedPreview = preview

  const environment = process.env.CONTENTFUL_ENVIRONMENT ?? 'master'
  const query = print(document)

  const json = (await fetch(
    `${process.env.CONTENTFUL_API_URL}/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${environment}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Switch the Bearer token depending on whether the fetch is supposed to retrieve live
        // Contentful content or draft content
        Authorization: `Bearer ${
          resolvedPreview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query, variables }),
      // Associate all fetches for articles with an "articles" cache tag so content can
      // be revalidated or updated from Contentful on publish
      next: { tags: ['articles'] },
    },
  ).then(response => response.json())) as GraphQLResponse<unknown>

  if (json.errors?.length) {
    throw new Error(json.errors.map(e => e.message).join('\n'))
  }

  return json.data as TResult
}
