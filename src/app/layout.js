import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';
const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'Nifas & ASI Check | Skrining Mandiri Ibu',
  description: 'Website skrining mandiri terpadu untuk mengecek kondisi nifas, menyusui (ASI), dan kesehatan mental ibu setelah melahirkan.',
  keywords:
    "skrining nifas, skrining ASI, kesehatan ibu pasca melahirkan, skrining mandiri ibu, cek kondisi nifas, cek kondisi menyusui, skrining kesehatan mental ibu, perawatan ibu setelah melahirkan, pemantauan nifas, pemantauan ASI, kesehatan ibu menyusui, tips nifas sehat, pemeriksaan nifas, kesehatan mental pasca melahirkan, perawatan ASI ibu, pemeriksaan menyusui ibu, website skrining ibu, panduan nifas, skrining kesehatan ibu hamil, ibu setelah melahirkan",
  openGraph: {
    url: 'https://nifashealthcare.vercel.app',
    siteName: "Nifas & ASI Check | Skrining Mandiri Ibu",
    title: "Nifas & ASI Check | Skrining Mandiri Ibu",
    description:
      "Website skrining mandiri terpadu untuk mengecek kondisi nifas, menyusui (ASI), dan kesehatan mental ibu setelah melahirkan.",
    locale: "id-ID",
    type: "website",
    images: [
      {
        url: `https://nifashealthcare.vercel.app/assets/logo.png`,
        width: 1080,
        height: 1080,
        alt: "Nifas & ASI Check | Skrining Mandiri Ibu",
      }
    ]
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={plusJakartaSans.className} suppressHydrationWarning>
        <div className="blob-container">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="blob blob-3"></div>
        </div>
        <Navbar />
        <main className="container animate-fade-in" style={{ padding: '40px 20px', minHeight: '80vh' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
