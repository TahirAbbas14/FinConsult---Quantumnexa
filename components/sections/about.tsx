import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, TrendingUp, Shield } from "lucide-react"
import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="bg-gradient-to-br from-navy-50 to-green-50 rounded-2xl p-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-navy-900 rounded-full mx-auto flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-3">Sarah Johnson, CFP®</h3>
                <p className="text-gray-600 mb-6">Certified Financial Planner</p>
                
                <div className="grid grid-cols-2 gap-4 text-sm mb-6">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-navy-600 font-semibold">15+ Years</div>
                    <div className="text-gray-500">Experience</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-green-600 font-semibold">500+</div>
                    <div className="text-gray-500">Clients</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-blue-600 font-semibold">$50M+</div>
                    <div className="text-gray-500">AUM</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-purple-600 font-semibold">CFP®</div>
                    <div className="text-gray-500">Certified</div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-sm text-gray-600 mb-2">Specializations</div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="bg-navy-100 text-navy-800 px-2 py-1 rounded text-xs">Retirement</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Investment</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Tax Planning</span>
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Estate</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Credentials Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white border-4 border-green-600 rounded-xl p-4 shadow-lg">
              <div className="flex items-center space-x-2">
                <Award className="h-6 w-6 text-green-600" />
                <div>
                  <div className="font-bold text-navy-900">CFP® Certified</div>
                  <div className="text-sm text-gray-600">Since 2010</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <div className="mb-6">
              <span className="bg-navy-100 text-navy-900 px-4 py-2 rounded-full text-sm font-medium">
                Meet Your Financial Advisor
              </span>
            </div>

            <h2 className="text-4xl font-bold text-navy-900 mb-6">Sarah Johnson, CFP®</h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              With over 15 years of experience in financial planning, I specialize in helping professionals and families
              build comprehensive wealth strategies. My approach combines proven financial principles with personalized
              guidance tailored to your unique goals and circumstances.
            </p>

            {/* Credentials Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <Card className="border-2 border-gray-100 hover:border-navy-200 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="bg-navy-100 p-2 rounded-lg">
                      <Award className="h-6 w-6 text-navy-900" />
                    </div>
                    <div>
                      <h3 className="font-bold text-navy-900">CFP® Certified</h3>
                      <p className="text-sm text-gray-600">Certified Financial Planner</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-100 hover:border-green-200 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <Users className="h-6 w-6 text-green-700" />
                    </div>
                    <div>
                      <h3 className="font-bold text-navy-900">500+ Clients</h3>
                      <p className="text-sm text-gray-600">Successfully Guided</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-100 hover:border-blue-200 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <TrendingUp className="h-6 w-6 text-blue-700" />
                    </div>
                    <div>
                      <h3 className="font-bold text-navy-900">$50M+ AUM</h3>
                      <p className="text-sm text-gray-600">Assets Under Management</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-100 hover:border-yellow-200 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="bg-yellow-100 p-2 rounded-lg">
                      <Shield className="h-6 w-6 text-yellow-700" />
                    </div>
                    <div>
                      <h3 className="font-bold text-navy-900">Fiduciary</h3>
                      <p className="text-sm text-gray-600">Always in Your Interest</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Professional Memberships */}
            <div className="space-y-3">
              <h4 className="font-semibold text-navy-900 mb-4">Professional Memberships & Recognition</h4>
              <div className="flex flex-wrap gap-3">
                <span className="bg-navy-100 text-navy-900 px-4 py-2 rounded-lg text-sm font-medium">NAPFA Member</span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-lg text-sm font-medium">
                  Featured in Forbes
                </span>
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg text-sm font-medium">
                  Top 1% Advisor
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
