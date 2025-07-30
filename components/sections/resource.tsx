"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, CheckCircle, FileText, TrendingUp, Shield, Target, Calculator } from "lucide-react"
import Image from "next/image"

export default function ResourceSection() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitted(true)
    setIsLoading(false)
  }

  const benefits = [
    { icon: Target, text: "Step-by-step wealth building framework" },
    { icon: Calculator, text: "Financial planning worksheets and calculators" },
    { icon: TrendingUp, text: "Investment strategy guidelines" },
    { icon: Shield, text: "Risk management checklists" },
    { icon: FileText, text: "Retirement planning roadmap" },
  ]

  return (
    <section id="resource" className="py-20 bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div>
            <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 inline-block">
              Free Resource
            </span>

            <h2 className="text-4xl font-bold mb-6">The Complete Financial Planning Starter Kit</h2>

            <p className="text-xl text-navy-100 leading-relaxed mb-8">
              Download our comprehensive 52-page guide that includes everything you need to start building wealth, plus
              bonus worksheets and calculators to track your progress.
            </p>

            {/* What's Included */}
            <div className="space-y-4 mb-8">
              <h4 className="text-lg font-semibold text-white mb-4">What's Included:</h4>
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon
                return (
                  <div key={index} className="flex items-center">
                    <div className="bg-green-600 p-2 rounded-lg mr-4">
                      <IconComponent className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-navy-100">{benefit.text}</span>
                  </div>
                )
              })}
            </div>

            {/* Bonus Section */}
            <div className="bg-green-600 rounded-xl p-6 mb-8">
              <h4 className="font-bold text-white mb-2">🎁 Bonus Materials Included:</h4>
              <ul className="text-green-100 space-y-1">
                <li>• Personal Budget Spreadsheet Template</li>
                <li>• Investment Risk Assessment Quiz</li>
                <li>• Retirement Planning Calculator</li>
                <li>• Debt Payoff Strategy Worksheet</li>
              </ul>
              <div className="text-sm text-green-200 mt-3">
                <strong>Total Value: $197 - Yours Free</strong>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div>
            <Card className="border-2 border-gray-200 shadow-2xl">
              <CardHeader className="text-center bg-gray-50 rounded-t-lg">
                <div className="mx-auto mb-4">
                  <Image
                    src="/placeholder.svg?height=150&width=120"
                    alt="Financial Planning Guide"
                    width={120}
                    height={150}
                    className="rounded-lg shadow-lg border-2 border-white"
                  />
                </div>
                <CardTitle className="text-2xl text-navy-900">Download Your Free Starter Kit</CardTitle>
                <p className="text-gray-600">52 pages of actionable financial strategies</p>
              </CardHeader>
              <CardContent className="p-8">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <Input
                        type="text"
                        placeholder="Enter your full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="h-12 border-2 border-gray-200 focus:border-navy-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="h-12 border-2 border-gray-200 focus:border-navy-500"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full h-12 bg-green-600 hover:bg-green-700 text-white text-lg font-medium rounded-lg"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        "Sending Your Kit..."
                      ) : (
                        <>
                          <Download className="mr-2 h-5 w-5" />
                          Get My Free Starter Kit
                        </>
                      )}
                    </Button>
                    <div className="text-center">
                      <p className="text-xs text-gray-500">
                        We respect your privacy. No spam, ever. Unsubscribe anytime.
                      </p>
                      <div className="flex items-center justify-center mt-2 text-xs text-gray-600">
                        <Shield className="h-3 w-3 mr-1" />
                        <span>Your information is 100% secure</span>
                      </div>
                    </div>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-navy-900 mb-2">Check Your Email!</h3>
                    <p className="text-gray-600">
                      Your Financial Planning Starter Kit is on its way. Don't forget to check your spam folder.
                    </p>
                    <div className="mt-4 p-4 bg-green-50 rounded-lg">
                      <p className="text-sm text-green-800">
                        <strong>Next Step:</strong> Schedule your free consultation to discuss how to implement these
                        strategies.
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
