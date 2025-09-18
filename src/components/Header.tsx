'use client'; // This is now a client component

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    { name: 'Industrial B2B SEO', href: '/manufacturing/industrial-b2b-seo' },
    { name: 'Supplier Website Development', href: '/manufacturing/supplier-website-development' },
    { name: 'B2B Lead Generation', href: '/manufacturing/b2b-lead-generation' },
  ];

  return (
    <header className="bg-gray-800 text-white p-4 sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="font-bold text-xl">Dhriti Digital</Link>
        <div className="flex items-center space-x-4">
          <Link href="/about" className="p-2 hover:text-gray-300">About</Link>
          <Link href="/work" className="p-2 hover:text-gray-300">Work</Link>
          
          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <Link href="/manufacturing" className="p-2 hover:text-gray-300 flex items-center">
              Services
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </Link>
            {isServicesOpen && (
              <div className="absolute top-full left-0 mt-1 bg-gray-800 rounded-md shadow-lg w-64">
                <ul className="py-1">
                  {services.map((service) => (
                    <li key={service.href}>
                      <Link href={service.href} className="block px-4 py-2 text-sm text-white hover:bg-gray-700">
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <Link href="/blog" className="p-2 hover:text-gray-300">Blog</Link>
          <Link href="/contact" className="p-2 hover:text-gray-300">Contact</Link>
        </div>
      </nav>
    </header>
  );
}