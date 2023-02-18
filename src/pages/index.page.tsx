import React from "react";
import { Button, Avatar, Typography } from "antd";
import { fetchProviceList } from "./home/api";
// import type { IProvice } from './home/api'
import styles from "./home/index.module.scss";
import { StepBackwardOutlined } from "@ant-design/icons";
import ButtomCom from "./home/components/Button";

// const headSeo = {
//   keywords: '111',
//   description: `“222。 ${props.storeList.seo}`,
//   title: '官网实战',
// }
// props: { proviceList: IProvice[] }
export default function () {
  const { Title } = Typography;
  return (
    <div className="yyyyyyyyy">
      <ButtomCom></ButtomCom>
      <Avatar>U</Avatar>
      <Button type="primary">antd 按钮</Button>
      <StepBackwardOutlined />
      <Title level={2}>h2. Ant Design</Title>
      <div className={styles["home-container"]}>官网实战</div>;
    </div>
  );
}

export async function getStaticProps() {
  // 获取门店列表
  const res2 = await fetchProviceList();
  const proviceList = res2.result;

  return {
    props: { proviceList },
  };
}
