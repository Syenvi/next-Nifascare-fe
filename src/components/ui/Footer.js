'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  return (
    <footer className="glass-card" style={{
      margin: '40px auto 20px',
      maxWidth: '800px',
      padding: '40px',
      background: 'rgba(255, 255, 255, 0.6)',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 -4px 30px rgba(0, 0, 0, 0.03)'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '40px',
        marginBottom: '40px'
      }}>
        {/* Left: Brand */}
        <div>
          <h3 style={{ color: 'var(--primary)', marginBottom: '15px', fontSize: '1.5rem', fontWeight: '700' }}>Nifas & ASI Check</h3>
          <p style={{ color: 'var(--text-light)', lineHeight: '1.6', fontSize: '0.95rem' }}>
            Platform skrining mandiri terpadu untuk mengecek kondisi asuhan nifas, kelancaran menyusui (ASI), dan kesehatan mental ibu setelah melahirkan secara mudah, aman, dan cepat.
          </p>
        </div>

        {/* Right: Navigasi */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <h4 style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '5px', fontWeight: '600' }}>Navigasi Skrining</h4>

          {[
            { href: '/skrining/nifas', icon: '🩺', label: 'Asuhan Nifas', desc: 'Periksa kondisi pendarahan & pemulihan' },
            { href: '/skrining/asi', icon: '🤱', label: 'Menyusui & ASI', desc: 'Evaluasi pelekatan & kelancaran ASI' },
            { href: '/skrining/mental', icon: '🧠', label: 'Kesehatan Mental', desc: 'Cek risiko baby blues & depresi (EPDS)' },
            { href: '/direktori', icon: '🏥', label: 'Direktori Faskes', desc: 'Temukan klinik & RS terdekat' },
          ].map(({ href, icon, label, desc }) => (
            <FooterLink key={href} href={href} icon={icon} label={label} desc={desc} />
          ))}
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: '1px', background: 'linear-gradient(90deg, rgba(0,0,0,0.02), rgba(0,0,0,0.1), rgba(0,0,0,0.02))', width: '100%', marginBottom: '25px' }} />

      {/* Bottom */}
      <div style={{ textAlign: 'center' }}>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', fontWeight: '600', marginBottom: '15px' }}>
          &copy; {new Date().getFullYear()} Nifas & ASI Check. Oleh Kolaborasi Mahasiswa Kebidanan & Tim IT.
        </p>
        <div style={{
          marginTop: '10px',
          display: 'inline-flex',
          alignItems: 'flex-start',
          gap: '12px',
          padding: '12px 20px',
          background: 'rgba(255, 133, 162, 0.08)',
          borderRadius: '16px',
          border: '1px solid rgba(255, 133, 162, 0.15)',
          maxWidth: '100%',
          textAlign: 'left'
        }}>
          <span style={{ fontSize: '1.5rem', marginTop: '-2px' }}>🚨</span>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-light)', margin: 0, lineHeight: '1.5' }}>
            <strong style={{ color: 'var(--danger-text)' }}>Perhatian Penting:</strong> Website ini bersifat edukatif dan preventif. Hasil skrining tidak menggantikan diagnosis atau pemeriksaan langsung oleh dokter atau bidan.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── Footer Link dengan hover via inline state ────────────────────────────────
function FooterLink({ href, icon, label, desc }) {
  const [hovered, setHovered] = useState(false);

  const baseStyle = {
    display: 'block',
    padding: '12px 18px',
    borderRadius: '16px',
    background: hovered ? 'white' : 'rgba(255,255,255,0.7)',
    border: hovered ? '1px solid rgba(255, 133, 162, 0.3)' : '1px solid rgba(255,255,255,0.9)',
    boxShadow: hovered ? '0 6px 15px rgba(255, 133, 162, 0.15)' : '0 2px 5px rgba(0,0,0,0.02)',
    color: 'var(--text-main)',
    fontWeight: '500',
    fontSize: '0.95rem',
    textDecoration: 'none',
    transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
    transition: 'all 0.2s ease',
    cursor: 'pointer',
  };

  return (
    <Link
      href={href}
      style={baseStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span>{icon} {label}</span>
      <small style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-light)', marginTop: '2px', fontWeight: 'normal' }}>
        {desc}
      </small>
    </Link>
  );
}