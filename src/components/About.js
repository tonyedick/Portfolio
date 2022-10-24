// src/components/About.js
import React from "react";

export default function About() {
    return (
      <section id="about">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Hi, I'm Dick Tonye.
              <br className="hidden lg:inline-block" /> I enjoy building amazing software
              solutions to help businesses maximize profit..
            </h1>
            <p className="mb-8 leading-relaxed">
            My goal is to help businesses properly communicate their solutions 
            with minimum resources and time spent.
            </p>
          </div>
        </div>
      </section>
        
    );
  }
