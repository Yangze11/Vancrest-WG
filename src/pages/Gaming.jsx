import React from 'react';
import { Card, Row, Col, Typography, Space, Statistic } from 'antd';
import { RocketOutlined, TrophyOutlined, TeamOutlined, SafetyCertificateOutlined, UserOutlined, FireOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';

const { Text, Title, Paragraph } = Typography;

const GlassCard = styled(Card)`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);
  overflow: hidden;
  padding: 36px;
  text-align: center;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #1677ff, #40a9ff);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  &:hover {
    transform: translateY(-12px);
    box-shadow: 0 12px 40px rgba(31, 38, 135, 0.25);
    background: rgba(255, 255, 255, 0.95);
    &::before {
      opacity: 1;
    }
  }
`;

const IconWrapper = styled.div`
  font-size: 56px;
  color: #1677ff;
  margin-bottom: 28px;
  transition: all 0.4s ease;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80px;
    height: 80px;
    background: rgba(24, 144, 255, 0.1);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    transition: all 0.4s ease;
  }
  ${GlassCard}:hover & {
    transform: scale(1.15) rotate(5deg);
    &::after {
      width: 90px;
      height: 90px;
      background: rgba(24, 144, 255, 0.15);
    }
  }
`;

const StyledTitle = styled(Title)`
  text-align: center;
  margin-bottom: 48px !important;
`;

const features = [
  {
    id: 1,
    title: '专业陪玩服务',
    icon: <TeamOutlined />,
    description: '严格筛选的专业陪玩团队，提供个性化游戏陪玩服务。',
    points: [
      '陪玩技能认证',
      '实时语音沟通',
      '个性化服务定制',
      '全程服务保障'
    ],
    color: '#1677ff'
  },
  {
    id: 2,
    title: '多样游戏类型',
    icon: <TrophyOutlined />,
    description: '覆盖主流游戏类型，满足不同玩家的陪玩需求。',
    points: [
      '竞技游戏陪玩',
      '休闲游戏陪玩',
      '手游陪玩服务',
      '团队开黑服务'
    ],
    color: '#36cfc9'
  },
  {
    id: 3,
    title: '安全保障体系',
    icon: <SafetyCertificateOutlined />,
    description: '完善的安全保障机制，为您提供安心的游戏陪玩体验。',
    points: [
      '实名认证系统',
      '服务质量监控',
      '投诉处理机制',
      '隐私信息保护'
    ],
    color: '#ff7a45'
  }
];


const GameShowcase = styled.section`
  margin: 80px 0;
  .game-card {
    background: rgba(255, 255, 255, 0.9);
    border-radius: 16px;
    overflow: hidden;
    transition: all 0.3s ease;
    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
    }
    .ant-card-cover img {
      height: 200px;
      object-fit: cover;
      transition: all 0.3s ease;
    }
    &:hover .ant-card-cover img {
      transform: scale(1.05);
    }
  }
`;

const games = [
  {
    title: '王者荣耀',
    players: '5000+',
    category: '陪玩、带练、上分',
    image: `data:image/svg+xml,${encodeURIComponent('<svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#f0f5ff"/><path d="M200 100c-27.6 0-50 22.4-50 50s22.4 50 50 50 50-22.4 50-50-22.4-50-50-50zm20 55h-15v15c0 2.8-2.2 5-5 5s-5-2.2-5-5v-15h-15c-2.8 0-5-2.2-5-5s2.2-5 5-5h15v-15c0-2.8 2.2-5 5-5s5 2.2 5 5v15h15c2.8 0 5 2.2 5 5s-2.2 5-5 5z" fill="#1677ff"/></svg>')}`
  },
  {
    title: '英雄联盟',
    players: '3000+',
    category: '陪玩、指导、双排',
    image: `data:image/svg+xml,${encodeURIComponent('<svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#f0f5ff"/><path d="M200 90l60 30v60l-60 30-60-30v-60l60-30zm0 20l-40 20v40l40 20 40-20v-40l-40-20z" fill="#1677ff"/></svg>')}`
  },
  {
    title: '和平精英',
    players: '2000+',
    category: '陪玩、带飞、教学',
    image: `data:image/svg+xml,${encodeURIComponent('<svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#f0f5ff"/><path d="M180 120h40v20h60v20h-60v20h-40v-20h-60v-20h60z" fill="#1677ff"/></svg>')}`
  }
];


const achievements = [
  {
    title: '认证陪玩',
    value: '10000+',
    prefix: <UserOutlined />
  },
  {
    title: '日订单量',
    value: '5000+',
    prefix: <FireOutlined />
  },
  {
    title: '用户好评率',
    value: '98%',
    prefix: <TrophyOutlined />
  }
];


const Gaming = () => {
  return (
    <div style={{ padding: '0', margin: '0', width: '100vw', overflow: 'hidden' }}>
      <StyledTitle level={2}>游戏陪玩服务</StyledTitle>
      <Paragraph style={{ textAlign: 'center', fontSize: '1.1rem', color: '#666', marginBottom: '40px' }}>
        专业的游戏陪玩平台，为您提供优质、安全的游戏陪玩体验
      </Paragraph>
      <Row gutter={[24, 24]}>
        {features.map(feature => (
          <Col xs={24} sm={12} md={8} key={feature.id}>
            <GlassCard>
              <IconWrapper style={{ color: feature.color }}>
                {feature.icon}
              </IconWrapper>
              <Title level={3} style={{ marginBottom: '20px', fontSize: '1.8rem', background: `linear-gradient(90deg, ${feature.color}, ${feature.color}99)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                {feature.title}
              </Title>
              <Paragraph style={{ marginBottom: '28px', color: '#666', fontSize: '1.1rem', lineHeight: '1.8' }}>
                {feature.description}
              </Paragraph>
              <Space direction="vertical" size={12} style={{ width: '100%' }}>
                {feature.points.map((point, index) => (
                  <div key={index} style={{ color: feature.color, fontSize: '1.1rem', padding: '8px 16px', background: `${feature.color}0a`, borderRadius: '8px', transition: 'all 0.3s ease', cursor: 'default' }} className="hover:bg-blue-50">
                    <TrophyOutlined style={{ marginRight: '12px', color: `${feature.color}cc` }} />
                    {point}
                  </div>
                ))}
              </Space>
            </GlassCard>
          </Col>
        ))}
      </Row>

      <div style={{ padding: '80px 0', background: 'linear-gradient(135deg, rgba(22,119,255,0.05) 0%, rgba(22,119,255,0.02) 100%)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
          <Title level={2} style={{ textAlign: 'center', marginBottom: 48 }}>
            平台数据
          </Title>
          <Row gutter={[48, 48]} justify="center">
            {achievements.map((achievement, index) => (
              <Col xs={24} sm={8} key={index}>
                <Card hoverable style={{ textAlign: 'center', height: '100%' }}>
                  <div style={{ fontSize: 40, color: '#1677ff', marginBottom: 20 }}>
                    {achievement.prefix}
                  </div>
                  <Statistic
                    title={<Title level={4}>{achievement.title}</Title>}
                    value={achievement.value}
                    valueStyle={{ color: '#1677ff', fontSize: '2rem' }}
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      <GameShowcase>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
          <Title level={2} style={{ textAlign: 'center', marginBottom: 48 }}>
            热门游戏
          </Title>
          <Row gutter={[32, 32]}>
            {games.map((game, index) => (
              <Col xs={24} sm={8} key={index}>
                <Card
                  hoverable
                  className="game-card"
                  cover={<img alt={game.title} src={game.image} />}
                >
                  <Card.Meta
                    title={<Title level={4}>{game.title}</Title>}
                    description={
                      <Space direction="vertical" size={8}>
                        <Text>活跃玩家：{game.players}</Text>
                        <Text>游戏类型：{game.category}</Text>
                      </Space>
                    }
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </GameShowcase>
    </div>
  );
};

export default Gaming;