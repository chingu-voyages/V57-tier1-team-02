import React from "react";

import pholder from "../assets/pholder.png";
import team from "../assets/team-collaboration.webp";
import teamcode from "../assets/team-code.jpg";

export default function About() {
  return (
    <div>
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">About Us</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white shadow-lg rounded-2xl p-6 text-left hover:shadow-xl transition-shadow duration-300">
              <img
                src={team}
                alt="team"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">
                Built by Developers, for Developers
              </h3>
              <p className="text-gray-600 mb-4">
                We’re a team of developers passionate about making code
                collaboration seamless. Our platform helps teams streamline pull
                request reviews, improve communication, and ship high-quality
                code faster.
              </p>
              <a href="#" className="text-blue-600 font-medium hover:underline">
                Learn more
              </a>
            </div>

            <div className="bg-white shadow-lg rounded-2xl p-6 text-left hover:shadow-xl transition-shadow duration-300">
              <img
                src={teamcode}
                alt="mission"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">
                Empowering Better Code Collaboration
              </h3>
              <p className="text-gray-600 mb-4">
                We believe code review should be simple, transparent, and
                efficient. That’s why our app focuses on tools that enhance
                teamwork, automate review workflows, and let you focus on
                writing great code.
              </p>
              <a
                href={pholder}
                className="text-blue-600 font-medium hover:underline"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
