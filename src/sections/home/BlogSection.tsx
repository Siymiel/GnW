/* eslint-disable @next/next/no-img-element */
import React from "react";
import Card004 from "@/components/cards/Card004";

const BlogSection = () => {
  return (
    <div className="bg-white py-20">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold uppercase tracking-tight text-gray-900 sm:text-3xl">From the blog</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">Learn how to grow your business with our expert advice.</p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-y-20 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <Card004 />
        <Card004 />
        <Card004 />
        </div>
    </div>
    </div>
  );
};

export default BlogSection;
