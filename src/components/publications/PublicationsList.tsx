import { Typography } from 'antd';
import { PublicationCategory } from '@/content/publications';
import styles from './PublicationsList.module.scss';

const { Title, Paragraph } = Typography;

type Props = {
  categories: PublicationCategory[];
};

const PublicationsList = ({ categories }: Props) => (
  <div>
    {categories.map((category) => (
      <section key={category.id} className={styles.category}>
        <Title level={3}>{category.title}</Title>
        <div className={styles.list}>
          {category.items.map((publication, index) => (
            <div key={`${publication.title}-${publication.year}`} className={styles.item}>
              <Paragraph style={{ marginBottom: '0.35rem' }}>
                <strong>{index + 1}. {publication.authors}</strong> ({publication.year}). {publication.title}.{' '}
                <em>{publication.venue}</em>
              </Paragraph>
              {(publication.doi || publication.url) && (
                <a href={publication.doi ?? publication.url!} target="_blank" rel="noreferrer">
                  {publication.doi ?? publication.url}
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    ))}
  </div>
);

export default PublicationsList;
