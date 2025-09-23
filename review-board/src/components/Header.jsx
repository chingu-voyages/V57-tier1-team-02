import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import Button from "../design/Button";

const today = new Date();
const formattedDate = today.toLocaleDateString("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-gray-300">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="" width="50px" className="logo" />
      </div>
      <nav className="flex space-x-4">
        <Button to="/">Home</Button>
        <Button to="/openpr">OpenPR</Button>
        <Button to="/closepr">ClosePR</Button>
        <Button to="about">About</Button>
      </nav>
      <div className="text-sm font-medium">
        <span className="font-bold">Today: </span>
        {formattedDate}
      </div>
    </header>
  );
}
