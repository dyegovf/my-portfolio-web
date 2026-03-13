import { Link } from "@tanstack/react-router";
import logo from "../assets/logo.jpg"; 

export default function Logo() {
  return (
    <div className="logo">
      <Link to="/">
        <img src={logo} alt="Dyego VF Logo" />
      </Link>
    </div>
  );
}
