import axios, { AxiosError, AxiosRequestConfig } from 'axios'
import { notification } from 'antd'

const instance = axios.create({
  timeout: 30 * 1000,
})

// 请求拦截
instance.interceptors.request.use(
  config => config,
  error => Promise.reject(error)
)

// 响应拦截
instance.interceptors.response.use(
  res => {
    if (
      res.data.code !== undefined &&
      res.data.code !== 0 &&
      res.data.code !== 200 &&
      !(res.config as AxiosRequestConfig & { skipErrorHandler?: boolean }).skipErrorHandler
    ) {
      notification.error({
        message: '异常',
        description: res.data.msg || res.data.message,
      })
      return Promise.reject(res.data)
    }
    return Promise.resolve(res.data)
  },
  (error: AxiosError<{ code: number; message?: string; msg?: string }>) => {
    const { skipErrorHandler } = error.config as AxiosRequestConfig & {
      skipErrorHandler?: boolean
    }
    if (error.response?.status === 401 && !skipErrorHandler) {
      return
    }
    if (!skipErrorHandler) {
      notification.error({
        message: '异常',
        description: error.response?.data?.message || error.response?.data?.msg || error.message,
      })
    }
    return Promise.reject(error)
  }
)

type Request = <T = unknown>(
  config: AxiosRequestConfig & { skipErrorHandler?: boolean }
) => Promise<T>

export const request = instance.request as Request
