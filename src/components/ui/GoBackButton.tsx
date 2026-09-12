import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface GoBackButtonProps {
  label?: string;
  fallbackPath?: string;
  className?: string;
}

export default function GoBackButton({
  label = 'Go Back',
  fallbackPath = '/',
  className = '',
}: GoBackButtonProps) {
  const navigate = useNavigate();

  const handleGoBack = () => {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate(fallbackPath);
    }
  };

  return (
    <button
      onClick={handleGoBack}
      type="button"
      className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9CA3AF] hover:text-white bg-[#12161F]/90 hover:bg-[#1C2230] border border-[#232838] hover:border-[#12B886]/50 px-4 py-2.5 rounded-xl shadow-md backdrop-blur-md transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#12B886]/40 ${className}`}
      aria-label="Go back to previous page"
    >
      <ArrowLeft className="w-4 h-4 text-[#12B886]" />
      <span>{label}</span>
    </button>
  );
}
