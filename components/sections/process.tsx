import { Card, CardContent } from "@/components/ui/card"
import { Calendar, FileText, TrendingUp, CheckCircle } from "lucide-react"

export default function ProcessSection() {
  const steps = [
    {
      step: 1,
      icon: Calendar,
      title: "Initial Consultation",
      description:
        "We begin with a comprehensive 60-minute consultation to understand your financial goals, current situation, and concerns. This meeting is completely free with no obligations.",
      duration: "60 minutes",
      deliverable: "Financial Goals Assessment",
    },
    {
      step: 2,
      icon: FileText,
      title: "Custom Financial Plan",
      description:
        "Based on our consultation, I'll create a detailed, personalized financial plan that addresses your specific needs, timeline, and risk tolerance.",
      duration: "1-2 weeks",
      deliverable: "Comprehensive Financial Plan",
    },
    {
      step: 3,
      icon: TrendingUp,
      title: "Implementation & Monitoring",
      description:
        "We'll implement your financial strategy together and provide ongoing monitoring, adjustments, and support as your life and goals evolve.",
      duration: "Ongoing",
      deliverable: "Quarterly Reviews & Updates",
    },
  ]

  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
            Our Process
          </span>
          <h2 className="text-4xl font-bold text-navy-900 mb-6">How We Work Together</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven three-step process ensures you receive personalized financial guidance that evolves with your
            needs.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div key={index} className="relative">
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-16 bg-gray-300 hidden lg:block"></div>
                )}

                <Card className="border-2 border-gray-200 hover:border-navy-300 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                      {/* Step Number & Icon */}
                      <div className="flex-shrink-0">
                        <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                          <div className="bg-navy-900 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold">
                            {step.step}
                          </div>
                          <div className="bg-navy-100 p-3 rounded-lg">
                            <IconComponent className="h-8 w-8 text-navy-700" />
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-grow">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                          <h3 className="text-2xl font-bold text-navy-900 mb-2 lg:mb-0">{step.title}</h3>
                          <div className="flex flex-col lg:items-end space-y-2">
                            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                              {step.duration}
                            </span>
                            <span className="text-sm text-gray-600">
                              <strong>Deliverable:</strong> {step.deliverable}
                            </span>
                          </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed text-lg">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-navy-900 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-navy-100 mb-6 max-w-2xl mx-auto">
            Schedule your free consultation today and take the first step toward achieving your financial goals.
          </p>
          <div className="flex items-center justify-center space-x-2 text-green-300">
            <CheckCircle className="h-5 w-5" />
            <span className="font-medium">No cost, no obligation, no pressure</span>
          </div>
        </div>
      </div>
    </section>
  )
}
