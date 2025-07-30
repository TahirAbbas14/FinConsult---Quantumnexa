import { Card, CardContent } from "@/components/ui/card"
import { Calendar, FileText, TrendingUp } from "lucide-react"

export default function HowItWorksSection() {
  const steps = [
    {
      step: 1,
      icon: Calendar,
      title: "Book a Free Consultation",
      description: "Schedule a 30-minute call to discuss your financial goals and current situation.",
      color: "bg-blue-500",
    },
    {
      step: 2,
      icon: FileText,
      title: "Get Personalized Strategy",
      description: "Receive a custom financial plan designed specifically for your needs and timeline.",
      color: "bg-green-500",
    },
    {
      step: 3,
      icon: TrendingUp,
      title: "Start Building Wealth",
      description: "Implement your plan with ongoing support and regular check-ins to stay on track.",
      color: "bg-purple-500",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600">Simple steps to transform your financial future</p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div key={index} className="relative">
                <Card className="border-0 shadow-lg text-center h-full">
                  <CardContent className="p-8">
                    {/* Step number */}
                    <div
                      className={`${step.color} text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-6`}
                    >
                      {step.step}
                    </div>

                    {/* Icon */}
                    <div className="mb-6">
                      <IconComponent className="h-12 w-12 text-gray-600 mx-auto" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>

                {/* Arrow (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-0.5 bg-gray-300"></div>
                    <div className="w-0 h-0 border-l-4 border-l-gray-300 border-t-2 border-t-transparent border-b-2 border-b-transparent ml-6 -mt-1"></div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
