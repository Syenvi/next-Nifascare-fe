import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '../components/ui/Navbar';

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'Nifas & ASI Check | Skrining Mandiri Ibu',
  description: 'Website skrining mandiri terpadu untuk mengecek kondisi nifas, menyusui (ASI), dan kesehatan mental ibu setelah melahirkan.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={plusJakartaSans.className}>
        <Navbar />
        <main className="container animate-fade-in" style={{ padding: '40px 20px', minHeight: '80vh' }}>
          {children}
        </main>
        <footer style={{ textAlign: 'center', padding: '20px', color: 'var(--text-light)', fontSize: '0.9rem', borderTop: '1px solid var(--glass-border)', marginTop: '40px' }}>
          <p>&copy; {new Date().getFullYear()} Nifas & ASI Check. Oleh Kolaborasi Mahasiswa Kebidanan & Tim IT.</p>
          <p style={{ fontSize: '0.8rem', marginTop: '5px' }}>🚨 Website ini bersifat edukatif dan preventif, tidak menggantikan pemeriksaan langsung oleh tenaga kesehatan.</p>
        </footer>
      </body>
    </html>
  );
}
