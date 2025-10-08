import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../design/Button";
import pulr from "../assets/pulr.webp";
import pholder from "../assets/pholder.png";
import { CheckCircle2 } from "lucide-react";
import About from "./About";
import teamcode from "../assets/team-code.jpg";
import pull from "../assets/pull.png";
import anas from "../assets/anas.png";
import saleh from "../assets/saleh.jpg";

export default function Home() {
  return (
    <div>
      <div className="flex items-center justify-between p-8 w-[60%] mx-auto">
        <div className="max-w m-md ">
          <h2 className="text-2xl font-bold mb-4">
            Easily organize your teams work
          </h2>
          <p className="text-gray-600 mb-6">
            Take the pain out of pull requests with real-time feedback and
            effortless team coordination.
          </p>
          <div className="flex gap-4">
            <Button to="/openpr" className="bg-gray-800">
              Open PRs
            </Button>
            <Button to="/closepr" className="bg-gray-800">
              Closed PR
            </Button>
          </div>
        </div>
        <div>
          <img
            src={pulr}
            alt="A cat begging for pull review"
            className="w-[500px] h-[500px] object-contain"
          />
        </div>
      </div>
      <section className="py-16 bg-white">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Learn More About the APP</h2>
          <p className="text-gray-600">
            Discover how our platform helps your team review pull requests
            faster, give better feedback, and keep your codebase clean and
            consistent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 gap-4">
            <img
              src={teamcode}
              alt="Preview 1"
              className="w-full h-40 object-contain rounded-lg shadow-md col-span-2"
            />
            <img
              src={pull}
              alt="Preview 2"
              className="w-full h-40 object-cover rounded-lg shadow-md"
            />
            <img
              src={pholder}
              alt="Preview 3"
              className="w-full h-40 object-cover rounded-lg shadow-md"
            />
          </div>

          <div className="space-y-6">
            {[
              "Collaborate effortlessly with your team.",
              "Track and review pull requests in one place.",
              "Improve code quality with consistent reviews.",
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="text-green-500 w-6 h-6 mt-1" />
                <p className="text-gray-700">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="text-center mb-12">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-10">About Us</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white shadow-lg rounded-2xl p-6 text-left hover:shadow-xl transition-shadow duration-300">
                <img
                  src={anas}
                  alt="team member"
                  className="w-full h-48 object-contain rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">Anas EL ASSRI</h3>
                <p className="text-gray-600 mb-4">
                  A web developer who loves building clean, user-friendly
                  interfaces and learning new technologies.
                </p>
                <a
                  href="#"
                  className="text-blue-600 font-medium hover:underline"
                >
                  Learn more
                </a>
              </div>

              <div className="bg-white shadow-lg rounded-2xl p-6 text-left hover:shadow-xl transition-shadow duration-300">
                <img
                  src={saleh}
                  alt="Team member"
                  className="w-full h-48 object-contain rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">Saleh Abdullahi</h3>
                <p className="text-gray-600 mb-4">
                  A dedicated coder with a profound love for problem-solving
                </p>
                <a
                  href="#"
                  className="text-blue-600 font-medium hover:underline"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
