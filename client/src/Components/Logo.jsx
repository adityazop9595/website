import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/" className="flex items-center">
      <span className="text-cyan-500 font-Poppins   sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
        Fushion.
      </span>
      <span className="text-purple-400 font-Alfa-Slab-One font-light text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
        tech.
      </span>
    </Link>
  );
}
