import React from "react";
import { FaPencil, FaEnvelope, FaEraser, FaDownload } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start border-top border-secondary mt-3 shadow">
        
      <div className="text-center p-3">
            <h5 className=" ">
              {<FaPencil />}
              <span className='px-2'>Email Templates</span>
            </h5>
            <p>
              Your one-stop solution for your email template creation.
            </p>
          </div>
      <div className="text-center p-3 bg-dark text-white">
        © 2025 Made by 
        <a href="" className="text-info mx-2 fs-5  text-decoration-none">Anurag Vishwakarma</a>
      </div>
    </footer>
  );
};

export default Footer;
