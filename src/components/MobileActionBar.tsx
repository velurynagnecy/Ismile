'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { CLINIC_DATA } from '@/lib/clinic-data';

export default function MobileActionBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 md:hidden bg-cream-50 border-t-2 border-ink-900 px-3 py-2.5 shadow-[0_-4px_12px_rgba(0,0,0,0.1)]">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call Button */}
        <a
          href={`tel:${CLINIC_DATA.rawPhone}`}
          className="flex flex-col items-center justify-center py-2 bg-white text-ink-900 border-2 border-ink-900 rounded-lg active:bg-cream-200 transition"
          aria-label="Call iSMILE Dental Clinic"
        >
          <Phone className="w-4 h-4 text-emerald-800 mb-0.5" />
          <span className="text-[11px] font-black uppercase tracking-wider">Call Now</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={CLINIC_DATA.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 bg-emerald-800 text-white border-2 border-ink-900 rounded-lg active:bg-emerald-900 transition"
          aria-label="WhatsApp iSMILE Dental Clinic"
        >
          <MessageCircle className="w-4 h-4 mb-0.5" />
          <span className="text-[11px] font-black uppercase tracking-wider">WhatsApp</span>
        </a>

        {/* Book Button */}
        <Link
          href="/book"
          className="flex flex-col items-center justify-center py-2 bg-ink-900 text-white border-2 border-ink-900 rounded-lg active:bg-emerald-950 transition"
          aria-label="Book Dental Appointment"
        >
          <Calendar className="w-4 h-4 text-emerald-400 mb-0.5" />
          <span className="text-[11px] font-black uppercase tracking-wider">Book Slot</span>
        </Link>
      </div>
    </div>
  );
}
