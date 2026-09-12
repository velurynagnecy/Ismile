import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Cookie } from 'lucide-react';
import { CLINIC_DATA } from '@/lib/clinic-data';

export const metadata = {
  title: "Cookie Notice | DIGISMILE Dental Clinic Puducherry",
  description: "Cookie notice and technical session policies for DIGISMILE Dental Clinic Puducherry.",
};

export default function CookieNoticePage() {
  return (
    <div className="bg-white min-h-screen pb-24 font-sans text-gray-900">
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-10">
        
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <div className="border-b border-gray-100 pb-8 space-y-4">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full">
            Privacy & Technology Notice
          </span>
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-gray-900">
            Cookie Notice
          </h1>
          <p className="text-sm font-medium text-gray-500">
            DIGISMILE DENTAL CLINIC, Puducherry
          </p>
        </div>

        <div className="bg-gray-50 border border-gray-100 rounded-[2rem] p-8 sm:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] space-y-8 text-sm font-medium text-gray-700 leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-3">
              <Cookie className="w-6 h-6 text-[#D4AF37]" />
              1. What Are Cookies?
            </h2>
            <p>
              Cookies are small text files stored on your browser to facilitate navigation and remember preference settings across your visit.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-gray-900">
              2. How We Use Cookies
            </h2>
            <p>DIGISMILE uses only essential and functional cookies:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Essential Technical Cookies:</strong> To ensure proper loading of interactive elements such as our before/after smile comparison slider and booking form.</li>
              <li><strong>Security & Anti-Abuse:</strong> To prevent malicious automated traffic and enforce rate limiting on our appointment and AI assistant routes.</li>
              <li><strong>Zero Invasive Tracking:</strong> We do NOT employ aggressive cross-site third-party marketing trackers or ad-retargeting beacons.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-gray-900">
              3. Managing Your Preferences
            </h2>
            <p>
              You can modify your browser settings to decline cookies if you prefer. Most features of the DIGISMILE website will continue to function normally.
            </p>
          </section>

          <section className="space-y-4 border-t border-gray-200 pt-8">
            <h2 className="text-lg font-semibold text-gray-900">
              4. Inquiries
            </h2>
            <p>
              For questions regarding our website policies, contact our practice at {CLINIC_DATA.phone} or visit No 58, Muthu Mariamman Kovil St, Heritage Town, Heritage Town, Puducherry.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
