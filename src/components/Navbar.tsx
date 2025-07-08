import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">ADS Visualizer</div>
      <div className="navbar-links">
        <a href="/algorithms">Algorithms</a>
        <a href="/data-structures">Data Structures</a>
      </div>
    </nav>
  );
}
