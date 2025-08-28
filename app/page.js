import Link from 'next/link';
export default function Home() {
  return (
    <main style={{
      display: "flex",
      alignItems: 'center',
      minHeight: '80vh',
      flexDirection: 'column',
      padding: '2rem',
      gap: '1rem'
    }}>
      <h1>Bem-vindo ao meu teste de  Sistema de Login</h1>
      <p>Apenas um exercício. Almejando o fullstack</p>
      <p>Escolha uma opção: </p>
      <nav>
        <ul style={{ display: 'flex', gap: '3rem', marginTop: "4rem" }}>
          <li><Link href="/login" className="nav-link">Login</Link></li>
          <li><Link href="/register" className="nav-link">Registrar</Link></li>
        </ul>
      </nav>
    </main>
  );
}
