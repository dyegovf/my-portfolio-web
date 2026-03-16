import { Link } from "@tanstack/react-router";
import Logo from "./Logo";

export default function NavBar() {
  return (
    <nav>
      <Logo />
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>      
        <Link to="/contact">Contact</Link>
      </div>
      <div className="github">
        <a href="https://github.com/dyegovf" target="_blank" rel="noopener noreferrer">github.com/dyegovf</a>
      </div>
    </nav>
  );
}
