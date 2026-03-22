import HomePage from '@/components/views/HomePage'
import { createSeoDocmentTitle } from '@/utils/seo'

export const generateMetadata = async () => {
  return {
    title: createSeoDocmentTitle('Home'),
    description: 'Welcome to the home page',
  }
}

export default function Page() {
  return <HomePage />
}
