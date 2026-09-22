import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="logo">
        🏘️ मछमरवा डिजिटल गाँव
      </Link>

      <nav>
        <Link to="/">होम</Link>
        <Link to="/yojna">योजनाएँ</Link>
        <Link to="/vikas">विकास कार्य</Link>
        <Link to="/samasya">समस्या दर्ज करें</Link>
        <Link to="/suchna">सूचनाएँ</Link>
        <Link to="/about">हमारे बारे में</Link>
      </nav>

      <button className="menu">☰</button>
    </header>
  );
}

export default Navbar;