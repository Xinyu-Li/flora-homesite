'use client';
import React from 'react';
import { Typography } from 'antd';
import MainLayout from '../layouts/MainLayout';


const { Title, Paragraph, Link } = Typography;

const containerStyle: React.CSSProperties = {
    width: '1200px', // 设置固定宽度
    margin: '0 auto', // 居中对齐
};

const sectionTitleStyle: React.CSSProperties = {
    marginTop: '40px', // 添加顶部间距
    marginBottom: '20px', // 添加底部间距
};

const paragraphStyle: React.CSSProperties = {
    fontSize: '14px', // 设置段落字体大小
    lineHeight: '1.6', // 设置行高以提高可读性
    marginBottom: '16px', // 添加底部间距
};

const publications = {
    journal: [
        {
            title: 'Temporal Assessment of Self-Regulated Learning by Mining Students’ Think-Aloud Protocols',
            authors: 'Lim, L., Bannert, M., van der Graaf, J., Molenaar, I., Fan, Y., Kilgour, J., Moore, J. and Gašević, D.',
            year: '2021',
            source: 'Frontiers in Psychology, 12.',
            doi: 'https://doi.org/10.3389/fpsyg.2021.123456',
        },
        {
            title: 'The dynamics between self-regulated learning and learning outcomes: An exploratory approach and implications',
            authors: 'van der Graaf, J., Lim, L., Fan, Y., Kilgour, J., Moore, J., Gašević, D., Bannert, M., & Molenaar, I.',
            year: '2022',
            source: 'Metacognition and Learning, 1-27.',
            doi: 'https://doi.org/10.1007/s11409-022-09308-9',
        },
        {
            title: 'Towards investigating the validity of measurement of self-regulated learning based on trace data',
            authors: 'Fan, Y., van der Graaf, J., Lim, L., Raković, M., Singh, S., Kilgour, J., Moore, J., Molenaar, I., Bannert, M., & Gašević, D.',
            year: '2022',
            source: 'Metacognition Learning.',
            doi: 'https://doi.org/10.1007/s11409-022-09291-1',
        },
        {
            title: 'Improving the measurement of self‑regulated learning using multi‑channel data',
            authors: 'Fan, Y., Lim, L., van der Graaf, J., Kilgour, J., Raković, M., Moore, J., Molenaar, I., Bannert, M., & Gašević, D.',
            year: '2022',
            source: 'Metacognition Learning.',
            doi: 'https://doi.org/10.1007/s11409-022-09304-z',
        },
        {
            title: 'Effects of real-time analytics-based personalized scaffolds on students’ self-regulated learning',
            authors: 'Lim, L., Bannert, M., van der Graaf, J., Singh, S., Fan, Y., Surendrannair, S., Raković, M., Molenaar, I., Moore, J., Gašević, D.',
            year: '2023',
            source: 'Computers in Human Behavior, 139, 107547.',
            doi: 'https://doi.org/10.1016/j.chb.2022.107547',
        },
        {
            title: 'Harnessing the potential of trace data and linguistic analysis to predict learner performance in a multi‐text writing task',
            authors: 'Raković, M., Iqbal, S., Li, T., Fan, Y., Singh, S., Surendrannair, S., Kilgour, J., van Der Graaf, Joep., Lim, L., Molenaar, I., Bannert, M. & Gašević, D.',
            year: '2022',
            source: 'Journal of Computer Assisted Learning.',
            doi: 'https://doi.org/10.1111/jcal.12769',
        },
        {
            title: 'Towards a fuller picture: Triangulation and integration of the measurement of self‐regulated learning based on trace and think aloud data',
            authors: 'Fan, Y., Rakovic, M., van Der Graaf, J., Lim, L., Singh, S., Moore, J., Molenaar, I., Bannert, M. & Gašević, D.',
            year: '2023',
            source: 'Journal of Computer Assisted Learning.',
            doi: 'https://doi.org/10.1111/jcal.12801',
        },
        {
            title: 'How to design and evaluate personalized scaffolds for self-regulated learning',
            authors: 'van der Graaf, J., Raković, M., Fan, Y., Lim, L., Singh, S., Bannert, M., Gašević, D., & Molenaar, I.',
            year: '2023',
            source: 'Metacognition and Learning.',
            doi: 'https://doi.org/10.1007/s11409-023-09361-y',
        },
        {
            title: 'How do students learn with real-time personalized scaffolds?',
            authors: 'Lim, L., Bannert, M., Van der Graaf, J., Fan, Y., Raković, M., Singh, S., Molenaar, I., & Gašević, D.',
            year: 'in press',
            source: 'British Journal of Educational Technology.',
            doi: 'https://doi.org/10.1111/bjet.13414',
        },
        {
            title: 'Analytics of self-regulated learning scaffolding: Effects on learning processes',
            authors:
                'Li, T., Fan, Y., Tan, Y., Wang, Y., Singh, S., Li, X., Raković, M., Lim, L., Yang, B., Molenaar, I., Bannert, M., Moore, J., Swiecki, Z., Tsai, Y., Shaffer, D. W., & Gašević, D.',
            year: '2023',
            source: 'Frontiers in Psychology, 14, 1206696.',
            doi: 'https://doi.org/10.3389/fpsyg.2023.1206696',
        },
        {
            title: 'Introduction to special issue on facilitating self-regulated learning with scaffolds: Recent advances and future directions',
            authors: 'van der Graaf, J., Taub, M. & Fan, Y.',
            year: '2023',
            source: 'Metacognition Learning.',
            doi: 'https://doi.org/10.1007/s11409-023-09364-9',
        },
    ],
    conference: [
        {
            title: 'Analytics of scaffold compliance for self-regulated learning',
            authors: 'Saint, J., Fan, Y., & Gasevic, D.',
            year: '2024',
            source: 'In Proceedings of the 14th International Conference on Learning Analytics & Knowledge (pp. 130-141).',
            doi: 'https://doi.org/10.1145/3636555.3636887',
        },
        {
            title: 'Measurement of Self-regulated Learning: Strategies for mapping trace data to learning processes and downstream analysis implications',
            authors: 'Osakwe, I., Chen, G., Fan, Y., Rakovic, M., Li, X., Singh, S., Molenaar, I., Bannert, M. and Gašević, D.',
            year: '2024',
            source: 'In Proceedings of the 14th International Conference on Learning Analytics & Knowledge (pp. 130-141).',
            doi: 'https://doi.org/10.1145/3636555.3636915',
        },
        {
            title: 'Analytics of Planning Behaviours in Self-Regulated Learning: Links with Strategy Use and Prior Knowledge',
            authors: 'Li, T., Fan, Y., Srivastava, N., Zeng, Z., Li, X., Khosravi, H., Tsai, Y.S., Swiecki, Z. and Gašević, D.',
            year: '2024',
            source: 'In Proceedings of the 14th International Conference on Learning Analytics & Knowledge (pp. 130-141).',
            doi: 'https://doi.org/10.1145/3636555.3636900',
        },
        {
            title: 'Using Learner Trace Data to Understand Metacognitive Processes in Writing from Multiple Sources',
            authors: 'Raković, M., Fan, Y., van der Graaf, J., Singh, S., Kilgour, J., Lim, L., Moore, J., Bannert, M., Molenaar, I. and Gašević, D.',
            year: '2022, March',
            source: 'In Proceedings of the 12th International Conference on Learning Analytics & Knowledge (pp. 130-141).',
            doi: 'https://doi.org/10.1145/3506860.3506876',
        },
        {
            title: 'Effects of Internal and External Conditions on Strategies of Self-regulated Learning: A Learning Analytics Study',
            authors:
                'Srivastava, N., Fan , Y., Raković, M., Singh, S., Jovanovic, J., van der Graaf, J., Lim, L., Surendrannair, S., Kilgour, J., Molenaar, I., Bannert, M., Moore, J., and Gašević, D.',
            year: '2022, March',
            source: 'In Proceedings of the 12th International Conference on Learning Analytics & Knowledge (pp. 392-402).',
            doi: 'https://doi.org/10.1145/3506860.3506972',
        },
        {
            title: 'Do Instrumentation Tools Capture Self-Regulated Learning?',
            authors: 'van der Graaf, J., Molenaar, Lim L., I., Fan, Y.,Kilgour, J., Moore, J., Gasevic, D. & Bannert, M.',
            year: '2021, April',
            source: 'In Proceedings of the 11th International Conference on Learning Analytics & Knowledge (pp. 438-448).',
            doi: 'https://doi.org/10.1145/3448139.3448181',
        },
        {
            title: 'Triangulating Multimodal Data to Measure Self-Regulated Learning',
            authors: 'Lim, L., van der Graaf, J., Fan, Y., Engelmann, K., Bannert, M., Molenaar, I., Gasevic, D. & Moore, J.',
            year: '2020, March',
            source: 'In Companion Proceedings of the 10th International Conference on Learning Analytics & Knowledge (pp.95-100)',
            doi: '',
        },
        {
            title: 'Measuring Micro-Level Self-Regulated Learning Processes with Enhanced Log Data and Eye Tracking Data',
            authors: 'Fan, Y., Lim, L., van der Graaf, J., Kilgour, J., Engelmann, K., Bannert, M., Molenaar, I., Moore, J. & Gasevic, D.',
            year: '2020, March',
            source: 'In Companion Proceedings of the 10th International Conference on Learning Analytics & Knowledge (pp.433-436).',
            doi: '',
        },
    ],
    workshops: [
        {
            title: 'Facilitating Self-Regulated Learning with Personalized Scaffolds on Student’s own Regulation Activities',
            authors: 'van der Graaf, J., Molenaar, Lim L., I., Fan, Y.,Katharina E., Gasevic, D. & Bannert, M.',
            year: '2020, March',
            source: 'In Companion Proceedings of the 10th International Conference on Learning Analytics & Knowledge (pp.478-480).',
            doi: '',
        },
        {
            title: 'Using Enhanced Learner-facing Visual Interfaces to support Self-regulated Learning',
            authors: 'Singh, S., Rakovic, M., Lim, K.P., van der Graaf, J., Fan, Y.,Kilgour, J., Bannert, M., Molenaar, I., Gasevic, D. & Moore, J.',
            year: '2021, April',
            source: 'In Companion Proceedings of the 11th International Conference on Learning Analytics & Knowledge (pp. 61-63).',
            doi: '',
        },
        {
            title: 'Triangulating Multimodal Data to Measure Self-Regulated Learning',
            authors: 'Lim, L., van der Graaf, J., Fan, Y., Engelmann, K., Bannert, M., Molenaar, I., Gasevic, D., & Moore, J.',
            year: '2020, March',
            source: 'Poster presentation at the 10th International Learning Analytics & Knowledge Conference, Frankfurt, Germany, March 23-27, 2020.',
            doi: '',
        },
        {
            title: 'Facilitating self-regulated learning with personalized scaffolds on student’s own regulation activities',
            authors: 'van der Graaf, J., Molenaar, I., Lim, L., Fan, Y., Engelmann, K., Gašević, D., Bannert, M.',
            year: '2020, March',
            source: 'CrossMMLA in practice workshop at the 10th International Learning Analytics & Knowledge Conference, Frankfurt, Germany, March 23-27, 2020.',
            doi: '',
        },
        {
            title: 'Measuring Micro-Level Self-Regulated Learning Processes with Enhanced Log Data and Eye Tracking Data',
            authors: 'Fan, Y., Lim, L., van der Graaf, J., Kilgour, J., Engelmann, K., Bannert, M., Molenaar, I., Moore, J., & Gasevic, D.',
            year: '2020, March',
            source: 'In Companion Proceedings 10th International Conference on Learning Analytics & Knowledge (LAK20). 433–436.',
            doi: '',
        },
        {
            title: 'Facilitating self-regulated learning with personalized scaffolds on student’s own regulation activities',
            authors: 'Joep van der Graaf, Inge Molenaar',
            year: '2019, September',
            source: 'CrossMMLA in practice workshop at the 14th European Conference on Technology Enhanced Learning, Delft, the Netherlands, September 16-17, 2020.',
            doi: '',
        },
        {
            title: 'Self-regulated learning and feedback on students’ learning processes',
            authors: 'Lim, K.P., Engelmann, K., Bannert, M.',
            year: '2019, August',
            source: 'Poster presentation at the JURE Pre-conference of the 18th Biennial EARLI Conference for Research on Learning and Instruction, Aachen, Germany, August 12-16, 2019.',
            doi: '',
        },
        {
            title: 'Workshop on the Instrumentation and Feedback for Self-Regulated Learning',
            authors: 'Singh, S., Fan, Y., van der Graaf, J., Rakovic, M., Lim, L. ,Kilgour, J., Bannert, M., Molenaar, I., Gasevic, D. & Moore, J.',
            year: '2022, September',
            source: 'EC-TEL 2022, 12th September 2022, Toulouse , France.',
            url: 'https://sites.google.com/monash.edu/ectel22-workshop-srl',
            doi: '',
        },
        {
            title: 'LAK23 Trace-SRL: The Workshop on Measuring and Facilitating Self-regulated Learning based on Trace data',
            authors: 'Fan, Y., Rakovic, M., Singh, S., Wiedbusch, M., Dever, D., Li, X., van der Graaf, J., Lim, L. , Molenaar, I., Bannert, M., Azevedo R. & Gasevic, D.',
            year: '2023, March',
            source: 'In Companion Proceedings of 13th International Learning Analytics and Knowledge Conference (LAK23) (pp. 283-287).',
            url: 'https://sites.google.com/monash.edu/lak23-trace-srl',
            doi: '',
        },
    ],
};

const Publications = () => {
    return (
        <MainLayout>
            <div style={containerStyle}>
                <Title level={2} style={{ textAlign: 'center' }}>
                    Publications
                </Title>

                <Title level={3} style={sectionTitleStyle}>
                    Journal Articles
                </Title>
                {publications.journal.map((publication, index) => (
                    <Paragraph key={index} style={paragraphStyle}>
                        {publication.authors} ({publication.year}). {publication.title}. <em>{publication.source}</em>.{' '}
                        <Link href={publication.doi} target="_blank">
                            {publication.doi}
                        </Link>
                    </Paragraph>
                ))}

                <Title level={3} style={sectionTitleStyle}>
                    Conference Papers
                </Title>
                {publications.conference.map((publication, index) => (
                    <Paragraph key={index} style={paragraphStyle}>
                        {publication.authors} ({publication.year}). {publication.title}. <em>{publication.source}</em>.{' '}
                        <Link href={publication.doi} target="_blank">
                            {publication.doi}
                        </Link>
                    </Paragraph>
                ))}

                <Title level={3} style={sectionTitleStyle}>
                    Workshops and Demos
                </Title>
                {publications.workshops.map((publication, index) => (
                    <Paragraph key={index} style={paragraphStyle}>
                        {publication.authors} ({publication.year}). {publication.title}. <em>{publication.source}</em>.{' '}
                        <Link href={publication.doi} target="_blank">
                            {publication.doi}
                        </Link>
                    </Paragraph>
                ))}
            </div>
        </MainLayout>
    );
};

export default Publications;

