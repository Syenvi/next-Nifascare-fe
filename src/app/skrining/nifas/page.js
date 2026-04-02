'use client';

import { useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import Image from 'next/image';

const questions = [
  { id: 1, text: 'Apakah perdarahan sangat banyak (pembalut penuh < 1 jam)?', category: 'red' },
  { id: 2, text: 'Apakah darah nifas berbau busuk?', category: 'red' },
  { id: 3, text: 'Apakah ibu mengalami demam ≥ 38°C?', category: 'red' },
  { id: 4, text: 'Apakah nyeri perut sangat hebat?', category: 'red' },
  { id: 5, text: 'Apakah pusing berat atau lemas ekstrem?', category: 'red' },
  { id: 6, text: 'Apakah luka jahitan bernanah atau sangat nyeri?', category: 'red' },
  { id: 7, text: 'Apakah nyeri luka ringan?', category: 'yellow' },
  { id: 8, text: 'Apakah perdarahan mulai meningkat?', category: 'yellow' },
];

export default function NifasScreening() {
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSelect = (idx, value) => {
    setAnswers(prev => ({ ...prev, [idx]: value }));
  };

  const calculateResult = () => {
    // If not all answered, alert
    if (Object.keys(answers).length < questions.length) {
      setErrorMsg('Mohon lengkapi semua isian terlebih dahulu.');
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
      <div className="glass-card animate-fade-in" style={{ maxWidth: '600px', margin: '0 auto', padding: '40px', background: 'rgba(255, 255, 255, 0.4)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255, 255, 255, 0.5)', borderRadius: '24px', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.1)' }}>
        <h2 className="text-center mb-4">Hasil Skrining Asuhan Nifas</h2>
        
        <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', borderRadius: '16px', overflow: 'hidden', marginBottom: '25px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
          <Image src={`/assets/nifas-${result.status === 'danger' ? 'bahaya' : result.status === 'warning' ? 'perlu-perhatian' : 'normal'}.png`} alt="Ilustrasi Hasil" fill style={{ objectFit: 'cover' }} />
        </div>
        
        {result.status === 'normal' && (
          <div className="status-normal" style={{ padding: '20px', borderRadius: '15px', marginBottom: '20px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>🟢 Kondisi Anda Normal</h3>
            <p><strong>Interpretasi Klinis:</strong> Kondisi ibu menunjukkan proses pemulihan fisiologis masa nifas tanpa tanda komplikasi. Kondisi Anda masih dalam batas normal masa nifas.</p>
            <p><strong>Rekomendasi Tindakan:</strong></p>
            <ul style={{ marginLeft: '20px', marginBottom: '10px' }}>
              <li>Istirahat cukup.</li>
              <li>Jaga kebersihan area genital.</li>
              <li>Lanjutkan perawatan diri mandiri di rumah seperti biasa.</li>
              <li>Lakukan kunjungan nifas sesuai jadwal tenaga kesehatan.</li>
            </ul>
            <p style={{ fontSize: '0.9rem', opacity: 0.9 }}><em>Edukasi: Pemantauan rutin penting karena masa nifas (0-42 hari) merupakan periode risiko komplikasi.</em></p>
          </div>
        )}

        {result.status === 'warning' && (
          <div className="status-warning" style={{ padding: '20px', borderRadius: '15px', marginBottom: '20px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>🟡 Perlu Perhatian</h3>
            <p><strong>Interpretasi Klinis:</strong> Terdapat keluhan ringan yang perlu dipantau. Ditemukan gejala ringan yang dapat mengarah ke gangguan awal masa nifas.</p>
            <p><strong>Dasar Penilaian:</strong> Anda melaporkan gejala terkait ({result.reasons.join(', ')}).</p>
            <p><strong>Rekomendasi Tindakan:</strong></p>
            <ul style={{ marginLeft: '20px', marginBottom: '10px' }}>
              <li>Istirahat lebih banyak dan kurangi aktivitas berat.</li>
              <li>Jaga kebersihan luka (jika ada).</li>
              <li>Observasi pantau kondisi selama 1-2 hari ke depan.</li>
              <li>Konsultasi ke bidan / tenaga kesehatan jika tidak membaik atau semakin berat.</li>
            </ul>
             <p style={{ fontSize: '0.9rem', opacity: 0.9 }}><em>Edukasi: Komplikasi nifas seperti infeksi atau subinvolusi dapat berkembang secara bertahap, pantau terus gejala Anda.</em></p>
          </div>
        )}

        {result.status === 'danger' && (
          <div className="status-danger" style={{ padding: '20px', borderRadius: '15px', marginBottom: '20px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>🚨 Tanda Bahaya</h3>
            <p><strong>Interpretasi Klinis:</strong> Kondisi Anda memerlukan penanganan SEGERA. Gejala mengarah pada komplikasi serius masa nifas.</p>
            <p><strong>Dasar Penilaian:</strong> Terdapat tanda bahaya kuat ({result.reasons.join(', ')}).</p>
            <p><strong>Rekomendasi Tindakan:</strong></p>
            <ul style={{ marginLeft: '20px', marginBottom: '10px', fontWeight: 'bold' }}>
              <li>Segera ke fasilitas kesehatan secepatnya!</li>
              <li>Hubungi bidan atau dokter kandungan Anda.</li>
              <li>Jangan menunda pemeriksaan.</li>
            </ul>
             <p style={{ fontSize: '0.9rem', opacity: 0.9 }}><em>Edukasi: Perdarahan postpartum, infeksi, dan hipertensi merupakan penyebab utama komplikasi serius yang membutuhkan intervensi medis segera.</em></p>
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
    <div className="animate-fade-in" style={{ maxWidth: '750px', margin: '0 auto' }}>
      <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--text-light)', textDecoration: 'none', marginBottom: '15px', fontWeight: 500, padding: '8px 16px', background: 'rgba(255,255,255,0.5)', borderRadius: '20px', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.4)', boxShadow: '0 4px 10px rgba(0,0,0,0.03)' }}>
        <span style={{ fontSize: '1.2rem' }}>←</span> Kembali ke Beranda
      </Link>
      <div className="text-center mb-4">

        <h1 style={{ color: 'var(--primary)' }}>Skrining Asuhan Nifas 🩺</h1>
        <p style={{ color: 'var(--text-light)' }}>Jawablah pertanyaan berikut sesuai dengan kondisi yang Anda rasakan saat ini sejujur-jujurnya.</p>
      </div>

      <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '25px', padding: '40px', background: 'rgba(255, 255, 255, 0.4)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255, 255, 255, 0.5)', borderRadius: '24px', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.1)' }}>
        {/* Progress Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '-10px', color: 'var(--text-light)', fontSize: '0.9rem', fontWeight: 500 }}>
          <span>Progres Pengisian</span>
          <span>{Math.round((Object.keys(answers).length / questions.length) * 100)}%</span>
        </div>
        <div className="progress-container">
          <div className="progress-bar" style={{ width: `${Math.round((Object.keys(answers).length / questions.length) * 100)}%` }}></div>
        </div>

        <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', borderRadius: '16px', overflow: 'hidden', marginBottom: '20px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
          <Image src="/assets/nifas.png" alt="Ilustrasi Nifas" fill priority style={{ objectFit: 'cover' }} />
        </div>
        {questions.map((q, i) => (
          <div key={q.id} style={{ paddingBottom: '20px', borderBottom: '1px solid var(--glass-border)' }}>
            <p style={{ fontWeight: 500, marginBottom: '15px', fontSize: '1.1rem' }}>{i + 1}. {q.text}</p>
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
