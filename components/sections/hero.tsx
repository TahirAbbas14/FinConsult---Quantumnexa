"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Award } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex items-center bg-gray-50 py-12 lg:py-0 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          {/* Content */}
          <div>
            {/* Trust Badge */}
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Award className="h-4 w-4 mr-2" />
              CFP® Certified Financial Planner
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-navy-900 leading-tight mb-4">
              Build Lasting
              <span className="text-green-700"> Financial Security</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 max-w-xl">
              Professional financial planning services designed to help you achieve your goals with confidence.
              Personalized strategies for wealth building, retirement planning, and financial independence.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="bg-navy-900 hover:bg-navy-800 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-lg w-full sm:w-auto"
              >
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("resource")}
                className="border-2 border-navy-900 text-navy-900 hover:bg-navy-50 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-lg w-full sm:w-auto"
              >
                <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Free Planning Guide
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 border-t border-gray-200">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-navy-900 mb-1">500+</div>
                <div className="text-xs text-gray-600 font-medium">Clients Served</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-navy-900 mb-1">$50M+</div>
                <div className="text-xs text-gray-600 font-medium">Assets Managed</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-navy-900 mb-1">15+</div>
                <div className="text-xs text-gray-600 font-medium">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative mt-8 lg:mt-0">
            <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6">
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 sm:p-8 text-center">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-green-600 rounded-full mx-auto flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Financial Planning</h3>
                  <p className="text-gray-600 text-sm">Professional guidance for your financial future</p>
                </div>
                
                <div className="grid grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                  <div className="bg-white rounded-lg p-2 sm:p-3 shadow-sm">
                    <div className="text-green-600 font-semibold">Investment</div>
                    <div className="text-gray-500">Portfolio Management</div>
                  </div>
                  <div className="bg-white rounded-lg p-2 sm:p-3 shadow-sm">
                    <div className="text-blue-600 font-semibold">Retirement</div>
                    <div className="text-gray-500">Future Planning</div>
                  </div>
                  <div className="bg-white rounded-lg p-2 sm:p-3 shadow-sm">
                    <div className="text-purple-600 font-semibold">Tax</div>
                    <div className="text-gray-500">Optimization</div>
                  </div>
                  <div className="bg-white rounded-lg p-2 sm:p-3 shadow-sm">
                    <div className="text-orange-600 font-semibold">Insurance</div>
                    <div className="text-gray-500">Protection</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 bg-green-600 text-white p-2 sm:p-3 rounded-lg shadow-lg">
              <div className="text-sm sm:text-lg font-bold">127%</div>
              <div className="text-xs opacity-90">Portfolio Growth</div>
            </div>

            <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-navy-900 text-white p-2 sm:p-3 rounded-lg shadow-lg">
              <div className="text-sm sm:text-lg font-bold">18mo</div>
              <div className="text-xs opacity-90">Debt Freedom</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
