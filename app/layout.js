import './globals.css';
import Link from 'next/link';
import Providers from './providers';

export const metadata = {
  title: 'Flash Light',
  description: 'Login Example',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>
        <body>
          {/* <nav style={{ backgroundColor: '#f3f4f6', padding: 20 }}>
            <Link href="/" style={{ marginRight: '1rem' }}>Home</Link>
            <Link href="/login" style={{ marginRight: '1rem' }}>Login</Link>
            <Link href="/dashboard">Dashboard</Link>
          </nav> */}
          <main >
            {children}
          </main>
        </body>
      </Providers>
    </html>
  );
}
