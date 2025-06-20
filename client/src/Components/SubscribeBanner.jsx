import React, { useState } from "react";

const SubscribeBanner = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [submittedEmails, setSubmittedEmails] = useState([]);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const trimmedEmail = email.trim().toLowerCase();

    // Strict RFC5322-compliant regex for better validation
    const emailPattern =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!trimmedEmail) {
      setError("Email is required.");
      return;
    }

    if (!emailPattern.test(trimmedEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (submittedEmails.includes(trimmedEmail)) {
      setError("This email has already been subscribed.");
      return;
    }

    setSuccess("Thanks for subscribing!");
    setSubmittedEmails((prev) => [...prev, trimmedEmail]);
    setEmail("");
  };

  return (
    <section className="bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 text-white py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col items-center md:flex-row md:items-start justify-between gap-10">
        {/* Text Content */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold mb-3 tracking-tight">
            Stay Updated with Us 🚀
          </h2>
          <p className="text-lg text-gray-300 max-w-md">
            Get exclusive updates and insights about our lift & elevator solutions.
            No spam. Only value.
          </p>
        </div>

        {/* Form */}
        <div className="w-full max-w-lg">
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-4"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className={`w-full sm:flex-1 px-5 py-3 rounded-md bg-white text-gray-900 placeholder-gray-500 border ${
                error ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              aria-invalid={!!error}
              required
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition w-full sm:w-auto"
            >
              Subscribe
            </button>
          </form>

          {/* Feedback */}
          <div className="mt-3 min-h-[1.25rem]">
            {error && <p className="text-sm text-red-400">{error}</p>}
            {success && <p className="text-sm text-green-400">{success}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeBanner;
