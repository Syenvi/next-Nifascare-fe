'use client';

import { useState } from 'react';
import Link from 'next/link';

const questions = [
  { id: 1, text: 'Apakah bayi BAK < 6 kali/hari?', category: 'red' },
  { id: 2, text: 'Apakah payudara sangat nyeri atau kemerahan?', category: 'red' },
  { id: 3, text: 'Apakah terdapat tanda mastitis (bengkak, panas)?', category: 'red' },
  { id: 4, text: 'Apakah bayi tampak tidak puas setelah menyusu?', category: 'yellow' },
  { id: 5, text: 'Apakah puting terasa nyeri/lecet?', category: 'yellow' },
  { id: 6, text: 'Apakah payudara terasa penuh/bengkak ringan?', category: 'yellow' },
];

export default function ASIScreening() {
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const handleSelect = (idx, value) => {
    setAnswers(prev => ({ ...prev, [idx]: value }));
  };

  const calculateResult = () => {
    if (Object.keys(answers).length < questions.length) {
      alert('Mohon jawab semua pertanyaan terlebih dahulu.');
      return;
    }

    let isRed = false;
    let isYellow = false;
    let redReasons = [];
    let yellowReasons = [];

    questions.forEach((q, i) => {
      if (answers[i] === 'Ya') {
        if (q.category === 'red') {
          isRed = true;
          redReasons.push(q.text);
        } else if (q.category === 'yellow') {
          isYellow = true;
          yellowReasons.push(q.text);
        }
      }
    });

    if (isRed) {
      setResult({ status: 'danger', reasons: redReasons });
    } else if (isYellow) {
      setResult({ status: 'warning', reasons: yellowReasons });
    } else {
      setResult({ status: 'normal', reasons: [] });
    }
  };

  if (result) {
    return (
      <div className="glass-card animate-fade-in" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h2 className="text-center mb-4">Hasil Skrining Menyusui & ASI</h2>
        
        {result.status === 'normal' && (
          <div className="status-normal" style={{ padding: '20px', borderRadius: '15px', marginBottom: '20px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>🟢 Normal</h3>
            <p><strong>Interpretasi Klinis:</strong> Proses menyusui Anda berjalan efektif dengan kecukupan pengeluaran ASI yang optimal.</p>
            <p><strong>Rekomendasi Tindakan:</strong></p>
            <ul style={{ marginLeft: '20px', marginBottom: '10px' }}>
              <li>Lanjutkan Inisiasi dan rutinitas menyusui sesering mungkin setiap saat bayi menginginkan.</li>
              <li>Pertahankan posisi perlekatan menyusui yang sudah benar sejauh ini.</li>
            </ul>
             <p style={{ fontSize: '0.9rem', opacity: 0.9 }}><em>Edukasi: WHO merekomendasikan ASI eksklusif selama 6 bulan pertama pada setiap kehidupan bayi baru.</em></p>
          </div>
        )}

        {result.status === 'warning' && (
          <div className="status-warning" style={{ padding: '20px', borderRadius: '15px', marginBottom: '20px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>🟡 Perlu Perhatian</h3>
            <p><strong>Interpretasi Klinis:</strong> Terdapat tanda sekunder bahwa proses menyusui belum optimal sepenuhnya dan perlunya adaptasi.</p>
            <p><strong>Dasar Penilaian:</strong> Anda melaporkan gejala: {result.reasons.join(', ')}.</p>
            <p><strong>Rekomendasi Tindakan:</strong></p>
            <ul style={{ marginLeft: '20px', marginBottom: '10px' }}>
              <li>Sempurnakan dan perbaiki perlahan terkait perlekatan pada bibir bayi saat ke puting.</li>
              <li>Susui lebih sering secara bertahap / sedikit demi sedikit namun padat.</li>
              <li>Lakukan metode kompres payudara air hangat sebelum waktu menyusui.</li>
            </ul>
             <p style={{ fontSize: '0.9rem', opacity: 0.9 }}><em>Edukasi: Perlekatan yang salah dan payudara yang penuh sering kali membuat produksi sekresi ASI terhambat karena nyeri pada jaringan ikat.</em></p>
          </div>
        )}

        {result.status === 'danger' && (
          <div className="status-danger" style={{ padding: '20px', borderRadius: '15px', marginBottom: '20px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>🚨 Masalah Serius pada Menyusui</h3>
            <p><strong>Interpretasi Klinis:</strong> Terdapat indikator / gejala gangguan serius pada proses pengeluaran asi yang bertekanan nyeri atau berisiko tinggi bagi si kecil atau ibu.</p>
            <p><strong>Dasar Penilaian:</strong> Gejala mengarah pada komplikasi / dehidrasi dini bayi (BAK Kurang / Nyeri Hebat / indikasi Mastitis) karena alasan: {result.reasons.join(', ')}.</p>
            <p><strong>Rekomendasi Tindakan:</strong></p>
            <ul style={{ marginLeft: '20px', marginBottom: '10px', fontWeight: 'bold' }}>
              <li>Segera kunjungi faskes untuk meminta penanganan langsung terkait Mastitis atau bayi dengan asupan kurang.</li>
              <li>Jika kuat, tetap berikan ASI alternatif jika dirasa perlekatan mustahil dalam waktu dekat tanpa nyeri.</li>
              <li>Jangan ditunda.</li>
            </ul>
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
    <div className="animate-fade-in" style={{ maxWidth: '700px', margin: '0 auto' }}>
      <div className="text-center mb-4">
        <h1 style={{ color: 'var(--primary)' }}>Skrining Menyusui & ASI 🤱</h1>
        <p style={{ color: 'var(--text-light)' }}>Apakah Anda mengalami kendala selama memberikan ASI? Yuk periksa dari gejalanya di bawah ini.</p>
      </div>

      <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
        {questions.map((q, i) => (
          <div key={q.id} style={{ paddingBottom: '20px', borderBottom: '1px solid var(--glass-border)' }}>
            <p style={{ fontWeight: '500', marginBottom: '15px', fontSize: '1.1rem' }}>{i + 1}. {q.text}</p>
            <div style={{ display: 'flex', gap: '15px' }}>
            <button 
                className={`btn ${answers[i] === 'Ya' ? 'btn-primary' : 'btn-outline'}`} 
                onClick={() => handleSelect(i, 'Ya')}
                style={{ flex: 1 }}
              >
                Ya
              </button>
              <button 
                className={`btn ${answers[i] === 'Tidak' ? 'btn-primary' : 'btn-outline'}`} 
                onClick={() => handleSelect(i, 'Tidak')}
                style={{ flex: 1, backgroundColor: answers[i] === 'Tidak' ? '#86EFAC' : '', borderColor: answers[i] === 'Tidak' ? '#86EFAC' : '', color: answers[i] === 'Tidak' ? '#137333' : '' }}
              >
                Tidak
              </button>
            </div>
          </div>
        ))}

        <button className="btn btn-primary" style={{ width: '100%', padding: '15px', fontSize: '1.1rem', marginTop: '10px' }} onClick={calculateResult}>
          Lihat Hasil Skrining
        </button>
      </div>
    </div>
  );
}
