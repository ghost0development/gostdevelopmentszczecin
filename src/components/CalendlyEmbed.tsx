"use client";

import { useEffect, useRef } from "react";

interface CalendlyEmbedProps {
  url: string;
}

export default function CalendlyEmbed({ url }: CalendlyEmbedProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const iframe = document.createElement("iframe");
    iframe.src = `${url}?embed_domain=localhost&embed_type=Inline&hide_landing_page_details=1&hide_event_type_details=0&hide_branding=1`;
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    iframe.title = "Calendly booking";

    ref.current.appendChild(iframe);

    return () => {
      if (ref.current && iframe.parentNode === ref.current) {
        ref.current.removeChild(iframe);
      }
    };
  }, [url]);

  return <div ref={ref} className="w-full h-full" />;
}
