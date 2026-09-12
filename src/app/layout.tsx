import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileActionBar from "@/components/MobileActionBar";
import ReceptionistChat from "@/components/ReceptionistChat";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "iSMILE DENTAL CLINIC | Dr. Logesh & Dr. Riya | Puducherry",
  description: "Highest-rated dental clinic in Puducherry (5.0★ from 234 reviews). Painless single-sitting root canals, dental implants, cosmetic veneers & family care at 216 Lenin St, Kuyavarpalayam. Open all 7 days 9 AM–10 PM.",
  keywords: [
    "iSMILE Dental Clinic",
    "Dentist Puducherry",
    "Dental clinic Lenin St Kuyavarpalayam",
    "Dr Logesh dentist Puducherry",
    "Dr Riya dentist Puducherry",
    "Painless root canal Puducherry",
    "Dental clinic open 7 days Puducherry",
    "Emergency dental clinic Puducherry",
    "Teeth whitening Puducherry",
    "Dental implants Puducherry"
  ],
  authors: [{ name: "Dr. Logesh & Dr. Riya" }],
  openGraph: {
    title: "iSMILE DENTAL CLINIC | 5.0★ Rated Dental Care in Puducherry",
    description: "Open all 7 days (9:00 AM – 10:00 PM) at 216 Lenin St, Kuyavarpalayam. Painless root canals, dental implants, cosmetic dentistry by Dr. Logesh & Dr. Riya.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="min-h-screen flex flex-col font-sans bg-cream-50 text-ink-900 pb-16 md:pb-0">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        
        {/* Receptionist Priya Chat Widget (Bottom Right) */}
        <ReceptionistChat />

        {/* Mobile Sticky Action Bar (Bottom Screen) */}
        <MobileActionBar />
      </body>
    </html>
  );
}
