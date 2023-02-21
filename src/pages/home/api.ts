// import { request } from "@/utils/request";

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
// export function fetchMockData() {
//   return request<IMockData>({
//     url: `${process.env.NEXT_PUBLIC_HOST}/api/indexStore`,
//     method: "GET",
//   });
// }
export function fetchMockData() {
  return new Promise<IMockData>((resolve) => {
    resolve({
      store: {
        深圳: [
          {
            name: "111",
            address: "222",
            marker: [11, 22],
          },
        ],
      },
      seo: "333",
    });
  });
}
