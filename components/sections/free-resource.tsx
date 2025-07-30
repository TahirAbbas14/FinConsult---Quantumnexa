"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, CheckCircle } from "lucide-react"
import Image from "next/image"

export default function FreeResourceSection() {
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

  return (
    <section id="free-resource" className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Get Your Free Wealth Building Guide</h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Download "The 5-Step Wealth Starter Guide" and learn the exact framework I use to help clients build
              lasting financial security.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              {[
                "Create a bulletproof emergency fund",
                "Optimize your investment strategy",
                "Accelerate debt payoff plans",
                "Build multiple income streams",
                "Plan for early retirement",
              ].map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-300 mr-3 flex-shrink-0" />
                  <span className="text-blue-100">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div>
            <Card className="shadow-2xl">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4">
                  <Image
                    src="/placeholder.svg?height=120&width=120"
                    alt="Wealth Building Guide"
                    width={120}
                    height={120}
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <CardTitle className="text-2xl text-gray-900">Download Your Free Guide</CardTitle>
              </CardHeader>
              <CardContent>
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="h-12"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-lg"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        "Sending..."
                      ) : (
                        <>
                          <Download className="mr-2 h-5 w-5" />
                          Get My Free Guide
                        </>
                      )}
                    </Button>
                    <p className="text-xs text-gray-500 text-center">No spam, ever. Unsubscribe anytime.</p>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Check Your Email!</h3>
                    <p className="text-gray-600">
                      Your free guide is on its way. Don't forget to check your spam folder.
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
