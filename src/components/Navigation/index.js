import { NavLink } from "react-router-dom";
import ROUTES from "../../constants/routes";
import { useAuth } from "../../context/AuthContext";
import styles from "./Navigation.module.css";

function Navigation() {
  const { logout } = useAuth();

  return (
    <nav className={styles.nav_links}>
      <NavLink to={ROUTES.PAGE_DASHBOARD}>Dashboard</NavLink>
      <NavLink to={ROUTES.PAGE_SEARCH}>Search</NavLink>
      <NavLink to={ROUTES.PAGE_FAVORITES}>Favorites</NavLink>
      <button onClick={logout}>Log out</button>
    </nav>
  );
}

export default Navigation;
