import React, { useRef, useState } from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/Animation - 1749999244473.json';
// import badWords from '../js/AbuseWordList';
import { ThreeDots } from 'react-loader-spinner';
import { motion, AnimatePresence } from 'framer-motion';
import {
  validateEmail,
  validateMessage,
  validateName,
  validatePhoneNo,
  isAbusive,
} from '../features/Utiles/Validator';
import WhichPageSection from '../Components/WhichPageSection';
import { useGlobalcontext } from '../js/context';

export default function Contact() {
  const {Backend}=useGlobalcontext();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const formRef = useRef();
  const [errors, setErrors] = useState({});
  const [submitMessage, setSubmitMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = (formData) => {
    const newErrors = {};

    const nameError = validateName(formData.name);
    if (nameError) newErrors.name = nameError;

    const emailError = validateEmail(formData.email);
    if (emailError) newErrors.email = emailError;

    const phoneError = validatePhoneNo(formData.phone);
    if (phoneError) newErrors.phone = phoneError;

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required.';
    } else if (isAbusive(formData.subject)) {
      newErrors.subject = 'Inappropriate language detected.';
    }

    const messageError = validateMessage(formData.message);
    if (messageError) newErrors.message = messageError;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmedFormData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      subject: formData.subject.trim(),
      message: formData.message.trim(),
    };

    if (!validate(trimmedFormData)) return;

    setLoading(true);

    try {
      const response = await fetch(`${Backend}/send-mail`, {
        method: 'POST',
        body: JSON.stringify(trimmedFormData),
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await response.json();

      if (response.ok && data.statusCode === 200) {
        setSubmitMessage({ type: 'success', text: 'Message sent successfully!' });
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        formRef.current.reset();
      } else {
        setSubmitMessage({ type: 'error', text: data.message || 'Failed to send message.' });
      }
    } catch (error) {
      setSubmitMessage({ type: 'error', text: 'Something went wrong. Please try again.' });
    } finally {
      setLoading(false);
      setTimeout(() => setSubmitMessage(null), 3000);
    }
  };

  return (
    <>
    <WhichPageSection/>
    <main className="bg-white min-h-[90vh] py-12 px-4 flex items-center relative">
      <AnimatePresence>
        {submitMessage && (
          <motion.div
            key="popup"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded shadow-md text-sm font-medium ${
              submitMessage.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
            }`}
          >
            {submitMessage.text}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center lg:justify-start">
          <div className="w-full max-w-md md:max-w-lg">
            <Lottie animationData={animationData} loop />
          </div>
        </div>

        <div className="w-full">
          <span className="inline-block mb-4 px-4 py-1 bg-blue-50 text-blue-700 border border-blue-600 rounded-full text-sm font-semibold tracking-wide">
            Contact
          </span>

          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            Have a Question? <br className="hidden sm:block" /> Get in Touch with Us
          </h1>

          <p className="text-gray-600 mb-6 text-base md:text-lg">
            Our team is here to help. Fill out the form and we’ll get back to you shortly.
          </p>

          <form className="space-y-6" onSubmit={handleSubmit} ref={formRef}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={`w-full border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className={`w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
            </div>

            <div>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className={`w-full border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm`}
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>

            <div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className={`w-full border ${errors.subject ? 'border-red-500' : 'border-gray-300'} rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm`}
              />
              {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
            </div>

            <div>
              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className={`w-full border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-none`}
              ></textarea>
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full sm:w-auto px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                loading ? 'bg-blue-400 cursor-not-allowed text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <ThreeDots height="20" width="60" radius="9" color="#ffffff" ariaLabel="three-dots-loading" visible={true} />
                </div>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </div>
    </main>
    </>
  );
}
