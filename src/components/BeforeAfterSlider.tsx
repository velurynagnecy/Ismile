'use client';

import React, { useState, useRef, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { ChevronsLeftRight, Sparkles } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  beforeLabel?: string;
  afterLabel?: string;
  caseTitle: string;
  caseDescription: string;
  doctorName?: string;
  duration?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt = "Before dental procedure",
  afterAlt = "After dental procedure",
  beforeLabel = "BEFORE TREATMENT",
  afterLabel = "AFTER iSMILE RESTORATION",
  caseTitle,
  caseDescription,
  doctorName = "Dr. Logesh & Dr. Riya",
  duration = "Single Sitting"
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleStopDragging = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleStopDragging);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleStopDragging);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleStopDragging);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleStopDragging);
    };
  }, [isDragging, handleMouseMove, handleTouchMove, handleStopDragging]);

  return (
    <div className="bg-white border border-gray-100 rounded-[2rem] p-4 sm:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
            {duration}
          </span>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-2">
            {caseTitle}
          </h3>
        </div>
        <div className="text-sm font-medium text-gray-500">
          Supervised by: <strong className="text-gray-900">{doctorName}</strong>
        </div>
      </div>

      {/* Comparison Viewport */}
      <div
        ref={containerRef}
        className="relative w-full h-[320px] sm:h-[400px] rounded-2xl overflow-hidden select-none cursor-ew-resize touch-none bg-gray-100"
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
      >
        {/* AFTER Image (Full background) */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={afterImage}
            alt={afterAlt}
            className="w-full h-full object-cover"
          />
          {/* After Badge */}
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-emerald-700 font-semibold text-xs px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5 z-10">
            <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
            {afterLabel}
          </div>
        </div>

        {/* BEFORE Image (Clipped overlay) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="relative w-full h-full" style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}>
            <img
              src={beforeImage}
              alt={beforeAlt}
              className="absolute inset-0 w-full h-full object-cover max-w-none"
              style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
            />
          </div>
          {/* Before Badge */}
          <div className="absolute top-4 left-4 bg-gray-900/90 backdrop-blur-md text-white font-semibold text-xs px-3 py-1.5 rounded-full shadow-sm z-10 whitespace-nowrap">
            {beforeLabel}
          </div>
        </div>

        {/* Divider Handle Line */}
        <div
          className="absolute top-0 bottom-0 w-[3px] bg-white shadow-sm z-20"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Circular Grab Button */}
          <div 
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-gray-400 hover:scale-105 transition-transform"
          >
            <ChevronsLeftRight className="w-5 h-5 stroke-[2]" />
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-sm font-medium text-gray-500">
        <p className="leading-relaxed">
          {caseDescription}
        </p>
        <span className="whitespace-nowrap text-xs font-semibold text-gray-400 bg-gray-50 px-3 py-1.5 rounded-full">
          Drag to Compare
        </span>
      </div>
    </div>
  );
}
