// src/components/WhatsAppButton.js
import React, { useState } from 'react';

const WhatsAppButton = () => {
  const [hovered, setHovered] = useState(false);
  const phoneNumber = "7396160440"; // replace with your WhatsApp number
  const message = "Hello! I'm interested in your scrap products."; // default message

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed bottom-6 right-6 flex items-center gap-2 p-4"
    >
      {/* Hover details div */}
      <div
        className={`transition-transform duration-300 transform ${
          hovered ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        } bg-green-600 text-white p-3 rounded-l-lg shadow-lg`}
      >
        <p className="text-sm">Chat with us on WhatsApp</p>
      </div>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            d="M12 0C5.373 0 0 5.373 0 12c0 2.131.557 4.125 1.617 5.9L.006 24l6.276-1.582A11.965 11.965 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm6.366 17.879c-.265.748-1.465 1.384-2.005 1.469-.517.082-1.179.113-1.89-.122-.432-.137-1.005-.309-1.734-.6-3.062-1.258-5.044-4.363-5.19-4.579-.147-.217-1.238-1.652-1.238-3.151 0-1.5.775-2.243 1.05-2.558.275-.314.603-.392.803-.392h.58c.183 0 .444-.067.692.52.257.595.875 2.071.95 2.218.076.146.125.32.021.517-.108.211-.193.304-.354.487-.165.19-.295.336-.449.54-.147.193-.308.4-.132.737.176.337.779 1.278 1.672 2.065 1.15 1.01 2.115 1.326 2.453 1.476.339.151.537.126.735-.076.197-.2.85-.994 1.078-1.335.228-.341.453-.282.756-.168.3.113 1.893.895 2.213 1.057.317.161.528.248.61.388.086.14.086.778-.18 1.526z"
          />
        </svg>
      </a>
    </div>
  );
};

export default WhatsAppButton;
