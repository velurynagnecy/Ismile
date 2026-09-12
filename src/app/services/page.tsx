import React from 'react';
import Link from 'next/link';
import { 
  CheckCircle2, Clock, ShieldCheck, Zap, ArrowRight, 
  HelpCircle, Phone, MessageCircle, Calendar, Sparkles 
} from 'lucide-react';
import { CLINIC_DATA } from '@/lib/clinic-data';

export const metadata = {
  title: "Services & Transparent Dental Fees | iSMILE Dental Clinic Puducherry",
  description: "Transparent fee schedule for painless root canals, zirconia crowns, dental implants, pediatric dentistry, and cosmetic makeovers at iSMILE Puducherry.",
};

export default function ServicesPage() {
  return (
    <div className="bg-white pb-24 font-sans text-gray-900">
      
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="max-w-3xl space-y-6">
          <span className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-600 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
            Puducherry Transparent Pricing Policy
          </span>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-gray-900 leading-[1.1]">
            Services & Transparent Fees
          </h1>
          <p className="text-lg font-medium text-gray-500 leading-relaxed">
            At <strong className="text-gray-900">iSMILE DENTAL CLINIC</strong>, we believe honest dental care starts with clear, upfront costs. Every patient receives an itemized treatment estimate before any procedure starts. Zero hidden clinic charges.
          </p>
        </div>
      </div>

      {/* SPECIAL SPOTLIGHT: SINGLE-SITTING ROOT CANAL TREATMENT (RCT) */}
      <section id="root-canal" className="max-w-7xl mx-auto px-6">
        <div className="bg-gray-900 text-white rounded-[2rem] p-8 sm:p-12 shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 z-0"></div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#D4AF37]/20 text-[#D4AF37] px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider border border-[#D4AF37]/30 backdrop-blur-sm">
                ★ Signature Specialty • Over 1,000+ Painless RCTs
              </div>

              <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-tight">
                Single-Sitting Painless Root Canal (RCT)
              </h2>

              <div className="text-2xl sm:text-3xl font-bold text-white flex items-baseline gap-2">
                ₹2,500 – ₹5,500 <span className="text-sm text-gray-400 font-medium">/ tooth (depending on canal complexity)</span>
              </div>

              <p className="text-base font-medium text-gray-300 leading-relaxed">
                Dr. Logesh specializes in German rotary micro-endodontics. By using computerized apex locators and advanced local anesthesia, we eliminate tooth infections and nerve pain in just 45 to 60 minutes. You can eat comfortably and resume work the exact same day.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3 text-sm font-medium text-gray-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span>Zero Pain Guarantee during procedure</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-medium text-gray-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span>Single visit completion (saves time)</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-medium text-gray-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span>Thermoplastic gutta-percha bio-seal</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-medium text-gray-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span>Digital on-screen post-op X-ray review</span>
                </div>
              </div>

              <div className="pt-6 flex flex-wrap gap-4">
                <Link
                  href="/book"
                  className="bg-white hover:bg-gray-50 text-gray-900 font-semibold text-sm px-8 py-4 rounded-full transition-all shadow-md"
                >
                  Reserve RCT Consultation
                </Link>
                <a
                  href={CLINIC_DATA.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 text-white font-semibold text-sm px-8 py-4 rounded-full transition-all flex items-center gap-2 border border-white/20 backdrop-blur-md"
                >
                  <MessageCircle className="w-5 h-5" />
                  Ask Dr. Logesh on WhatsApp
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-[1.5rem] p-8 text-gray-100 space-y-6 backdrop-blur-md">
              <h3 className="text-xl font-semibold text-white">
                What Is Included In The Fee:
              </h3>
              <ul className="space-y-4 text-sm font-medium">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">High-resolution pre-op and post-op digital RVG radiography</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">Computer-controlled painless anesthetic delivery</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">Complete rotary biomechanical canal preparation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">Laser / ultrasonic canal sterilization flush</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">Permanent hermetic root filling & core build-up prep</span>
                </li>
              </ul>
              <div className="pt-4 mt-2 text-xs font-medium text-gray-400 border-t border-white/10">
                * Note: Protective crown (Zirconia or Ceramic) is recommended following root canal to protect structural bite force.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPREHENSIVE SERVICE DIRECTORY & FEE CARDS */}
      <section className="max-w-7xl mx-auto px-6 mt-24 space-y-10">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
            Full Clinical Treatment Directory
          </h2>
          <p className="text-base font-medium text-gray-500 mt-3">
            All treatments are personally carried out by Dr. Logesh & Dr. Riya at 216 Lenin St.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLINIC_DATA.services.map((svc) => (
            <div
              key={svc.id}
              className="bg-gray-50 border border-gray-100 rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col justify-between group hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 bg-white border border-gray-200 px-3 py-1 rounded-full shadow-sm">
                    {svc.category}
                  </span>
                  <span className="text-sm font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                    {svc.priceRange}
                  </span>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3 tracking-tight">
                  {svc.name}
                </h3>

                <p className="text-sm font-medium text-gray-600 leading-relaxed mb-6 h-20">
                  {svc.description}
                </p>

                <div className="space-y-3 mb-8 bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
                  <div className="flex items-center justify-between text-sm font-medium pb-2 border-b border-gray-100">
                    <span className="text-gray-500">Expected Time:</span>
                    <span className="text-gray-900">{svc.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm font-medium pt-1">
                    <span className="text-gray-500">Discomfort Level:</span>
                    <span className="text-emerald-600">{svc.painLevel}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <span className="text-xs font-semibold uppercase tracking-widest text-gray-900 block mb-3">
                    Patient Advantages:
                  </span>
                  {svc.benefits.map((b, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm font-medium text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200 flex gap-3 mt-auto">
                <Link
                  href="/book"
                  className="flex-1 bg-gray-900 hover:bg-black text-white font-semibold text-sm py-3.5 rounded-xl text-center transition-all shadow-md"
                >
                  Book Appointment
                </Link>
                <a
                  href={`https://wa.me/${CLINIC_DATA.whatsappNumber}?text=Hi%2C%20I%20have%20a%20question%20regarding%20${encodeURIComponent(svc.name)}%20at%20iSMILE.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 bg-white hover:bg-gray-50 text-emerald-600 rounded-xl border border-gray-200 transition-all flex items-center justify-center shadow-sm"
                  title="Ask on WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-7xl mx-auto px-6 mt-24">
        <div className="bg-gray-50 border border-gray-100 rounded-[2rem] p-8 sm:p-14 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-10">
            Frequently Asked Questions About Fees & Care
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CLINIC_DATA.faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-start gap-3">
                  <div className="bg-emerald-50 p-2 rounded-lg shrink-0">
                    <HelpCircle className="w-5 h-5 text-emerald-600" />
                  </div>
                  <span className="mt-1">{faq.q}</span>
                </h3>
                <p className="text-base font-medium text-gray-600 leading-relaxed pl-14">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <div className="max-w-7xl mx-auto px-6 mt-16">
        <div className="bg-[#E8F0F8] text-gray-900 p-8 sm:p-14 rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl sm:text-4xl font-semibold tracking-tight">
              Need An Immediate Second Opinion?
            </h3>
            <p className="text-base font-medium text-gray-600 mt-3">
              Bring your past X-rays or reports to 216 Lenin St. Consultation starts at ₹300.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link
              href="/book"
              className="bg-gray-900 hover:bg-black text-white font-semibold text-sm px-8 py-4 rounded-full shadow-md transition-all text-center"
            >
              Book Slot Today
            </Link>
            <a
              href={`tel:${CLINIC_DATA.rawPhone}`}
              className="bg-white hover:bg-gray-50 text-gray-900 font-semibold text-sm px-8 py-4 rounded-full shadow-sm transition-all flex items-center justify-center gap-2 border border-gray-200"
            >
              <Phone className="w-5 h-5 text-gray-400" />
              Call {CLINIC_DATA.phone}
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
