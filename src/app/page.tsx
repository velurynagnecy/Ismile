import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, CheckCircle2 } from 'lucide-react';
import { CLINIC_DATA } from '@/lib/clinic-data';

export default function HomePage() {
  return (
    <div className="bg-white text-gray-900 pb-24">
      
      {/* 1. HERO SECTION */}
      <section className="pt-4 px-4 sm:px-6">
        <div className="max-w-[96%] mx-auto relative rounded-[2rem] overflow-hidden min-h-[90vh] flex flex-col justify-center bg-gray-900">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2000&auto=format&fit=crop"
              alt="Patient smiling at DIGISMILE Dental Clinic"
              className="w-full h-full object-cover object-center opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          </div>

          <div className="relative z-10 px-6 sm:px-12 md:px-20 pt-32 pb-16 flex flex-col h-full justify-between">
            
            {/* Top/Middle Text Area */}
            <div className="max-w-2xl mt-12 md:mt-24">
              <h1 className="text-5xl sm:text-7xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
                Pain-Free <br /> Dental Care
              </h1>
              <p className="text-lg text-white/90 max-w-lg mb-8 leading-relaxed font-medium">
                Single-sitting painless root canals, advanced implants, and gentle care by Dr. Sandhosh in Puducherry.
              </p>
              <Link
                href="/book"
                className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold px-6 py-3.5 rounded-full hover:bg-gray-100 transition-colors"
              >
                Book an Appointment <div className="bg-emerald-500 text-white rounded-full p-1 ml-1"><ArrowRight className="w-4 h-4" /></div>
              </Link>
            </div>

            {/* Bottom Floating Elements */}
            <div className="mt-24 md:mt-32 flex flex-col md:flex-row items-center md:items-end justify-between gap-6">
              
              {/* Left Floating Card */}
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-3 rounded-2xl max-w-[280px]">
                <div className="rounded-xl overflow-hidden mb-3 h-24">
                  <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=400&auto=format&fit=crop" alt="Clinical setup" className="w-full h-full object-cover" />
                </div>
                <p className="text-white text-sm font-medium leading-snug mb-2">
                  Restore natural healthy confident dental growth
                </p>
                <div className="flex items-center gap-1.5 text-xs text-white/80 font-medium">
                  <Star className="w-3.5 h-3.5 fill-accent-gold text-accent-gold" /> 
                  5.0 (Rating) <span className="ml-auto"><ArrowRight className="w-3 h-3" /></span>
                </div>
              </div>

              {/* Right Floating Tags */}
              <div className="flex flex-wrap justify-center md:justify-end gap-2 max-w-md">
                {['Dental Checkup', 'Teeth Cleaning', 'Root Canal', 'Gum Treatment', 'Pediatrics'].map((tag) => (
                  <span key={tag} className="bg-white/15 backdrop-blur-md border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. PROCESS / BREADCRUMB BAR */}
      <div className="max-w-5xl mx-auto px-6 py-8 border-b border-gray-100">
        <div className="flex flex-wrap items-center justify-center sm:justify-between gap-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
          <span className="text-gray-900">Smile Assessment</span>
          <span className="hidden sm:block flex-1 border-t border-dashed border-gray-200 mx-4"></span>
          <span>Care Planning</span>
          <span className="hidden sm:block flex-1 border-t border-dashed border-gray-200 mx-4"></span>
          <span>Treatment Process</span>
          <span className="hidden sm:block flex-1 border-t border-dashed border-gray-200 mx-4"></span>
          <span>Dental Maintenance</span>
        </div>
      </div>

      {/* 3. ABOUT SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-3">
            <span className="text-sm font-semibold text-gray-900">About Us</span>
            <div className="flex items-center mt-6 relative">
              <img src={CLINIC_DATA.doctors[0].image} alt="Dr. Sandhosh" className="w-16 h-16 rounded-2xl object-cover border-2 border-white shadow-sm z-10" />
            </div>
          </div>
          <div className="md:col-span-9">
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-gray-900 leading-[1.2]">
              We deliver personalized dental treatments with modern <span className="text-gray-400">technology</span> and gentle care ensuring healthy confident smiles for every patient.
            </h2>
          </div>
        </div>
      </section>

      {/* 4. STATS SECTION */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <p className="text-sm font-medium text-gray-500 mb-8">Thousands Trust Us for Smiles!</p>
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 sm:gap-16 w-full md:w-auto text-center sm:text-left">
            <div>
              <div className="text-5xl sm:text-6xl font-semibold text-gray-900 tracking-tight">98%</div>
              <div className="text-sm font-medium text-gray-500 mt-2">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-5xl sm:text-6xl font-semibold text-gray-900 tracking-tight">132+</div>
              <div className="text-sm font-medium text-gray-500 mt-2">Smiles Transformed</div>
            </div>
            <div>
              <div className="text-5xl sm:text-6xl font-semibold text-gray-900 tracking-tight">5.0<span className="text-4xl text-gray-900">*</span></div>
              <div className="text-sm font-medium text-gray-500 mt-2">Google Rating</div>
            </div>
          </div>

          <div className="w-full md:w-1/3 h-32 rounded-3xl overflow-hidden relative">
            <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop" alt="Happy patient" className="w-full h-full object-cover" />
          </div>

        </div>
      </section>

      {/* 5. FEATURE TREATMENT / DOCTORS */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          
          <div className="lg:col-span-5 space-y-12">
            <div>
              <span className="text-sm font-semibold text-gray-500">Feature Specialists</span>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mt-4 leading-[1.2]">
                Advanced Dental Care for a Healthier Smile
              </h2>
              <p className="text-gray-500 mt-4 text-sm leading-relaxed">
                Join hundreds of patients achieving healthier, brighter smiles through expert dental care and personalized treatments by our senior clinicians.
              </p>
            </div>

            {/* Doctor Card Profile */}
            <div className="bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6 h-auto">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden shrink-0 shadow-sm bg-gray-50">
                <img 
                  src={CLINIC_DATA.doctors[0].image} 
                  alt="Dr. Sandhosh" 
                  className="w-full h-full object-cover object-top" 
                />
              </div>
              <div className="flex-1 text-center sm:text-left flex flex-col justify-center h-full pt-2">
                <div className="inline-flex items-center gap-2 mb-3 bg-[#E8F0F8] text-gray-600 px-3 py-1 rounded-full text-xs font-semibold uppercase mx-auto sm:mx-0 w-fit">
                  Lead Specialist
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 tracking-tight">{CLINIC_DATA.doctors[0].name}</h3>
                <p className="text-sm text-gray-500 font-medium mt-1">{CLINIC_DATA.doctors[0].role}</p>
                <div className="flex items-center justify-center sm:justify-start gap-2 mt-4 text-sm font-semibold text-gray-900 bg-gray-50 p-2.5 rounded-xl w-fit mx-auto sm:mx-0">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" /> 
                  5.0 <span className="text-gray-500 font-medium">({CLINIC_DATA.rating.reviewCount}+ Google Reviews)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            {/* Right Large Image Card */}
            <div className="bg-gray-100 rounded-[2rem] p-4 h-full min-h-[500px] relative overflow-hidden flex flex-col justify-end">
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1000&auto=format&fit=crop" 
                alt="Modern Clinic Setup" 
                className="absolute inset-0 w-full h-full object-cover opacity-90" 
              />
              
              {/* Overlay Stat Info Box */}
              <div className="relative z-10 bg-white/95 backdrop-blur-md p-6 rounded-3xl m-2 border border-gray-100/50 shadow-sm">
                <div className="grid grid-cols-2 gap-8 mb-6">
                  <div>
                    <p className="text-xs text-gray-500 font-medium mb-1">Recommended<br/>Checkups per Year</p>
                    <div className="text-3xl font-semibold text-gray-900">2 <span className="text-base font-medium text-gray-500">Visits</span></div>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium mb-1">Average<br/>Treatment Time</p>
                    <div className="text-3xl font-semibold text-gray-900">40 <span className="text-base font-medium text-gray-500">Mins</span></div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-500">Today's Appointment Progress</span>
                  <span className="text-xs font-bold text-gray-900">80%</span>
                </div>
                <div className="w-full bg-gray-100 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div className="bg-emerald-500 h-full rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
