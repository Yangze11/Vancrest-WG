import React from 'react';
import { Typography, Row, Col, Card, Statistic, Space, Image } from 'antd';
const { Text, Title, Paragraph } = Typography;
import { RocketOutlined, TrophyOutlined, CrownOutlined, GlobalOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';

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

const StatsSection = styled.div`
  margin: 60px 0;
  .ant-statistic-title {
    font-size: 1.1rem;
    color: #666;
    margin-bottom: 12px;
  }
  .ant-statistic-content-value {
    font-size: 2.5rem;
    font-weight: bold;
    background: linear-gradient(90deg, #1677ff, #40a9ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const features = [
  {
    id: 1,
    title: '专业直播平台',
    icon: <RocketOutlined />,
    description: '提供稳定、高清的直播技术支持，多平台同步直播，让内容传播更广更远。',
    points: ['4K超清画质', '智能码率调节', '多平台分发', '实时互动系统']
  },
  {
    id: 2,
    title: '全方位运营支持',
    icon: <CrownOutlined />,
    description: '专业的运营团队提供内容策划、活动运营、数据分析等全方位支持。',
    points: ['内容策划指导', '活动运营支持', '数据分析优化', '商业变现方案']
  },
  {
    id: 3,
    title: '优质资源对接',
    icon: <GlobalOutlined />,
    description: '强大的商业资源网络，为主播提供优质商业合作机会，实现多元化变现。',
    points: ['品牌广告合作', '电商带货支持', '粉丝运营体系', '多元变现渠道']
  }
];



const Live = () => {
  return (
    <div style={{ padding: '0', margin: '0', width: '100vw', overflow: 'hidden' }}>
      <HeroSection>
        <Title level={1} style={{ fontSize: '3rem', marginBottom: '24px' }}>
          专业直播解决方案
        </Title>
        <Paragraph style={{ fontSize: '1.2rem', color: '#666', maxWidth: '800px', margin: '0 auto' }}>
          依托先进的直播技术和专业的运营体系，为客户提供一站式直播服务解决方案
        </Paragraph>
      </HeroSection>

      <StatsSection>
        <Row gutter={[48, 48]} justify="center">
          <Col xs={24} sm={8}>
            <Statistic title="服务客户" value="1000+" suffix="家" />
          </Col>
          <Col xs={24} sm={8}>
            <Statistic title="平台覆盖" value="50+" suffix="个" />
          </Col>
          <Col xs={24} sm={8}>
            <Statistic title="直播总时长" value="100000+" suffix="小时" />
          </Col>
        </Row>
      </StatsSection>

      <Title level={2} style={{ textAlign: 'center', marginBottom: '48px' }}>
        业务优势
      </Title>
      <Row gutter={[24, 24]}>
        {features.map(feature => (
          <Col xs={24} sm={8} key={feature.id}>
            <GlassCard>
              <IconWrapper>
                {feature.icon}
              </IconWrapper>
              <Title level={3} style={{ marginBottom: '20px', fontSize: '1.8rem', background: 'linear-gradient(90deg, #1677ff, #40a9ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                {feature.title}
              </Title>
              <Paragraph style={{ marginBottom: '28px', color: '#666', fontSize: '1.1rem', lineHeight: '1.8' }}>
                {feature.description}
              </Paragraph>
              <Space direction="vertical" size={12} style={{ width: '100%' }}>
                {feature.points.map((point, index) => (
                  <div key={index} style={{ color: '#1677ff', fontSize: '1.1rem', padding: '8px 16px', background: 'rgba(24, 144, 255, 0.06)', borderRadius: '8px', transition: 'all 0.3s ease', cursor: 'default' }} className="hover:bg-blue-50">
                    <TrophyOutlined style={{ marginRight: '12px', color: '#40a9ff' }} />
                    {point}
                  </div>
                ))}
              </Space>
            </GlassCard>
          </Col>
        ))}
      </Row>


    </div>
  );
};

export default Live;