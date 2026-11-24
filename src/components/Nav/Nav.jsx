import { NavLink } from "react-router-dom";
import { CATEGORIES } from "../../config";

export const Nav = () => (
  <nav>
    <ul className="nav-list">
      <li>
        <NavLink to="/" end>Todos</NavLink>
      </li>
      {CATEGORIES.map((cat) => (
        <li key={cat.slug}>
          <NavLink to={`/categoria/${cat.slug}`}>{cat.label}</NavLink>
        </li>
      ))}
    </ul>
  </nav>
);
