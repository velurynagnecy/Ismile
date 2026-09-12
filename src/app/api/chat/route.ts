import { NextRequest, NextResponse } from 'next/server';
import { CLINIC_DATA } from '@/lib/clinic-data';
import { checkCalendarAvailability } from '@/lib/calendar';

// Simple in-memory rate limiter per IP (resets every minute)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const MAX_REQUESTS_PER_MINUTE = 15;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + 60 * 1000 });
    return false;
  }

  if (record.count >= MAX_REQUESTS_PER_MINUTE) {
    return true;
  }

  record.count += 1;
  return false;
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'anonymous-client';

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          error: "Too many messages sent. Please wait a moment or call our desk directly at +91 73589 32267.",
          isRateLimited: true,
        },
        { status: 429 }
      );
    }

    const { messages, userMessage, checkCalendarForDate } = await req.json();
    const queryText = (userMessage || '').trim();

    // 1. Detect Emergency / Urgent Symptoms
    const emergencyKeywords = [
      'severe pain', 'bleeding', 'swollen', 'swelling', 'trauma', 'accident', 
      'broken tooth', 'unbearable', 'agony', 'knocked out', 'pus', 'infection',
      'emergency', 'urgent', 'crying in pain'
    ];
    const isEmergency = emergencyKeywords.some(kw => queryText.toLowerCase().includes(kw));

    // 2. Check Calendar Availability if asked or prompted
    let calendarContext = "";
    let detectedSlots: string[] = [];
    const dateQueryMatch = queryText.match(/today|tomorrow|monday|tuesday|wednesday|thursday|friday|saturday|sunday|slot|available|appointment|time/i);
    
    if (checkCalendarForDate || dateQueryMatch) {
      const calData = await checkCalendarAvailability(checkCalendarForDate);
      detectedSlots = calData.availableSlots;
      calendarContext = `Real-Time Calendar Status for ${calData.date}: Open consultation slots include ${detectedSlots.slice(0, 4).join(', ')}. Clinic is open 9:00 AM – 10:00 PM.`;
    }

    // Check for Groq API Key
    const groqKey = process.env.GROQ_API_KEY;

    if (!groqKey) {
      console.warn("[iSMILE Priya Chat] GROQ_API_KEY is not configured in .env.local. Providing accurate verified clinic fallback response.");

      // Intelligent rule-based clinic response fallback
      if (isEmergency) {
        return NextResponse.json({
          reply: `Dental emergencies require immediate hands-on attention. Dr. Logesh and Dr. Riya prioritize urgent cases with zero wait time. Please call our direct clinic line right now or tap WhatsApp below. We are located at 216 Lenin St, open until 10:00 PM today.`,
          isEmergency: true,
          suggestedActions: [
            { label: "Call Doctor Now", url: `tel:${CLINIC_DATA.rawPhone}`, type: "call" },
            { label: "WhatsApp Emergency", url: CLINIC_DATA.whatsappUrl, type: "whatsapp" }
          ],
          availableSlots: detectedSlots
        });
      }

      let fallbackReply = `Hello! I'm Priya, front-desk receptionist at iSMILE Dental Clinic. We are open all 7 days from 9:00 AM to 10:00 PM at 216 Lenin St, Kuyavarpalayam, Puducherry.`;
      
      if (queryText.toLowerCase().includes('root canal') || queryText.toLowerCase().includes('rct')) {
        fallbackReply += ` Dr. Logesh specializes in single-sitting painless root canals (₹2,500 – ₹5,500) using German rotary tech. Would you like to reserve a consultation?`;
      } else if (queryText.toLowerCase().includes('price') || queryText.toLowerCase().includes('cost') || queryText.toLowerCase().includes('fee')) {
        fallbackReply += ` Consultations are ₹300–₹500 with digital X-rays. Scaling is ₹1,000–₹2,000, and Zirconia crowns are ₹6,000–₹14,000 with transparent upfront pricing.`;
      } else if (detectedSlots.length > 0) {
        fallbackReply += ` Today we have open slots available around ${detectedSlots.slice(0, 3).join(', ')}. Tap below to confirm on WhatsApp or our Book Now page!`;
      } else {
        fallbackReply += ` How can I assist you today? You can ask about our treatments, check open slots with Dr. Logesh and Dr. Riya, or get directions.`;
      }

      return NextResponse.json({
        reply: fallbackReply,
        isEmergency: false,
        availableSlots: detectedSlots,
        suggestedActions: [
          { label: "Book Appointment", url: "/book", type: "link" },
          { label: "Chat on WhatsApp", url: CLINIC_DATA.whatsappUrl, type: "whatsapp" }
        ]
      });
    }

    // System prompt with strict clinic guardrails
    const systemPrompt = `You are Priya, the friendly, professional, and warm front-desk receptionist at iSMILE DENTAL CLINIC in Puducherry, India.

CRITICAL INSTRUCTIONS & RULES:
1. CLINIC FACTS (USE ONLY THESE DETAILS, NEVER INVENT CLINIC FACTS):
   - Clinic Name: iSMILE DENTAL CLINIC
   - Address: 216, Lenin St, Kuyavarpalayam, Puducherry, 605013 (Landmark: Near Kuyavarpalayam main junction)
   - Phone: +91 73589 32267
   - Hours: Open all 7 days a week, 9:00 AM – 10:00 PM (open late for working professionals)
   - Lead Doctors: 
     * Dr. Logesh (Lead Dental Surgeon & Endodontist, 12+ yrs exp, specialist in single-sitting painless Root Canals and Implants)
     * Dr. Riya (Chief Aesthetic Dentist & Pediatric Specialist, 10+ yrs exp, specialist in digital smile design, veneers, and gentle child dentistry)
   - Google Rating: 5.0 stars with 234+ verified reviews (praised for 100% painless treatment, zero wait time, and sterile environment)
   - Key Pricing:
     * Consultation & Digital X-Ray: ₹300 – ₹500
     * Single-Sitting Painless Root Canal (RCT): ₹2,500 – ₹5,500
     * Ultrasonic Teeth Scaling & Polishing: ₹1,000 – ₹2,000
     * CAD/CAM Zirconia Crowns: ₹6,000 – ₹14,000
     * Cosmetic Dental Veneers: ₹4,500 – ₹12,000 / tooth
     * Dental Implants: ₹25,000 – ₹45,000
     * Pediatric Care & Milk Tooth Treatments: ₹1,200 – ₹3,500

2. APPOINTMENTS & CALENDAR:
   - When asked about availability or appointment times, quote the open slots provided in context: ${calendarContext || "Slots available daily between 9:00 AM and 10:00 PM"}.
   - Explain that to lock in their slot, they can use the "Book Now" page or send a quick WhatsApp to +91 73589 32267. You do NOT book or create calendar events yourself.

3. MEDICAL & EMERGENCY GUARDRAIL:
   - You are a receptionist, NOT a diagnosing dentist. Never attempt to diagnose complex pathology or prescribe medications.
   - If the patient mentions severe pain, bleeding, swelling, sudden dental trauma, or asks urgent medical questions, IMMEDIATELY advise them to call Dr. Logesh / Dr. Riya at +91 73589 32267 or visit 216 Lenin St right away.

4. TONE:
   - Warm, respectful, concise, professional Indian hospitality. Keep replies under 3-4 sentences so visitors on mobile can read easily.`;

    // Call Groq API
    const groqResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${groqKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'groq/compound',
        messages: [
          { role: 'system', content: systemPrompt },
          ...(messages || []).slice(-6),
          { role: 'user', content: queryText }
        ],
        temperature: 0.4,
        max_tokens: 300,
      }),
    });

    if (!groqResponse.ok) {
      const err = await groqResponse.text();
      console.error("[iSMILE Groq Error]:", err);
      return NextResponse.json({
        reply: `I'm right here at the iSMILE front desk! We are open until 10:00 PM at 216 Lenin St, Kuyavarpalayam. For immediate booking or inquiries, you can reach Dr. Logesh & Dr. Riya directly at +91 73589 32267 or tap WhatsApp below.`,
        isEmergency,
        availableSlots: detectedSlots,
        suggestedActions: [
          { label: "Book Appointment", url: "/book", type: "link" },
          { label: "WhatsApp Direct", url: CLINIC_DATA.whatsappUrl, type: "whatsapp" }
        ]
      });
    }

    const groqData = await groqResponse.json();
    const assistantReply = groqData.choices?.[0]?.message?.content || "Thank you for contacting iSMILE Dental Clinic!";

    return NextResponse.json({
      reply: assistantReply,
      isEmergency,
      availableSlots: detectedSlots,
      suggestedActions: isEmergency ? [
        { label: "Call Doctor Now (+91 73589 32267)", url: `tel:${CLINIC_DATA.rawPhone}`, type: "call" },
        { label: "WhatsApp Emergency", url: CLINIC_DATA.whatsappUrl, type: "whatsapp" }
      ] : [
        { label: "Book Appointment", url: "/book", type: "link" },
        { label: "WhatsApp Desk", url: CLINIC_DATA.whatsappUrl, type: "whatsapp" }
      ]
    });

  } catch (error) {
    console.error("[iSMILE Chat API Error]:", error);
    return NextResponse.json(
      {
        reply: "Welcome to iSMILE Dental Clinic! We are open daily from 9:00 AM to 10:00 PM. Please call us at +91 73589 32267 or reach us on WhatsApp for immediate appointments.",
        suggestedActions: [
          { label: "Call Now", url: `tel:${CLINIC_DATA.rawPhone}`, type: "call" },
          { label: "WhatsApp Us", url: CLINIC_DATA.whatsappUrl, type: "whatsapp" }
        ]
      },
      { status: 200 }
    );
  }
}
