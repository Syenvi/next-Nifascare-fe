'use client';

import { useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import Image from 'next/image';

const questions = [
  { id: 1, text: 'Saya masih bisa tertawa dan melihat sisi lucu dari banyak hal', reverse: true },
  { id: 2, text: 'Saya merasa bahagia atau menatap hari dengan penuh harapan', reverse: true },
  { id: 3, text: 'Saya menyalahkan diri sendiri secara berlebihan jika ada sesuatu yang tidak berjalan sesuai rencana', reverse: false },
  { id: 4, text: 'Saya merasa sangat cemas atau sangat khawatir akan suatu hal tanpa alasan yang jelas', reverse: false },
  { id: 5, text: 'Saya merasa sangat ketakutan atau merasa panik', reverse: false },
  { id: 6, text: 'Saya merasa keadaan yang terjadi di sekitar saat ini membuat saya sangat kewalahan atau beban berat', reverse: false },
  { id: 7, text: 'Saya sangat sulit tidur dimalam hari karena terus merasa sangat sedih', reverse: false },
  { id: 8, text: 'Saya merasa gelisah, sedih, dan sangat merana', reverse: false },
  { id: 9, text: 'Saya sering dan lebih mudah menangis tersedu-sedu', reverse: false },
  { id: 10, text: 'Saya pernah memiliki pikiran atau terlintas untuk menyakiti diri saya sendiri atau bayi yang di kandungan saya', reverse: false },
];

const scaleOptions = [
  { text: 'Tidak pernah', value: 0 },
  { text: 'Jarang', value: 1 },
  { text: 'Kadang-kadang', value: 2 },
  { text: 'Sering', value: 3 },
];

export default function MentalScreening() {
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSelect = (idx, value) => {
    setAnswers(prev => ({ ...prev, [idx]: value }));
  };

  const calculateResult = () => {
    if (Object.keys(answers).length < questions.length) {
      setErrorMsg('Mohon lengkapi semua isian terlebih dahulu.');
      return;
    }

    let totalScore = 0;
    let isQ10Triggered = false;

    questions.forEach((q, i) => {
      let score = answers[i];
      if (q.reverse) {
        // Reverse scoring logic: 0->3, 1->2, 2->1, 3->0
        score = 3 - score;
      }
      totalScore += score;

      if (i === 9 && answers[i] > 0) { // Q10 is array index 9
        isQ10Triggered = true;
      }
    });

    let status = 'normal';
    if (totalScore >= 13) status = 'danger';
    else if (totalScore >= 10) status = 'warning';

    setResult({ status, score: totalScore, isQ10Triggered });
  };

  if (result) {
    return (
      <div className="glass-card animate-fade-in" style={{ maxWidth: '600px', margin: '0 auto', padding: '40px', background: 'rgba(255, 255, 255, 0.4)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255, 255, 255, 0.5)', borderRadius: '24px', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.1)' }}>
        <h2 className="text-center mb-4">Hasil Skrining Postpartum Blues (EPDS)</h2>

        <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', borderRadius: '16px', overflow: 'hidden', marginBottom: '25px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
          <Image src={`/assets/mental-${result.status === 'danger' ? 'bahaya' : result.status === 'warning' ? 'perlu-perhatian' : 'normal'}.png`} alt="Ilustrasi Hasil" fill style={{ objectFit: 'cover' }} />
        </div>

        {result.isQ10Triggered && (
          <div style={{ backgroundColor: '#ffcccc', border: '2px solid #ff4d4d', color: '#cc0000', padding: '15px', borderRadius: '10px', marginBottom: '20px', fontWeight: 'bold' }}>
            <h3>⚠️ Peringatan Penting</h3>
            <p>Anda melaporkan adanya pikiran kuat untuk menyakiti diri sendiri.</p>
            <p>Mohon jangan simpan hal ini sendirian. <strong>SEGERA hubungi atau datangi tenaga kesehatan, layanan keluarga, atau orang tua terdekat untuk menerima dukungan bantuan segera, hari ini juga.</strong></p>
          </div>
        )}
        
        {result.status === 'normal' && (
          <div className="status-normal" style={{ padding: '20px', borderRadius: '15px', marginBottom: '20px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>🟢 Kondisi Emosi Stabil</h3>
            <p><strong>Interpretasi Klinis:</strong> Perubahan emosional yang Anda rasakan selama berada di masa pascamelahirkan secara umum ada di batas fluktuasi normal.</p>
            <p><strong>Dasar Penilaian:</strong> Total Skoring EPDS berada di level {result.score} (Risiko Rendah / Nol).</p>
            <p><strong>Rekomendasi Tindakan:</strong></p>
            <ul style={{ marginLeft: '20px', marginBottom: '10px' }}>
              <li>Bicaralah dari hati ke hati dan mintalah bantuan secara berkala dari anggota keluarga untuk dukungan psikologis.</li>
              <li>Tidur dan luangkan waktu sekecil apapun demi kenyamanan fisik dan mental Anda.</li>
            </ul>
          </div>
        )}

        {result.status === 'warning' && (
          <div className="status-warning" style={{ padding: '20px', borderRadius: '15px', marginBottom: '20px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>🟡 Perlu Perhatian</h3>
            <p><strong>Interpretasi Klinis:</strong> Telah termonitor gejala awal timbulnya sindrom perubahan *mood* ibu (Postpartum Blues) secara parsial akibat tekanan.</p>
            <p><strong>Dasar Penilaian:</strong> Skoring EPDS ada di level {result.score}.</p>
            <p><strong>Rekomendasi Tindakan:</strong></p>
            <ul style={{ marginLeft: '20px', marginBottom: '10px' }}>
              <li>Sangat direkomendasikan bercerita terbuka atas rasa khawatir yang dihadapi.</li>
              <li>Usahakan pangkas dan turunkan tekanan kegiatan domestik harian atau titipkan bayi anda ke pihak lain ketika Anda kelelahan secara mental.</li>
              <li>Konsultasi bila perlu pada konselor psikolog nifas apabila hal ini semakin tak terkontrol memburuk.</li>
            </ul>
          </div>
        )}

        {result.status === 'danger' && (
          <div className="status-danger" style={{ padding: '20px', borderRadius: '15px', marginBottom: '20px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>🔴 Risiko Tinggi Ggn Emosional</h3>
            <p><strong>Interpretasi Klinis:</strong> Adanya temuan gejala yang sangat signifikan perihal dugaan "Depresi Postpartum" akibat kelelahan pascamelahirkan.</p>
            <p><strong>Dasar Penilaian:</strong> Skoring EPDS anda sudah meroket di nilai {result.score} (Nilai Bahaya).</p>
            <p><strong>Rekomendasi Tindakan:</strong></p>
            <ul style={{ marginLeft: '20px', marginBottom: '10px', fontWeight: 'bold' }}>
              <li>Kami wajib merekomendasikan Anda sesegera mungkin mengonsultasikan profil kesehatan mental di fasilitas medis konseling klinik ibu secara profesional.</li>
              <li>Usahakan untuk tidak memendam apapun masalah saat ini sendirian.</li>
            </ul>
             <p style={{ fontSize: '0.9rem', opacity: 0.9 }}><em>Edukasi: Keadaaan depresi paska kelahiran ini sering menimpa wanita hebat lainnya kok, sehingga pengobatan medis bukanlah aib namun wajib di ikuti karena dapat sembuh membaik seutuhnya asalkan ditangani pakar!</em></p>
          </div>
        )}

        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
          <button className="btn btn-outline" onClick={() => { setResult(null); setAnswers({}); }}>Ulangi Skrining</button>
          <Link href="/" className="btn btn-primary">Kembali ke Beranda</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in" style={{ maxWidth: '850px', margin: '0 auto' }}>
      <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--text-light)', textDecoration: 'none', marginBottom: '15px', fontWeight: 500, padding: '8px 16px', background: 'rgba(255,255,255,0.5)', borderRadius: '20px', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.4)', boxShadow: '0 4px 10px rgba(0,0,0,0.03)' }}>
        <span style={{ fontSize: '1.2rem' }}>←</span> Kembali ke Beranda
      </Link>
      <div className="text-center mb-4">

        <h1 style={{ color: 'var(--primary)' }}>Skrining Postpartum Blues 🧠</h1>
        <p style={{ color: 'var(--text-light)' }}>Dalam kurun waktu tujuh hari (1 minggu) terakhir ini secara jujur, manakah skala di bawah ini yang paling mewakili tentang perasaan dan pemikiran diri anda selama ini?</p>
      </div>

      <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '30px', padding: '40px', background: 'rgba(255, 255, 255, 0.4)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255, 255, 255, 0.5)', borderRadius: '24px', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.1)' }}>
        {/* Progress Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '-10px', color: 'var(--text-light)', fontSize: '0.9rem', fontWeight: 500 }}>
          <span>Progres Pengisian</span>
          <span>{Math.round((Object.keys(answers).length / questions.length) * 100)}%</span>
        </div>
        <div className="progress-container">
          <div className="progress-bar" style={{ width: `${Math.round((Object.keys(answers).length / questions.length) * 100)}%` }}></div>
        </div>

        <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', borderRadius: '16px', overflow: 'hidden', marginBottom: '20px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
          <Image src="/assets/mental.png" alt="Ilustrasi Mental Assessment" fill priority style={{ objectFit: 'cover' }} />
        </div>
        {questions.map((q, i) => (
          <div key={q.id} style={{ paddingBottom: '25px', borderBottom: '1px solid var(--glass-border)' }}>
            <p style={{ fontWeight: 500, marginBottom: '15px', fontSize: '1.1rem' }}>{i + 1}. {q.text}</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '10px' }}>
              {scaleOptions.map((opt) => (
                <button
                  key={opt.value}
                  className={`btn ${answers[i] === opt.value ? 'btn-primary' : 'btn-outline'}`}
                  style={{ 
                    padding: '10px', 
                    fontSize: '0.9rem',
                    backgroundColor: answers[i] === opt.value ? 'var(--primary)' : 'transparent',
                    color: answers[i] === opt.value ? 'white' : 'var(--primary)',
                  }}
                  onClick={() => handleSelect(i, opt.value)}
                >
                  {opt.text}
                </button>
              ))}
            </div>
          </div>
        ))}

        <button className="btn btn-primary" style={{ width: '100%', padding: '15px', fontSize: '1.1rem', marginTop: '10px' }} onClick={calculateResult}>
          Lihat Hasil Deteksi Psikologis
        </button>
      </div>

      {errorMsg && typeof document !== 'undefined' && createPortal(
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 99999, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}>
          <div className="glass-card animate-fade-in" style={{ maxWidth: '400px', width: '90%', textAlign: 'center', padding: '30px' }}>
            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>⚠️</div>
            <h3 style={{ marginBottom: '10px', color: 'var(--text-main)', fontSize: '1.5rem' }}>Perhatian</h3>
            <p style={{ color: 'var(--text-light)', marginBottom: '25px', fontSize: '1.1rem' }}>{errorMsg}</p>
            <button className="btn btn-primary hover-lift" onClick={() => setErrorMsg("")} style={{ width: '100%', padding: '12px' }}>Saya Mengerti</button>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
