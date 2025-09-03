"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  MessageSquare,
  Building,
} from "lucide-react";
import { useTranslations } from "next-intl";
import CTASection from "@/components/custom-components/CtaSection";
import AnimatedSection from "@/components/custom-components/AnimatedSection";

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  subject: string;
  message: string;
}

interface ContactClientProps {
  locale: 'az' | 'en' | 'tr';
}

const ContactClient: React.FC<ContactClientProps> = ({ locale }) => {
  const t = useTranslations('contact');
  
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        subject: "",
        message: "",
      });

      setTimeout(() => setSubmitStatus("idle"), 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: t('info.phone'),
      details: ["+994 12 526 66 55", "+994 51 555 05 55"],
      color: "#ffe500",
    },
    {
      icon: Mail,
      title: t('info.email'),
      details: ["info@universalgroup.az"],
      color: "#ffe500",
    },
    {
      icon: MapPin,
      title: t('info.address'),
      details: [t('info.location')],
      color: "#ffe500",
    },
  ];

  const subjects = [
    t('subjects.general'),
    t('subjects.product'),
    t('subjects.service'),
    t('subjects.partnership'),
    t('subjects.support'),
    t('subjects.other'),
  ];

  return (
    <>
      {/* Combined Contact Info and Form Section */}
      <AnimatedSection id="section-three" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Info Cards - Left Side */}
            <div className="lg:w-1/3">
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <div className="flex items-center space-x-4">
                        <div
                          className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg flex-shrink-0"
                          style={{ backgroundColor: info.color }}
                        >
                          <IconComponent
                            className="w-7 h-7"
                            style={{ color: "#040404" }}
                          />
                        </div>
                        <div>
                          <h3
                            className="text-lg font-bold mb-2"
                            style={{ color: "#040404" }}
                          >
                            {info.title}
                          </h3>
                          <div className="space-y-1">
                            {info.details.map((detail, idx) => (
                              <p
                                key={idx}
                                className="text-sm"
                                style={{ color: "#040404", opacity: 0.8 }}
                              >
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Map Section */}
              <div className="mt-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-lg font-bold mb-4" style={{ color: "#040404" }}>
                    <MapPin className="inline w-5 h-5 mr-2" style={{ color: "#ffe500" }} />
                    {t('map.title')}
                  </h3>
                  <div className="rounded-xl overflow-hidden shadow-md">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194473.42287922!2d49.6932!3d40.4093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2sBaku%2C%20Azerbaijan!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Universal Group Location"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form - Right Side */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
                <div className="mb-8">
                  <h3
                    className="text-2xl md:text-3xl font-bold mb-4"
                    style={{ color: "#040404" }}
                  >
                    {t('form.title')}
                  </h3>
                  <p
                    className="text-base"
                    style={{ color: "#040404", opacity: 0.7 }}
                  >
                    {t('form.description')}
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold"
                        style={{ color: "#040404" }}
                      >
                        <User
                          className="inline w-4 h-4 mr-2"
                          style={{ color: "#ffe500" }}
                        />
                        {t('form.name')} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-yellow-400 focus:outline-none transition-colors duration-300"
                        style={{ color: "#040404" }}
                        placeholder={t('form.namePlaceholder')}
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold"
                        style={{ color: "#040404" }}
                      >
                        <Mail
                          className="inline w-4 h-4 mr-2"
                          style={{ color: "#ffe500" }}
                        />
                        {t('form.email')} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-yellow-400 focus:outline-none transition-colors duration-300"
                        style={{ color: "#040404" }}
                        placeholder={t('form.emailPlaceholder')}
                      />
                    </div>
                  </div>

                  {/* Company and Phone Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="company"
                        className="block text-sm font-semibold"
                        style={{ color: "#040404" }}
                      >
                        <Building
                          className="inline w-4 h-4 mr-2"
                          style={{ color: "#ffe500" }}
                        />
                        {t('form.company')}
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-yellow-400 focus:outline-none transition-colors duration-300"
                        style={{ color: "#040404" }}
                        placeholder={t('form.companyPlaceholder')}
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold"
                        style={{ color: "#040404" }}
                      >
                        <Phone
                          className="inline w-4 h-4 mr-2"
                          style={{ color: "#ffe500" }}
                        />
                        {t('form.phone')}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-yellow-400 focus:outline-none transition-colors duration-300"
                        style={{ color: "#040404" }}
                        placeholder={t('form.phonePlaceholder')}
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold"
                      style={{ color: "#040404" }}
                    >
                      <MessageSquare
                        className="inline w-4 h-4 mr-2"
                        style={{ color: "#ffe500" }}
                      />
                      {t('form.subject')} *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-yellow-400 focus:outline-none transition-colors duration-300"
                      style={{ color: "#040404" }}
                    >
                      <option value="">{t('form.subjectPlaceholder')}</option>
                      {subjects.map((subject, index) => (
                        <option key={index} value={subject}>
                          {subject}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold"
                      style={{ color: "#040404" }}
                    >
                      <MessageSquare
                        className="inline w-4 h-4 mr-2"
                        style={{ color: "#ffe500" }}
                      />
                      {t('form.message')} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-yellow-400 focus:outline-none transition-colors duration-300 resize-vertical"
                      style={{ color: "#040404" }}
                      placeholder={t('form.messagePlaceholder')}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-center pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3"
                      style={{
                        backgroundColor: isSubmitting ? "#ccc" : "#ffe500",
                        color: "#040404",
                      }}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-gray-600 border-t-transparent rounded-full animate-spin" />
                          {t('form.submitting')}
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                          {t('form.submit')}
                        </>
                      )}
                    </button>
                  </div>

                  {/* Success Message */}
                  {submitStatus === "success" && (
                    <div className="text-center p-4 bg-green-50 border border-green-200 rounded-xl">
                      <p className="text-green-700 font-semibold">
                        {t('form.successMessage')}
                      </p>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <CTASection />
    </>
  );
};

export default ContactClient;
