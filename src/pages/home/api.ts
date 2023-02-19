// import { request } from '@/utils/request'

export interface IProvice {
  code: string
  name: string
  provinceName: string
}
interface IProviceListResult {
  code: number
  message: string
  result: string
  
}

// 获取省份列表
// export function fetchProviceList() {
//   return request<IProviceListResult>({
//     url: `${process.env.NEXT_PUBLIC_HOST}/region/province`,
//     method: 'GET',
//   })
// }
export function fetchProviceList() {
  return new Promise<IProviceListResult>(resolve => {
    resolve({ code: 200, message: '', result: '' })
  })
}
