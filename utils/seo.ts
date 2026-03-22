import { getAppName } from '@/utils/app'

export const createSeoDocmentTitle = (title: string, sep: string = '|') => {
  const appName = getAppName()
  return `${title} ${sep} ${appName}`
}
