import MyHeader from "@/components/header";
import MyMenu from "@/components/menu";
import routes from "@/router/index";
import {Layout} from "antd";
import React, {useState} from "react";
import {useRoutes} from "react-router-dom";
const {Header, Sider, Content} = Layout;
const App: React.FC = () => {
  const element = useRoutes(routes);
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const onCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed);
  };
  return (
    <>
      <Layout className='layout'>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className='logo' />
          <MyMenu />
        </Sider>
        <Layout className='site-layout'>
          <Header className='site-layout-header'>
            <MyHeader onCollapse={onCollapse} />
          </Header>
          <Content className='site-layout-content'>{element}</Content>
        </Layout>
      </Layout>
    </>
  );
};
export default App;
