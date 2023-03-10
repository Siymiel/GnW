import React from "react";
import Card002 from "@/components/cards/Card002";
const TeamSection = () => {
  return (
    <div className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-semibold uppercase tracking-tight text-gray-900 sm:text-3xl">
            Meet our team
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            We’re a dynamic group of individuals who are passionate about what
            we do.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4"
        >
          <Card002 />
          <Card002 />
          <Card002 />
          <Card002 />
        </ul>
      </div>
    </div>
  );
};

export default TeamSection;
