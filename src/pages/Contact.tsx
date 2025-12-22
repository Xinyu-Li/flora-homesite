import ContactClient from '@/components/contact/ContactClient';

const ContactPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div>
        <p style={{ textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--muted)', marginBottom: '0.5rem' }}>
          Say hello
        </p>
        <h1 style={{ margin: 0 }}>Collaborate with us</h1>
        <p>
          We love partnering with educators, learning scientists, and builders who want to advance self-regulated learning
          with ethical AI.
        </p>
      </div>
      <ContactClient />
    </div>
  );
};

export default ContactPage;
