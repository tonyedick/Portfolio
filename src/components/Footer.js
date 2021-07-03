import React from "react";
import { ChipIcon } from "@heroicons/react/solid";

export default function Footer() {
    return (
      <section id="footer">
        <div className="container px-5 py-10 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
              Follow me on Social Media
            </h1>
            <ChipIcon className="w-10 inline-block mb-4" />
            <ChipIcon className="w-10 inline-block mb-4" />
            <ChipIcon className="w-10 inline-block mb-4" />
            <ChipIcon className="w-10 inline-block mb-4" />
          </div>
        </div>
       </section>
);
}    
