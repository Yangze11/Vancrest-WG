import React from 'react';
import styled from '@emotion/styled';
import { RocketOutlined, TeamOutlined, FileOutlined, PlayCircleOutlined, StarOutlined, ThunderboltOutlined, SafetyCertificateOutlined } from '@ant-design/icons';
import { Typography, Button, Row, Col, Card } from 'antd';

const { Title, Paragraph } = Typography;

const Container = styled.main`
  padding: 0;
  margin: 0;
  min-height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  background: linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(240,249,255,0.8) 100%);
`;

const Hero = styled.section`
  text-align: center;
  padding: 120px 20px;
  background: linear-gradient(135deg, rgba(22,119,255,0.1) 0%, rgba(22,119,255,0.05) 100%);
  position: relative;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(22,119,255,0.1) 0%, transparent 60%);
    animation: rotate 30s linear infinite;
  }
  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

const HeroTitle = styled.h1`
  font-size: clamp(2rem, 5vw, 3.5rem);
  background: linear-gradient(120deg, #1677ff, #69b1ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 20px;
  font-weight: 800;
  letter-spacing: -0.5px;
`;

const HeroSubtitle = styled.p`
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: #666;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.8;
  opacity: 0.9;
`;

const FeaturesGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: clamp(20px, 3vw, 40px);
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  animation: fadeIn 1s ease-out;
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const FeatureCard = styled.article`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  padding: clamp(24px, 4vw, 40px);
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
    background: rgba(255, 255, 255, 0.95);
  }
`;

const IconWrapper = styled.div`
  font-size: clamp(32px, 5vw, 48px);
  color: #1677ff;
  margin-bottom: 24px;
  display: inline-flex;
  padding: 16px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(22,119,255,0.1) 0%, rgba(22,119,255,0.05) 100%);
  transition: transform 0.3s ease;
  ${FeatureCard}:hover & {
    transform: scale(1.1);
  }
`;

const FeatureTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 15px;
`;

const FeatureDescription = styled.p`
  color: #666;
  line-height: 1.6;
`;

const features = [
  {
    title: '娱乐直播',
    icon: <PlayCircleOutlined />,
    description: '高清直播技术支持，打造优质直播社区，让每一场直播都精彩纷呈。',
    color: '#1677ff'
  },
  {
    title: '城市陪玩',
    icon: <TeamOutlined />,
    description: '专业陪玩服务，覆盖多个城市，为您提供贴心周到的陪玩体验。',
    color: '#36cfc9'
  },
  {
    title: '游戏互动',
    icon: <ThunderboltOutlined />,
    description: '丰富的游戏互动内容，创造独特的游戏社交体验，让游戏更有趣。',
    color: '#ff7a45'
  }
];

const advantages = [
  {
    icon: <StarOutlined />,
    title: '专业品质',
    description: '严格的服务标准，专业的团队支持'
  },
  {
    icon: <SafetyCertificateOutlined />,
    title: '安全保障',
    description: '完善的安全体系，让您玩得放心'
  },
  {
    icon: <RocketOutlined />,
    title: '快速响应',
    description: '7*24小时客服支持，及时解决问题'
  }
];

const Home = () => {
  return (
    <Container>
      <Hero>
        <HeroTitle>欢迎来到万程乐娱</HeroTitle>
        <HeroSubtitle>
          我们致力于为您提供最优质的娱乐体验，打造一个充满活力的互动社区
        </HeroSubtitle>
        <Button type="primary" size="large" style={{ marginTop: 40, height: 50, fontSize: '1.1rem', padding: '0 40px' }}>
          立即体验
        </Button>
      </Hero>

      <section style={{ padding: '80px 20px', maxWidth: 1200, margin: '0 auto' }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: 60 }}>
          我们的服务
        </Title>
        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard key={index}>
              <IconWrapper style={{ color: feature.color }}>{feature.icon}</IconWrapper>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </section>

      <section style={{ padding: '80px 20px', background: 'rgba(22,119,255,0.03)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <Title level={2} style={{ textAlign: 'center', marginBottom: 60 }}>
            合作伙伴
          </Title>
          <Row gutter={[32, 32]} justify="center">
            <Col xs={12} sm={6}>
              <Card hoverable className="partner-card" style={{
                textAlign: 'center',
                height: '100%',
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.5)',
                borderRadius: '20px'
              }}>
                <svg width="100" height="100" viewBox="0 0 100 100">
                  <path d="M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0zm0 90c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z" fill="#1677ff"/>
                  <text x="50" y="55" textAnchor="middle" fill="#1677ff" style={{fontSize: '24px'}}>腾讯</text>
                </svg>
              </Card>
            </Col>
            <Col xs={12} sm={6}>
              <Card hoverable className="partner-card" style={{
                textAlign: 'center',
                height: '100%',
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.5)',
                borderRadius: '20px'
              }}>
                <svg width="100" height="100" viewBox="0 0 100 100">
                  <rect x="10" y="10" width="80" height="80" rx="10" fill="#1677ff"/>
                  <text x="50" y="55" textAnchor="middle" fill="#fff" style={{fontSize: '24px'}}>网易</text>
                </svg>
              </Card>
            </Col>
            <Col xs={12} sm={6}>
              <Card hoverable className="partner-card" style={{
                textAlign: 'center',
                height: '100%',
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.5)',
                borderRadius: '20px'
              }}>
                <svg width="100" height="100" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" fill="#1677ff"/>
                  <text x="50" y="55" textAnchor="middle" fill="#fff" style={{fontSize: '24px'}}>完美</text>
                </svg>
              </Card>
            </Col>
            <Col xs={12} sm={6}>
              <Card hoverable className="partner-card" style={{
                textAlign: 'center',
                height: '100%',
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.5)',
                borderRadius: '20px'
              }}>
                <svg width="100" height="100" viewBox="0 0 100 100">
                  <polygon points="50,10 90,40 90,60 50,90 10,60 10,40" fill="#1677ff"/>
                  <text x="50" y="55" textAnchor="middle" fill="#fff" style={{fontSize: '24px'}}>米哈游</text>
                </svg>
              </Card>
            </Col>
          </Row>
        </div>
      </section>
      <section style={{ padding: '80px 20px', background: 'rgba(22,119,255,0.03)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <Title level={2} style={{ textAlign: 'center', marginBottom: 60 }}>
            为什么选择我们
          </Title>
          <Row gutter={[32, 32]} justify="center">
            {advantages.map((item, index) => (
              <Col xs={24} sm={8} key={index}>
                <Card hoverable style={{ textAlign: 'center', height: '100%' }}>
                  <div style={{ fontSize: 40, color: '#1677ff', marginBottom: 20 }}>
                    {item.icon}
                  </div>
                  <Title level={4} style={{ marginBottom: 16 }}>{item.title}</Title>
                  <Paragraph>{item.description}</Paragraph>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>
      <section style={{ padding: '80px 20px', background: 'rgba(22,119,255,0.03)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <Title level={2} style={{ textAlign: 'center', marginBottom: 60 }}>
            合作伙伴
          </Title>
          <Row gutter={[32, 32]} justify="center">
            <Col xs={12} sm={6}>
              <Card hoverable className="partner-card" style={{
                textAlign: 'center',
                height: '100%',
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.5)',
                borderRadius: '20px'
              }}>
                <svg width="100" height="100" viewBox="0 0 100 100">
                  <path d="M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0zm0 90c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z" fill="#1677ff"/>
                  <text x="50" y="55" textAnchor="middle" fill="#1677ff" style={{fontSize: '24px'}}>腾讯</text>
                </svg>
              </Card>
            </Col>
            <Col xs={12} sm={6}>
              <Card hoverable className="partner-card" style={{
                textAlign: 'center',
                height: '100%',
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.5)',
                borderRadius: '20px'
              }}>
                <svg width="100" height="100" viewBox="0 0 100 100">
                  <rect x="10" y="10" width="80" height="80" rx="10" fill="#1677ff"/>
                  <text x="50" y="55" textAnchor="middle" fill="#fff" style={{fontSize: '24px'}}>网易</text>
                </svg>
              </Card>
            </Col>
            <Col xs={12} sm={6}>
              <Card hoverable className="partner-card" style={{
                textAlign: 'center',
                height: '100%',
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.5)',
                borderRadius: '20px'
              }}>
                <svg width="100" height="100" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" fill="#1677ff"/>
                  <text x="50" y="55" textAnchor="middle" fill="#fff" style={{fontSize: '24px'}}>完美</text>
                </svg>
              </Card>
            </Col>
            <Col xs={12} sm={6}>
              <Card hoverable className="partner-card" style={{
                textAlign: 'center',
                height: '100%',
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.5)',
                borderRadius: '20px'
              }}>
                <svg width="100" height="100" viewBox="0 0 100 100">
                  <polygon points="50,10 90,40 90,60 50,90 10,60 10,40" fill="#1677ff"/>
                  <text x="50" y="55" textAnchor="middle" fill="#fff" style={{fontSize: '24px'}}>米哈游</text>
                </svg>
              </Card>
            </Col>
          </Row>
        </div>
      </section>
      <section style={{ padding: '80px 20px', background: 'rgba(22,119,255,0.03)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <Title level={2} style={{ textAlign: 'center', marginBottom: 60 }}>
            合作伙伴
          </Title>
          <Row gutter={[32, 32]} justify="center">
            <Col xs={12} sm={6}>
              <Card hoverable className="partner-card" style={{ background: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.5)', textAlign: 'center', padding: '20px' }}>
                <svg width="100" height="40" viewBox="0 0 100 40">
                  <rect width="100" height="40" fill="#1677ff" opacity="0.8" rx="4"/>
                  <text x="50" y="25" fill="white" fontSize="16" textAnchor="middle">Partner 1</text>
                </svg>
              </Card>
            </Col>
            <Col xs={12} sm={6}>
              <Card hoverable className="partner-card" style={{ background: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.5)', textAlign: 'center', padding: '20px' }}>
                <svg width="100" height="40" viewBox="0 0 100 40">
                  <rect width="100" height="40" fill="#36cfc9" opacity="0.8" rx="4"/>
                  <text x="50" y="25" fill="white" fontSize="16" textAnchor="middle">Partner 2</text>
                </svg>
              </Card>
            </Col>
            <Col xs={12} sm={6}>
              <Card hoverable className="partner-card" style={{ background: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.5)', textAlign: 'center', padding: '20px' }}>
                <svg width="100" height="40" viewBox="0 0 100 40">
                  <rect width="100" height="40" fill="#ff7a45" opacity="0.8" rx="4"/>
                  <text x="50" y="25" fill="white" fontSize="16" textAnchor="middle">Partner 3</text>
                </svg>
              </Card>
            </Col>
            <Col xs={12} sm={6}>
              <Card hoverable className="partner-card" style={{ background: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.5)', textAlign: 'center', padding: '20px' }}>
                <svg width="100" height="40" viewBox="0 0 100 40">
                  <rect width="100" height="40" fill="#1677ff" opacity="0.8" rx="4"/>
                  <text x="50" y="25" fill="white" fontSize="16" textAnchor="middle">Partner 4</text>
                </svg>
              </Card>
            </Col>
          </Row>
        </div>
      </section>
    </Container>
  );
};

export default Home;