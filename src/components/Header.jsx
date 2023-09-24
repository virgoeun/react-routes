import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  const handleActiveLink = ({ isActive }) => {
    return isActive ? { color: "yellow" } : null;
  };

  return (
    <header className={classes.header}>
      <i>site logo</i>
      <nav className={classes.nav}>
        <NavLink style ={handleActiveLink} to="/">Home</NavLink>

        <NavLink style ={handleActiveLink} to="/dogs">Dogs</NavLink>

        <NavLink style ={handleActiveLink} to="/cats">Cats</NavLink>
      </nav>
    </header>
  );
};

export default Header;
