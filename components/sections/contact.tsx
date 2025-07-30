"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, CheckCircle, Phone, Mail, MapPin, Award } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const consultationBenefits = [
    {
      icon: Calendar,
      title: "Comprehensive Financial Review",
      description: "Complete analysis of your current financial situation, goals, and challenges",
    },
    {
      icon: Clock,
      title: "Personalized Action Plan",
      description: "Custom roadmap with specific next steps tailored to your unique circumstances",
    },
    {
      icon: Award,
      title: "Expert CFP® Guidance",
      description: "Professional insights and recommendations from a Certified Financial Planner®",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
            Schedule Your Consultation
          </span>
          <h2 className="text-4xl font-bold text-navy-900 mb-6">Ready to Take Control of Your Financial Future?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Book your complimentary 60-minute consultation and discover exactly how to achieve your financial goals with
            confidence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Benefits & Info Side */}
          <div>
            <h3 className="text-2xl font-bold text-navy-900 mb-8">What You'll Get in Your Free Consultation:</h3>

            {/* Consultation Benefits */}
            <div className="space-y-6 mb-12">
              {consultationBenefits.map((benefit, index) => {
                const IconComponent = benefit.icon
                return (
                  <Card key={index} className="border-2 border-gray-200 hover:border-navy-300 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-navy-100 p-3 rounded-lg">
                          <IconComponent className="h-6 w-6 text-navy-700" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-navy-900 mb-2">{benefit.title}</h4>
                          <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Contact Information */}
            <Card className="border-2 border-navy-200 bg-navy-50">
              <CardHeader>
                <CardTitle className="text-navy-900">Prefer to Connect Directly?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center text-gray-700">
                  <Mail className="h-5 w-5 mr-3 text-navy-700" />
                  <span>sarah@wealthguard.com</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Phone className="h-5 w-5 mr-3 text-navy-700" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <MapPin className="h-5 w-5 mr-3 text-navy-700" />
                  <span>Serving clients nationwide via secure video calls</span>
                </div>
              </CardContent>
            </Card>

            {/* Guarantee */}
            <div className="mt-8 bg-green-50 border-2 border-green-200 rounded-xl p-6">
              <div className="flex items-center mb-3">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                <h4 className="font-bold text-green-800">Our Promise to You</h4>
              </div>
              <p className="text-green-700">
                Your consultation is completely free with no obligation. We'll provide valuable insights regardless of
                whether you decide to work with us.
              </p>
            </div>
          </div>

          {/* Form Side */}
          <div>
            <Card className="border-2 border-gray-200 shadow-lg">
              <CardHeader className="bg-navy-900 text-white rounded-t-lg">
                <CardTitle className="text-2xl text-center">Schedule Your Free Consultation</CardTitle>
                <p className="text-navy-100 text-center">Take the first step toward financial confidence</p>
              </CardHeader>
              <CardContent className="p-8">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="h-12 border-2 border-gray-200 focus:border-navy-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="h-12 border-2 border-gray-200 focus:border-navy-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <Input
                        type="tel"
                        name="phone"
                        placeholder="Enter your phone number (optional)"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="h-12 border-2 border-gray-200 focus:border-navy-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tell us about your financial goals
                      </label>
                      <Textarea
                        name="message"
                        placeholder="What are your main financial goals or concerns? (optional)"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="border-2 border-gray-200 focus:border-navy-500 resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full h-12 bg-green-600 hover:bg-green-700 text-white font-medium text-lg rounded-lg"
                      disabled={isLoading}
                    >
                      {isLoading ? "Scheduling Your Consultation..." : "Schedule My Free Consultation"}
                    </Button>
                    <p className="text-xs text-gray-500 text-center">
                      By submitting this form, you agree to receive communication from us. We respect your privacy and
                      will never share your information.
                    </p>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-navy-900 mb-2">Thank You!</h3>
                    <p className="text-gray-600 mb-4">
                      I'll be in touch within 24 hours to schedule your free consultation.
                    </p>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <p className="text-sm text-green-800">
                        <strong>What's Next:</strong> You'll receive a confirmation email with available time slots and
                        a brief questionnaire to help us make the most of our time together.
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
