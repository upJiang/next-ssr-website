import { Button } from "antd";

// import { Typography } from "antd";
import { fetchProviceList } from "./home/api";
import styles from "./home/index.module.scss";
// import type { IProvice } from './home/api'

// const headSeo = {
//   keywords: '111',
//   description: `“222。 ${props.storeList.seo}`,
//   title: '官网实战',
// }
// props: { proviceList: IProvice[] }
export default function () {
  return (
    <div>
      <Button type="primary">antd 按钮</Button>
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
