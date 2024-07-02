import React, { useState } from 'react';
import { MenuFoldOutlined, HomeOutlined, ShoppingCartOutlined, MoneyCollectOutlined, UserAddOutlined, LogoutOutlined } from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
const { Header, Sider, Content } = Layout;
import { Link } from 'react-router-dom'

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <h3 className="title">Ibrahim - The Coder</h3>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <HomeOutlined />,
              label: <Link to="/home">Home</Link>,
            },
            {
              key: '2',
              icon: <ShoppingCartOutlined />,
              label: <Link to="/cart">Cart</Link>,
            },
            {
              key: '3',
              icon: <MoneyCollectOutlined />,
              label: <Link to="/bills">Bills</Link>,
            },
            {
              key: '4',
              icon: <UserAddOutlined />,
              label: <Link to="/customers">Customers</Link>,
            },
            {
              key: '5',
              icon: <LogoutOutlined />,
              label: 'Logout',
            },

          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;