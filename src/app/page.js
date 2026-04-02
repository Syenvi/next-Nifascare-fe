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
          <Link href="/direktori" className="btn btn-primary hover-lift" style={{ flexShrink: 0, padding: '15px 30px', fontSize: '1.1rem' }}>
            Hubungi Bidan via WhatsApp
          </Link>
        </div>
      </section>

    </div>
  );
}
