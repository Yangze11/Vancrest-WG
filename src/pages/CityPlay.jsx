import React from 'react';
import { Typography, Row, Col, Card, Statistic, Space } from 'antd';
import { StarOutlined, TeamOutlined, SafetyCertificateOutlined, TrophyOutlined, CompassOutlined } from '@ant-design/icons';
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
    title: '专业服务团队',
    icon: <TeamOutlined />,
    description: '严格筛选的专业陪玩团队，提供标准化、个性化的优质服务体验。',
    points: ['严格资质审核', '专业技能培训', '服务质量监控', '一对一专属服务']
  },
  {
    id: 2,
    title: '品质服务保障',
    icon: <SafetyCertificateOutlined />,
    description: '完善的服务标准和保障体系，确保每一次服务都令人满意。',
    points: ['服务标准规范', '安全保障机制', '保险全程保障', '投诉快速处理']
  },
  {
    id: 3,
    title: '多样化服务选择',
    icon: <CompassOutlined />,
    description: '覆盖休闲娱乐、运动健身、文化体验等多个领域的陪玩服务。',
    points: ['休闲娱乐陪玩', '运动健身指导', '文化景点游览', '兴趣技能学习']
  }
];

const ServiceProcess = styled.section`
  padding: 80px 0;
  background: linear-gradient(135deg, rgba(22,119,255,0.05) 0%, rgba(22,119,255,0.02) 100%);
  .process-step {
    text-align: center;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      top: 30px;
      right: -50%;
      width: 100%;
      height: 2px;
      background: linear-gradient(90deg, #1677ff, #40a9ff);
      @media (max-width: 768px) {
        display: none;
      }
    }
    &:last-child::after {
      display: none;
    }
    .step-number {
      width: 60px;
      height: 60px;
      line-height: 60px;
      border-radius: 50%;
      background: linear-gradient(135deg, #1677ff, #40a9ff);
      color: white;
      font-size: 24px;
      margin: 0 auto 20px;
      font-weight: bold;
    }
  }
`;

const Testimonials = styled.section`
  padding: 80px 0;
  .testimonial-card {
    height: 100%;
    .ant-card-meta-title {
      color: #1677ff;
      margin-bottom: 16px;
    }
    .ant-card-meta-description {
      font-size: 1.1rem;
      line-height: 1.8;
      color: #666;
    }
  }
`;

const processSteps = [
  { number: 1, title: '在线预约', description: '选择服务类型和时间' },
  { number: 2, title: '需求确认', description: '客服确认具体需求' },
  { number: 3, title: '匹配陪玩', description: '系统智能匹配专业陪玩' },
  { number: 4, title: '服务开始', description: '准时到达，开始服务' }
];

const testimonials = [
  {
    name: '张先生',
    title: '运动健身服务体验',
    content: '专业的私教陪练，让我的健身之旅变得更加轻松愉快。教练非常专业，针对性的指导让我收获很大。',
    rating: 5
  },
  {
    name: '李女士',
    title: '文化景点游览体验',
    content: '陪玩不仅对本地文化了解深入，还会给出很多实用的建议，让旅行变得更有意义。服务很贴心。',
    rating: 5
  },
  {
    name: '王先生',
    title: '休闲娱乐服务体验',
    content: '服务非常周到，陪玩小姐姐性格开朗，聊天很愉快，让我的周末时光过得特别充实。',
    rating: 5
  }
];

const CityPlay = () => {
  return (
    <div style={{ padding: '0', margin: '0', width: '100vw', overflow: 'hidden' }}>
      <HeroSection>
        <Title level={1} style={{ fontSize: '3rem', marginBottom: '24px' }}>
          城市陪玩服务
        </Title>
        <Paragraph style={{ fontSize: '1.2rem', color: '#666', maxWidth: '800px', margin: '0 auto' }}>
          专业、安全、多元化的城市陪玩服务，为您的生活增添精彩体验
        </Paragraph>
      </HeroSection>

      <StatsSection>
        <Row gutter={[48, 48]} justify="center">
          <Col xs={24} sm={8}>
            <Statistic title="服务城市" value="50+" suffix="个" />
          </Col>
          <Col xs={24} sm={8}>
            <Statistic title="服务类型" value="100+" suffix="种" />
          </Col>
          <Col xs={24} sm={8}>
            <Statistic title="服务评分" value="4.9" suffix="分" />
          </Col>
        </Row>
      </StatsSection>

      <Title level={2} style={{ textAlign: 'center', marginBottom: '48px' }}>
        服务优势
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

      <ServiceProcess>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
          <Title level={2} style={{ textAlign: 'center', marginBottom: 48 }}>
            服务流程
          </Title>
          <Row gutter={[32, 32]}>
            {processSteps.map((step, index) => (
              <Col xs={24} sm={6} key={index}>
                <div className="process-step">
                  <div className="step-number">{step.number}</div>
                  <Title level={4}>{step.title}</Title>
                  <Paragraph>{step.description}</Paragraph>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </ServiceProcess>

      <Testimonials>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
          <Title level={2} style={{ textAlign: 'center', marginBottom: 48 }}>
            用户评价
          </Title>
          <Row gutter={[32, 32]}>
            {testimonials.map((testimonial, index) => (
              <Col xs={24} sm={8} key={index}>
                <Card hoverable className="testimonial-card">
                  <Card.Meta
                    title={testimonial.title}
                    description={
                      <>
                        <div style={{ marginBottom: 16 }}>
                          {Array(testimonial.rating).fill(<StarOutlined style={{ color: '#ffd700', marginRight: 4 }} />)}
                        </div>
                        <Paragraph>{testimonial.content}</Paragraph>
                        <div style={{ marginTop: 16, color: '#1677ff' }}>{testimonial.name}</div>
                      </>
                    }
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Testimonials>
    </div>
  );
};

export default CityPlay;