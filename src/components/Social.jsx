import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
const socialLinks = [
    { href: "https://facebook.com/yourprofile", icon: <FaFacebookF size={32} /> },
    { href: "https://twitter.com/yourprofile", icon: <FaTwitter size={32} /> },
    { href: "https://linkedin.com/in/yourprofile", icon: <FaLinkedinIn size={32} /> },
    { href: "https://instagram.com/yourprofile", icon: <FaInstagram size={32} /> }
  ];
const Social = () => {
    return (
        <div className="mt-15 ">
          <h2 className="text-3xl sm:text-2xl lg:text-2sm mt-6 tracking-wide bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
            Contact
            
          </h2>
          <div className="flex flex-wrap justify-center mt-12 space-x-6">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      );
};

export default Social;
