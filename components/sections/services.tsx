import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, TrendingUp, Umbrella, CreditCard, ArrowRight } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      icon: PieChart,
      title: "Comprehensive Financial Planning",
      description:
        "Complete financial roadmaps including budgeting, savings strategies, and goal-based planning tailored to your unique situation.",
      features: ["Cash Flow Analysis", "Goal Setting & Prioritization", "Risk Assessment", "Tax Planning Integration"],
      color: "navy",
    },
    {
      icon: TrendingUp,
      title: "Investment Management",
      description:
        "Professional portfolio construction and management designed for long-term growth and risk-adjusted returns.",
      features: ["Asset Allocation", "Portfolio Rebalancing", "Tax-Loss Harvesting", "Performance Monitoring"],
      color: "green",
    },
    {
      icon: Umbrella,
      title: "Retirement Planning",
      description:
        "Strategic retirement planning to ensure you can maintain your desired lifestyle throughout your golden years.",
      features: ["401(k) Optimization", "IRA Strategies", "Social Security Planning", "Healthcare Cost Planning"],
      color: "blue",
    },
    {
      icon: CreditCard,
      title: "Debt Management",
      description:
        "Smart debt elimination strategies that help you become debt-free while building wealth simultaneously.",
      features: ["Debt Consolidation", "Payment Strategies", "Credit Optimization", "Mortgage Planning"],
      color: "purple",
    },
  ]

  const colorClasses = {
    navy: {
      bg: "bg-gradient-to-br from-navy-50 to-navy-100",
      border: "border-navy-200",
      icon: "bg-gradient-to-r from-navy-600 to-navy-700 text-white",
      hover: "hover:border-navy-400 hover:shadow-xl",
      gradient: "from-navy-500 to-navy-600",
      text: "text-navy-900",
    },
    green: {
      bg: "bg-gradient-to-br from-green-50 to-green-100",
      border: "border-green-200",
      icon: "bg-gradient-to-r from-green-600 to-green-700 text-white",
      hover: "hover:border-green-400 hover:shadow-xl",
      gradient: "from-green-500 to-green-600",
      text: "text-green-900",
    },
    blue: {
      bg: "bg-gradient-to-br from-blue-50 to-blue-100",
      border: "border-blue-200",
      icon: "bg-gradient-to-r from-blue-600 to-blue-700 text-white",
      hover: "hover:border-blue-400 hover:shadow-xl",
      gradient: "from-blue-500 to-blue-600",
      text: "text-blue-900",
    },
    purple: {
      bg: "bg-gradient-to-br from-purple-50 to-purple-100",
      border: "border-purple-200",
      icon: "bg-gradient-to-r from-purple-600 to-purple-700 text-white",
      hover: "hover:border-purple-400 hover:shadow-xl",
      gradient: "from-purple-500 to-purple-600",
      text: "text-purple-900",
    },
  }

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="bg-navy-100 text-navy-900 px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
            Our Services
          </span>
          <h2 className="text-4xl font-bold text-navy-900 mb-6">Comprehensive Financial Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From planning to execution, we provide the expertise and guidance you need to achieve your financial goals
            with confidence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            const colors = colorClasses[service.color as keyof typeof colorClasses]

            return (
              <Card
                key={index}
                className={`${colors.bg} border-2 ${colors.border} ${colors.hover} transition-all duration-500 hover:scale-102 relative overflow-hidden group`}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-current to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-current to-transparent rounded-full translate-y-12 -translate-x-12"></div>
                </div>

                <CardHeader className="pb-4 relative z-10">
                  <div className={`${colors.icon} p-3 sm:p-4 rounded-xl w-fit mb-4 sm:mb-6 shadow-lg`}>
                    <IconComponent className="h-8 w-8 sm:h-10 sm:w-10" />
                  </div>
                  <CardTitle className={`text-xl sm:text-2xl font-bold ${colors.text} mb-4`}>{service.title}</CardTitle>
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg">{service.description}</p>
                </CardHeader>
                <CardContent className="pt-0 relative z-10">
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-700 bg-white/50 rounded-lg p-3 backdrop-blur-sm">
                        <div className={`w-2 h-2 bg-gradient-to-r ${colors.gradient} rounded-full mr-3 flex-shrink-0`}></div>
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Price Badge */}
                  <div className="mb-6">
                    <div className={`inline-flex items-center bg-gradient-to-r ${colors.gradient} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg`}>
                      <span>Starting from $99/month</span>
                    </div>
                  </div>

                  <div className={`flex items-center ${colors.text} font-semibold hover:${colors.text.replace('900', '700')} cursor-pointer group/btn transition-all duration-300`}>
                    <span className="mr-3 text-lg">Get Started</span>
                    <div className={`bg-gradient-to-r ${colors.gradient} p-2 rounded-full group-hover/btn:scale-110 transition-transform duration-300`}>
                      <ArrowRight className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
