import React from 'react';
import Link from 'next/link';
import { Phone, MessageCircle, MapPin, Clock, Star, ShieldCheck } from 'lucide-react';
import { CLINIC_DATA } from '@/lib/clinic-data';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 text-gray-900 pb-12">
      {/* Upper CTA Banner */}
      <div className="bg-white border-b border-gray-200 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 font-semibold text-2xl flex items-center justify-center rounded-2xl border border-emerald-100 shadow-sm">
              5.0
            </div>
            <div>
              <div className="flex items-center justify-center md:justify-start gap-1 text-accent-gold mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent-gold text-accent-gold" />
                ))}
              </div>
              <p className="text-sm font-semibold text-gray-900">
                Highest-Rated Dental Practice in Puducherry
              </p>
              <p className="text-xs text-gray-500 font-medium mt-1">
                234 Verified Google Reviews • 100% Recommended
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3">
            <a
              href={`tel:${CLINIC_DATA.rawPhone}`}
              className="bg-white text-gray-900 font-semibold text-sm px-6 py-3 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-gray-400" />
              Call {CLINIC_DATA.phone}
            </a>
            <a
              href={CLINIC_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 text-white font-semibold text-sm px-6 py-3 rounded-full hover:bg-emerald-600 transition-colors flex items-center gap-2 shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1: Brand & Philosophy */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-900 text-white flex items-center justify-center font-bold text-lg rounded-xl">
                iS
              </div>
              <span className="text-xl font-bold tracking-tight text-gray-900">
                iSMILE
              </span>
            </div>
            <p className="text-sm text-gray-500 font-medium leading-relaxed">
              Pioneering zero-discomfort dental precision in Puducherry under lead specialists Dr. Logesh and Dr. Riya.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-600 bg-white border border-gray-200 px-3 py-1.5 rounded-full shadow-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                Class-B Autoclave Sterilized
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-widest mb-6">
              Explore Practice
            </h4>
            <ul className="space-y-3 text-sm font-medium text-gray-500">
              <li><Link href="/" className="hover:text-gray-900 transition-colors">Home Overview</Link></li>
              <li><Link href="/services" className="hover:text-gray-900 transition-colors">Services & Fees</Link></li>
              <li><Link href="/about" className="hover:text-gray-900 transition-colors">Meet the Doctors</Link></li>
              <li><Link href="/gallery" className="hover:text-gray-900 transition-colors">Smile Gallery</Link></li>
              <li><Link href="/book" className="hover:text-gray-900 transition-colors">Book Consultation</Link></li>
              <li><Link href="/contact" className="hover:text-gray-900 transition-colors">Contact & Map</Link></li>
            </ul>
          </div>

          {/* Col 3: Key Treatments */}
          <div>
            <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-widest mb-6">
              Treatments
            </h4>
            <ul className="space-y-3 text-sm font-medium text-gray-500">
              <li><Link href="/services#root-canal" className="hover:text-gray-900 transition-colors">Single-Sitting Root Canal</Link></li>
              <li><Link href="/services" className="hover:text-gray-900 transition-colors">CAD/CAM Zirconia Crowns</Link></li>
              <li><Link href="/services" className="hover:text-gray-900 transition-colors">Cosmetic Smile Makeover</Link></li>
              <li><Link href="/services" className="hover:text-gray-900 transition-colors">Dental Implants</Link></li>
              <li><Link href="/services" className="hover:text-gray-900 transition-colors">Pediatric Dentistry</Link></li>
              <li><Link href="/services" className="hover:text-gray-900 transition-colors">Teeth Whitening</Link></li>
            </ul>
          </div>

          {/* Col 4: Real Clinic Details */}
          <div>
            <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-widest mb-6">
              Location & Hours
            </h4>
            <div className="space-y-4 text-sm font-medium text-gray-500">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-400 shrink-0" />
                <span>
                  <strong className="text-gray-900 block font-semibold mb-0.5">216, Lenin St, Kuyavarpalayam</strong>
                  Puducherry – 605013
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gray-400 shrink-0" />
                <div>
                  <strong className="text-gray-900 block font-semibold mb-0.5">Open All 7 Days</strong>
                  <span>9:00 AM – 10:00 PM</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gray-400 shrink-0" />
                <div>
                  <strong className="text-gray-900 block font-semibold mb-0.5">Direct Appointments</strong>
                  <a href={`tel:${CLINIC_DATA.rawPhone}`} className="hover:text-gray-900 transition-colors">
                    {CLINIC_DATA.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Compliance Section */}
        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-medium">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-2">
            <Link href="/privacy-policy" className="hover:text-gray-900 transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-use" className="hover:text-gray-900 transition-colors">Terms of Use</Link>
            <Link href="/medical-disclaimer" className="hover:text-gray-900 transition-colors">Medical Disclaimer</Link>
            <Link href="/cookie-notice" className="hover:text-gray-900 transition-colors">Cookie Notice</Link>
          </div>
          <div className="text-center md:text-right">
            © {new Date().getFullYear()} iSMILE Dental Clinic. All rights reserved.
          </div>
        </div>

        {/* Agency Attribution Credit */}
        <div className="mt-6 text-center text-xs font-medium text-gray-400">
          Website by <a href="https://velurynagnecy.com" target="_blank" rel="noopener noreferrer" className="text-gray-900 font-semibold hover:underline transition-all">VELURYN AGNECY</a>
        </div>
      </div>
    </footer>
  );
}
