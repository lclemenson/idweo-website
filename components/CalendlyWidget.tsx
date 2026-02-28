'use client';

import Script from 'next/script';

export const CalendlyWidget = () => {
  return (
    <div className="lg:col-span-2">
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/lionel-clemenson/30min?hide_event_type_details=1"
        style={{ minWidth: '320px', height: '700px' }}
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
    </div>
  );
};
