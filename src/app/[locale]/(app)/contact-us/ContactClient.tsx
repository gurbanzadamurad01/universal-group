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
  Globe,
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
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Form submission simulation
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", company: "", phone: "", subject: "", message: "" });
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
      details: ["info@universal-az.com"],
      color: "#ffe500",
    },
    {
      icon: Globe,
      title: "Web",
      details: ["www.universal-az.com"],
      color: "#ffe500",
    },
    {
      icon: MapPin,
      title: t('info.address'),
      details: [
        "A.A Bakikhanov ave 3. Hyatt Regency",
        "Hyatt Tower 1, 2nd floor"
      ],
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
      <AnimatedSection id="contact-section" className="py-20 bg-white">
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
                      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                    >
                      <div className="flex items-start space-x-4">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center shadow-md flex-shrink-0"
                          style={{ backgroundColor: info.color }}
                        >
                          <IconComponent className="w-6 h-6 text-[#040404]" />
                        </div>
                        <div>
                          <h3 className="text-md font-bold mb-1 text-[#040404]">
                            {info.title}
                          </h3>
                          <div className="space-y-0.5">
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-sm text-[#040404] opacity-80">
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
                <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-50">
                  <h3 className="text-lg font-bold mb-4 text-[#040404] flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-[#ffe500]" />
                    {t('map.title')}
                  </h3>
                  <div className="rounded-xl overflow-hidden shadow-inner grayscale hover:grayscale-0 transition-all duration-500">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.232976722238!2d49.821957076474144!3d40.3815593577884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d90e213380b%3A0x673d3f9f5926c04d!2sHyatt%20Regency%20Baku!5e0!3m2!1sen!2saz!4v1714123456789!5m2!1sen!2saz"
                      width="100%"
                      height="250"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Universal Group Hyatt Regency Location"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form - Right Side */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-50 relative overflow-hidden">
                {/* Dekorativ element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffe500] opacity-10 rounded-bl-full -mr-16 -mt-16"></div>

                <div className="mb-10 relative">
                  <h3 className="text-2xl md:text-4xl font-bold mb-4 text-[#040404]">
                    {t('form.title')}
                  </h3>
                  <p className="text-gray-500 max-w-lg">
                    {t('form.description')}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 relative">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[#040404] flex items-center">
                        <User className="w-4 h-4 mr-2 text-[#ffe500]" />
                        {t('form.name')} *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#ffe500] focus:ring-2 focus:ring-[#ffe500]/20 outline-none transition-all"
                        placeholder={t('form.namePlaceholder')}
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[#040404] flex items-center">
                        <Mail className="w-4 h-4 mr-2 text-[#ffe500]" />
                        {t('form.email')} *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#ffe500] focus:ring-2 focus:ring-[#ffe500]/20 outline-none transition-all"
                        placeholder={t('form.emailPlaceholder')}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[#040404] flex items-center">
                        <Building className="w-4 h-4 mr-2 text-[#ffe500]" />
                        {t('form.company')}
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#ffe500] focus:ring-2 focus:ring-[#ffe500]/20 outline-none transition-all"
                        placeholder={t('form.companyPlaceholder')}
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[#040404] flex items-center">
                        <Phone className="w-4 h-4 mr-2 text-[#ffe500]" />
                        {t('form.phone')}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#ffe500] focus:ring-2 focus:ring-[#ffe500]/20 outline-none transition-all"
                        placeholder={t('form.phonePlaceholder')}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#040404] flex items-center">
                      <MessageSquare className="w-4 h-4 mr-2 text-[#ffe500]" />
                      {t('form.subject')} *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#ffe500] focus:ring-2 focus:ring-[#ffe500]/20 outline-none transition-all appearance-none bg-white"
                    >
                      <option value="">{t('form.subjectPlaceholder')}</option>
                      {subjects.map((subject, index) => (
                        <option key={index} value={subject}>{subject}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#040404] flex items-center">
                      <MessageSquare className="w-4 h-4 mr-2 text-[#ffe500]" />
                      {t('form.message')} *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#ffe500] focus:ring-2 focus:ring-[#ffe500]/20 outline-none transition-all resize-none"
                      placeholder={t('form.messagePlaceholder')}
                    />
                  </div>

                  <div className="flex justify-end pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group bg-[#ffe500] text-[#040404] px-10 py-4 rounded-2xl font-bold text-lg transition-all hover:shadow-[0_10px_20px_rgba(255,229,0,0.3)] hover:-translate-y-1 disabled:opacity-50 flex items-center gap-3"
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-3 border-[#040404] border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          {t('form.submit')}
                        </>
                      )}
                    </button>
                  </div>

                  {submitStatus === "success" && (
                    <div className="mt-4 p-4 bg-green-50 text-green-700 border border-green-200 rounded-xl text-center font-bold animate-bounce">
                      {t('form.successMessage')}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <CTASection locale={locale} />
    </>
  );
};

export default ContactClient;