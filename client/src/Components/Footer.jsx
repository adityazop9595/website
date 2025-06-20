import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import { IoChatboxOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => {
  const email = import.meta.env.VITE_EMAIL;
  const phone = import.meta.env.VITE_PHONE_NO;

  return (
    <footer className="bg-[#0f0f0f] text-white pt-16 pb-8 px-6 md:px-12 lg:px-20 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-700 pb-12">
        {/* Column 1 - Brand + Social */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <div className="bg-white w-8 h-8 rounded-full" />
            <Logo/>
            
          </div>
          <p className="text-gray-400 leading-relaxed">
            We blend creativity and code to deliver digital experiences that grow brands and engage audiences.
          </p>
          <div className="flex space-x-4 text-lg">
            {/* <FaTwitter className="hover:text-[#1DA1F2] transition" /> */}
            <FaFacebookF className="hover:text-[#4267B2] transition" />
            {/* <FaPinterestP className="hover:text-[#E60023] transition" /> */}
            <Link to="https://www.instagram.com/fushion_tech"target="_blank">
            <FaLinkedinIn className="hover:text-[#0077B5] transition" />
            </Link>
          </div>
        </div>

        {/* Column 2 - Contact Info */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold mb-4 text-white">Get in Touch</h4>
          <div className="flex items-start space-x-3">
            <IoChatboxOutline className="text-xl text-orange-400 mt-1" />
            <div>
              <p className="text-white font-medium">+91 {phone}</p>
              <p className="text-gray-400">{email}</p>
            </div>
          </div>
        </div>

        {/* Column 3 - Useful Links */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/services" className="hover:text-white">Services</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><span className="hover:text-white cursor-pointer">SEO Optimization</span></li>
              <li><span className="hover:text-white cursor-pointer">Social Media Management</span></li>
              <li><span className="hover:text-white cursor-pointer">Website Development</span></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 text-center text-gray-500 text-xs">
        © {new Date().getFullYear()} — Fushion Tech. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
