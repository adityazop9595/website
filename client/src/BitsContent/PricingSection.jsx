import React from "react";
import PricingCard from "../Components/PricingCard";

const PricingSection = () => {
  return (
    <section className="py-20 px-6 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Choose a plan that works for you
      </h2>
      <p className="text-sm text-gray-500 uppercase mb-10">Yearly</p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <PricingCard
          title="Starter"
          price="9"
          description="Ea pro tibique comprehensam, sed ea verear numquam molestie. Nam te omittam comprehensam."
          features={[
            "3 Social Media Account",
            "Free Platform Access",
            "24/7 Customer Support",
          ]}
        />

        <PricingCard
          title="Business"
          price="29"
          description="Ea pro tibique comprehensam, sed ea verear numquam molestie. Nam te omittam comprehensam."
          features={[
            "3 Social Media Account",
            "Free Platform Access",
            "24/7 Customer Support",
          ]}
          dark
        />
      </div>
    </section>
  );
};

export default PricingSection;
