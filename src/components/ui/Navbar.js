import Link from 'next/link';
import './Navbar.css'; // Let's create minimal scoped CSS if needed, or rely on globals

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link href="/" className="logo">
          Nifas <span className="logo-accent">& ASI Check</span>
        </Link>
        <div className="nav-links">
          <Link href="/edukasi" className="btn hover-lift" style={{ backgroundColor: '#FEF7E0', color: '#B06000', padding: '8px 16px', fontSize: '0.9rem', border: '1px solid #FEEFC3' }}>💡 Edukasi</Link>

          <Link href="/direktori" className="btn btn-primary btn-sm">Hubungi Nakes</Link>
        </div>
      </div>
    </nav>
  );
}
