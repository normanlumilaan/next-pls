import 'dotenv/config'
import type { CodegenConfig } from '@graphql-codegen/cli'

const environment = process.env.CONTENTFUL_ENVIRONMENT ?? 'master'
const accessToken =
  process.env.CONTENTFUL_ACCESS_TOKEN ??
  process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN

if (!process.env.CONTENTFUL_API_URL)
  throw new Error('Missing CONTENTFUL_API_URL')
if (!process.env.CONTENTFUL_SPACE_ID)
  throw new Error('Missing CONTENTFUL_SPACE_ID')
if (!accessToken) throw new Error('Missing CONTENTFUL_ACCESS_TOKEN')

const config: CodegenConfig = {
  schema: [
    {
      [`${process.env.CONTENTFUL_API_URL}/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${environment}`]:
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
    },
  ],
  documents: ['lib/contentful/**/*.graphql'],
  generates: {
    'lib/contentful/__generated__/graphql.ts': {
      plugins: ['typescript', 'typescript-operations', 'typed-document-node'],
    },
  },
}

export default config
