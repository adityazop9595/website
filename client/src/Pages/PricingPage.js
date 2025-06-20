// PricingPage.jsx
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PricingCard from '../Components/PricingCard';

import { useLocation } from 'react-router-dom';
import WhichPageSection from '../Components/WhichPageSection';
export default function PricingPage() {
  const [searchParams] = useSearchParams();
  const serviceName = searchParams.get('service');
  const [pricingData, setPricingData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedCardIndex, setExpandedCardIndex] = useState(null); // 👈 Track which card is open

const location = useLocation();
const { title, description } = location.state || {};
  useEffect(() => {
    const fetchPricing = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `http://localhost:5000/api/pricing?service=${encodeURIComponent(serviceName)}`
        );
        const data = await res.json();
       setPricingData(data);
        setError(null);
      } catch (err) {
        setError('Something went wrong');
        setPricingData([]);
      } finally {
        setLoading(false);
      }
    };

    if (serviceName) fetchPricing();
  }, [serviceName]);

  return (
<>
    <WhichPageSection/>

    <section className="py-20 px-6 bg-white text-center">



 <div className="max-w-3xl mx-auto mb-10 px-4">
  <p className="text-xs sm:text-sm tracking-wider text-gray-500 uppercase mb-2">
    Pricing Plans
  </p>

  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 ">
    {serviceName ? (
      <>
        Plans Designed for <span className="text-blue-600 font-Poppins">{serviceName}</span>
      </>
    ) : (
      'Choose a Plan That Works for You'
    )}
  </h2>

  <p className="mt-3 text-sm sm:text-base text-gray-600 font-bold">
    Select the right plan to scale confidently — flexible pricing to match your goals and growth.
  </p>
  {description && (
  <p className="text-gray-600 mt-2 max-w-xl mx-auto font-Poppins text-[14px]">
    {description}
  </p>
)}
</div>

      {/* <p className="text-sm text-gray-500 uppercase mb-10"></p> */}

      {loading && <p className="text-gray-600">Loading pricing plans...</p>}
      {error && <p className="text-red-600">{error}</p>}

      {!loading && !error && pricingData.length > 0 && (
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {pricingData.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.PlanType}
              price={plan.Price}
              description={plan.SuitableFor}
              features={plan.FeaturesList.map(f => f.feature)}
              dark={index === 1}
              index={index}
              Duration={plan.Duration}
              // isExpanded={expandedCardIndex === index}
              // onToggle={() => setExpandedCardIndex(prev => (prev === index ? null : index))}
            />
          ))}
        </div>
      )}
    </section>
    </>
  );
}
