import { request } from "@/utils/request";

export interface IMockData {
  store: {
    [key: string]: {
      name: string;
      address: string;
      marker: number[];
    }[];
  };
  seo: string;
}

// 获取mock数据
export function fetchMockData() {
  return request<IMockData>({
    url: `${process.env.NEXT_PUBLIC_HOST}/api/indexStore`,
    method: "GET",
  });
}
// export function fetchProviceList() {
//   return new Promise<IProviceListResult>((resolve) => {
//     resolve({ code: 200, message: "", result: "" });
//   });
// }
