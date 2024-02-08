import "./header.scss";
import { useContext, useState } from "react";
import { UserContext } from "./providers.tsx";
import { Link } from "react-router-dom";
import { LogoutButton } from "./LogoutButton.tsx";

export function Header() {
  const [open, setOpen] = useState(false);
  const user = useContext(UserContext).user;
  return (
    <header>
      <nav>
        <div className="row">
          <Link to={"/"}>
            <img src="/logo_small.png" alt="SAS Virtual Logo" id="logo" />
          </Link>
          <div className="burger" onClick={() => setOpen((prev) => !prev)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <ul className={open ? "show" : undefined}>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          {user ? (
            <>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <LogoutButton />
              </li>
              {user.role === "admin" && (
                <li>
                  <Link to="/admin">Admin</Link>
                </li>
              )}
            </>
          ) : (
            <>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
