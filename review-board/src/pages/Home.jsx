import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../design/Button";
import pulr from "../assets/pulr.webp";
import pholder from "../assets/pholder.png";
import { CheckCircle2 } from "lucide-react";
export default function Home() {
  return (
    <div>
      <div className="flex items-center justify-between p-8 w-[60%] mx-auto">
        <div className="max-w m-md ">
          <h2 className="text-2xl font-bold mb-4">
            Easily organize your teams work
          </h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            dolore!
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
            Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor
            sed. Suspendisse lobortis vitae quis vehicula pellentesque sit id.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 gap-4">
            <img
              src={pholder}
              alt="Preview 1"
              className="w-full h-40 object-contain rounded-lg shadow-md col-span-2"
            />
            <img
              src={pholder}
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
              "Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor sed.",
              "Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor sed.",
              "Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor sed.",
              "Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor sed.",
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
          <h2 className="text-3xl font-bold">About Us</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-6">
          {[1, 2].map((item) => (
            <div
              key={item}
              className="bg-gray-50 shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={pholder}
                alt="About us"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">
                  Humans are much more smarter than AI
                </h3>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit
                  amet consectetur.
                </p>
                <a
                  href="#"
                  className="text-sm font-medium text-blue-600 hover:underline"
                >
                  Learn more
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
