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
    <header className="flex flex-col md:flex-row items-center justify-between px-6 py-4 bg-white shadow-md border-b border-gray-200 rounded-b-2xl">
      {/* Logo */}
      <div className="flex items-center gap-3 mb-2 md:mb-0">
        <img src={logo} alt="Logo" width="50" className="rounded-full shadow-inner" />
        <span className="text-lg font-semibold text-gray-800">OpenPR Viewer</span>
      </div>

      {/* Navigation */}
      <nav className="flex flex-wrap justify-center gap-3">
        <Button to="/" className="bg-blue-600 text-white hover:bg-blue-700 transition px-4 py-2 rounded-lg font-medium">Home</Button>
        <Button to="/openpr" className="bg-blue-600 text-white hover:bg-blue-700 transition px-4 py-2 rounded-lg font-medium">OpenPR</Button>
        <Button to="/closepr" className="bg-blue-600 text-white hover:bg-blue-700 transition px-4 py-2 rounded-lg font-medium">ClosePR</Button>
        <Button to="/about" className="bg-blue-600 text-white hover:bg-blue-700 transition px-4 py-2 rounded-lg font-medium">About</Button>
      </nav>

      {/* Date */}
      <div className="mt-2 md:mt-0 text-sm text-gray-600 font-medium">
        <span className="font-semibold">Today: </span>
        {formattedDate}
      </div>
    </header>
  );
}
