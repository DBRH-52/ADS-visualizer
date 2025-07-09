import './Navbar.css';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link href="/">ADS Visualizer</Link>
      </div>
      <div className="navbar-links">
        <Link href="/algorithms">Algorithms</Link>
        <Link href="/data-structures">Data Structures</Link>
      </div>
    </nav>
  );
}
