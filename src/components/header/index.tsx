import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";
import {Breadcrumb} from "antd";
import React, {useEffect, useState} from "react";
import style from "./index.module.scss";
import {HeaderProps} from "./type";

const MyHeader: React.FC<HeaderProps> = ({onCollapse, isCollapsed = false}) => {
  const [collapsed, setCollapsed] = useState<boolean>(isCollapsed);
  useEffect(() => {
    onCollapse(collapsed);
  }, [collapsed]);
  return (
    <>
      <div className={style.header}>
        {React.createElement(
          collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            onClick: () => setCollapsed(!collapsed),
          },
        )}
        <Breadcrumb className={style.breadcrumb}>
          <Breadcrumb.Item>User</Breadcrumb.Item>
          <Breadcrumb.Item>Bill</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </>
  );
};

export default MyHeader;
