import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo + Copy */}
          <div className="flex flex-col justify-between">
            <div className="mb-4">
              <Logo width="100px" />
            </div>
            <p className="text-sm text-gray-500">
              © 2025 DevUI. All rights reserved.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase text-gray-600">
              Company
            </h3>
            <ul className="space-y-2">
              <li><Link className="text-gray-700 hover:text-gray-900" to="/">Features</Link></li>
              <li><Link className="text-gray-700 hover:text-gray-900" to="/">Pricing</Link></li>
              <li><Link className="text-gray-700 hover:text-gray-900" to="/">Affiliate Program</Link></li>
              <li><Link className="text-gray-700 hover:text-gray-900" to="/">Press Kit</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase text-gray-600">
              Support
            </h3>
            <ul className="space-y-2">
              <li><Link className="text-gray-700 hover:text-gray-900" to="/">Account</Link></li>
              <li><Link className="text-gray-700 hover:text-gray-900" to="/">Help</Link></li>
              <li><Link className="text-gray-700 hover:text-gray-900" to="/">Contact Us</Link></li>
              <li><Link className="text-gray-700 hover:text-gray-900" to="/">Customer Support</Link></li>
            </ul>
          </div>

          {/* Legals */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase text-gray-600">
              Legals
            </h3>
            <ul className="space-y-2">
              <li><Link className="text-gray-700 hover:text-gray-900" to="/">Terms & Conditions</Link></li>
              <li><Link className="text-gray-700 hover:text-gray-900" to="/">Privacy Policy</Link></li>
              <li><Link className="text-gray-700 hover:text-gray-900" to="/">Licensing</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
