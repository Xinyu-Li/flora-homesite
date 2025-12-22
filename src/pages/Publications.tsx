import PublicationsList from '@/components/publications/PublicationsList';
import { publicationCategories } from '@/content/publications';

const PublicationsPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div>
        <p style={{ textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--muted)', marginBottom: '0.5rem' }}>
          Evidence base
        </p>
        <h1 style={{ margin: 0 }}>Publications & workshops</h1>
        <p>
          Browse the latest peer-reviewed work covering measurement validity, analytics pipelines, instrumentation, and
          AI-enabled scaffolding.
        </p>
      </div>
      <PublicationsList categories={publicationCategories} />
    </div>
  );
};

export default PublicationsPage;
