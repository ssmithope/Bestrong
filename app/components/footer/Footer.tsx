import { Twitter, Facebook, Instagram } from 'lucide-react';
import React from 'react';


const Footer = () => {
  return (
    <footer className="mt-16 bg-ui-border py-10">
      <div className="container mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 text-center md:flex-row md:text-left">
        <div className="flex gap-6">
          <a href="#" className="font-medium text-text-main hover:underline">About Us</a>
          <a href="#" className="font-medium text-text-main hover:underline">Contact</a>
        </div>
        <div className="text-sm text-text-main/70">
          <p>© 2024 Handcrafted Haven. All rights reserved.</p>
        </div>
        <div className="flex gap-5">
          <a href="#" aria-label="Twitter"><Twitter className="h-6 w-6 text-text-main hover:text-primary" /></a>
          <a href="#" aria-label="Facebook"><Facebook className="h-6 w-6 text-text-main hover:text-primary" /></a>
          <a href="#" aria-label="Instagram"><Instagram className="h-6 w-6 text-text-main hover:text-primary" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;