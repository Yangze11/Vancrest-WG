import React from 'react';
import { Typography, Card, List, Tag, Space } from 'antd';
import { NotificationOutlined, ClockCircleOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';

const { Title, Paragraph } = Typography;

const HeroSection = styled.div`
  padding: 80px 0;
  text-align: center;
  background: linear-gradient(135deg, rgba(22,119,255,0.1) 0%, rgba(22,119,255,0.05) 100%);
  border-radius: 20px;
  margin-bottom: 60px;
`;

const GlassCard = styled(Card)`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);
  overflow: hidden;
  margin-bottom: 24px;
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(31, 38, 135, 0.25);
    background: rgba(255, 255, 255, 0.95);
  }
`;

const announcements = [
  {
    id: 1,
    title: '平台服务升级公告',
    content: '为提供更好的服务体验，我们将于本周六凌晨2:00-4:00进行系统升级维护。升级期间，部分服务可能暂时无法使用，敬请谅解。',
    date: '2024-01-15',
    type: '系统维护'
  },
  {
    id: 2,
    title: '春节期间服务安排通知',
    content: '春节期间（2024年2月9日-2月17日），平台将继续为广大用户提供服务。节日期间可能响应时间稍有延长，感谢您的理解。',
    date: '2024-01-20',
    type: '节日通知'
  },
  {
    id: 3,
    title: '新功能上线预告',
    content: '我们即将推出全新的实时配对系统，让您更快找到心仪的陪玩伙伴。新功能将于下月初正式上线，敬请期待。',
    date: '2024-01-25',
    type: '功能更新'
  }
];

const typeColors = {
  '系统维护': 'blue',
  '节日通知': 'gold',
  '功能更新': 'green'
};

const Announcement = () => {
  return (
    <div style={{ padding: '0', margin: '0', width: '100vw', overflow: 'hidden' }}>
      <HeroSection>
        <Title level={2}>最新公告</Title>
        <Paragraph style={{ fontSize: '1.1rem', color: '#666' }}>
          及时了解平台最新动态和重要通知
        </Paragraph>
      </HeroSection>

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
        <List
          dataSource={announcements}
          renderItem={item => (
            <GlassCard>
              <Card.Meta
                title={
                  <Space size={16}>
                    <NotificationOutlined style={{ color: '#1677ff' }} />
                    <span>{item.title}</span>
                    <Tag color={typeColors[item.type]}>{item.type}</Tag>
                  </Space>
                }
                description={
                  <div>
                    <Paragraph style={{ fontSize: '1.1rem', marginTop: '16px' }}>
                      {item.content}
                    </Paragraph>
                    <Space style={{ color: '#666', marginTop: '16px' }}>
                      <ClockCircleOutlined />
                      <span>{item.date}</span>
                    </Space>
                  </div>
                }
              />
            </GlassCard>
          )}
        />
      </div>
    </div>
  );
};

export default Announcement;