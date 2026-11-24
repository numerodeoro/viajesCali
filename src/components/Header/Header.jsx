import { Link } from "react-router-dom";
import { Nav } from "../Nav/Nav";
import { BUSINESS } from "../../config";

export const Header = () => (
  <header className="header">
    <Link to="/" className="logo">
      <span className="logo-icon">C</span>
      <span>{BUSINESS.name}</span>
    </Link>
    <Nav />
  </header>
);
