import React from "react";
import ContactForm from "./ContactForm";

const Footer = () => {
  return (
    <footer className="footer">
      <ContactForm/>
      <div className="copyright text-white font-normal flex items-center justify-center bg-black p-5 mt-6   ">
      Copyright 2022 All Right Reserved By SG
      </div>
    </footer>
  );
};

export default Footer;
