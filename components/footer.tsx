// components/Footer.js
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">About Us</h3>
            <p className="text-sm">
              We are a locally owned barber shop providing top-notch haircuts and grooming services. Come for the cut, stay for the vibe.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">Quick Links</h3>
            <ul>
              <li><a href="/" className="text-sm hover:text-gray-400">Home</a></li>
              <li><a href="/reservation" className="text-sm hover:text-gray-400">Book Appointment</a></li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">Contact Info</h3>
            <p className="text-sm">123 Barber St., City, State, 12345</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
            <p className="text-sm">Email: info@barbershop.com</p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 text-center">
          <a href="https://facebook.com" className="text-white mx-2 hover:text-gray-400" target="_blank" rel="noopener noreferrer">
            <span className="inline-block bg-gray-600 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 2H6a2 2 0 00-2 2v12a2 2 0 002 2h6v-6h-2v-2h2V9a4 4 0 014-4h3v2h-3a2 2 0 00-2 2v2h2l-1 2h-1v6h3a2 2 0 002-2V4a2 2 0 00-2-2z"/>
              </svg>
            </span>
          </a>
          <a href="https://instagram.com" className="text-white mx-2 hover:text-gray-400" target="_blank" rel="noopener noreferrer">
            <span className="inline-block bg-gray-600 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4h16v16H4z"/>
              </svg>
            </span>
          </a>
          <a href="https://twitter.com" className="text-white mx-2 hover:text-gray-400" target="_blank" rel="noopener noreferrer">
            <span className="inline-block bg-gray-600 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 8c0 5.523-4.477 10-10 10S1 13.523 1 8c0-2.24.738-4.294 2-6L6 3l1 2s2-1 3 1c2 0 2 3 1 4s0 4 2 4l1-3s3-1 3 3c0 2.34 1 2 3 3c3 0 4-4 4-5z"/>
              </svg>
            </span>
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2024  BIG Barber Shop. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
