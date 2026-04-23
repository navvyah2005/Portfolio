import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-brand" end>
        Portfolio<span>.</span>
      </NavLink>
      <div className="navbar-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;