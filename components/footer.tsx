"use client"

import Link from "next/link"
import { Shield, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-white p-3 rounded-lg">
                <Shield className="h-6 w-6 text-navy-900" />
              </div>
              <div>
                <span className="text-2xl font-bold text-white">FinConsult</span>
                <div className="text-xs text-navy-300">Financial Planning</div>
              </div>
            </div>
            <p className="text-navy-200 mb-8 max-w-md leading-relaxed">
              Professional financial planning services helping individuals and families build lasting wealth and achieve
              financial security through personalized strategies and expert guidance.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center text-navy-200">
                <Phone className="h-4 w-4 mr-3" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center text-navy-200">
                <Mail className="h-4 w-4 mr-3" />
                <span>sarah@finconsult.com</span>
              </div>
              <div className="flex items-center text-navy-200">
                <MapPin className="h-4 w-4 mr-3" />
                <span>Serving clients nationwide</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <Link href="#" className="bg-navy-800 hover:bg-navy-700 p-3 rounded-lg transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="bg-navy-800 hover:bg-navy-700 p-3 rounded-lg transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="bg-navy-800 hover:bg-navy-700 p-3 rounded-lg transition-colors">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-navy-200 hover:text-white transition-colors"
                >
                  About Sarah
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-navy-200 hover:text-white transition-colors"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("process")}
                  className="text-navy-200 hover:text-white transition-colors"
                >
                  Our Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="text-navy-200 hover:text-white transition-colors"
                >
                  Client Stories
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Get Started</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-navy-200 hover:text-white transition-colors"
                >
                  Free Consultation
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("resource")}
                  className="text-navy-200 hover:text-white transition-colors"
                >
                  Free Planning Kit
                </button>
              </li>
              <li>
                <Link href="#" className="text-navy-200 hover:text-white transition-colors">
                  Financial Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-navy-200 hover:text-white transition-colors">
                  Investment Resources
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-navy-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-navy-300 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} FinConsult Financial Planning. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center space-x-6 text-sm">
              <Link href="#" className="text-navy-300 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-navy-300 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-navy-300 hover:text-white transition-colors">
                Disclosure
              </Link>
              <span className="text-navy-400">
                Investment advice is not guaranteed. Past performance does not guarantee future results.
              </span>
            </div>
          </div>

          {/* Credentials */}
          <div className="mt-6 pt-6 border-t border-navy-800 text-center">
            <p className="text-navy-300 text-sm">
              Sarah Johnson is a CERTIFIED FINANCIAL PLANNER™ professional and fiduciary advisor. Securities offered
              through registered investment advisor.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
