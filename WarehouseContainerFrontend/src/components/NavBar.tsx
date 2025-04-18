import { Link } from "react-router-dom";
import HelpOffCanvas from "./HelpOffCanvas";
import { useCurrentActor } from "../store/currentActor";

const NavBar = () => {
  const { getCurrentActor } = useCurrentActor();
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            to={`/dashboard`}
            style={{
              color: "#ffb2a5",
              fontWeight: "600",
              fontSize: "1.75rem",
              letterSpacing: "1px",
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            }}
          >
            <i className="bi bi-box-seam me-2"></i>
            Warehouse Container Manager
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto text-center">
              <Link className="nav-link px-3" to={`/dashboard`}>
                Home
              </Link>
              <Link className="nav-link px-3" to="/account">
                Accounts
              </Link>
              {getCurrentActor().email ===
                JSON.parse(localStorage.getItem("user") ?? "")[0] && (
                <Link className="nav-link px-3" to={`/members`}>
                  Members
                </Link>
              )}
              <Link
                className="nav-link px-3 text-danger fw-semibold"
                to="/"
                onClick={() => {
                  localStorage.clear();
                }}
              >
                Log out
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <HelpOffCanvas />
    </div>
  );
};

export default NavBar;
