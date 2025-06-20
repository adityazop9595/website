import React from 'react';
import { Link } from 'react-router-dom';
import { MdErrorOutline } from "react-icons/md";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 text-center">
      <div className="max-w-xl ">
        <MdErrorOutline className='text-red-600 text-7xl mx-auto'/>
        <h1 className="text-7xl md:text-7xl font-extrabold text-blue-600">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-4">Page Not Found</h2>
        <p className="text-gray-600 mt-2 mb-6">
          We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?


        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-[3px] shadow hover:bg-blue-700 transition"
        >
          Go Back Home
        </Link>
      </div>
 
    </div>
  );
}
