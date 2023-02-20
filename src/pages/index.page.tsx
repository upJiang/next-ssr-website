import { Button } from "antd";
import { Button as ButtonMobile } from "antd-mobile";

import Layout from "../components/layout";
import type { IMockData } from "./home/api";
import { fetchMockData } from "./home/api";
import styles from "./home/index.module.scss";

export default function (props: { mockData: IMockData }) {
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
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  // 获取mock数据
  const res = await fetchMockData();
  const mockData = res;

  return {
    props: { mockData },
  };
}
