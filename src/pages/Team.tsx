import TeamGrid from '@/components/team/TeamGrid';
import { coreTeam } from '@/content/team';

const TeamPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div>
        <p style={{ textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--muted)', marginBottom: '0.5rem' }}>
          Collective intelligence
        </p>
        <h1 style={{ margin: 0 }}>Meet the team</h1>
        <p>Interdisciplinary collaborators spanning learning analytics, psychology, AI, and platform engineering.</p>
      </div>
      <TeamGrid members={coreTeam} />
    </div>
  );
};

export default TeamPage;
