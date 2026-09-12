import React from 'react';
import Link from 'next/link';
import { Sparkles, Calendar, MessageCircle, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';
import { CLINIC_DATA } from '@/lib/clinic-data';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';

export const metadata = {
  title: "Smile Gallery & Clinical Case Results | iSMILE Dental Clinic Puducherry",
  description: "Interactive before and after smile comparison slider. See real clinical restorations, root canals, and cosmetic bonding by Dr. Logesh and Dr. Riya in Puducherry.",
};

export default function GalleryPage() {
  const cases = [
    {
      title: "Diastema Closure & Aesthetic Composite Artistry",
      description: "Patient presented with prominent gap between upper central incisors and tooth discoloration. Dr. Riya completed direct layer-by-layer nano-hybrid composite bonding in a single sitting without removing any healthy tooth structure.",
      duration: "Single Sitting (60 Mins)",
      doctor: "Dr. Riya (Chief Aesthetic Dentist)",
      beforeImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=900&auto=format&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=900&auto=format&fit=crop",
    },
    {
      title: "Painless Root Canal & Monolithic Zirconia Crown",
      description: "Severe infection in lower left first molar causing sleepless nights. Dr. Logesh carried out single-sitting rotary root canal therapy followed by high-precision CAD/CAM zirconia crown placement, restoring full chewing capability.",
      duration: "Single-Sitting RCT + Crown Fitting",
      doctor: "Dr. Logesh (Lead Endodontist)",
      beforeImage: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=900&auto=format&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=900&auto=format&fit=crop",
    },
    {
      title: "In-Clinic Laser Teeth Whitening & Calculus Removal",
      description: "Heavy extrinsic tea, coffee, and nicotine discoloration eliminated using ultrasonic piezo scaling followed by cool-light medical laser teeth whitening. Lifted tooth shade by 7 shades with zero gum sensitivity.",
      duration: "45 Minutes In-Chair",
      doctor: "Dr. Riya",
      beforeImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=900&auto=format&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=900&auto=format&fit=crop",
    }
  ];

  return (
    <div className="bg-white pb-24 font-sans text-gray-900">
      
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="max-w-3xl space-y-6">
          <span className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-600 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
            Verified Clinical Transformations
          </span>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-gray-900 leading-[1.1]">
            Smile Gallery
          </h1>
          <p className="text-lg font-medium text-gray-500 leading-relaxed">
            Real patient outcomes from our Lenin St operatory in Kuyavarpalayam. Use the interactive comparison sliders below to inspect the precision of Dr. Logesh and Dr. Riya&apos;s restorative and aesthetic treatments.
          </p>
        </div>
      </div>

      {/* BEFORE / AFTER INTERACTIVE SLIDERS */}
      <div className="max-w-5xl mx-auto px-6 space-y-16">
        {cases.map((item, idx) => (
          <div key={idx} className="group">
            <BeforeAfterSlider
              caseTitle={item.title}
              caseDescription={item.description}
              duration={item.duration}
              doctorName={item.doctor}
              beforeImage={item.beforeImage}
              afterImage={item.afterImage}
              beforeLabel="BEFORE TREATMENT"
              afterLabel="AFTER iSMILE RESTORATION"
            />
          </div>
        ))}
      </div>

      {/* WHY CHOOSE iSMILE FOR COSMETIC & RESTORATIVE EXCELLENCE */}
      <section className="max-w-7xl mx-auto px-6 mt-24">
        <div className="bg-gray-900 text-white rounded-[2rem] p-8 sm:p-14 shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 z-0"></div>
          <div className="max-w-3xl space-y-6 relative z-10">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#D4AF37] mb-2">
              Aesthetic & Biological Philosophy
            </span>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-tight">
              Natural Translucency. <br className="hidden sm:block" />No Fake Chalky Teeth.
            </h2>
            <p className="text-lg font-medium text-gray-300 leading-relaxed max-w-2xl">
              Many clinics produce crowns or veneers that look unnaturally flat and opaque white. Dr. Riya custom shades every restoration to mimic natural enamel light reflection, subtle surface mamelons, and proper gum contours.
            </p>

            <div className="pt-6 flex flex-wrap gap-4">
              <Link
                href="/book"
                className="bg-[#D4AF37] hover:bg-[#C5A028] text-gray-900 font-semibold text-sm px-8 py-4 rounded-full transition-all shadow-md"
              >
                Book Smile Consultation
              </Link>
              <a
                href={`tel:${CLINIC_DATA.rawPhone}`}
                className="bg-white/10 hover:bg-white/20 text-white font-semibold text-sm px-8 py-4 rounded-full transition-all flex items-center gap-2 border border-white/20 backdrop-blur-md"
              >
                <Phone className="w-4 h-4 text-gray-300" />
                Call {CLINIC_DATA.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
