import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', alignItems: 'center' }}>
      
      {/* Hero Section */}
      <section className="text-center animate-fade-in" style={{ maxWidth: '600px', marginTop: '20px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '16px', color: 'var(--primary)' }}>
          Halo Ibu, Bagaimana Kabar Anda Hari Ini?
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-light)', marginBottom: '30px' }}>
          Mari kenali kondisi kesehatan Anda setelah melahirkan dan proses menyusui secara mandiri, aman, dan rahasia. 
        </p>
      </section>

      {/* Skrining Selection Grid */}
      <section style={{ width: '100%' }}>
        <h2 className="text-center mb-4" style={{ fontSize: '1.75rem', fontWeight: 600 }}>Pilih Kategori Skrining</h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '20px',
          width: '100%'
        }}>
          
          {/* Card 1: Nifas */}
          <div className="glass-card hover-lift" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div style={{ fontSize: '2.5rem' }}>🩺</div>
            <h3 style={{ fontSize: '1.25rem', margin: 0 }}>Asuhan Nifas</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', flex: 1, margin: 0 }}>
              Pengecekan gejala fisik seperti perdarahan, nyeri jahitan, dan suhu tubuh pada masa 0-42 hari.
            </p>
            <Link href="/skrining/nifas" className="btn btn-outline" style={{ marginTop: 'auto', width: '100%' }}>
              Mulai Skrining
            </Link>
          </div>

          {/* Card 2: ASI / Menyusui */}
          <div className="glass-card hover-lift" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div style={{ fontSize: '2.5rem' }}>🤱</div>
            <h3 style={{ fontSize: '1.25rem', margin: 0 }}>Proses Menyusui & ASI</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', flex: 1, margin: 0 }}>
              Pengecekan kelancaran ASI, posisi perlekatan, dan masalah payudara ibu dan bayi.
            </p>
            <Link href="/skrining/asi" className="btn btn-outline" style={{ marginTop: 'auto', width: '100%' }}>
              Mulai Skrining
            </Link>
          </div>

          {/* Card 3: Mental / EPDS */}
          <div className="glass-card hover-lift" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div style={{ fontSize: '2.5rem' }}>🧠</div>
            <h3 style={{ fontSize: '1.25rem', margin: 0 }}>Kesehatan Mental</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', flex: 1, margin: 0 }}>
              Deteksi dini *Postpartum Blues* untuk mengecek risiko stres atau gangguan emosional.
            </p>
            <Link href="/skrining/mental" className="btn btn-outline" style={{ marginTop: 'auto', width: '100%' }}>
              Mulai Skrining
            </Link>
          </div>

        </div>
      </section>

      {/* Education & Info Section */}
      <section className="glass-card hover-lift" style={{ width: '100%', marginTop: '30px' }} id="nakes">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
          <div style={{ flex: '1 1 300px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Bantuan Tenaga Kesehatan</h3>
            <p style={{ color: 'var(--text-light)', margin: 0 }}>
              Jika Anda mengalami keluhan yang sangat mengganggu, pendarahan hebat, atau merasa sangat lelah secara emosional, jangan ragu untuk menghubungi atau mengunjungi fasilitas kesehatan terdekat.
            </p>
          </div>
          <a href="#" className="btn btn-primary" style={{ flexShrink: 0 }}>
            Hubungi Bidan via WhatsApp
          </a>
        </div>
      </section>

      {/* Decorative Wave Footer */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', overflow: 'hidden', lineHeight: 0, zIndex: -1 }}>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ position: 'relative', display: 'block', width: 'calc(100% + 1.3px)', height: '150px' }}>
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C54,115.5,123.6,118.8,187.3,109.1C234.3,101.9,280.9,89.3,321.39,56.44Z" style={{ fill: 'rgba(255,255,255,0.4)' }}></path>
        </svg>
      </div>

    </div>
  );
}
