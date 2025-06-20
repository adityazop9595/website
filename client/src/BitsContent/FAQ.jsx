import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const faqs = [
  {
    question: "Do I need to pay 50% advance before starting the project?",
    answer:
      "Yes, we require a 50% advance payment to initiate any project. This helps us allocate resources and begin work promptly. The remaining 50% is payable upon completion.",
  },
  {
    question: "Can I customize the services as per my business goals?",
    answer:
      "Absolutely! Every business is unique. We offer tailored packages that align with your specific goals, whether it's branding, development, or marketing.",
  },
  {
    question: "What’s the typical turnaround time for a project?",
    answer:
      "Project timelines vary depending on scope. A basic website might take 1–2 weeks, while a full-scale application or marketing plan could span 3–6 weeks. Timelines are always shared upfront.",
  },
  {
    question: "Will I get updates during the project development?",
    answer:
      "Yes, we maintain full transparency. You'll receive regular updates, progress demos, and have direct communication with the project manager.",
  },
  {
    question: "How does Alivetor ensure confidentiality of my project?",
    answer:
      "We take privacy seriously. All project data, strategies, and documents remain confidential. NDAs are available upon request for additional assurance.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50   dark:bg-gray-900 text-gray-800 dark:text-white py-20 px-6 md:px-16 ">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-600 dark:text-blue-400 mb-12">
          Frequently Asked Questions
        </h1>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
             <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: 'easeOut' }}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md overflow-hidden"
            >
            <div
              key={index}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center py-4 px-6 text-left focus:outline-none"
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                <svg
                  className={`w-6 h-6 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action at bottom */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Still have questions? Our team is here to help you 24/7.
          </p>
          <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl transition-all">
            Contact Support
          </Link>
        </div>
      </div>
    </section>
  );
}
