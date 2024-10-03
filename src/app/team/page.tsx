'use client';
import React from 'react';
import { Row, Col, Card, Typography, Button } from 'antd';
import MainLayout from '../layouts/MainLayout';

const { Title, Text, Paragraph } = Typography;

const containerStyle: React.CSSProperties = {
    width: '1200px', // 设置固定宽度
    margin: '0 auto', // 居中对齐
};

const cardStyle: React.CSSProperties = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '20px', // 添加底部间距
};

const imgStyle: React.CSSProperties = {
    width: '150px', // 设置图片的宽度
    height: '150px', // 设置图片的高度
    borderRadius: '50%', // 圆形图片
    marginBottom: '16px', // 添加底部间距
};

const textStyle: React.CSSProperties = {
    fontSize: '16px', // 调整字体大小
    fontWeight: 'bold', // 设置字体加粗
    textAlign: 'center', // 文本居中
};

const contentStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between', // 确保内容在垂直方向上均匀分布
    flex: 1,
};

const positionStyle: React.CSSProperties = {
    fontSize: '14px',
    color: 'gray',
    marginBottom: '8px',
};

const paragraphStyle: React.CSSProperties = {
    fontSize: '14px', // 设置段落字体大小
    lineHeight: '1.6', // 设置行高以提高可读性
    textAlign: 'left',
};

const buttonContainerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center', // 按钮居中对齐
    marginTop: 'auto', // 确保按钮容器在卡片底部
};

const buttonStyle: React.CSSProperties = {
    width: '120px', // 按钮宽度
};

const teamMembers = [
    {
        name: 'Dragan Gašević',
        photo: 'https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=Q4Nm22sAAAAJ&citpid=3',
        position: 'Distinguished Professor, Monash University',
        description:
            'Dragan Gašević is Distinguished Professor of Learning Analytics in the Faculty of Information Technology and the Director of the Centre for Learning Analytics (CoLAM) at Monash University. His research interests center around data analytic, AI, and design methods that can advance understanding of self-regulated and collaborative learning. ',
        link: 'https://research.monash.edu/en/persons/dragan-gasevic',
    },
    {
        name: 'Maria Bannert',
        photo: 'https://www.digitus.uni-muenchen.de/bilder/Bilder-quadratisch/bannert.jpg',
        position: 'Professor, Technical University of Munich',
        description:
            'Professor Maria Bannert holds the chair for Teaching and Learning with Digital Media, TUM School of Education. Her research focus lies on the educational and psychological aspects of teaching and learning with digital media. She conducts experimental research in the laboratory focusing on the online-analysis of learning processes. She also performs exploratory and quasi-experimental research in the field. The general goal is to support and advance teaching and learning with digital media in different learning contexts.',
        link: 'https://www.professoren.tum.de/en/bannert-maria',
    },
    {
        name: 'Inge Molenaar',
        photo: 'https://old.jacobsfoundation.org/app/uploads/2020/11/20201011_jf_Molenaar.jpg',
        position: 'Professor, Radboud University Nijmegen',
        description:
            'Inge Molenaar is the director of the National Education Lab AI (NOLAI) and professor of Education and Artificial Intelligence at the Behavioural Science Institute at Radboud University in the Netherlands. She has over 20 years of experience in technology-enhanced learning, taking multiple roles from entrepreneur to academic.',
        link: 'https://www.ru.nl/en/people/molenaar-i',
    },
    {
        name: 'Yizhou Fan',
        photo: 'https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=EBZdbGwAAAAJ&citpid=4',
        position: 'Assistant Professor, Peking University',
        description: '',
        link: 'https://scholar.google.com/citations?user=EBZdbGwAAAAJ&hl=en',
    },
    {
        name: 'Joep van der Graaf',
        photo: 'https://i1.rgstatic.net/ii/profile.image/935659476885508-1600090011485_Q512/Joep-Van-Der-Graaf.jpg',
        position: 'Assistant Professor, Radboud University Nijmegen',
        description:
            'Joep van der Graaf is an Assistant Professor at the Behavioural Science Institute at Radboud University Nijmegen. He is interested in self-directed learning, including self-regulated learning and inquiry-based learning. He aims to understand students’ learning processes and likes to use innovative technologies and analytic approaches. ',
        link: 'https://www.ru.nl/en/people/graaf-j-van-der',
    },
    {
        name: 'Mladen Raković',
        photo: 'https://www.monash.edu/__data/assets/image/0019/2400472/mladen_rakovic.jpg',
        position: 'Lecturer, Monash University',
        description:
            'Mladen’s research interests span the fields of natural language processing, predictive modeling, computational linguistics, educational psychology and learning sciences. He focuses on the development and evaluation of computer-based writing systems that monitor undergraduates’ writing activity and generate learning analytics to promote self-regulated learning and deep engagement with disciplinary content. ',
        link: 'https://research.monash.edu/en/persons/mladen-rakovic',
    },
    {
        name: 'Xinyu Li',
        photo: 'https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=fY7vKpkAAAAJ&citpid=2',
        position: 'Research Fellow, Senior Software Developer, Monash University',
        description: '',
        link: 'https://scholar.google.com.au/citations?user=fY7vKpkAAAAJ&hl=en',
    },
    {
        name: 'Lyn Lim',
        photo: 'https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=p5jcPeEAAAAJ&citpid=1',
        position: 'Research Fellow, Technical University of Munich',
        description:
            'Lyn Lim is a postdoctoral researcher and is passionate about harnessing technology to promote and transform learning. She taps into her experience in the disciplines of psychology and education through her work and academic journey. ',
        link: 'https://www.edu.sot.tum.de/en/lldm/team/lim-lyn/',
    },

    // 添加更多团队成员
];

const Team = () => {
    return (
        <MainLayout>
            <div style={containerStyle}>
                <Title level={2} style={{ textAlign: 'center' }}>
                    Our Team
                </Title>
                <div style={{ marginTop: '50px' }}>
                    <Row gutter={16} style={{ display: 'flex', alignItems: 'stretch' }}>
                        {teamMembers.map((member, index) => (
                            <Col span={12} style={{ display: 'flex' }} key={index}>
                                <Card hoverable style={cardStyle}
                                      styles={{body: {padding: '16px', overflow: 'hidden', flex: 1}}}
                                     >
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <img alt={member.name} src={member.photo} style={imgStyle} />
                                        <Text style={textStyle}>{member.name}</Text> {/* 在图片下方添加名字，并设置样式 */}
                                        <Text style={positionStyle}>{member.position}</Text> {/* 添加职位信息 */}
                                        <Paragraph style={paragraphStyle}>{member.description}</Paragraph>
                                        <div style={buttonContainerStyle}>
                                            <Button type="primary" href={member.link} target="_blank" style={buttonStyle}>
                                                Learning more
                                            </Button>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
        </MainLayout>
    );
};

export default Team;
