'use client';

import React, { useState, useRef, useEffect } from 'react';
import { 
  MessageSquare, X, Send, Phone, MessageCircle, 
  Calendar, Clock, ShieldAlert, Sparkles, MapPin, 
  CheckCircle2, ChevronRight, User
} from 'lucide-react';
import { CLINIC_DATA } from '@/lib/clinic-data';

interface ChatMessage {
  id: string;
  sender: 'user' | 'priya';
  text: string;
  time: string;
  isEmergency?: boolean;
  availableSlots?: string[];
  suggestedActions?: Array<{ label: string; url: string; type: string }>;
}

export default function ReceptionistChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isCheckingCalendar, setIsCheckingCalendar] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      sender: 'priya',
      text: `Vanakkam! I'm Priya, your virtual receptionist at iSMILE Dental Clinic. We're open all 7 days from 9 AM to 10 PM on Lenin St, Kuyavarpalayam. How can I help you today?`,
      time: 'Just now',
      suggestedActions: [
        { label: "Check Open Slots Today", url: "#slots", type: "action" },
        { label: "Root Canal Price", url: "/services", type: "link" },
        { label: "Directions to 216 Lenin St", url: "/contact", type: "link" }
      ]
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [isOpen, messages]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    const isCalendarQuery = /slot|time|available|appointment|today|tomorrow/i.test(text);
    if (isCalendarQuery) {
      setIsCheckingCalendar(true);
    }

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userMessage: text,
          messages: messages.map(m => ({
            role: m.sender === 'user' ? 'user' : 'assistant',
            content: m.text
          }))
        })
      });

      const data = await res.json();

      const assistantMsg: ChatMessage = {
        id: `priya-${Date.now()}`,
        sender: 'priya',
        text: data.reply || "Thank you! Feel free to call us directly at +91 73589 32267.",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isEmergency: data.isEmergency,
        availableSlots: data.availableSlots,
        suggestedActions: data.suggestedActions
      };

      setMessages(prev => [...prev, assistantMsg]);
    } catch (err) {
      console.error("Chat error:", err);
      setMessages(prev => [
        ...prev,
        {
          id: `err-${Date.now()}`,
          sender: 'priya',
          text: `I'm temporarily experiencing a network glitch, but our reception desk is open! Please call Dr. Logesh and Dr. Riya at +91 73589 32267 or message us on WhatsApp.`,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          suggestedActions: [
            { label: "Call +91 73589 32267", url: `tel:${CLINIC_DATA.rawPhone}`, type: "call" },
            { label: "WhatsApp Desk", url: CLINIC_DATA.whatsappUrl, type: "whatsapp" }
          ]
        }
      ]);
    } finally {
      setIsLoading(false);
      setIsCheckingCalendar(false);
    }
  };

  const quickPrompts = [
    "Open consultation slots today?",
    "Is root canal really painless?",
    "What are consultation fees?",
    "Emergency toothache help"
  ];

  return (
    <>
      {/* Floating Launcher Button - Positioned above sticky mobile bar */}
      <div className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-40">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="group flex items-center gap-3 bg-emerald-900 hover:bg-emerald-950 text-white px-4 py-3.5 rounded-full shadow-sharp border-2 border-ink-900 transition-all transform hover:-translate-y-1 active:translate-y-0"
            aria-label="Chat with Priya, iSMILE Receptionist"
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-emerald-700 border-2 border-white flex items-center justify-center font-bold text-white text-base">
                P
              </div>
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-emerald-900 rounded-full animate-pulse" />
            </div>
            <div className="text-left hidden sm:block">
              <div className="text-xs uppercase tracking-wider text-emerald-300 font-bold">Reception Desk</div>
              <div className="text-sm font-black flex items-center gap-1.5">
                Chat with Priya <span className="text-xs bg-accent-gold text-ink-900 px-1.5 py-0.5 rounded font-black">Online</span>
              </div>
            </div>
            <MessageSquare className="w-5 h-5 sm:hidden text-white" />
          </button>
        )}
      </div>

      {/* Floating Chat Modal */}
      {isOpen && (
        <div 
          className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[410px] h-[580px] max-h-[82vh] bg-cream-50 border-4 border-ink-900 rounded-2xl shadow-sharp-lg flex flex-col overflow-hidden font-sans"
        >
          {/* Header */}
          <div className="bg-emerald-950 text-white p-4 border-b-4 border-ink-900 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-11 h-11 rounded-full bg-emerald-800 border-2 border-white flex items-center justify-center font-black text-lg text-white">
                  P
                </div>
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-400 border-2 border-emerald-950 rounded-full" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-black text-base text-white tracking-wide">Priya</h3>
                  <span className="text-[10px] uppercase tracking-wider font-extrabold bg-emerald-600 text-white px-2 py-0.5 rounded">
                    iSMILE Reception
                  </span>
                </div>
                <p className="text-xs text-emerald-200 font-medium">
                  216 Lenin St • Open till 10 PM
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <a
                href={`tel:${CLINIC_DATA.rawPhone}`}
                title="Call Desk"
                className="p-2 text-emerald-300 hover:text-white hover:bg-emerald-800 rounded-lg transition"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-emerald-300 hover:text-white hover:bg-emerald-800 rounded-lg transition"
                aria-label="Close Chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Notice Banner */}
          <div className="bg-emerald-900/10 border-b-2 border-emerald-900/20 px-3 py-1.5 text-xs text-emerald-950 font-bold flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-emerald-700" />
              Open All 7 Days: 9:00 AM – 10:00 PM
            </span>
            <span className="text-[11px] text-emerald-800 font-extrabold">
              5.0★ (234 Reviews)
            </span>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-cream-50">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-xl p-3.5 text-sm leading-relaxed border-2 ${
                    m.sender === 'user'
                      ? 'bg-ink-900 text-white border-ink-900 rounded-br-none'
                      : 'bg-white text-ink-900 border-ink-900 shadow-sm rounded-bl-none font-medium'
                  }`}
                >
                  {m.text}
                </div>

                {/* Available slots preview if returned */}
                {m.availableSlots && m.availableSlots.length > 0 && (
                  <div className="mt-2 w-[85%] bg-emerald-50 border-2 border-emerald-800 rounded-lg p-2.5">
                    <div className="text-xs font-black text-emerald-900 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-emerald-700" /> Verified Open Consultation Slots:
                    </div>
                    <div className="grid grid-cols-2 gap-1.5">
                      {m.availableSlots.slice(0, 4).map((slot, idx) => (
                        <a
                          key={idx}
                          href={`https://wa.me/${CLINIC_DATA.whatsappNumber}?text=Hi%20Priya%2C%20I%20would%20like%20to%20reserve%20the%20${encodeURIComponent(slot)}%20slot%20at%20iSMILE.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-black text-center bg-white hover:bg-emerald-900 hover:text-white border-2 border-emerald-800 py-1 px-2 rounded transition"
                        >
                          {slot} →
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Suggested Action Buttons */}
                {m.suggestedActions && m.suggestedActions.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1.5 max-w-[90%]">
                    {m.suggestedActions.map((action, i) => (
                      <a
                        key={i}
                        href={action.url === '#slots' ? undefined : action.url}
                        onClick={action.url === '#slots' ? () => handleSendMessage("What slots are available today?") : undefined}
                        target={action.type === 'whatsapp' ? '_blank' : undefined}
                        rel={action.type === 'whatsapp' ? 'noopener noreferrer' : undefined}
                        className={`text-xs font-bold px-3 py-1.5 rounded-lg border-2 border-ink-900 transition flex items-center gap-1.5 cursor-pointer ${
                          action.type === 'call'
                            ? 'bg-accent-coral text-white hover:bg-red-700'
                            : action.type === 'whatsapp'
                            ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                            : 'bg-cream-100 text-ink-900 hover:bg-ink-900 hover:text-white'
                        }`}
                      >
                        {action.type === 'call' && <Phone className="w-3 h-3" />}
                        {action.type === 'whatsapp' && <MessageCircle className="w-3 h-3" />}
                        {action.label}
                      </a>
                    ))}
                  </div>
                )}

                <span className="text-[10px] text-ink-600 mt-1 px-1 font-semibold">
                  {m.time}
                </span>
              </div>
            ))}

            {/* Checking Calendar State */}
            {isCheckingCalendar && (
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 bg-emerald-100/80 border border-emerald-700 px-3 py-1.5 rounded-lg w-fit animate-pulse">
                <Calendar className="w-3.5 h-3.5" /> Checking Google Calendar availability...
              </div>
            )}

            {/* Generating response typing indicator */}
            {isLoading && !isCheckingCalendar && (
              <div className="flex items-center gap-2 text-xs font-bold text-ink-700 bg-white border-2 border-ink-900 px-3.5 py-2.5 rounded-xl rounded-bl-none w-fit">
                <span className="w-2 h-2 rounded-full bg-emerald-700 animate-bounce" />
                <span className="w-2 h-2 rounded-full bg-emerald-700 animate-bounce [animation-delay:0.2s]" />
                <span className="w-2 h-2 rounded-full bg-emerald-700 animate-bounce [animation-delay:0.4s]" />
                <span className="ml-1 text-xs">Priya is typing...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick suggestions */}
          <div className="px-3 py-2 bg-cream-100 border-t-2 border-ink-900 flex gap-1.5 overflow-x-auto no-scrollbar">
            {quickPrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(prompt)}
                disabled={isLoading}
                className="whitespace-nowrap text-xs font-bold bg-white text-ink-900 border-2 border-ink-900 hover:bg-emerald-900 hover:text-white px-2.5 py-1 rounded-md transition flex-shrink-0 disabled:opacity-50"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Footer */}
          <div className="p-3 bg-white border-t-2 border-ink-900 flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
              placeholder="Ask Priya about fees, doctors, slots..."
              className="flex-1 bg-cream-50 border-2 border-ink-900 rounded-lg px-3 py-2 text-sm text-ink-900 font-medium placeholder:text-ink-600 focus:outline-none focus:ring-2 focus:ring-emerald-700"
            />
            <button
              onClick={() => handleSendMessage()}
              disabled={isLoading || !inputValue.trim()}
              className="bg-emerald-900 hover:bg-emerald-950 text-white font-black px-4 py-2 rounded-lg border-2 border-ink-900 disabled:opacity-50 transition flex items-center justify-center"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
