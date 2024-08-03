import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

const activeNavLink = ({ isActive }) => {
  return clsx(css.link, isActive && css.isActive);
};

const Navigation = () => {
  return (
    <header className={css.header}>
      <nav className={css.navigation}>
        <NavLink to="/" className={activeNavLink}>
          Home
        </NavLink>
        <NavLink to="/movies" className={activeNavLink}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
