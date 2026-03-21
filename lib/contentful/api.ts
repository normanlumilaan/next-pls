/**
 * Fetch data from Contentful using the GraphQL API
 * @param query - The GraphQL query/document to execute
 * @param variables - Variables for the GraphQL query
 * @param preview - Whether to use the preview API
 * @returns The response from the Contentful API
 */
import { type DocumentNode, print } from 'graphql'

type GraphQLVariables = Record<string, unknown>
type GraphQLDocument = string | DocumentNode

export async function fetchGraphQL(
  query: GraphQLDocument,
  preview?: boolean,
): Promise<unknown>
export async function fetchGraphQL(
  query: GraphQLDocument,
  variables?: GraphQLVariables,
  preview?: boolean,
): Promise<unknown>
export async function fetchGraphQL(
  query: GraphQLDocument,
  variablesOrPreview: GraphQLVariables | boolean = {},
  preview = false,
) {
  const variables =
    typeof variablesOrPreview === 'boolean' ? undefined : variablesOrPreview
  const resolvedPreview =
    typeof variablesOrPreview === 'boolean' ? variablesOrPreview : preview

  const environment = process.env.CONTENTFUL_ENVIRONMENT ?? 'master'
  const queryString = typeof query === 'string' ? query : print(query)

  return fetch(
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
      body: JSON.stringify({ query: queryString, variables }),
      // Associate all fetches for articles with an "articles" cache tag so content can
      // be revalidated or updated from Contentful on publish
      next: { tags: ['articles'] },
    },
  ).then(response => response.json())
}
