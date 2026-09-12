import React from 'react';
import { 
  Calendar as CalendarIcon, Clock, Phone, MessageCircle, 
  MapPin, ShieldCheck, Star, AlertCircle, CheckCircle2 
} from 'lucide-react';
import { CLINIC_DATA } from '@/lib/clinic-data';
import BookingWidget from '@/components/BookingWidget';

export const metadata = {
  title: "Book Dental Appointment Online | iSMILE Dental Clinic Puducherry",
  description: "Schedule your dental consultation with Dr. Logesh or Dr. Riya at iSMILE Dental Clinic. Open all 7 days from 9 AM to 10 PM. Phone: +91 73589 32267.",
};

export default function BookNowPage() {
  return (
    <div className="bg-white pb-24 font-sans text-gray-900">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="max-w-3xl space-y-6">
          <span className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-600 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
            Instant Appointment Reservation
          </span>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-gray-900 leading-[1.1]">
            Book Your Visit
          </h1>
          <p className="text-lg font-medium text-gray-500 leading-relaxed">
            Open all 7 days from <strong className="text-gray-900">9:00 AM to 10:00 PM</strong>. Reserve your preferred slot online, chat directly on WhatsApp, or call our desk at <strong className="text-gray-900">+91 73589 32267</strong> for immediate same-day attention.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Interactive Booking Widget */}
        <div className="lg:col-span-7 space-y-8">
          <div className="bg-gray-50 border border-gray-100 rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <BookingWidget />
          </div>

          {/* Google Calendar Availability / Sync Notice */}
          <div className="bg-[#E8F0F8] rounded-[2rem] p-8 shadow-sm space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm shrink-0">
                <CalendarIcon className="w-6 h-6 text-[#1a73e8]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Google Calendar Live Synchronization
                </h3>
                <p className="text-sm font-medium text-gray-600">
                  Appointments sync directly to Dr. Logesh and Dr. Riya&apos;s daily master schedule.
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-700 font-medium leading-relaxed bg-white/60 p-4 rounded-xl">
              Once you submit your slot preference, our reception team locks the reservation on our clinic calendar and sends you an instant confirmation reminder via WhatsApp or SMS.
            </p>

            <div className="pt-2 flex items-center gap-3 text-sm font-semibold text-emerald-700">
              <CheckCircle2 className="w-5 h-5" />
              <span>No pre-payment required to book standard consultations</span>
            </div>
          </div>
        </div>

        {/* Right Column: Direct Channels & Clinic Details */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Emergency Direct Call Card */}
          <div className="bg-red-50 rounded-[2rem] p-8 shadow-sm space-y-5">
            <div className="flex items-center gap-2 text-red-600 font-semibold text-xs uppercase tracking-widest">
              <AlertCircle className="w-4 h-4" /> Dental Emergency or Severe Pain?
            </div>
            <h3 className="text-2xl font-semibold leading-tight text-gray-900">
              Skip The Form — Call Reception Directly
            </h3>
            <p className="text-sm font-medium text-gray-700 leading-relaxed">
              Severe toothaches, swelling, or knocked-out teeth are treated immediately as walk-in emergencies with zero waiting room delay.
            </p>
            <a
              href={`tel:${CLINIC_DATA.rawPhone}`}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold text-sm py-4 rounded-xl shadow-md flex items-center justify-center gap-2 transition-all"
            >
              <Phone className="w-4 h-4" />
              Call Now: {CLINIC_DATA.phone}
            </a>
          </div>

          {/* WhatsApp Direct Chat Card */}
          <div className="bg-gray-900 text-white rounded-[2rem] p-8 shadow-lg space-y-5 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 z-0"></div>
            <div className="relative z-10 space-y-5">
              <div className="flex items-center gap-2 text-[#25D366] font-semibold text-xs uppercase tracking-widest">
                <MessageCircle className="w-4 h-4" /> Prefer Messaging?
              </div>
              <h3 className="text-2xl font-semibold leading-tight text-white">
                Instant WhatsApp Appointment Desk
              </h3>
              <p className="text-sm font-medium text-gray-300 leading-relaxed">
                Send us a quick WhatsApp message to check today&apos;s available slots with Dr. Logesh or Dr. Riya.
              </p>
              <a
                href={CLINIC_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white font-semibold text-sm py-4 rounded-xl shadow-md flex items-center justify-center gap-2 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp (+91 73589 32267)
              </a>
            </div>
          </div>

          {/* Clinic Hours & Location Info */}
          <div className="bg-white border border-gray-100 rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] space-y-5">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-500">
              Clinic Working Schedule
            </h3>
            
            <div className="space-y-3 text-sm text-gray-600 font-medium">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span>Monday – Friday:</span>
                <span className="font-semibold text-gray-900">9:00 AM – 10:00 PM</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span>Saturday:</span>
                <span className="font-semibold text-gray-900">9:00 AM – 10:00 PM</span>
              </div>
              <div className="flex justify-between py-2">
                <span>Sunday:</span>
                <span className="font-semibold text-gray-900">9:00 AM – 10:00 PM</span>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 text-sm font-medium text-gray-600 bg-gray-50 p-4 rounded-xl">
              <strong className="text-gray-900 block font-semibold mb-1">Physical Address:</strong>
              216, Lenin St, Kuyavarpalayam, Puducherry – 605013.
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
