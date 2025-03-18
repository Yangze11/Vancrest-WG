import React from 'react';
import { Layout, Menu } from 'antd';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import {
  DashboardOutlined,
  FileTextOutlined,
  NotificationOutlined,
  UserOutlined
} from '@ant-design/icons';
import styled from '@emotion/styled';

const { Sider, Content } = Layout;

const AdminLayout = styled(Layout)`
  min-height: 100%;
`;

const AdminContent = styled(Content)`
  padding: 24px;
  background: #fff;
  border-radius: 8px;
  margin: 24px;
`;

const Admin = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      key: '/admin',
      icon: <DashboardOutlined />,
      label: '仪表盘'
    },
    {
      key: '/admin/posts',
      icon: <FileTextOutlined />,
      label: '文章管理'
    },
    {
      key: '/admin/announcements',
      icon: <NotificationOutlined />,
      label: '公告管理'
    },
    {
      key: '/admin/users',
      icon: <UserOutlined />,
      label: '用户管理'
    }
  ];

  return (
    <AdminLayout>
      <Sider theme="light" style={{ padding: '24px 0' }}>
        <Menu
          mode="inline"
          selectedKeys={[location.pathname]}
          items={menuItems}
          onClick={({ key }) => navigate(key)}
        />
      </Sider>
      <AdminContent>
        <Outlet />
      </AdminContent>
    </AdminLayout>
  );
};

export default Admin;