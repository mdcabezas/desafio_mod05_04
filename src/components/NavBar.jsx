import { NavLink } from "react-router-dom";
import { useDataContext } from "../context/DataProvider";

function NavBar() {
  const { totalCart } = useDataContext()

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <NavLink to="/" className="navbar-brand">
          Pizza-Pizza
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <NavLink to="/carrito" className="nav-link">
              <span className={({ isActive }) => isActive ? 'active' : undefined}>
                🛒 {totalCart}
              </span>
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar