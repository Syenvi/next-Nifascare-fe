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
          <Link href="/edukasi">Edukasi</Link>
          <a href="#nakes" className="btn btn-primary btn-sm">Hubungi Nakes</a>
        </div>
      </div>
    </nav>
  );
}
