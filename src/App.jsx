import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { Layout, Menu, Button, theme } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import './App.css';

const { Header, Content, Footer } = Layout;

const GlassHeader = styled(Header)`
  background: rgba(255, 255, 255, 0.7) !important;
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
  z-index: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const Logo = styled.div`
  float: left;
  font-size: 20px;
  font-weight: bold;
  color: #1677ff;
`;

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const menuItems = [
    { key: '/', label: '首页' },
    { key: '/live', label: '娱乐直播' },
    { key: '/city-play', label: '城市陪玩' },
    { key: '/gaming', label: '游戏互动' },
    { key: '/announcement', label: '最新公告' },
  ];

  return (
    <Layout>
      <GlassHeader>
        <Logo>万程乐娱</Logo>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <Menu
            mode="horizontal"
            selectedKeys={[location.pathname]}
            items={menuItems}
            onClick={({ key }) => navigate(key)}
            style={{ background: 'transparent', border: 'none' }}
          />
        </div>
        <Button
          type="text"
          icon={<UserOutlined />}
          onClick={() => navigate('/login')}
        >
          管理入口
        </Button>
      </GlassHeader>
      <Content style={{ padding: '0 50px', minHeight: 'calc(100vh - 134px)' }}>
        <Outlet />
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        ©{new Date().getFullYear()} 万程乐娱 版权所有
      </Footer>
    </Layout>
  );
};

export default App;
