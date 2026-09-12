'use client';

import React, { useState } from 'react';
import { 
  MapPin, Phone, MessageCircle, Clock, Mail, 
  Send, CheckCircle2, Navigation, AlertCircle 
} from 'lucide-react';
import { CLINIC_DATA } from '@/lib/clinic-data';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please fill in your name and contact phone number.");
      return;
    }
    setIsSent(true);
  };

  return (
    <div className="bg-white pb-24 font-sans text-gray-900">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="max-w-3xl space-y-6">
          <span className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-600 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
            Puducherry Practice Location
          </span>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-gray-900 leading-[1.1]">
            Contact & Directions
          </h1>
          <p className="text-lg font-medium text-gray-500 leading-relaxed">
            Centrally located on Lenin Street in Heritage Town. Open every single day from 6:30 PM to 9:30 PM. Walk-ins and scheduled appointments welcome.
          </p>
        </div>
      </div>

      {/* Main Grid: Details + Contact Form */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Direct Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="bg-gray-50 border border-gray-100 rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] space-y-6">
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
              Clinic Contact Information
            </h2>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <div className="bg-emerald-50 p-2.5 rounded-xl shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Physical Address</div>
                  <div className="text-sm font-semibold text-gray-900 mt-1.5 leading-relaxed">
                    1st Floor, No 58, Muthu Mariamman Kovil St, Heritage Town, Puducherry – 605013
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    Landmark: Near Heritage Town Main Junction
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <div className="bg-emerald-50 p-2.5 rounded-xl shrink-0 mt-0.5">
                  <Clock className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Working Hours</div>
                  <div className="text-sm font-semibold text-gray-900 mt-1.5">
                    Monday to Saturday: 9:00 AM – 9:30 PM
                  </div>
                  <div className="text-xs text-emerald-600 font-medium mt-1">
                    🟢 Evening slots available up to 9:30 PM
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <div className="bg-emerald-50 p-2.5 rounded-xl shrink-0 mt-0.5">
                  <Phone className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Telephone / Reception</div>
                  <a href={`tel:${CLINIC_DATA.rawPhone}`} className="text-sm font-semibold text-gray-900 hover:text-emerald-600 transition-colors block mt-1.5">
                    {CLINIC_DATA.phone}
                  </a>
                  <div className="text-xs text-gray-500 mt-1">
                    Instant phone triage for toothaches
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-col gap-3">
              <a
                href={CLINIC_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white font-semibold text-sm py-4 rounded-xl shadow-md flex items-center justify-center gap-2 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
              <a
                href="https://maps.google.com/?q=216+Lenin+St+Heritage Town+Puducherry+605013"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gray-900 hover:bg-black text-white font-semibold text-sm py-4 rounded-xl shadow-md flex items-center justify-center gap-2 transition-all"
              >
                <Navigation className="w-4 h-4 text-gray-300" />
                Open in Google Maps
              </a>
            </div>
          </div>

          {/* Parking & Transit Info */}
          <div className="bg-[#E8F0F8] rounded-[2rem] p-8 shadow-sm space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-widest">
              Arrival & Parking
            </h3>
            <div className="space-y-3 text-sm text-gray-700">
              <p className="leading-relaxed">
                <strong className="font-semibold text-gray-900">Two-Wheeler Parking:</strong> Dedicated parking bay right outside the clinic entrance.
              </p>
              <p className="leading-relaxed">
                <strong className="font-semibold text-gray-900">Car Parking:</strong> Easy street parking along Lenin Street with spacious road width.
              </p>
            </div>
          </div>

        </div>

        {/* Right Column: Contact Inquiry Form */}
        <div className="lg:col-span-7">
          <div className="bg-white border border-gray-100 rounded-[2rem] p-8 sm:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.06)] h-full">
            {!isSent ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-b border-gray-100 pb-6 mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                    Direct Reception Dispatch
                  </span>
                  <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mt-4">
                    Send Us a Message
                  </h2>
                  <p className="text-sm font-medium text-gray-500 mt-2">
                    Have questions about root canals, crowns, or insurance? Dr. Sandhosh and Dr. Sandhosh&apos;s team will get back to you within a few hours.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Senthil Kumar"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3.5 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-shadow"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3.5 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-shadow"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3.5 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-shadow"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Topic of Inquiry
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-shadow appearance-none"
                    >
                      <option value="General Inquiry">General Dental Inquiry</option>
                      <option value="Root Canal Consultation">Single-Sitting Root Canal</option>
                      <option value="Cosmetic / Veneers">Cosmetic Smile Makeover</option>
                      <option value="Implants Consultation">Dental Implants</option>
                      <option value="Pediatric Child Dentistry">Child & Family Dentistry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    How Can We Assist You? *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your dental symptoms or preferred appointment time..."
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3.5 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-shadow resize-none"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-gray-900 hover:bg-black text-white font-semibold text-sm py-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Submit Message to Front Desk
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-16 space-y-6 h-full flex flex-col justify-center">
                <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-semibold tracking-tight text-gray-900">
                  Message Sent Successfully!
                </h3>
                <p className="text-sm font-medium text-gray-500 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Our front desk has received your message. For immediate bookings, feel free to WhatsApp us directly at <strong>+91 87786 25635</strong>.
                </p>
                <div className="pt-6">
                  <button
                    onClick={() => {
                      setIsSent(false);
                      setFormData({ name: '', phone: '', email: '', subject: 'General Inquiry', message: '' });
                    }}
                    className="text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    ← Send Another Message
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>

      {/* Google Map Full Width Embed */}
      <section className="max-w-7xl mx-auto px-6 mt-20">
        <div className="bg-gray-50 border border-gray-100 rounded-[2rem] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <div className="mb-6 px-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
                Interactive Google Map: No 58, Muthu Mariamman Kovil St, Heritage Town
              </h2>
              <p className="text-sm font-medium text-gray-500 mt-1">
                Heritage Town, Puducherry, 605013
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=216+Lenin+St+Heritage Town+Puducherry+605013"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold bg-white hover:bg-gray-100 text-gray-900 px-5 py-3 rounded-xl border border-gray-200 shadow-sm transition-all whitespace-nowrap"
            >
              Open in Maps →
            </a>
          </div>

          <div className="w-full h-[450px] rounded-[1.5rem] overflow-hidden border border-gray-200 shadow-sm bg-gray-200">
            <iframe
              title="DIGISMILE Dental Clinic Lenin St Heritage Town Puducherry Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.654316982959!2d79.8166667!3d11.9333333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a53610b75a133f7%3A0x6b7fa0c73eefb2a8!2s216%2C%20Lenin%20St%2C%20Heritage Town%2C%20Puducherry%2C%20605013!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

    </div>
  );
}
