'use client';

import { useEffect, useRef } from 'react';

export const CalendlyWidget = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => {
      if (window.Calendly && containerRef.current) {
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/lionel-clemenson/30min?hide_event_type_details=1',
          parentElement: containerRef.current,
        });
      }
    };

    // If Calendly is already loaded (e.g. from a previous page visit), just init
    if (window.Calendly && containerRef.current) {
      window.Calendly.initInlineWidget({
        url: 'https://calendly.com/lionel-clemenson/30min?hide_event_type_details=1',
        parentElement: containerRef.current,
      });
    } else {
      document.head.appendChild(script);
    }

    return () => {
      // Clean up script if we added it
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="lg:col-span-2">
      <div
        ref={containerRef}
        style={{ minWidth: '320px', height: '700px' }}
      />
    </div>
  );
};

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
      }) => void;
    };
  }
}
