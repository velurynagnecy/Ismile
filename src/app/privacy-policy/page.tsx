import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Lock, ArrowLeft } from 'lucide-react';
import { CLINIC_DATA } from '@/lib/clinic-data';

export const metadata = {
  title: "Privacy Policy (DPDP Act 2023) | iSMILE Dental Clinic Puducherry",
  description: "Privacy policy and patient health data protection practices at iSMILE Dental Clinic, complying with India's Digital Personal Data Protection Act 2023.",
};

export default function PrivacyPolicyPage() {
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
            Legal Compliance • India DPDP Act 2023
          </span>
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-gray-900">
            Privacy Policy & Patient Data Protection
          </h1>
          <p className="text-sm font-medium text-gray-500">
            Effective Date: September 2026 • iSMILE DENTAL CLINIC, Puducherry
          </p>
        </div>

        <div className="bg-gray-50 border border-gray-100 rounded-[2rem] p-8 sm:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] space-y-8 text-sm font-medium text-gray-700 leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-gray-900">
              1. Commitment to India&apos;s DPDP Act 2023
            </h2>
            <p>
              iSMILE DENTAL CLINIC (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), located at 216, Lenin St, Kuyavarpalayam, Puducherry 605013, is fully committed to protecting your personal health data in compliance with India&apos;s <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong> and applicable healthcare regulations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-gray-900">
              2. Personal Data We Collect
            </h2>
            <p>We only collect personal information necessary to deliver clinical dental care:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Contact details: Name, phone number, email, residential locality in Puducherry.</li>
              <li>Clinical records: Medical history, allergies, medications, digital dental radiographs (RVG X-rays), and treatment charts.</li>
              <li>Appointment logistics: Preferred booking times, attending doctor preference (Dr. Logesh or Dr. Riya).</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-gray-900">
              3. Lawful Purpose & Data Use
            </h2>
            <p>
              Your data is used strictly for clinical diagnosis, treatment planning, appointment reminders via SMS/WhatsApp, and clinic billing. We never sell, rent, or trade patient data to third-party commercial marketing entities under any circumstances.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-gray-900">
              4. Data Security & Retention
            </h2>
            <p>
              Digital radiographs and dental charts are stored securely with encrypted backups. Only authorized medical staff under Dr. Logesh and Dr. Riya have access to diagnostic records.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-gray-900">
              5. Your Rights as a Data Principal
            </h2>
            <p>Under the DPDP Act 2023, you have the right to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Access a summary of your dental records and digital X-rays.</li>
              <li>Request correction of inaccurate contact or personal information.</li>
              <li>Nominate an individual to access your records in the event of incapacity.</li>
              <li>File a grievance regarding data handling directly with our clinic data officer.</li>
            </ul>
          </section>

          <section className="space-y-4 border-t border-gray-200 pt-8">
            <h2 className="text-lg font-semibold text-gray-900">
              6. Grievance Officer & Contact
            </h2>
            <p>
              For any privacy inquiries or to exercise your DPDP rights, contact our practice desk:
            </p>
            <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm text-sm font-semibold text-gray-900 space-y-2">
              <div>Data Grievance Officer: Clinic Administration</div>
              <div>iSMILE DENTAL CLINIC, 216, Lenin St, Kuyavarpalayam, Puducherry – 605013</div>
              <div className="text-gray-500 font-medium">Phone: {CLINIC_DATA.phone} • Email: care@ismiledental.in</div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
