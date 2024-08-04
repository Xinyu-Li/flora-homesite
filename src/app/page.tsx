
'use client';
import React from 'react';
import { Row, Col, Card, Typography, Button, Space } from 'antd';
import { Divider } from 'antd';
import MainLayout from './layouts/MainLayout';

const { Title, Text, Paragraph, Link } = Typography;

const containerStyle: React.CSSProperties = {
  width: '1200px', // 设置固定宽度
  margin: '0 auto', // 居中对齐
};

const cardStyle: React.CSSProperties = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
};

const imgStyle: React.CSSProperties = {
  display: 'block',
  width: '100%', // 让图片宽度自适应
  height: 'auto', // 保持图片的宽高比
  maxWidth: 200, // 设置图片的最大宽度
  maxHeight: 200, // 设置图片的最大高度
};

const textStyle: React.CSSProperties = {
  fontSize: '16px', // 调整字体大小
  fontWeight: 'bold', // 设置字体加粗
  width: '100%', // 确保文本宽度与图片一致
  textAlign: 'center', // 文本居中
  marginTop: '8px', // 添加一些顶部间距
};

const contentStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: 32,
  flex: 1,
};

const paragraphStyle: React.CSSProperties = {
  fontSize: '16px', // 设置段落字体大小
  lineHeight: '1.6', // 设置行高以提高可读性
};

const Home = () => {
  return (
      <MainLayout>
        <div style={containerStyle}>
          <Title level={2} style={{ textAlign: 'center' }}>
            Welcome to FLoRA
          </Title>
          <div style={{ marginTop: '50px' }}>
            <Card title={<div style={{ background: 'linear-gradient(to right, #87CEFA, #B0E0E6)', color: 'black', padding: '8px 16px' }}>About FLoRA</div>} size="default">
              <Paragraph style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '16px' }}>
                FLoRA is a research project aimed at facilitating self-regulation in learning. "Learning to learn" – the ability to monitor and adapt one's learning process
                productively – is a key competence formulated by the European Parliament (2006) and increasingly a central focus of education. Prior research has shown that
                self-regulated learning (SRL) leads to better learning performance. <br></br> <br></br> This research collaboration aims to enhance the support provided to students
                by: i) improving unobtrusive trace data collection and machine learning techniques to gain a better understanding and measurement of SRL processes, and ii) using
                these new insights to facilitate students' SRL by providing personalized support empowered by large language models (LLMs) such as ChatGPT. <br></br> <br></br> FLoRA
                has been applied to many learning settings, including reflective writing tasks, academic writing studies, and role-play scenarios using LLMs to support apprenticeship
                training.
              </Paragraph>
              <Row gutter={16} style={{ display: 'flex', alignItems: 'center' }}>
                <Col span={6} style={{ display: 'flex' }}>
                  <Card
                      hoverable
                      style={{ ...cardStyle, height: '260px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                      bodyStyle={{ padding: 0, overflow: 'hidden', flex: 1 }}
                  >
                    <div style={{ textAlign: 'center', padding: '16px' }}>
                      <img
                          alt="Australia Map"
                          src="https://img.freepik.com/premium-vector/stylized-simple-outline-map-australia-icon-blue-sketch-map-australia-vector-illustration_160901-3630.jpg?w=360"
                          style={{ width: 'auto', height: '150px', margin: '0 auto' }}
                      />
                      <Button type="primary" style={{ marginTop: '8px' }} onClick={() => window.open('https://www.floraengine.org/moodle/', '_blank')}>
                        Visit Australian site
                      </Button>
                    </div>
                  </Card>
                </Col>
                <Col span={6} style={{ display: 'flex' }}>
                  <Card
                      hoverable
                      style={{ ...cardStyle, height: '260px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                      bodyStyle={{ padding: 0, overflow: 'hidden', flex: 1 }}
                  >
                    <div style={{ textAlign: 'center', padding: '16px' }}>
                      <img
                          alt="China Map"
                          src="https://static.vecteezy.com/system/resources/previews/008/717/307/original/stylized-simple-outline-map-of-china-icon-blue-sketch-map-of-china-illustration-vector.jpg"
                          style={{ width: 'auto', height: '150px', margin: '0 auto' }}
                      />
                      <Button type="primary" style={{ marginTop: '8px' }} onClick={() => window.open('https://yidelearn.com/moodle/', '_blank')}>
                        Visit Chinese site
                      </Button>
                    </div>
                  </Card>
                </Col>
                <Col span={6} style={{ display: 'flex' }}>
                  <Card
                      hoverable
                      style={{ ...cardStyle, height: '260px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                      bodyStyle={{ padding: 0, overflow: 'hidden', flex: 1 }}
                  >
                    <div style={{ textAlign: 'center', padding: '16px' }}>
                      <img
                          alt="America Map"
                          src="https://i.pinimg.com/736x/3d/e0/57/3de057b9beab1778e598c6f2e6eaf6d0.jpg"
                          style={{ width: 'auto', height: '150px', margin: '0 auto' }}
                      />
                      <Button type="primary" style={{ marginTop: '8px' }} onClick={() => window.open('https://cella-lala.floraengine.org/moodle/', '_blank')}>
                        Visit Latin American site
                      </Button>
                    </div>
                  </Card>
                </Col>
                <Col span={6} style={{ display: 'flex' }}>
                  <Card
                      hoverable
                      style={{ ...cardStyle, height: '260px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                      bodyStyle={{ padding: 0, overflow: 'hidden', flex: 1 }}
                  >
                    <div style={{ textAlign: 'center', padding: '16px' }}>
                      <img
                          alt="Europe Map"
                          src="https://thumbs.dreamstime.com/b/europe-simple-outline-map-smooth-simplified-continent-shape-map-vector-87376416.jpg"
                          style={{ width: 'auto', height: '150px', margin: '0 auto' }}
                      />
                      <Button type="primary" style={{ marginTop: '8px' }} onClick={() => window.open('https://nijmegen.floraproject.org/moodle/', '_blank')}>
                        Visit European site
                      </Button>
                    </div>
                  </Card>
                </Col>
              </Row>
              <br />
              <br />
              <Paragraph style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '16px' }}>
                If you would like to gain hands-on experience with the FLoRA platform, please{' '}
                <a href="/contact" target="_blank" rel="noopener noreferrer">
                  contact us
                </a>
                .
              </Paragraph>
            </Card>
            <br />
            <br />
            <Card title={<div style={{ background: 'linear-gradient(to right, #FFD700, #FFFACD)', color: 'black', padding: '8px 16px' }}>About CELLA</div>} size="default">
              <Paragraph style={paragraphStyle}>
                In 2022, the{' '}
                <Link href="https://jacobsfoundation.org/" target="_blank" style={paragraphStyle}>
                  Jacobs Foundation
                </Link>{' '}
                has granted CHF 2 million to Professors Sanna Järvelä and Inge Molenaar to establish{' '}
                <Text strong style={paragraphStyle}>
                  the Center for Learning and Living with AI (CELLA)
                </Text>{' '}
                at the University of Oulu, Finland, and Radboud University, Netherlands. CELLA aims to prepare young learners for the AI age by collaborating with secondary schools
                and EdTech entrepreneurs worldwide to develop intelligent learning technologies, such as adaptive systems and VR/AR-based game learning. The center will also work
                with the University of California Irvine's CERES research facility to promote evidence-based technology use in education.
              </Paragraph>
              <Paragraph style={paragraphStyle}>
                <Link href="https://jacobsfoundation.org/cella-the-center-for-learning-and-living-with-ai/" target="_blank" style={paragraphStyle}>
                  Explore more
                </Link>
              </Paragraph>
              <div style={{ marginTop: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                  <img
                      src="https://jacobsfoundation.org/wp-content/uploads/2023/09/JF_Logo.svg"
                      alt="Jacobs Foundation Logo"
                      style={{ width: '15%', maxWidth: '150px', marginBottom: '16px' }}
                  />
                  <Divider type="vertical" style={{ height: 'auto', backgroundColor: 'black', width: '2px' }} />
                  <img
                      src="https://studyineurope.com.sg/storage/8190/Red-logo---square.png"
                      alt="Radboud University Logo"
                      style={{ width: '15%', maxWidth: '150px', marginBottom: '16px' }}
                  />
                  <Divider type="vertical" style={{ height: 'auto', backgroundColor: 'black', width: '2px' }} />
                  <img
                      src="https://upload.wikimedia.org/wikipedia/en/a/a6/University_of_Oulu_logo.jpg"
                      alt="University of Oulu Logo"
                      style={{ width: '15%', maxWidth: '150px', marginBottom: '16px' }}
                  />
                  <Divider type="vertical" style={{ height: 'auto', backgroundColor: 'black', width: '2px' }} />
                  <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Logo_of_the_Technical_University_of_Munich.svg/300px-Logo_of_the_Technical_University_of_Munich.svg.png"
                      alt="Technical University of Munich Logo"
                      style={{ width: '15%', maxWidth: '150px', marginBottom: '16px' }}
                  />
                  <Divider type="vertical" style={{ height: 'auto', backgroundColor: 'black', width: '2px' }} />
                  <img
                      src="https://www.monash.edu/__data/assets/git_bridge/0006/509343/deploy/mysource_files/monash-logo-mono.svg"
                      alt="Monash University Logo"
                      style={{ width: '15%', maxWidth: '150px', marginBottom: '16px' }}
                  />
                  <Divider type="vertical" style={{ height: 'auto', backgroundColor: 'black', width: '2px' }} />
                  <img
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Seal_of_the_University_of_Central_Florida.svg/300px-Seal_of_the_University_of_Central_Florida.svg.png"
                      alt="University of Central Florida Logo"
                      style={{ width: '15%', maxWidth: '150px', marginBottom: '16px' }}
                  />
                </div>
              </div>
            </Card>
            <br />
            <br />
            <Card title={<div style={{ background: 'linear-gradient(to right, #87CEFA, #B0E0E6)', color: 'black', padding: '8px 16px' }}>Recent Publications</div>} size="default">
              <Paragraph style={paragraphStyle}>
                Fan, Y., Rakovic, M., van Der Graaf, J., Lim, L., Singh, S., Moore, J., Molenaar, I., Bannert, M. & Gašević, D. (2023). Towards a fuller picture: Triangulation and
                integration of the measurement of self‐regulated learning based on trace and think aloud data. Journal of Computer Assisted Learning.{' '}
                <Link href="https://doi.org/10.1111/jcal.12801" target="_blank" style={paragraphStyle}>
                  https://doi.org/10.1111/jcal.12801
                </Link>
                <br></br>
                <br></br>
                Li, T., Fan, Y., Srivastava, N., Zeng, Z., Li, X., Khosravi, H., ... & Gašević, D. (2024, March). Analytics of Planning Behaviours in Self-Regulated Learning: Links
                with Strategy Use and Prior Knowledge. In Proceedings of the 14th Learning Analytics and Knowledge Conference (pp. 438-449).{' '}
                <Link href="https://dl.acm.org/doi/abs/10.1145/3636555.3636900" target="_blank" style={paragraphStyle}>
                  https://doi.org/10.1145/3636555.3636900
                </Link>
                <br></br>
                <br></br>
                Li, T., Fan, Y., Tan, Y., Wang, Y., Singh, S., Li, X., Raković, M., Lim, L., Yang, B., Molenaar, I., Bannert, M., Moore, J., Swiecki, Z., Tsai, Y., Shaffer, D. W., &
                Gašević, D. (2023). Analytics of self-regulated learning scaffolding: Effects on learning processes. Frontiers in Psychology, 14, 1206696.{' '}
                <Link href="https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2023.1206696/full" target="_blank" style={paragraphStyle}>
                  DOI:10.3389/fpsyg.2023.1206696
                </Link>
                <br></br>
                <br></br>
                Lim, L., Bannert, M., van der Graaf, J., Singh, S., Fan, Y., Surendrannair, S., Raković, M., Molenaar, I., Moore, J. , Gašević, D. (2023). Effects of real-time
                analytics-based personalized scaffolds on students’ self-regulated learning. Computers in Human Behavior, 139, 107547.{' '}
                <Link href="https://www.sciencedirect.com/science/article/pii/S0747563222003673" target="_blank" style={paragraphStyle}>
                  doi:10.1016/j.chb.2022.107547
                </Link>
                <br></br>
                <br></br>
                Saint, J., Fan, Y., & Gasevic, D. (2024, March). Analytics of scaffold compliance for self-regulated learning. In Proceedings of the 14th Learning Analytics and
                Knowledge Conference (pp. 326-337).{' '}
                <Link href="https://dl.acm.org/doi/abs/10.1145/3636555.3636887" target="_blank" style={paragraphStyle}>
                  https://doi.org/10.1145/3636555.3636887
                </Link>
                <br></br>
                <br></br>
                van der Graaf, J., Taub, M. & Fan, Y. Introduction to special issue on facilitating self-regulated learning with scaffolds: Recent advances and future directions.
                Metacognition Learning (2023).{' '}
                <Link href="https://doi.org/10.1007/s11409-023-09364-9" target="_blank" style={paragraphStyle}>
                  https://doi.org/10.1007/s11409-023-09364-9
                </Link>
                <br></br>
                <br></br>
                van der Graaf, J., Raković, M., Fan, Y., Lim, L., Singh, S., Bannert, M., Gašević, D., & Molenaar, I. (2023). How to design and evaluate personalized scaffolds for
                self-regulated learning. Metacognition and Learning.{' '}
                <Link href="https://link.springer.com/article/10.1007/s11409-023-09361-y" target="_blank" style={paragraphStyle}>
                  DOI:10.1007/s11409-023-09361-y
                </Link>
                <br></br>
                <br></br>
              </Paragraph>
              <Paragraph style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '16px' }}>
                Click here{' '}
                <a href="/publications" target="_blank" rel="noopener noreferrer">
                  here{' '}
                </a>
                to review the full publication list.
              </Paragraph>
            </Card>
            <br />
            <br />
            <Card title={<div style={{ background: 'linear-gradient(to right, #87CEFA, #B0E0E6)', color: 'black', padding: '8px 16px' }}>Recent Keynotes</div>} size="default">
              <Row gutter={16} style={{ display: 'flex', alignItems: 'stretch' }}>
                <Col span={12} style={{ display: 'flex' }}>
                  <Card hoverable style={cardStyle} bodyStyle={{ padding: 0, overflow: 'hidden', flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flex: 1 }}>
                      <div style={{ textAlign: 'center' }}>
                        <img alt="avatar" src="https://citers2024.cite.hku.hk/wp-content/uploads/dragan_gasevic.webp" style={imgStyle} />
                        <Text style={textStyle}>Dragan Gašević</Text> {/* 在图片下方添加名字，并设置样式 */}
                      </div>
                      <div style={contentStyle}>
                        <Title level={3}>
                          Keynote (CITERS2024): <br />
                          Reimagining Assessment in the Age of Artificial Intelligence. <br />
                          <br />{' '}
                        </Title>
                        <Button type="primary" href="https://citers2024.cite.hku.hk/keynote-gasevic/" target="_blank">
                          Watch Now
                        </Button>
                      </div>
                    </div>
                  </Card>
                </Col>
                <Col span={12} style={{ display: 'flex' }}>
                  <Card hoverable style={cardStyle} bodyStyle={{ padding: 0, overflow: 'hidden', flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flex: 1 }}>
                      <div style={{ textAlign: 'center' }}>
                        <img alt="avatar" src="https://citers2024.cite.hku.hk/wp-content/uploads/Prof_Sanna_Jarvela_300.jpg" style={imgStyle} />
                        <Text style={textStyle}>Sanna Järvelä</Text> {/* 在图片下方添加名字，并设置样式 */}
                      </div>
                      <div style={contentStyle}>
                        <Title level={3}>
                          Keynote (CITERS2024): <br />
                          Adaptive Learner in the Age of AI: Leveraging SRL Theory to Human-AI Collaboration.
                        </Title>
                        <Button type="primary" href="https://citers2024.cite.hku.hk/keynote-jarveka/" target="_blank">
                          Watch Now
                        </Button>
                      </div>
                    </div>
                  </Card>
                </Col>
              </Row>
            </Card>
          </div>
        </div>
      </MainLayout>
  );
};

export default Home;

