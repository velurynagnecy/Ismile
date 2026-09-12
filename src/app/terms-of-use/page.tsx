import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { CLINIC_DATA } from '@/lib/clinic-data';

export const metadata = {
  title: "Terms of Use | DIGISMILE Dental Clinic Puducherry",
  description: "Terms of use, appointment policies, and clinic conditions for DIGISMILE Dental Clinic Puducherry.",
};

export default function TermsOfUsePage() {
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
            Clinic Operational Terms
          </span>
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-gray-900">
            Terms of Use & Appointment Policy
          </h1>
          <p className="text-sm font-medium text-gray-500">
            DIGISMILE DENTAL CLINIC, No 58, Muthu Mariamman Kovil St, Heritage Town, Heritage Town, Puducherry
          </p>
        </div>

        <div className="bg-gray-50 border border-gray-100 rounded-[2rem] p-8 sm:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] space-y-8 text-sm font-medium text-gray-700 leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-gray-900">
              1. Scope of Clinic Services
            </h2>
            <p>
              By booking an appointment or using this website, you agree to these operational terms. All clinical dental consultations and surgical interventions are conducted in-person by Dr. Sandhosh, Dr. Sandhosh, and credentialed clinical staff at our physical premises located at 1st Floor, No 58, Muthu Mariamman Kovil St, Heritage Town, Puducherry 605013.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-gray-900">
              2. Appointment Scheduling & Punctuality
            </h2>
            <p>
              DIGISMILE maintains a strict <strong>Zero Wait Time</strong> philosophy. We reserve specific chair time exclusively for each patient. We kindly request that you arrive 5 minutes prior to your designated slot. If you need to reschedule, please notify our front desk at least 2 hours in advance via telephone ({CLINIC_DATA.phone}) or WhatsApp.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-gray-900">
              3. Treatment Consent & Diagnostic Estimates
            </h2>
            <p>
              Prior to the commencement of procedures such as single-sitting root canals, dental implants, or cosmetic veneers, patients are provided with an explanation of clinical findings and an itemized fee estimate. Written clinical informed consent is obtained for all surgical or endodontic procedures.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-gray-900">
              4. Emergency Procedures
            </h2>
            <p>
              Acute emergencies (such as traumatic tooth avulsion, acute periapical abscess, or uncontrolled bleeding) are given immediate clinical priority over elective routine checkups.
            </p>
          </section>

          <section className="space-y-4 border-t border-gray-200 pt-8">
            <h2 className="text-lg font-semibold text-gray-900">
              5. Contact
            </h2>
            <p>
              Questions regarding clinic policies can be addressed to {CLINIC_DATA.phone} or by visiting us at 1st Floor, No 58, Muthu Mariamman Kovil St, Heritage Town, Puducherry.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
