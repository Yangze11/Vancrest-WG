import React from 'react';
import { Card, Row, Col, Statistic } from 'antd';
import { UserOutlined, EyeOutlined, LikeOutlined, TeamOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';

const GlassCard = styled(Card)`
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;

const Dashboard = () => {
  return (
    <div>
      <h2>仪表盘</h2>
      <Row gutter={[24, 24]}>
        <Col xs={24} sm={12} md={6}>
          <GlassCard>
            <Statistic
              title="总用户数"
              value={1234}
              prefix={<UserOutlined />}
              valueStyle={{ color: '#1677ff' }}
            />
          </GlassCard>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <GlassCard>
            <Statistic
              title="今日访问"
              value={567}
              prefix={<EyeOutlined />}
              valueStyle={{ color: '#1677ff' }}
            />
          </GlassCard>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <GlassCard>
            <Statistic
              title="互动数"
              value={890}
              prefix={<LikeOutlined />}
              valueStyle={{ color: '#1677ff' }}
            />
          </GlassCard>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <GlassCard>
            <Statistic
              title="在线陪玩"
              value={45}
              prefix={<TeamOutlined />}
              valueStyle={{ color: '#1677ff' }}
            />
          </GlassCard>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;