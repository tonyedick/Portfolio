import React from "react";
import {FaTwitter} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";
import {FaGoogle} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";

export default function Footer() {
    return (
      <section id="footer">
        <div className="container px-5 py-10 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
              Follow me on Social Media
            </h1>
            <a href="https://www.twitter.com/dick_teejay" className="twitter social">
              <FaTwitter className="w-10 inline-block mb-4" /></a>
            <a href="https://www.facebook.com/dick.teejay" className="facebook social">
              <FaFacebook className="w-10 inline-block mb-4" /></a>
            <a href="https://www.gmail.com/djoeton" className="gmail social">
              <FaGoogle className="w-10 inline-block mb-4" /></a>
            <a href="https://www.linkedin.com/in/dicktonye" className="linkedin social">
              <FaLinkedin className="w-10 inline-block mb-4" /></a>
            <a href="https://www.github.com/dicktonye" className="github social">
              <FaGithub className="w-10 inline-block mb-4" /></a>
          </div>
        </div>
       </section>
);
}    
