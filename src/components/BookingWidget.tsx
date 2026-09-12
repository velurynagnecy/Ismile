'use client';

import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, User, Phone, CheckCircle2, MessageCircle, AlertCircle, Sparkles } from 'lucide-react';
import { CLINIC_DATA } from '@/lib/clinic-data';

export default function BookingWidget() {
  const [selectedService, setSelectedService] = useState('Single-Sitting Painless Root Canal (RCT)');
  const [selectedDoctor, setSelectedDoctor] = useState('First Available Specialist');
  const [appointmentDate, setAppointmentDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('11:00 AM');
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const timeSlots = [
    { label: "Morning", slots: ["09:30 AM", "10:30 AM", "11:30 AM"] },
    { label: "Afternoon", slots: ["02:00 PM", "03:30 PM", "04:30 PM"] },
    { label: "Evening (Late Hours)", slots: ["06:00 PM", "07:30 PM", "08:30 PM", "09:15 PM"] }
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName || !patientPhone) {
      alert("Please enter your name and phone number so Dr. Logesh & Dr. Riya can confirm your slot.");
      return;
    }
    setIsSubmitted(true);
  };

  const generateWhatsAppUrl = () => {
    const message = `Hello iSMILE Dental Clinic!\n\nI would like to book an appointment:\n• Patient Name: ${patientName || "Patient"}\n• Phone: ${patientPhone || "Not provided"}\n• Treatment: ${selectedService}\n• Doctor: ${selectedDoctor}\n• Date: ${appointmentDate}\n• Preferred Time: ${selectedTimeSlot}\n• Note: ${notes || "None"}\n\nPlease confirm my slot. Thank you!`;
    return `https://wa.me/${CLINIC_DATA.whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="bg-white border border-gray-100 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-6 sm:p-10 font-sans">
      {!isSubmitted ? (
        <form onSubmit={handleBooking} className="space-y-6">
          <div className="border-b border-gray-100 pb-6 mb-2">
            <span className="text-xs font-semibold tracking-wider text-emerald-600 uppercase">
              Immediate Confirmation
            </span>
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mt-2 tracking-tight">
              Reserve Your Consultation Slot
            </h3>
            <p className="text-sm font-medium text-gray-500 mt-2 leading-relaxed">
              Open all 7 days (9:00 AM – 10:00 PM) at 216 Lenin St, Kuyavarpalayam. Zero wait time guarantee.
            </p>
          </div>

          {/* 1. Select Service */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              1. Select Treatment
            </label>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-shadow appearance-none"
            >
              {CLINIC_DATA.services.map((svc) => (
                <option key={svc.id} value={svc.name}>
                  {svc.name} ({svc.priceRange})
                </option>
              ))}
              <option value="Emergency Toothache / Trauma">Emergency Toothache / Trauma (Immediate Attention)</option>
              <option value="General Consultation & Second Opinion">General Consultation & Second Opinion (₹300 - ₹500)</option>
            </select>
          </div>

          {/* 2. Select Doctor */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-3">
              2. Preferred Specialist
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { name: "First Available Specialist", sub: "Fastest slot guarantee" },
                { name: "Dr. Logesh", sub: "Lead Endodontist" },
                { name: "Dr. Riya", sub: "Aesthetic Specialist" },
              ].map((doc) => (
                <button
                  type="button"
                  key={doc.name}
                  onClick={() => setSelectedDoctor(doc.name)}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    selectedDoctor === doc.name
                      ? 'bg-gray-900 text-white border-gray-900 shadow-md'
                      : 'bg-white text-gray-900 border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="text-sm font-semibold">{doc.name}</div>
                  <div className={`text-xs font-medium mt-1 ${selectedDoctor === doc.name ? 'text-gray-300' : 'text-gray-500'}`}>
                    {doc.sub}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* 3. Date & Time Selection */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                3. Appointment Date
              </label>
              <input
                type="date"
                min={new Date().toISOString().split('T')[0]}
                value={appointmentDate}
                onChange={(e) => setAppointmentDate(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-shadow"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Select Time Slot
              </label>
              <select
                value={selectedTimeSlot}
                onChange={(e) => setSelectedTimeSlot(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-shadow"
              >
                {timeSlots.map((group) => (
                  <optgroup key={group.label} label={group.label}>
                    {group.slots.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>
          </div>

          {/* 4. Patient Information */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Patient Full Name *
              </label>
              <input
                type="text"
                required
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                placeholder="e.g. Senthil Nathan"
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
                value={patientPhone}
                onChange={(e) => setPatientPhone(e.target.value)}
                placeholder="+91 98765 43210"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3.5 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-shadow"
              />
            </div>
          </div>

          <div className="pt-2">
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Any Symptoms or Specific Requests? (Optional)
            </label>
            <textarea
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. Tooth sensitivity while drinking cold water..."
              className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3.5 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-shadow resize-none"
            />
          </div>

          {/* Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <button
              type="submit"
              className="flex-1 bg-gray-900 hover:bg-black text-white font-semibold text-sm py-4 rounded-xl shadow-md transition-all text-center"
            >
              Continue to Confirm Slot
            </button>

            <a
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1DA851] text-white font-semibold text-sm py-4 px-8 rounded-xl shadow-md transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              1-Tap WhatsApp
            </a>
          </div>
        </form>
      ) : (
        /* Confirmation State */
        <div className="text-center py-10 space-y-8">
          <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-sm">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
              Slot Request Recorded
            </span>
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mt-4">
              Ready to Lock In With Dr. Logesh & Dr. Riya!
            </h3>
            <p className="text-sm font-medium text-gray-500 mt-3 max-w-md mx-auto leading-relaxed">
              Please tap below to send your pre-formatted appointment details directly to our front desk on WhatsApp for immediate confirmation.
            </p>
          </div>

          {/* Appointment Summary Box */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-left max-w-md mx-auto space-y-3 text-sm font-medium text-gray-900">
            <div className="flex justify-between border-b border-gray-200 pb-3">
              <span className="text-gray-500">Patient:</span>
              <span className="text-right">{patientName} ({patientPhone})</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-3">
              <span className="text-gray-500">Treatment:</span>
              <span className="text-right max-w-[60%]">{selectedService}</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-3">
              <span className="text-gray-500">Doctor:</span>
              <span className="text-right">{selectedDoctor}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Date & Time:</span>
              <span className="text-right">{appointmentDate} at {selectedTimeSlot}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto pt-2">
            <a
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1DA851] text-white font-semibold text-sm py-4 px-6 rounded-xl shadow-md transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              Confirm on WhatsApp
            </a>

            <a
              href={`tel:${CLINIC_DATA.rawPhone}`}
              className="flex-1 flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-900 font-semibold text-sm py-4 px-6 rounded-xl border border-gray-200 shadow-sm transition-all"
            >
              <Phone className="w-5 h-5 text-gray-400" />
              Call Reception
            </a>
          </div>

          <button
            onClick={() => setIsSubmitted(false)}
            className="text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors block mx-auto mt-6"
          >
            ← Modify Appointment Details
          </button>
        </div>
      )}
    </div>
  );
}
