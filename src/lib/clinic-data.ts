export interface ServiceItem {
  id: string;
  name: string;
  category: 'Restorative' | 'Cosmetic' | 'Surgical' | 'Pediatric' | 'Preventive';
  priceRange: string;
  duration: string;
  isPopular?: boolean;
  isHighlighted?: boolean;
  painLevel: string;
  description: string;
  benefits: string[];
}

export interface Doctor {
  name: string;
  role: string;
  qualifications: string;
  experience: string;
  specialties: string[];
  bio: string;
  quote: string;
  image: string;
}

export interface Testimonial {
  id: string;
  patientName: string;
  location: string;
  rating: number;
  treatment: string;
  quote: string;
  highlight: string;
  date: string;
}

export const CLINIC_DATA = {
  name: "iSMILE DENTAL CLINIC",
  tagline: "Painless Dental Precision. Every Single Day.",
  shortAddress: "216, Lenin St, Kuyavarpalayam, Puducherry",
  fullAddress: "216, Lenin St, Kuyavarpalayam, Puducherry, 605013",
  phone: "+91 73589 32267",
  rawPhone: "+917358932267",
  whatsappNumber: "917358932267",
  whatsappUrl: "https://wa.me/917358932267?text=Hi%20iSMILE%20Dental%20Clinic%2C%20I%20would%20like%20to%20book%20an%20appointment.",
  hours: "Open all 7 days, 9:00 AM – 10:00 PM",
  hoursDetail: {
    monday: "9:00 AM – 10:00 PM",
    tuesday: "9:00 AM – 10:00 PM",
    wednesday: "9:00 AM – 10:00 PM",
    thursday: "9:00 AM – 10:00 PM",
    friday: "9:00 AM – 10:00 PM",
    saturday: "9:00 AM – 10:00 PM",
    sunday: "9:00 AM – 10:00 PM",
  },
  rating: {
    score: 5.0,
    reviewCount: 234,
    platform: "Google Verified Reviews",
    percentageRecommendation: "100%",
  },
  doctors: [
    {
      name: "Dr. Logesh",
      role: "Lead Dental Surgeon & Endodontist",
      qualifications: "BDS, MDS - Endodontics & Conservative Dentistry",
      experience: "12+ Years Clinical Excellence",
      specialties: [
        "Single-Sitting Painless Root Canal",
        "Micro-Endodontics & Re-Treatments",
        "Full Mouth Rehabilitation",
        "Dental Implants & Bone Grafting"
      ],
      bio: "Renowned across Puducherry for pioneering pain-free rotary endodontics, Dr. Logesh has performed thousands of successful root canal treatments with zero patient discomfort. His conservative philosophy prioritizes preserving natural tooth structure above all else.",
      quote: "Modern dentistry should never be synonymous with pain. With precision rotary tools and gentle local anesthesia, our patients often fall asleep during root canals.",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Dr. Riya",
      role: "Chief Aesthetic Dentist & Pediatric Specialist",
      qualifications: "BDS, Fellowship in Aesthetic & Pediatric Dentistry",
      experience: "10+ Years Dedicated Practice",
      specialties: [
        "Digital Smile Designing & Veneers",
        "Pediatric Pain-Free Pulpectomy",
        "Laser Teeth Whitening & Bonding",
        "Preventive Dentistry for Families"
      ],
      bio: "Dr. Riya combines artistic precision with a remarkably calming bedside manner that transforms anxious patients—especially young children—into confident clinic regulars. She specializes in minimally invasive cosmetic enhancements and family oral healthcare.",
      quote: "A genuinely healthy, confident smile changes how you carry yourself every day. We make sure every visit feels calm, clean, and empowering.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop"
    }
  ] as Doctor[],
  services: [
    {
      id: "root-canal",
      name: "Single-Sitting Painless Root Canal (RCT)",
      category: "Restorative",
      priceRange: "₹2,500 – ₹5,500",
      duration: "45 – 60 Minutes",
      isHighlighted: true,
      isPopular: true,
      painLevel: "0/10 Painless Guarantee",
      description: "Our signature procedure praised repeatedly in over 200+ patient reviews. Utilizing high-torque German rotary endodontic motors and digital apex locators to eliminate infection in a single visit without pain.",
      benefits: [
        "Single-sitting completion in most cases",
        "Computer-assisted local anesthesia delivery",
        "Preserves natural tooth with permanent bio-seal",
        "Zero post-op soreness with precision apex locator"
      ]
    },
    {
      id: "general-dentistry",
      name: "Comprehensive Checkup & Digital X-Rays",
      category: "Preventive",
      priceRange: "₹300 – ₹500",
      duration: "20 – 30 Minutes",
      isPopular: false,
      painLevel: "Completely Painless",
      description: "Ultra-low radiation high-resolution digital RVG radiography paired with 32-point comprehensive oral screening for cavities, gums, and oral mucosal health.",
      benefits: [
        "Instant on-screen digital radiographic review",
        "Full transparent treatment roadmap",
        "No hidden charges or unnecessary procedures",
        "Oral cancer & gum health screening included"
      ]
    },
    {
      id: "ultrasonic-scaling",
      name: "Ultrasonic Scaling & Deep Polishing",
      category: "Preventive",
      priceRange: "₹1,000 – ₹2,000",
      duration: "30 – 40 Minutes",
      isPopular: true,
      painLevel: "Mild Vibration Only",
      description: "Advanced piezoelectric ultrasonic scaling removes stubborn calculus, nicotine stains, and bacterial biofilm without scratching natural tooth enamel.",
      benefits: [
        "Eliminates bad breath (halitosis)",
        "Stops bleeding and inflamed gums",
        "Restores natural tooth sheen with air polishing",
        "Recommended every 6 months for oral longevity"
      ]
    },
    {
      id: "cosmetic-smile",
      name: "Cosmetic Dentistry & Ceramic Veneers",
      category: "Cosmetic",
      priceRange: "₹4,500 – ₹12,000 / tooth",
      duration: "2 Sessions",
      isPopular: true,
      painLevel: "Zero Pain",
      description: "Custom-sculpted ultra-thin E-max ceramic veneers, gap closures (diastema), and composite bonding engineered to craft your ideal aesthetic smile.",
      benefits: [
        "Natural translucency and lifelike light reflection",
        "Stain-resistant high-grade ceramic",
        "Corrects chipped, discolored, or uneven teeth",
        "Digitally previewed before permanent bonding"
      ]
    },
    {
      id: "dental-implants",
      name: "Titanium & Zirconia Dental Implants",
      category: "Surgical",
      priceRange: "₹25,000 – ₹45,000",
      duration: "2 – 3 Sittings",
      isPopular: false,
      painLevel: "Mild soreness for 24h",
      description: "Permanent replacement for missing teeth using world-class grade-5 titanium implants that integrate securely into jawbone, restoring 100% chew power.",
      benefits: [
        "Lifetime structural durability",
        "Prevents jaw bone loss and facial sagging",
        "Looks, chews, and cleans exactly like natural teeth",
        "No damage to adjacent healthy teeth"
      ]
    },
    {
      id: "pediatric-care",
      name: "Pediatric & Gentle Child Dental Care",
      category: "Pediatric",
      priceRange: "₹1,200 – ₹3,500",
      duration: "30 – 45 Minutes",
      isPopular: true,
      painLevel: "100% Fear-Free",
      description: "Specialized gentle dentistry for kids by Dr. Riya. From pain-free pulpectomies and pit-and-fissure sealants to fluoride varnish and space maintainers.",
      benefits: [
        "Calm, playful, anxiety-free atmosphere",
        "Child-sized instruments and fruity topical gels",
        "Prevents early milk tooth loss and crowding",
        "Builds positive dental confidence for life"
      ]
    },
    {
      id: "teeth-whitening",
      name: "In-Clinic Laser Teeth Whitening",
      category: "Cosmetic",
      priceRange: "₹5,000 – ₹9,000",
      duration: "45 Minutes",
      isPopular: false,
      painLevel: "Zero Pain",
      description: "Professional medical-grade hydrogen peroxide activated by cool blue LED light to lift up to 6–8 shades of staining in a single lunch-break visit.",
      benefits: [
        "Instant shade transformation in 45 minutes",
        "Includes enamel de-sensitizing shield",
        "Safe on gum tissue with liquid dam barrier",
        "Long-lasting brightness for weddings & events"
      ]
    },
    {
      id: "zirconia-crowns",
      name: "CAD/CAM Zirconia Crowns & Bridges",
      category: "Restorative",
      priceRange: "₹6,000 – ₹14,000",
      duration: "2 Sittings",
      isPopular: true,
      painLevel: "Painless",
      description: "Computer-milled monolithic multilayered zirconia crowns engineered with diamond precision for unbreakable strength and natural enamel luster.",
      benefits: [
        "10 to 15-year warranty against chipping",
        "100% metal-free, no black gum line borders",
        "Superior bite force resistance for molars",
        "Biocompatible with zero allergic reaction"
      ]
    }
  ] as ServiceItem[],
  testimonials: [
    {
      id: "1",
      patientName: "Senthil Kumar",
      location: "Kuyavarpalayam, Puducherry",
      rating: 5,
      treatment: "Single-Sitting Root Canal",
      quote: "I was terrified of getting a root canal after hearing horror stories from friends. Dr. Logesh explained every step before touching a tooth. The entire procedure was completely painless—literally zero discomfort! Within 45 minutes I was out and back at work.",
      highlight: "Literally zero discomfort during root canal",
      date: "August 2026"
    },
    {
      id: "2",
      patientName: "Meenakshi Ramanathan",
      location: "Lawspet, Puducherry",
      rating: 5,
      treatment: "Family Dental Care & Same-Day Visit",
      quote: "What sets iSMILE apart is their punctuality and availability. We walked in on a Sunday evening after my husband had severe toothache. We were attended to within 5 minutes without any waiting room delay. Open till 10 PM every day is a lifesaver for working parents.",
      highlight: "Attended within 5 minutes on a Sunday evening",
      date: "July 2026"
    },
    {
      id: "3",
      patientName: "Dr. Arvind Swaminathan",
      location: "Heritage Town, Puducherry",
      rating: 5,
      treatment: "Sterile Environment & Zirconia Crown",
      quote: "As a physician myself, I inspect clinical hygiene rigorously. iSMILE's autoclave sterilization, fresh pouch seals, and clinical sanitation are second to none in Puducherry. Dr. Logesh's crown fitting was micron-perfect on the very first try.",
      highlight: "Clinical sanitation is second to none",
      date: "June 2026"
    },
    {
      id: "4",
      patientName: "Pooja & Ananya (Age 7)",
      location: "Mudaliarpet, Puducherry",
      rating: 5,
      treatment: "Pediatric Care & Cavity Fillings",
      quote: "My 7-year-old daughter used to cry at the mere sight of a clinic door. Dr. Riya spoke to her with so much warmth, showing her the 'magic water' and tooth mirror first. Ananya actually asked when we can visit Dr. Riya again! iSMILE is now our permanent family clinic.",
      highlight: "My 7-year-old daughter loves visiting Dr. Riya",
      date: "August 2026"
    },
    {
      id: "5",
      patientName: "Vijay Anand",
      location: "White Town, Puducherry",
      rating: 5,
      treatment: "Cosmetic Veneers & Smile Makeover",
      quote: "I had a prominent gap between my front teeth and yellow stains from coffee. Dr. Riya gave me a complete smile makeover with composite bonding and laser whitening. The results are unreal and so natural. The staff treats you with unmatched respect.",
      highlight: "Complete smile makeover with natural results",
      date: "May 2026"
    }
  ] as Testimonial[],
  faqs: [
    {
      q: "Is root canal treatment really painless at iSMILE?",
      a: "Yes, 100%. We utilize computer-guided micro-anesthesia, high-speed rotary instrumentation, and precision electronic apex locators under Dr. Logesh. Most patients report feeling absolutely no pain during or after the procedure."
    },
    {
      q: "Do you accept same-day walk-in appointments?",
      a: "Yes! iSMILE is open all 7 days a week from 9:00 AM to 10:00 PM. We reserve dedicated emergency and walk-in slots every single day so you never suffer with toothache."
    },
    {
      q: "Where is the clinic located in Puducherry?",
      a: "We are centrally located at 216, Lenin St, Kuyavarpalayam, Puducherry, 605013. We have dedicated two-wheeler and four-wheeler parking right in front of the clinic."
    },
    {
      q: "Who will treat me at iSMILE?",
      a: "All treatments are personally carried out by our senior specialists: Dr. Logesh (Lead Endodontist & Implantologist) and Dr. Riya (Chief Aesthetic Dentist & Pediatric Specialist)."
    },
    {
      q: "Are the prices transparent with no hidden costs?",
      a: "Every single treatment plan includes a written itemized estimate before any procedure begins. You will never encounter surprise add-ons or unnecessary procedures."
    }
  ],
  agencyCredit: {
    name: "VELURYN AGNECY",
    url: "https://velurynagnecy.com"
  }
};
