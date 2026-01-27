"use client";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/260972441871"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Career Compass ZM on WhatsApp"
      className="
        fixed bottom-6 right-6 z-50
        flex items-center justify-center
        w-14 h-14
        rounded-full
        shadow-xl
        hover:scale-110
        transition
      "
      style={{ backgroundColor: "#25D366" }}
    >
      {/* WhatsApp SVG */}
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12.04 2C6.56 2 2.08 6.48 2.08 11.96c0 1.9.5 3.75 1.46 5.38L2 22l4.82-1.51a9.93 9.93 0 005.22 1.45h.01c5.48 0 9.96-4.48 9.96-9.96C22 6.48 17.52 2 12.04 2zm5.8 14.46c-.24.68-1.4 1.3-1.94 1.38-.5.07-1.14.1-1.84-.12-.42-.13-.96-.31-1.65-.6-2.91-1.26-4.8-4.15-4.95-4.34-.14-.19-1.18-1.57-1.18-3s.75-2.14 1.01-2.44c.27-.3.59-.38.79-.38.2 0 .4 0 .57.01.18.01.42-.07.66.5.24.58.82 2 .89 2.15.07.15.11.33.02.52-.08.19-.12.33-.25.5-.12.17-.26.38-.37.51-.12.14-.25.29-.11.56.14.27.64 1.05 1.38 1.7.95.85 1.76 1.12 2.02 1.25.26.13.41.11.56-.07.15-.19.64-.75.81-1.01.17-.26.34-.22.57-.14.24.08 1.52.72 1.78.85.26.13.44.2.5.31.06.11.06.68-.18 1.36z"/>
      </svg>
    </a>
  );
}