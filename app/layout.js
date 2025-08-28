import Link from 'next/link';
import "./globals.css";

export const metadata = {
  title: "Sistema de Login e Registro",
  description: "Exemplo de frontend Next.js com login e registro",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <header style={{ padding: '1rem', backgroundColor: '#333', color: 'white' }}>
          <nav style={{ display: 'flex', gap: '1rem' }}>
            <Link href="/" style={{ color: 'white' }}>Home</Link>
            <Link href="/login" style={{ color: 'white' }}>Login</Link>
            <Link href="/register" style={{ color: 'white' }}>Registrar</Link>
          </nav>
        </header>

        <main style={{ padding: '1.5rem' }}>
          {children}
        </main>

        <footer style={{ padding: '1rem', backgroundColor: '#333', color: 'white', textAlign: 'center' }}>
          © 2025 Meu Sistema
        </footer>
      </body>
    </html>
  );
}
