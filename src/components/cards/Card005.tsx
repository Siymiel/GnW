/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React from "react";

interface IProps {}

const Card005: React.FC<IProps> = () => {
  return (
    <div className=" bg-white pb-10">
      <a href="#">
        <img
          className="h-96 w-full object-cover object-center"
          src="https://images.unsplash.com/photo-1612860606900-25b4b0bc79ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="altimag"
        />
      </a>
      <div className="p-3">
        <a href="/blog/:id">
          <h5 className="mb-1 pt-3 text-3xl font-medium tracking-tight text-gray-900">
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
          play. A great time was had by all; Warm weather, casual clothing and
          the first round on the boss! The Knights played against the Redtails,
          and while this reporter will stay pretty unbiased team-wise, someone
          got seriously handed before the end of the night. It was an
          interesting evening to say the least, the most important part of which
          was that everyone enjoyed themselves to the fullest and had quite a
          bit of fun. Two employees went so far as to attempt a hazardly
          delicious and totally unrelated combination of food product from the
          consessions; A hot dog topped with mac & cheese.
        </p>
        <p className="mb-3 font-normal text-gray-700">
          In other news, that beautiful BB&T Stadium was payed a visit by the
          famous winning Charlotte team LeadVision. ..To go see the Knights
          play. A great time was had by all; Warm weather, casual clothing and
          the first round on the boss! The Knights played against the Redtails,
          and while this reporter will stay pretty unbiased team-wise, someone
          got seriously handed before the end of the night. It was an
          interesting evening to say the least, the most important part of which
          was that everyone enjoyed themselves to the fullest and had quite a
          bit of fun. Two employees went so far as to attempt a hazardly
          delicious and totally unrelated combination of food product from the
          consessions; A hot dog topped with mac & cheese.
        </p>
      </div>
    </div>
  );
};

export default Card005;
