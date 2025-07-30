"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, CheckCircle, Phone } from "lucide-react"

export default function BookCallSection() {
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

  return (
    <section id="book-call" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Ready to Take Control of Your Finances?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Book your free 30-minute consultation and discover how to build lasting wealth
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Benefits */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">What You'll Get in Your Free Consultation:</h3>

            <div className="space-y-6">
              {[
                {
                  icon: Calendar,
                  title: "Financial Health Assessment",
                  description: "Complete review of your current financial situation and goals",
                },
                {
                  icon: Clock,
                  title: "Personalized Action Plan",
                  description: "Specific next steps tailored to your unique circumstances",
                },
                {
                  icon: Phone,
                  title: "Expert Guidance",
                  description: "Professional insights from a Certified Financial Planner®",
                },
              ].map((benefit, index) => {
                const IconComponent = benefit.icon
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Calendly Alternative */}
            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Prefer to Schedule Online?</h4>
              <p className="text-gray-600 mb-4">Use our online calendar to pick a time that works for you.</p>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Calendar className="mr-2 h-4 w-4" />
                View Available Times
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Book Your Free Consultation</CardTitle>
              </CardHeader>
              <CardContent>
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your Name *"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email Address *"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <Input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number (Optional)"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="h-12"
                      />
                    </div>
                    <div>
                      <Textarea
                        name="message"
                        placeholder="What are your main financial goals or concerns?"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-lg"
                      disabled={isLoading}
                    >
                      {isLoading ? "Submitting..." : "Book My Free Consultation"}
                    </Button>
                    <p className="text-xs text-gray-500 text-center">
                      By submitting, you agree to receive communication from us. We respect your privacy and will never
                      share your information.
                    </p>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Thank You!</h3>
                    <p className="text-gray-600">
                      I'll be in touch within 24 hours to schedule your free consultation.
                    </p>
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
