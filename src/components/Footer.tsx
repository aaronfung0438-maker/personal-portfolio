import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">
            © 2025 Your Name. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#home" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#home" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
