import React from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, Clock, MapPin, Award, CheckCircle2, 
  Phone, MessageCircle, Heart, Sparkles, UserCheck 
} from 'lucide-react';
import { CLINIC_DATA } from '@/lib/clinic-data';

export const metadata = {
  title: "About Dr. Sandhosh & Dr. Sandhosh | DIGISMILE Dental Clinic Puducherry",
  description: "Meet Dr. Sandhosh (Lead Endodontist) and Dr. Sandhosh (Aesthetic & Pediatric Dentist) at DIGISMILE Dental Clinic, No 58, Muthu Mariamman Kovil St, Heritage Town, Heritage Town, Puducherry. Open 7 days.",
};

export default function AboutPage() {
  return (
    <div className="bg-white pb-24 font-sans text-gray-900">
      
      {/* Minimalist Header */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="max-w-3xl space-y-6">
          <span className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-600 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
            Clinical Leadership & Philosophy
          </span>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-gray-900 leading-[1.1]">
            Meet Dr. Sandhosh & Dr. Sandhosh
          </h1>
          <p className="text-lg font-medium text-gray-500 leading-relaxed">
            <strong className="text-gray-900">DIGISMILE DENTAL CLINIC</strong> was established with a singular mission: to eliminate the fear of dental treatment through hospital-grade technology, precision painless anesthesia, and honest doctor-patient communication.
          </p>
        </div>
      </div>

      {/* CORE PRACTITIONERS DETAILED BIOS */}
      <section className="max-w-7xl mx-auto px-6 space-y-12">
        {CLINIC_DATA.doctors.map((doctor, index) => (
          <div
            key={doctor.name}
            className="bg-gray-50 border border-gray-100 rounded-[2rem] p-6 sm:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
          >
            <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
              <div className="relative rounded-3xl overflow-hidden shadow-md">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-[460px] object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-sm">
                  <div className="text-xs font-semibold text-emerald-600 uppercase tracking-wide">
                    {doctor.experience}
                  </div>
                  <div className="text-lg font-bold text-gray-900 mt-1">
                    {doctor.name}
                  </div>
                </div>
              </div>
            </div>

            <div className={`lg:col-span-7 space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
              <div className="inline-flex items-center gap-2 bg-white text-gray-700 px-4 py-2 rounded-full text-sm font-semibold shadow-sm border border-gray-100">
                {doctor.role}
              </div>

              <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight">
                {doctor.name}
              </h2>

              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
                {doctor.qualifications}
              </p>

              <p className="text-base font-medium text-gray-600 leading-relaxed">
                {doctor.bio}
              </p>

              <div className="bg-white border border-gray-200 p-5 rounded-2xl shadow-sm">
                <p className="text-sm font-medium text-gray-800 italic leading-relaxed">
                  "{doctor.quote}"
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-widest">
                  Clinical Focus Areas:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {doctor.specialties.map((spec, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm font-medium text-gray-600">
                      <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                      </div>
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/book"
                  className="bg-gray-900 hover:bg-black text-white font-semibold text-sm px-6 py-3.5 rounded-full transition-all shadow-md"
                >
                  Schedule With {doctor.name.split(' ')[1]}
                </Link>
                <a
                  href={`tel:${CLINIC_DATA.rawPhone}`}
                  className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 font-semibold text-sm px-6 py-3.5 rounded-full transition-all flex items-center gap-2 shadow-sm"
                >
                  <Phone className="w-4 h-4 text-gray-400" />
                  Call Clinic
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* WHY WE ARE Monday to Saturday TILL 10 PM */}
      <section className="max-w-7xl mx-auto px-6 mt-20">
        <div className="bg-gray-900 text-white rounded-[2rem] p-8 sm:p-16 shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 z-0"></div>
          <div className="max-w-3xl space-y-8 relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
              <Clock className="w-4 h-4" /> Patient-First Scheduling
            </div>

            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-[1.1]">
              Why DIGISMILE Operates Monday to Saturday Until 9:30 PM
            </h2>

            <p className="text-lg font-medium text-gray-300 leading-relaxed">
              Toothaches do not follow a 9-to-5 banking schedule. Most working professionals and school-going families in Puducherry struggle to take daytime leave just to see a dentist.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Zero Workplace Disruptions
                </h3>
                <p className="text-sm text-gray-400 font-medium leading-relaxed">
                  Book post-work appointments between 6:00 PM and 9:30 PM without rushing through traffic or using sick days.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Monday Emergency Availability
                </h3>
                <p className="text-sm text-gray-400 font-medium leading-relaxed">
                  Full-service operatory open all Monday (9:00 AM – 9:30 PM) for emergencies, family checkups, and cosmetic sittings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLINICAL STERILIZATION & FACILITY STANDARDS */}
      <section className="max-w-7xl mx-auto px-6 mt-20">
        <div className="bg-white border border-gray-100 rounded-[2rem] p-8 sm:p-14 shadow-[0_8px_30px_rgb(0,0,0,0.06)] space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-4 py-1.5 rounded-full">
              Rigorous Hygiene Standards
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mt-6">
              Hospital-Grade Sterilization Protocols
            </h2>
            <p className="text-base font-medium text-gray-500 mt-4 leading-relaxed">
              We follow strict international barrier sterilization protocols at No 58, Muthu Mariamman Kovil St, Heritage Town.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 border border-gray-100 p-8 rounded-[1.5rem] text-center flex flex-col items-center">
              <div className="w-14 h-14 bg-white text-gray-900 rounded-2xl flex items-center justify-center font-bold mb-6 shadow-sm border border-gray-100">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Class-B Vacuum Autoclave
              </h3>
              <p className="text-sm font-medium text-gray-500 leading-relaxed">
                Every metallic instrument undergoes pressurized high-temperature steam sterilization that kills 100% of bacterial spores and viruses.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-100 p-8 rounded-[1.5rem] text-center flex flex-col items-center">
              <div className="w-14 h-14 bg-white text-gray-900 rounded-2xl flex items-center justify-center font-bold mb-6 shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Fresh Sealed Pouches
              </h3>
              <p className="text-sm font-medium text-gray-500 leading-relaxed">
                Diagnostic trays and rotary burs remain sealed in chemical indicator pouches and are opened only in front of the patient.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-100 p-8 rounded-[1.5rem] text-center flex flex-col items-center">
              <div className="w-14 h-14 bg-white text-gray-900 rounded-2xl flex items-center justify-center font-bold mb-6 shadow-sm border border-gray-100">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Disinfected Operatory Suites
              </h3>
              <p className="text-sm font-medium text-gray-500 leading-relaxed">
                Medical-grade surface disinfection is performed between every single patient appointment. Zero cross-contamination guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REAL ADDRESS & HOURS PROMINENT CARD */}
      <div className="max-w-7xl mx-auto px-6 mt-12">
        <div className="bg-[#E8F0F8] rounded-[2rem] p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <div className="text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-4">
              Physical Practice Address
            </div>
            <div className="text-2xl sm:text-3xl font-semibold text-gray-900 tracking-tight">
              1st Floor, No 58, Muthu Mariamman Kovil St, Heritage Town, Puducherry – 605013
            </div>
            <div className="text-sm font-medium text-gray-600 mt-2">
              Monday to Saturday: 9:00 AM – 9:30 PM • Phone: +91 87786 25635
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link
              href="/contact"
              className="bg-white hover:bg-gray-50 text-gray-900 font-semibold text-sm px-6 py-4 rounded-full border border-gray-200 shadow-sm transition-all text-center"
            >
              View Map & Directions
            </Link>
            <Link
              href="/book"
              className="bg-gray-900 hover:bg-black text-white font-semibold text-sm px-6 py-4 rounded-full shadow-md transition-all text-center"
            >
              Book With Doctors
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}
