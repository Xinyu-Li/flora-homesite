import { Card, Typography, Button } from 'antd';
import { TeamMember } from '@/content/team';
import styles from './TeamGrid.module.scss';

const { Title, Paragraph, Text } = Typography;

type Props = {
  members: TeamMember[];
};

const TeamGrid = ({ members }: Props) => {
  return (
    <div className={styles.grid}>
      {members.map((member) => (
        <Card
          key={member.name}
          className={styles.card}
          variant="borderless"
        >
          <a href={member.link} target="_blank" rel="noreferrer">
            <img
              src={member.photo}
              alt={`${member.name} portrait`}
              width={120}
              height={120}
              className={styles.photo}
            />
          </a>
          <div>
            <Title level={4} style={{ margin: 0 }}>
              {member.name}
            </Title>
            <Text type="secondary">
              {member.title} - {member.affiliation}
            </Text>
          </div>
          <Paragraph style={{ marginBottom: '0.5rem' }}>{member.bio}</Paragraph>
          <a href={member.link} target="_blank" rel="noreferrer">
            <Button type="link" size="small">
              View profile
            </Button>
          </a>
        </Card>
      ))}
    </div>
  );
};

export default TeamGrid;
