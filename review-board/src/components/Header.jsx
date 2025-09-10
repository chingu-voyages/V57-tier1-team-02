import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const today = new Date();
const formattedDate = today.toLocaleDateString("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});

export default function Header() {
  return (
    <header>
      <nav className="navbar container">
        <div className="logo">
          <img src={logo} alt="app logo" width="50" />
        </div>
        <ul className="nav__links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/openpr">OpenPR</NavLink>
          </li>
          <li>
            <NavLink to="/closePr">ClosePR</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>

        <p>
          <span>Today</span>: {formattedDate}
        </p>
      </nav>
    </header>
  );
}
