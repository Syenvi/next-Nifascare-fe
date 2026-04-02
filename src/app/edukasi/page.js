import Link from 'next/link';

export default function Edukasi() {
  return (
    <div className="animate-fade-in" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <div className="text-center mb-4">
        <h1 style={{ color: 'var(--primary)', fontSize: '2.5rem' }}>Pusat Edukasi Ibu 📖</h1>
        <p style={{ color: 'var(--text-light)', fontSize: '1.1rem' }}>Pelajari segala hal tentang masa pemulihan dan merawat buah hati tercinta.</p>
      </div>

      <div style={{ display: 'grid', gap: '25px' }}>
        
        {/* Edukasi 1 */}
        <div className="glass-card">
          <h2 style={{ color: 'var(--primary)', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span>🩺</span> Perubahan Normal Masa Nifas
          </h2>
          <p>Masa nifas berlangsung selama kurang lebih 40-42 hari. Beberapa perubahan tubuh yang sangat normal dan tidak perlu terlalu dikhawatirkan, antara lain:</p>
          <ul style={{ marginLeft: '20px', marginTop: '10px', color: 'var(--text-light)' }}>
            <li><strong>Lochia (Darah Nifas):</strong> Darah nifas akan berubah warna dari merah segar di hari pertama menjadi kecoklatan, kuning, hingga keputihan seiring berjalannya waktu.</li>
            <li><strong>Mulas:</strong> Rahim sedang berusaha kembali ke ukuran semula sebelum hamil, sehingga perut sering terasa mulas seperti saat haid (terutama saat menyusui).</li>
            <li><strong>Keringat Berlebih:</strong> Tubuh sedang mengeluarkan cairan ekstra yang tertahan selama masa kehamilan.</li>
          </ul>
        </div>

        {/* Edukasi 2 */}
        <div className="glass-card">
          <h2 style={{ color: '#C5221F', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span>🚨</span> Tanda Bahaya Masa Nifas
          </h2>
          <p>Sewaktu pemulihan berlangsung, sangat wajib segera menemui petugas medis terdekat jika mendapati diri dengan ciri:</p>
          <ul style={{ marginLeft: '20px', marginTop: '10px', color: 'var(--text-light)', fontWeight: 500 }}>
            <li>Pendarahan berlebih yang menghabiskan 1 pembalut hanya dalam waktu kurang dari satu jam.</li>
            <li>Darah nifas berbau sangat busuk yang tidak wajar.</li>
            <li>Demam tinggi lebih dari 38°C yang membuat menggigil atau lemah.</li>
            <li>Luka jahitan di vagina maupun di operasi yang membengkak panas / mengeluarkan nanah merah meradang.</li>
          </ul>
        </div>

        {/* Edukasi 3 */}
        <div className="glass-card">
          <h2 style={{ color: '#137333', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span>🤱</span> Teknik & Perawatan Menyusui
          </h2>
          <p>ASI eksklusif adalah sumber kehidupan paling murni bagi bayi. Kunci utamanya adalah perlekatan yang tak menyakitkan bagi sang bunda:</p>
          <ul style={{ marginLeft: '20px', marginTop: '10px', color: 'var(--text-light)' }}>
            <li>Pastikan mulut bayi terbuka amat lebar agar sebagian kalang payudara sekitar puting ikut masuk termakan oleh lidah anak untuk merangsang reseptor pengeluaran ASi tanpa luka tekan.</li>
            <li>Jangan segan untuk rajin membersihkan lembut sekitaran dada Anda dengan air hangat atau melakukan pijat ringan (oksitosin) dengan kain untuk mencairkan sumbatan kalenjer susu yang meradang (mastitis).</li>
          </ul>
        </div>

        {/* Edukasi 4 */}
        <div className="glass-card">
          <h2 style={{ color: '#B06000', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span>🧠</span> Menjaga Kewarasan & Kesehatan Mental (Postpartum Blues)
          </h2>
          <p>Melahirkan dan menjaga insan baru setiap malam selama dua puluh empat jam bukanlah suatu balapan, akan membuat tubuh kelelahan secara tidak masuk akal yang menurunkan kewarasan sesaat Anda:</p>
          <ul style={{ marginLeft: '20px', marginTop: '10px', color: 'var(--text-light)' }}>
            <li>Lebih dari separuh perempuan akan mendapati emosi yang naik turun dan ingin menangis di sepekan pertamanya, yang biasa dibilang sindrom *Baby Blues*.</li>
            <li>Tidurlah selama si kecil tidur. Delegasikan urusan bersih-bersih rumah tangga lainnya secara ikhlas kepada anggota pria, atau menantu lainnya selagi Anda memulihkan tubuh secara perlahan dari trauma operasi.</li>
          </ul>
        </div>

      </div>

      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <Link href="/" className="btn btn-outline">
          Kembali ke Menu Utama
        </Link>
      </div>

    </div>
  );
}
