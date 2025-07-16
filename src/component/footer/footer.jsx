import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <p className="text-sm">
          © 2025 sky-forcast. All rights reserved.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
}
