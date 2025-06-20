import { Link, useLocation } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';

const WhichPageSection = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  if (pathSegments.length === 0) return null;

  const currentPage = pathSegments[pathSegments.length - 1];
  const pageTitle = currentPage
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <section className="relative bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white py-20 px-6 overflow-hidden">
      {/* Pattern Overlay */}
      <div
        className="absolute inset-0 bg-[url('/pattern.svg')] bg-cover bg-center opacity-10 pointer-events-none"
        aria-hidden="true"
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <p className="uppercase tracking-widest text-sm text-blue-400 mb-3">You’re viewing</p>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">{pageTitle}</h1>

        {/* Breadcrumb */}
        <div className="flex justify-center items-center text-sm text-gray-400 space-x-2">
          <Link to="/" className="hover:text-blue-400 transition font-medium">
            Home
          </Link>
          <FaChevronRight className="text-xs" />
          <span className="text-gray-300">{pageTitle}</span>
        </div>
      </div>
    </section>
  );
};

export default WhichPageSection;
