const isDev = process.env.NODE_ENV === 'development'

export const BASE_API_URL = isDev ? 'http://mock' : 'http://localhost:8080/'
