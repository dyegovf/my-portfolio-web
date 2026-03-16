import { Link } from "@tanstack/react-router";
import logo from "../assets/logo-dv.png"; 

export default function Logo() {
  return (
    <div className="logo">
      <Link to="/">
        <img src={logo} alt="Datavil Logo" />
      </Link>
    </div>
  );
}
