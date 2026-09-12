'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';
import { CLINIC_DATA } from '@/lib/clinic-data';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}>
      <div className="max-w-[96%] mx-auto">
        <div className={`flex items-center justify-between px-6 py-3 mx-auto transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-full border border-gray-100' : 'bg-transparent'}`}>
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2 group z-50">
            <div className={`w-8 h-8 flex items-center justify-center font-bold text-lg rounded-full transition-colors ${scrolled ? 'bg-emerald-900 text-white' : 'bg-white text-emerald-900'}`}>
              iS
            </div>
            <span className={`text-xl font-bold tracking-tight transition-colors ${scrolled ? 'text-gray-900' : 'text-white'}`}>
              DIGISMILE
            </span>
          </Link>

          {/* Desktop Nav Links (Pill) */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-2 py-1.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium px-5 py-2 rounded-full transition-all ${
                    isActive
                      ? (scrolled ? 'bg-gray-100 text-gray-900' : 'bg-white/20 text-white')
                      : (scrolled ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-50' : 'text-white/80 hover:text-white hover:bg-white/10')
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/book"
              className={`flex items-center gap-2 text-sm font-semibold px-6 py-2.5 rounded-full transition-all ${
                scrolled 
                  ? 'bg-gray-900 text-white hover:bg-gray-800' 
                  : 'bg-white text-gray-900 hover:bg-gray-100'
              }`}
            >
              Book a Call <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-full focus:outline-none z-50 transition-colors ${scrolled || mobileMenuOpen ? 'text-gray-900' : 'text-white'}`}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div className={`lg:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col h-full pt-24 px-6 pb-8">
            <div className="flex flex-col gap-4 text-2xl font-semibold">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`border-b border-gray-100 pb-4 ${
                    pathname === link.href ? 'text-emerald-900' : 'text-gray-900'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="mt-auto space-y-4">
              <a
                href={`tel:${CLINIC_DATA.rawPhone}`}
                className="flex items-center justify-center w-full bg-gray-100 text-gray-900 font-semibold py-4 rounded-2xl"
              >
                Call {CLINIC_DATA.phone}
              </a>
              <Link
                href="/book"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center w-full bg-emerald-900 text-white font-semibold py-4 rounded-2xl"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
