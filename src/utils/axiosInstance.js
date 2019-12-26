import axios from 'axios'
import { BASE_API_URL } from '../api/api_url'

const AXIOS_INSTANCE = axios.create({
  baseURL: BASE_API_URL
})

AXIOS_INSTANCE.defaults.withCredentials = true

// 请求拦截
AXIOS_INSTANCE.interceptors.request.use(config => {
  return config
})

// 响应拦截
AXIOS_INSTANCE.interceptors.response.use(
  res => {
    let { data } = res
    if (data.code === 600) {
      localStorage.removeItem('ant_token')
    }
    return res
  },
  error => {
    return Promise.reject(error)
  }
)

export default async (url = '', data = null, config = {}) => {
  const defaultConfig = {
    url: url,
    method: 'get',
    timeout: 1200
  }
  if (config.method) {
    config.method = config.method.toLowerCase()
  }

  const axiosConfig = Object.assign(defaultConfig, config)
  if (axiosConfig.method === 'get') {
    axiosConfig.params = data
  } else {
    axiosConfig.data = data
  }

  const response = await AXIOS_INSTANCE(axiosConfig)
  return response.data
}
