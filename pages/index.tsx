import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <h1 style={{ fontSize: '3rem', color: '#2c3e50', textAlign: 'center', marginBottom: '1rem' }}>
        Willkommen bei Industria Lux
      </h1>
      <p style={{ fontSize: '1.25rem', color: '#7f8c8d', textAlign: 'center' }}>
        Ihr nachhaltiger Premium-Partner für Bürobedarf & Maschinenzubehör
      </p>
    </Layout>
  );
}
