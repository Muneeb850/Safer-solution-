import React from 'react';

interface BrandLogoProps {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function BrandLogo({ variant = 'dark', size = 'md', className = '' }: BrandLogoProps) {
  const isLight = variant === 'light';

  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Precision Ribbon "S" Icon matching the design */}
      <div className={`relative flex items-center justify-center shrink-0 ${iconSizes[size]}`}>
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
        >
          {/* Top curve ribbon */}
          <path
            d="M26.5 7.5C23.2 4.2 17.5 4.5 13.2 8.2C9.5 11.4 8.5 16 11.5 19.5C14.2 22.5 19 21.8 23.5 24C27.2 25.8 28.5 29.5 26.2 32.2C23.8 35 18.2 35.2 13 32.2"
            stroke={isLight ? '#FFFFFF' : '#0F172A'}
            strokeWidth="3.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Accent dynamic fold */}
          <path
            d="M9.5 15.5C10.5 11 15 7.5 20.5 7.5C24.5 7.5 27.5 9.8 27.5 13.5C27.5 18 21.5 19.5 16.5 21.5C11.5 23.5 8.5 27 10.5 31C11.8 33.5 15.5 35 19.5 34.5"
            stroke={isLight ? '#E2E8F0' : '#1E293B'}
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.9"
          />
          {/* Subtle center gold node highlight */}
          <circle
            cx="18.5"
            cy="20.5"
            r="1.8"
            fill="#D4AF37"
          />
        </svg>
      </div>

      {/* Typography: "Safer Solution" */}
      <span
        className={`font-['Plus_Jakarta_Sans'] font-bold tracking-tight leading-none ${textSizes[size]} ${
          isLight ? 'text-white' : 'text-[#0F172A]'
        }`}
      >
        Safer Solution
      </span>
    </div>
  );
}
