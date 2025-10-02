"use client";

import React, { useState } from "react";
import { X, Share2, User, Mail, Phone, Target, FileText } from "lucide-react";

interface ApplicationFormData {
  fullName: string;
  email: string;
  phone: string;
  mission: string;
  otherInformation: string;
}

const ApplicationModal = () => {
  const [formData, setFormData] = useState<ApplicationFormData>({
    fullName: "",
    email: "",
    phone: "",
    mission: "",
    otherInformation: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Here you would typically send the data to your backend
    console.log('Application submitted:', formData);
    
    // Reset form and close modal
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      mission: "",
      otherInformation: ""
    });
    setIsSubmitting(false);
    
    const modal = document.getElementById('application-modal') as HTMLElement;
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
    
    // Show success message (you can implement a toast notification here)
    alert('Müraciətiniz uğurla göndərildi!');
  };

  const handleCancel = () => {
    const modal = document.getElementById('application-modal') as HTMLElement;
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  };

  return (
    <div id="application-modal" className="w-full h-full fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm hidden">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-2xl p-6 animate-modal-enter">
        {/* Modal Header */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900">İş Müraciəti</h3>
          <button
            onClick={handleCancel}
            className="btn btn-sm btn-circle btn-ghost hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <User className="w-4 h-4" />
              Ad və Soyad *
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffe500] focus:border-transparent transition-all duration-200"
              placeholder="Ad və soyadınızı daxil edin"
            />
          </div>

          {/* Email */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <Mail className="w-4 h-4" />
              E-poçt *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffe500] focus:border-transparent transition-all duration-200"
              placeholder="E-poçt ünvanınızı daxil edin"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <Phone className="w-4 h-4" />
              Telefon *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffe500] focus:border-transparent transition-all duration-200"
              placeholder="Telefon nömrənizi daxil edin"
            />
          </div>

          {/* Mission */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <Target className="w-4 h-4" />
              Hansı vəzifə üçün müraciət edirsiniz? *
            </label>
            <input
              type="text"
              name="mission"
              value={formData.mission}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffe500] focus:border-transparent transition-all duration-200"
              placeholder="Vəzifə adını daxil edin"
            />
          </div>

          {/* Other Information */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <FileText className="w-4 h-4" />
              Əlavə məlumat
            </label>
            <textarea
              name="otherInformation"
              value={formData.otherInformation}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffe500] focus:border-transparent transition-all duration-200 resize-none"
              placeholder="Özünüz haqqında əlavə məlumat, təcrübə və ya digər qeydlər"
            />
          </div>

          {/* Form Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center justify-center gap-2 bg-[#ffe500] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#e6cf00] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex-1"
            >
              <Share2 className="w-5 h-5" />
              {isSubmitting ? 'Göndərilir...' : 'Göndər'}
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 flex-1"
            >
              <X className="w-5 h-5" />
              Ləğv et
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicationModal;