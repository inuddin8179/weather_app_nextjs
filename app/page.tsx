"use client";
import React from "react";
import Weather from "./components/Weather";

const page = () => {
  return (
    <div className="flex h-[100vh] w-full justify-center items-center flex-col bg-black p-8 gap-8">
      <Weather />
    </div>
  );
};

export default page;
