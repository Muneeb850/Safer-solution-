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
      className={`inline-flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-[#0F172A] bg-white hover:bg-slate-50 border border-slate-200 px-4 py-2 rounded-full shadow-xs transition-all duration-200 active:scale-95 focus:outline-none ${className}`}
      aria-label="Go back to previous page"
    >
      <ArrowLeft className="w-3.5 h-3.5 text-[#0F172A]" />
      <span>{label}</span>
    </button>
  );
}
