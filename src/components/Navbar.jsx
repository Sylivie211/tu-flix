import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">Tu-Flix</h1>
      <ul className="navbar-links">
        <li>Home</li>
        <li>Watchlist</li>
      </ul>
    </nav>
  );
}

export default Navbar;
