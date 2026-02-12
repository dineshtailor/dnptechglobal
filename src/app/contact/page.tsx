"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock, Globe } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit form");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative gradient-bg text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-300 rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm font-medium">
            Get in Touch
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delay-1">
            Let&apos;s discuss how we can help transform your business with our telecom, cloud, and DevOps expertise
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 80L60 70C120 60 240 40 360 35C480 30 600 40 720 45C840 50 960 50 1080 45C1200 40 1320 30 1380 25L1440 20V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <span className="text-cyan-600 font-semibold text-sm uppercase tracking-wider">Contact Details</span>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 mt-2">Get in Touch</h2>
              <div className="space-y-6">
                <div className="group flex items-start bg-gradient-to-br from-blue-50 to-white p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 hover:-translate-y-1">
                  <div className="gradient-bg p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform shadow-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Office Location</h3>
                    <p className="text-gray-600 mt-1">Navi Mumbai, Maharashtra, India</p>
                  </div>
                </div>

                <div className="group flex items-start bg-gradient-to-br from-cyan-50 to-white p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-cyan-100 hover:-translate-y-1">
                  <div className="gradient-bg p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform shadow-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Email</h3>
                    <p className="text-gray-600 mt-1">contact@dnptechnologies.com</p>
                  </div>
                </div>

                <div className="group flex items-start bg-gradient-to-br from-blue-50 to-white p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 hover:-translate-y-1">
                  <div className="gradient-bg p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform shadow-lg">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Phone</h3>
                    <p className="text-gray-600 mt-1">+91 XXXXX XXXXX</p>
                  </div>
                </div>

                <div className="group flex items-start bg-gradient-to-br from-cyan-50 to-white p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-cyan-100 hover:-translate-y-1">
                  <div className="gradient-bg p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform shadow-lg">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Business Hours</h3>
                    <p className="text-gray-600 mt-1">Mon - Fri: 9:00 AM - 6:00 PM IST</p>
                  </div>
                </div>

                <div className="group flex items-start bg-gradient-to-br from-blue-50 to-white p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 hover:-translate-y-1">
                  <div className="gradient-bg p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform shadow-lg">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Service Areas</h3>
                    <p className="text-gray-600 mt-1">India, USA, Middle East, Southeast Asia</p>
                  </div>
                </div>
              </div>

              {/* Quick Info */}
              <div className="mt-8 bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-xl border border-gray-100">
                <h3 className="font-bold text-gray-900 text-xl mb-6">Engagement Models</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center"><span className="text-cyan-500 mr-3 text-xl">•</span> Fixed Price Projects</li>
                  <li className="flex items-center"><span className="text-cyan-500 mr-3 text-xl">•</span> Time & Material (T&M)</li>
                  <li className="flex items-center"><span className="text-cyan-500 mr-3 text-xl">•</span> Monthly Retainer</li>
                  <li className="flex items-center"><span className="text-cyan-500 mr-3 text-xl">•</span> Dedicated Team</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-white to-gray-50 p-10 rounded-3xl shadow-2xl border border-gray-100">
                <span className="text-cyan-600 font-semibold text-sm uppercase tracking-wider">Send a Message</span>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 mt-2">Let's Start a Conversation</h2>

                {error && (
                  <div className="mb-6 p-5 bg-red-50 border-2 border-red-200 text-red-700 rounded-2xl font-medium animate-fade-in-up">
                    {error}
                  </div>
                )}

                {submitted ? (
                  <div className="text-center py-16 animate-fade-in-up">
                    <div className="gradient-bg w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl animate-float">
                      <Send className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h3>
                    <p className="text-gray-600 text-lg">
                      We&apos;ve received your message and will get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300 bg-white shadow-sm hover:border-gray-300"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300 bg-white shadow-sm hover:border-gray-300"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-bold text-gray-900 mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300 bg-white shadow-sm hover:border-gray-300"
                          placeholder="Your company"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-bold text-gray-900 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300 bg-white shadow-sm hover:border-gray-300"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-bold text-gray-900 mb-2">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300 bg-white shadow-sm hover:border-gray-300"
                      >
                        <option value="">Select a service</option>
                        <option value="telecom">Telecom Solutions</option>
                        <option value="integration">Solution Integration</option>
                        <option value="cloud">Cloud Services</option>
                        <option value="devops">DevOps Services</option>
                        <option value="software">Software Development</option>
                        <option value="consulting">IT Consulting</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-bold text-gray-900 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300 bg-white shadow-sm hover:border-gray-300 resize-none"
                        placeholder="Tell us about your project or requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group w-full gradient-bg text-white py-5 px-8 rounded-xl font-bold hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-lg shadow-xl hover:scale-105"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
