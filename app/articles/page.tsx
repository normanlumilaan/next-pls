import HomePage from '@/components/views/HomePage'

export async function generateMetadata() {
  return {
    title: 'Articles',
  }
}

export default async function Page() {
  return <HomePage />
}
