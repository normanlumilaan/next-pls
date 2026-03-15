/**
 * Get the base URL of the application
 * @returns The base URL of the application
 */
export const getAppBaseUrl = (): string => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
  if (!baseUrl) {
    throw new Error('NEXT_PUBLIC_BASE_URL is not set')
  }
  return baseUrl
}

/**
 * Get the name of the application
 * @returns The name of the application
 */
export const getAppName = (): string => {
  const appName = process.env.NEXT_PUBLIC_APP_NAME
  if (!appName) {
    throw new Error('NEXT_PUBLIC_APP_NAME is not set')
  }
  return appName
}
