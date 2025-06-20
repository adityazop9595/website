import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaCheckCircle,
  FaBolt,
  FaShieldAlt,
  FaChartLine,
  FaMoneyBillWave,
} from 'react-icons/fa';
import { io } from 'socket.io-client';
import WhichPageSection from '../Components/WhichPageSection';
import { useGlobalcontext } from '../js/context';

const socket = io('http://localhost:5000');

export default function ServicesPage() {
  const [error, setError] = useState(null);
const {Backend}=useGlobalcontext();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true); // ✅ NEW
  const navigate = useNavigate();

 async function getServices() {
  try {
    setLoading(true);
    setError(null); // clear previous errors
    const res = await fetch(`${Backend}/api/services`);
    const data = await res.json();
    if (data.statusCode === 200 && data.status==="ok") {
      setServices(data.services);
      setLoading(false)
    } else {
      // throw new Error('Invalid response from server');
      // setError(true)
    }
  } catch (err) {
    // console.error('Error fetching services:', err);
    setError("We're having trouble fetching services. Please try again later.");
    setLoading(true)
  } finally {
    
    setLoading(false);
  }
}

  useEffect(() => {
    getServices();
    socket.on('servicesUpdated', () => {
      console.log('🔁 Services updated from server');
      getServices();
    });
    return () => {
      socket.off('servicesUpdated');
    };
  }, []);

  function handleRequestService(serviceTitle,serviceDescription) {
    navigate(`/pricing?service=${encodeURIComponent(serviceTitle)}`,{
        state: {
      // title: serviceTitle,
      description: serviceDescription,
    },
    });
  }

  return (
    <>
    <WhichPageSection/>

      <main className="bg-white text-gray-800 font-sans">
        <section className="py-20 px-4 md:px-10">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Services that we Provide
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto mb-12">
              We specialize in tailored digital and IT solutions designed to help your business scale securely and efficiently.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
             {loading ? (
    [...Array(3)].map((_, i) => (
      <div key={i} className="animate-pulse bg-white border border-gray-200 rounded-xl shadow p-4">
        <div className="w-full h-40 bg-gray-200 rounded mb-4" />
        <div className="h-4 w-2/3 bg-gray-300 rounded mb-2" />
        <div className="h-3 w-full bg-gray-200 rounded mb-1" />
        <div className="h-3 w-5/6 bg-gray-200 rounded mb-4" />
        <div className="h-6 w-24 bg-gray-300 rounded" />
      </div>
    ))
  ) : error ? (
    <div className="col-span-full text-center text-red-600">
      <p className="mb-4">{error}</p>
      <button
        onClick={getServices}
        className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition"
      >
        Retry
      </button>
    </div>
  )    : services?.map((service, index) => (
                    <div
                      key={index}
                      className="relative bg-white border border-gray-200 rounded-[5px] overflow-hidden shadow hover:shadow-md transition text-left"
                    >
                      <div className="w-full aspect-[6/3] overflow-hidden">
                        <img
                          src={`${Backend}${service.image}`}
                          alt={service.title}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-xl font-semibold mb-2 text-gray-800 font-Poppins">{service.title}</h3>
                        <p className="text-sm text-gray-600 mb-3">{service.description.substring(0,150)}...</p>
                      <button
  onClick={() => handleRequestService(service.title,service.description)}
  className="inline-flex items-center gap-2 text-sm font-medium text-shadow-white bg-blue-100 border border-blue-500
   hover:text-white hover:bg-blue-700 transition-all duration-300 px-4 py-1 rounded-full shadow-md hover:shadow-lg
   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 font-Inter"
  // aria-label={`View pricing for ${service.title}`}
>
  View Pricing <span className="text-base">→</span>
</button>

                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </section>
      </main>

      {/* Divider */}
      <div className="w-full flex justify-center my-12">
        <div className="h-1 w-32 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-md"></div>
      </div>

      {/* About Section */}
      <section className="bg-white py-20 px-4 sm:px-8 md:px-16 text-gray-900">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            Transform Your Digital <br className="hidden md:block" /> Presence
          </h2>
        </div>

        {/* Top Row */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img
              src="https://images.pexels.com/photos/6476256/pexels-photo-6476256.jpeg"
              alt="Whiteboard planning"
              loading="lazy"
              className="rounded-xl w-full max-w-md sm:max-w-lg object-cover shadow-lg"
            />
          </div>

          <div className="text-left">
            <p className="text-gray-700 text-sm sm:text-base md:text-lg font-medium mb-4">
              We believe that exceptional customer service is the key to building long-lasting relationships with our clients.
            </p>
            <p className="text-gray-600 text-sm sm:text-base mb-8">
              Our focus on innovation and creativity sets us apart from other web design studios. We approach every project with a fresh perspective, working collaboratively with our clients to develop unique solutions that reflect their brand and vision.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-gray-700">
              <Feature
                icon={<FaBolt className="text-purple-600 text-xl mt-1" />}
                title="Improved Functionality"
                desc="Maintain financial stability and avoid unexpected expenses."
              />
              <Feature
                icon={<FaChartLine className="text-purple-600 text-xl mt-1" />}
                title="Competitive Advantage"
                desc="Increase revenue and gain market edge."
              />
              <Feature
                icon={<FaShieldAlt className="text-purple-600 text-xl mt-1" />}
                title="Increased Reliability"
                desc="Optimize resources for long-term growth."
              />
              <Feature
                icon={<FaMoneyBillWave className="text-purple-600 text-xl mt-1" />}
                title="Predictable Spending"
                desc="Improve efficiency and control costs."
              />
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-24">
          <div className="text-left">
            <p className="text-gray-800 text-base sm:text-lg font-semibold mb-4">
              At Fushion Tech, we build more than just websites — we create interactive digital experiences that keep your customers connected and your brand thriving.
            </p>
            <p className="text-gray-600 text-sm sm:text-base mb-6">
              At the intersection of creativity and technology, we build solutions that do more than function — they resonate. Our team works hand-in-hand with you to turn vision into value.
            </p>

            <ul className="space-y-3 text-sm text-gray-700">
              {[
                'Keep your customers in the loop with live chat',
                'Customers never have to leave the page to find an answer',
                'Embed help articles right on your website',
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-2">
                  <FaCheckCircle className="text-purple-600" />
                  {text}
                </li>
              ))}
            </ul>

            <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all text-sm sm:text-base">
              Schedule Free Consultation
            </button>
          </div>

          <div className="flex justify-center">
            <img
              src="https://images.pexels.com/photos/8867439/pexels-photo-8867439.jpeg"
              alt="Support agent"
              loading="lazy"
              className="rounded-xl w-full max-w-md sm:max-w-lg object-cover shadow-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
}

const Feature = ({ icon, title, desc }) => (
  <div className="flex items-start gap-3">
    {icon}
    <div>
      <h4 className="font-semibold">{title}</h4>
      <p>{desc}</p>
    </div>
  </div>
);
