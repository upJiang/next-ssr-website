// import type { IProvice } from './home/api'
import { StepBackwardOutlined } from "@ant-design/icons";
import { Avatar, Button, Typography } from "antd";

// const headSeo = {
//   keywords: '111',
//   description: `“222。 ${props.storeList.seo}`,
//   title: '官网实战',
// }
// props: { proviceList: IProvice[] }
export default function () {
  const { Title } = Typography;
  return (
    <div>
      <Avatar>U</Avatar>
      <Button type="primary">antd 按钮</Button>
      <StepBackwardOutlined />
      <Title level={2}>h2. Ant Design</Title>
    </div>
  );
}
