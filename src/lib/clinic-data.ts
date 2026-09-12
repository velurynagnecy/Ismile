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
  name: "DIGISMILE Advanced Digital Dental Clinic and Implant Centre",
  tagline: "Advanced Digital Dentistry & Expert Implantology.",
  shortAddress: "1st Floor, No 58, Muthu Mariamman Kovil St, Heritage Town, Puducherry",
  fullAddress: "1st Floor, No 58, Muthu Mariamman Kovil St, Heritage Town, Puducherry, 605001",
  phone: "+91 87786 25635",
  rawPhone: "+918778625635",
  whatsappNumber: "918778625635",
  whatsappUrl: "https://wa.me/918778625635?text=Hi%20DIGISMILE%20Dental%20Clinic%2C%20I%20would%20like%20to%20book%20an%20appointment.",
  hours: "Mon-Sat: 6:30 PM – 9:30 PM (Closed Sunday)",
  hoursDetail: {
    monday: "6:30 PM – 9:30 PM",
    tuesday: "6:30 PM – 9:30 PM",
    wednesday: "6:30 PM – 9:30 PM",
    thursday: "6:30 PM – 9:30 PM",
    friday: "6:30 PM – 9:30 PM",
    saturday: "6:30 PM – 9:30 PM",
    sunday: "Closed",
  },
  rating: {
    score: 5.0,
    reviewCount: 132,
    platform: "Google Verified Reviews",
    percentageRecommendation: "100%",
  },
  doctors: [
    {
      name: "Dr. G. Sandhosh",
      role: "Lead Dental Surgeon & Implantologist",
      qualifications: "BDS, MDS",
      experience: "Advanced Implant Specialist",
      specialties: [
        "Digital Dental Implants & Bone Grafting",
        "Full Mouth Rehabilitation",
        "Single-Sitting Root Canal",
        "Surgical Extractions"
      ],
      bio: "Dr. G. Sandhosh brings expert digital dentistry and precision implantology to Heritage Town. He is highly praised for taking the time to thoroughly explain every step of the treatment and precautions to his patients, successfully handling complex implant cases that were rushed or denied elsewhere.",
      quote: "Every patient deserves to fully understand their treatment plan. We believe in transparency, advanced technology, and ensuring no one leaves without a confident, healthy smile.",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop"
    }
  ] as Doctor[],
  services: [
    {
      id: "dental-implants",
      name: "Titanium & Digital Dental Implants",
      category: "Surgical",
      priceRange: "Custom Estimate",
      duration: "2 – 3 Sittings",
      isHighlighted: true,
      isPopular: true,
      painLevel: "Mild soreness for 24h",
      description: "Permanent replacement for missing teeth using world-class implants that integrate securely into the jawbone, handled expertly by Dr. Sandhosh.",
      benefits: [
        "Handled properly even if denied elsewhere",
        "Prevents jaw bone loss and facial sagging",
        "Looks, chews, and cleans exactly like natural teeth",
        "Thorough explanation of all precautions"
      ]
    },
    {
      id: "root-canal",
      name: "Single-Sitting Painless Root Canal (RCT)",
      category: "Restorative",
      priceRange: "Custom Estimate",
      duration: "45 – 60 Minutes",
      isHighlighted: false,
      isPopular: true,
      painLevel: "0/10 Painless Guarantee",
      description: "Utilizing advanced rotary endodontic motors and digital apex locators to eliminate infection safely and comfortably.",
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
      priceRange: "Consultation Fee Applies",
      duration: "20 – 30 Minutes",
      isPopular: false,
      painLevel: "Completely Painless",
      description: "High-resolution digital radiography paired with a comprehensive oral screening. Dr. Sandhosh explains every detail of the findings.",
      benefits: [
        "Instant on-screen digital radiographic review",
        "Full transparent treatment roadmap",
        "Thorough explanation of treatments",
        "Oral cancer & gum health screening included"
      ]
    },
    {
      id: "ultrasonic-scaling",
      name: "Ultrasonic Scaling & Deep Polishing",
      category: "Preventive",
      priceRange: "Custom Estimate",
      duration: "30 – 40 Minutes",
      isPopular: true,
      painLevel: "Mild Vibration Only",
      description: "Advanced piezoelectric ultrasonic scaling removes stubborn calculus, nicotine stains, and bacterial biofilm.",
      benefits: [
        "Eliminates bad breath (halitosis)",
        "Stops bleeding and inflamed gums",
        "Restores natural tooth sheen with air polishing",
        "Recommended every 6 months for oral longevity"
      ]
    },
    {
      id: "zirconia-crowns",
      name: "CAD/CAM Zirconia Crowns & Bridges",
      category: "Restorative",
      priceRange: "Custom Estimate",
      duration: "2 Sittings",
      isPopular: true,
      painLevel: "Painless",
      description: "Computer-milled monolithic multilayered zirconia crowns engineered for unbreakable strength and natural enamel luster.",
      benefits: [
        "Long-lasting durability against chipping",
        "100% metal-free, no black gum line borders",
        "Superior bite force resistance for molars",
        "Biocompatible with zero allergic reaction"
      ]
    }
  ] as ServiceItem[],
  testimonials: [
    {
      id: "1",
      patientName: "Karthik Subramanian",
      location: "Heritage Town, Puducherry",
      rating: 5,
      treatment: "Complex Dental Implant",
      quote: "I was told by another clinic that my case was too complicated and I couldn't get an implant. Dr. Sandhosh took it on, explained the entire procedure step-by-step, and handled it flawlessly. I finally have my smile back!",
      highlight: "Implant care denied elsewhere but handled properly here",
      date: "August 2026"
    },
    {
      id: "2",
      patientName: "Priyanka R.",
      location: "Puducherry",
      rating: 5,
      treatment: "Full Checkup & Scaling",
      quote: "The most modern and well-equipped clinic I have visited in Pondicherry. Dr. Sandhosh provides a very thorough explanation of the treatment and all precautions to take afterward. Highly recommended.",
      highlight: "Thorough explanation of treatment and precautions",
      date: "July 2026"
    },
    {
      id: "3",
      patientName: "Arun Prakash",
      location: "Puducherry",
      rating: 5,
      treatment: "Root Canal Treatment",
      quote: "Very friendly and professional staff. The clinic is spotless and uses advanced digital tools. The doctor made sure I understood exactly what the root canal involved, making me feel completely at ease.",
      highlight: "Modern well-equipped clinic & friendly professional staff",
      date: "June 2026"
    },
    {
      id: "4",
      patientName: "Sowmya N.",
      location: "Muthialpet, Puducherry",
      rating: 5,
      treatment: "Zirconia Crown",
      quote: "My previous dentist rushed through my crown fitting. Dr. Sandhosh did the opposite—he was meticulous, patient, and took the time to ensure the bite was perfect. It's rare to find such dedicated care.",
      highlight: "Patient, meticulous, and never rushes",
      date: "August 2026"
    },
    {
      id: "5",
      patientName: "Rajesh Kannan",
      location: "Puducherry",
      rating: 5,
      treatment: "Implant Consultation",
      quote: "Exceptional digital equipment. Dr. Sandhosh walked me through the 3D scans and explained the implant procedure in a way no other dentist had. The staff were courteous and booking was seamless.",
      highlight: "Exceptional digital equipment and clear explanations",
      date: "May 2026"
    }
  ] as Testimonial[],
  faqs: [
    {
      q: "What makes DIGISMILE's implant treatments different?",
      a: "Dr. G. Sandhosh is an MDS specialist who successfully handles complex implant cases that are often denied or rushed elsewhere. We use advanced digital planning to ensure precise, long-lasting results."
    },
    {
      q: "What are your clinic timings?",
      a: "We are open Monday to Saturday from 6:30 PM to 9:30 PM. We are closed on Sundays. These evening hours are perfect for working professionals to visit after work."
    },
    {
      q: "Where is the clinic located in Puducherry?",
      a: "We are located on the 1st Floor, No 58, Muthu Mariamman Kovil St, Heritage Town, Puducherry, 605001."
    },
    {
      q: "Will the doctor explain the procedure to me?",
      a: "Absolutely. One of our most praised qualities is that Dr. Sandhosh takes the time to provide a thorough explanation of every treatment and all necessary precautions before proceeding."
    },
    {
      q: "Is the clinic equipped with modern technology?",
      a: "Yes, DIGISMILE is an advanced digital dental clinic featuring state-of-the-art diagnostic and surgical equipment for safer, faster, and more comfortable treatments."
    }
  ],
  agencyCredit: {
    name: "VELURYN AGNECY",
    url: "https://velurynagnecy.com"
  }
};
