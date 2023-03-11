/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React from "react";

interface IProps {}

const Card003: React.FC<IProps> = () => {
  return (
    <div className=" bg-white pb-10">
      <a href="/blog/:id">
        <img
          className="h-96 w-full object-cover object-center hover:opacity-90 transition-all"
          src="https://images.unsplash.com/photo-1612860606900-25b4b0bc79ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="altimag"
        />
      </a>
      <div className="p-3">
        <a href="/blog/:id">
          <h5 className="mb-1 pt-3 text-3xl font-medium tracking-tight text-gray-900 hover:text-gray-600">
            Noteworthy technology acquisitions 2021
          </h5>
        </a>
        <div className="pb-4">
          <p className="font-semibold italic text-gray-500 text-sm tracking-wide">
            June 6, 2014{" "}
            <span className="text-orange-500 ml-2">
              Entertainment, Games, News
            </span>
          </p>
        </div>
        <p className="mb-3 font-normal text-gray-700">
          In other news, that beautiful BB&T Stadium was payed a visit by the
          famous winning Charlotte team LeadVision. ..To go see the Knights
          play. A great time was had by [...]
        </p>
      </div>
    </div>
  );
};

export default Card003;
