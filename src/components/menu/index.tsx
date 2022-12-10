import {AppstoreOutlined, MailOutlined} from "@ant-design/icons";
import type {MenuProps} from "antd";
import {Menu} from "antd";
import React from "react";
const items: MenuProps["items"] = [
  {
    label: "Navigation One",
    key: "mail",
    icon: <MailOutlined />,
  },
  {
    label: "Navigation Two",
    key: "app",
    icon: <AppstoreOutlined />,
  },
];
const MyMenu: React.FC = () => {
  const menuItemClick = () => {};
  return (
    <>
      <Menu
        theme='dark'
        defaultSelectedKeys={["1"]}
        mode='inline'
        items={items}
        onClick={menuItemClick}
      />
    </>
  );
};

export default MyMenu;
