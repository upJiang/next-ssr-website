import { Button } from "antd";
import { Button as ButtonMobile } from "antd-mobile";

import OssImage from "@/components/OssImage";
import { useDevice } from "@/hooks/useDevice";

import Layout from "../components/layout";
import type { IMockData } from "./home/api";
import { fetchMockData } from "./home/api";
import styles from "./home/index.module.scss";
export default function (props: { mockData: IMockData }) {
  const { isMobile } = useDevice();
  // ${props.mockData.seo}
  console.log("mockData", props.mockData);
  const headSeo = {
    keywords: "sso、nextjs、antd、jiang",
    description: `seo实践 ${props.mockData.seo}`,
    title: "nextJs 官网 SSR 实战",
  };
  return (
    <Layout seo={headSeo}>
      <div>
        <Button type="primary">antd 按钮</Button>
        <ButtonMobile color="primary">antd-mobile 按钮</ButtonMobile>
        <div className={styles["home-container"]}>官网实战</div>;
        {!isMobile && <div>pc端布局</div>}
        {isMobile && <div>移动端布局</div>}
        {/* 使用 oss，自动判断是否支持 webp*/}
        <OssImage
          style={{
            background: "beige",
          }}
          src="https://img.alicdn.com/tfs/TB11B9iM7voK1RjSZPfXXXPKFXa-338-80.png"
          notSupportWebpWidth={338}
          notSupportWebpHeight={80}
        ></OssImage>
        {/* 不使用 oss,正常传宽高*/}
        <OssImage
          style={{
            background: "beige",
          }}
          src="https://img.alicdn.com/tfs/TB11B9iM7voK1RjSZPfXXXPKFXa-338-80.png"
          width={338}
          height={80}
        ></OssImage>
      </div>
    </Layout>
  );
}

// 静态 SSG
export async function getStaticProps() {
  // 获取mock数据
  const res = await fetchMockData();
  const mockData = res;

  return {
    props: { mockData },
  };
}

// export async function getServerSideProps() {
//   const data = await fetchMockData();
//   console.log("data", data);

//   if (!data) {
//     return {
//       redirect: {
//         destination: "/",
//         permanent: false,
//       },
//     // return {
//     //   notFound: true
//     // };
//     };
//   }

//   return {
//     props: { data },
//   };
// }
