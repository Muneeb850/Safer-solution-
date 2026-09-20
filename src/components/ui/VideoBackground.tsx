import React, { useRef, useEffect } from 'react';

interface VideoBackgroundProps {
  /** A direct video URL (CDN or /public path) */
  src: string;
  /** Fallback poster image while the video loads */
  poster?: string;
  /** Tailwind/CSS opacity class for the overlay. Default: "opacity-60" */
  overlayOpacity?: string;
  /** Extra className for the overlay <div> */
  overlayClassName?: string;
  /** Extra className on the root wrapper */
  className?: string;
}

/**
 * Renders a full-bleed, autoplay, muted, looping video behind its siblings.
 * Usage: wrap any section with `relative overflow-hidden` and drop this in as
 * the first child before your content.
 */
export default function VideoBackground({
  src,
  poster,
  overlayOpacity = 'opacity-60',
  overlayClassName = '',
  className = '',
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Re-attempt play on visibility (handles iOS low-power restrictions)
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Video Layer */}
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover pointer-events-none select-none ${className}`}
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      {/* Dark overlay to keep text legible */}
      <div
        className={`absolute inset-0 bg-[#030712] ${overlayOpacity} pointer-events-none ${overlayClassName}`}
      />
    </>
  );
}
