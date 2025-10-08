import Header from "./components/Header";
import Footer from "./components/Footer";
import ClosePR from "./pages/ClosePR";
import OpenPR from "./pages/OpenPR";
import Home from "./pages/Home";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/openpr" element={<OpenPR />} />
          <Route path="/closepr" element={<ClosePR />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
