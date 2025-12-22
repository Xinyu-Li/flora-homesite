import { Typography } from 'antd';
import { NewsItem } from '@/content/news';
import styles from './NewsTimeline.module.scss';

const { Title, Paragraph, Text } = Typography;

type Props = {
  items: NewsItem[];
};

const NewsTimeline = ({ items }: Props) => (
  <div className={styles.timeline}>
    {items.map((item) => (
      <article key={`${item.title}-${item.date}`} className={styles.item}>
        <Text type="secondary">{item.date}</Text>
        <Title level={4} style={{ margin: '0.25rem 0' }}>
          {item.title}
        </Title>
        <Paragraph style={{ marginBottom: '0.5rem' }}>{item.description}</Paragraph>
        {item.location && <Text type="secondary">Location: {item.location}</Text>}
        {item.link && (
          <Paragraph style={{ marginTop: '0.5rem' }}>
            <a href={item.link} target="_blank" rel="noreferrer">
              Learn more
            </a>
          </Paragraph>
        )}
      </article>
    ))}
  </div>
);

export default NewsTimeline;
