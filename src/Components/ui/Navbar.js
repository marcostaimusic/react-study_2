import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

export const Navbar = () => {
  const history = useNavigate();
  const {
    user: { name },
    dispatch,
  } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({
      type: types.logout,
    });
    history("/login", { replace: true });
  };

  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          Asociaciones
        </Link>

        <div className="navbar-collapse">
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link" to="/marvel">
              Marvel
            </NavLink>

            <NavLink className="nav-item nav-link" to="/dc">
              DC
            </NavLink>
            <NavLink className="nav-item nav-link" to="/search">
              Search
            </NavLink>
          </div>
        </div>

        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul className="navbar-nav ms-auto">
            <span className="nav-item nav-link text-info">{name}</span>
            <button className="btn nav-item nav-link" onClick={handleLogout}>
              Logout
            </button>
          </ul>
        </div>
      </nav>
    </>
  );
};
