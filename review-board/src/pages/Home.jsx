import React from "react";
import Button from "../design/Button";
import pulr from "../assets/pulr.webp";
import pholder from "../assets/pholder.png";
import { CheckCircle2 } from "lucide-react";
import teamcode from "../assets/team-code.jpg";
import pull from "../assets/pull.png";
import anas from "../assets/anas.png";
import saleh from "../assets/saleh.jpg";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-10">
        {/* Text */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Easily organize your team's work
          </h1>
          <p className="text-gray-600 text-lg">
            Take the pain out of pull requests with real-time feedback and
            effortless team coordination.
          </p>
          <div className="flex gap-4 flex-wrap mt-4">
            <Button
              to="/openpr"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition shadow-md hover:shadow-lg"
            >
              Open PRs
            </Button>
            <Button
              to="/closepr"
              className="bg-gray-800 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-900 transition shadow-md hover:shadow-lg"
            >
              Closed PR
            </Button>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="rounded-3xl shadow-xl overflow-hidden hover:scale-105 transition-transform duration-500">
            <img
              src={pulr}
              alt="A cat begging for pull review"
              className="w-full max-w-md object-contain"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">Learn More About the APP</h2>
          <p className="text-gray-600 text-lg">
            Discover how our platform helps your team review pull requests
            faster, give better feedback, and keep your codebase clean and
            consistent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto px-6">
          {/* Images */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src={teamcode}
              alt="Preview 1"
              className="w-full h-44 object-cover rounded-2xl shadow-md hover:scale-105 transition-transform duration-500 col-span-2"
            />
            <img
              src={pull}
              alt="Preview 2"
              className="w-full h-44 object-cover rounded-2xl shadow-md hover:scale-105 transition-transform duration-500"
            />
            <img
              src={pholder}
              alt="Preview 3"
              className="w-full h-44 object-cover rounded-2xl shadow-md hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Feature Points */}
          <div className="space-y-6">
            {[
              "Collaborate effortlessly with your team.",
              "Track and review pull requests in one place.",
              "Improve code quality with consistent reviews.",
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="text-green-500 w-6 h-6 mt-1" />
                <p className="text-gray-700 text-lg">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-10">About Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-6">
            {/* Team Member 1 */}
           <div className="bg-white shadow-lg rounded-3xl p-6 hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
  <img
    src={anas}
    alt="team member"
    className="h-64 w-64 object-cover rounded-full mb-4 mx-auto"
  />
  <h3 className="text-xl font-semibold mb-2 text-center">Anas EL ASSRI</h3>
  <p className="text-gray-600 mb-4 text-center">
    A web developer who loves building clean, user-friendly
    interfaces and learning new technologies.
  </p>
</div>

{/* Team Member 2 */}
<div className="bg-white shadow-lg rounded-3xl p-6 hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
  <img
    src={saleh}
    alt="Team member"
    className="h-64 w-64 object-cover rounded-full mb-4 mx-auto"
  />
  <h3 className="text-xl font-semibold mb-2 text-center">Saleh Abdullahi</h3>
  <p className="text-gray-600 mb-4 text-center">
    A dedicated coder with a profound love for problem-solving.
  </p>
</div>

          </div>
        </div>
      </section>
    </div>
  );
}
