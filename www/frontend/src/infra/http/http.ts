import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

enum StatusCode {
  Unauthorized = 401,
  Forbidden = 403,
  TooManyRequests = 429,
  InternalServerError = 500,
}

const headers: Readonly<Record<string, string | boolean>> = {
  Accept: 'application/json',
  'Content-Type': 'application/json; charset=utf-8'
}

export class Http {
  private instance: AxiosInstance | null = null

  private get http (): AxiosInstance {
    return this.instance != null ? this.instance : this.initHttp()
  }

  initHttp (): AxiosInstance {
    const http = axios.create({
      baseURL: 'http://localhost:3333',
      headers
    })

    http.interceptors.response.use(
      (response) => response,
      async (error) => {
        const { response } = error
        return this.handleError(response)
      }
    )

    this.instance = http
    return http
  }

  async request<T = any, R = AxiosResponse<T>>(config: AxiosRequestConfig): Promise<R> {
    return this.http.request(config)
  }

  async get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.http.get<T, R>(url, config)
  }

  async post<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.post<T, R>(url, data, config)
  }

  async put<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.put<T, R>(url, data, config)
  }

  async delete<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.http.delete<T, R>(url, config)
  }

  private async handleError (error: any): Promise<never> {
    const { status } = error

    switch (status) {
      case StatusCode.InternalServerError: {
        // Handle InternalServerError
        break
      }
      case StatusCode.Forbidden: {
        // Handle Forbidden
        break
      }
      case StatusCode.Unauthorized: {
        // Handle Unauthorized
        break
      }
      case StatusCode.TooManyRequests: {
        // Handle TooManyRequests
        break
      }
    }

    return Promise.reject(error)
  }
}
