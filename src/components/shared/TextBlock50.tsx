// create a text block component that displays a title, description, and image

import React from 'react';

export default function TextBlock50() {
  return (
    <div>
                   <div className="text-black">
                {/* Left column content goes here */}
                <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                <p className="mb-4">
                  Reach out to us for any questions, feedback, or support. We are here to help you succeed!
                </p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Email: <a href="mailto:support@3lcrm.com" className="text-blue-600 underline">support@3lcrm.com</a></li>
                  <li>Phone: <a href="tel:+1234567890" className="text-blue-600 underline">+1 (234) 567-890</a></li>
                  <li>Address: 123 Main St, Suite 100, Anytown, USA</li>
                </ul>
              </div>
    </div>
  );
}