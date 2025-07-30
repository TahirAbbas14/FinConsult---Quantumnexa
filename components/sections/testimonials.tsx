import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Michael Chen",
      role: "Software Engineer",
      company: "Tech Startup",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "Sarah's comprehensive approach to financial planning transformed our family's financial future. Her strategic guidance helped us increase our savings rate by 40% while still enjoying life. We're now on track to retire 5 years earlier than originally planned.",
      rating: 5,
      result: "40% Savings Increase",
      beforeAfter: { before: "$2,500", after: "$3,500" },
      timeframe: "6 months",
      category: "Savings",
    },
    {
      name: "Jennifer Martinez",
      role: "Marketing Director",
      company: "Fortune 500",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "Working with Sarah gave me the confidence and clarity I needed to make smart investment decisions. My portfolio has grown consistently, and I finally understand my financial strategy. Her expertise is invaluable.",
      rating: 5,
      result: "25% Portfolio Growth",
      beforeAfter: { before: "$150K", after: "$187K" },
      timeframe: "12 months",
      category: "Investment",
    },
    {
      name: "David Thompson",
      role: "Business Owner",
      company: "Local Business",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "The debt elimination plan Sarah created was a game-changer. I paid off $85,000 in debt in just 18 months while building my emergency fund. Her systematic approach made what seemed impossible, achievable.",
      rating: 5,
      result: "$85K Debt Eliminated",
      beforeAfter: { before: "$85K", after: "$0" },
      timeframe: "18 months",
      category: "Debt",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
            Client Success Stories
          </span>
          <h2 className="text-4xl font-bold text-navy-900 mb-6">Real Results from Real Clients</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our personalized financial planning approach has helped clients achieve their goals and build
            lasting wealth.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-102 relative overflow-hidden group bg-gradient-to-br from-white to-gray-50"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-green-400 to-transparent rounded-full -translate-y-12 translate-x-12"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-navy-400 to-transparent rounded-full translate-y-8 -translate-x-8"></div>
              </div>

              <CardContent className="p-8 relative z-10">
                {/* Category Badge */}
                <div className="mb-6">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                    testimonial.category === 'Savings' ? 'bg-green-100 text-green-800' :
                    testimonial.category === 'Investment' ? 'bg-blue-100 text-blue-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {testimonial.category}
                  </span>
                </div>

                {/* Quote Icon */}
                <div className="mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-navy-500 to-navy-600 rounded-full flex items-center justify-center">
                    <Quote className="h-6 w-6 text-white" />
                  </div>
                </div>

                {/* Stars */}
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">"{testimonial.content}"</p>

                {/* Before/After Results */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4 mb-6 border border-green-200">
                  <div className="text-center mb-3">
                    <span className="text-sm text-gray-600 font-medium">Results in {testimonial.timeframe}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-center">
                      <div className="text-xs text-gray-500 mb-1">Before</div>
                      <div className="text-lg font-bold text-red-600">{testimonial.beforeAfter.before}</div>
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-red-500 to-green-500 rounded-full" style={{width: '100%'}}></div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-gray-500 mb-1">After</div>
                      <div className="text-lg font-bold text-green-600">{testimonial.beforeAfter.after}</div>
                    </div>
                  </div>
                </div>

                {/* Result Badge */}
                <div className="mb-6">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg inline-flex items-center">
                    <span className="mr-2">🎯</span>
                    {testimonial.result}
                  </div>
                </div>

                {/* Author */}
                <div className="flex items-center bg-white/70 rounded-xl p-4 backdrop-blur-sm">
                  <div className="w-16 h-16 rounded-full mr-4 shadow-lg overflow-hidden border-2 border-white">
                    <div className={`w-full h-full flex items-center justify-center text-white font-bold text-lg ${
                      testimonial.name === 'Michael Chen' ? 'bg-gradient-to-br from-blue-500 to-blue-600' :
                      testimonial.name === 'Jennifer Martinez' ? 'bg-gradient-to-br from-purple-500 to-purple-600' :
                      'bg-gradient-to-br from-green-500 to-green-600'
                    }`}>
                      {testimonial.name === 'Michael Chen' ? (
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                        </svg>
                      ) : testimonial.name === 'Jennifer Martinez' ? (
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                        </svg>
                      ) : (
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                        </svg>
                      )}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900 text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 font-medium">{testimonial.role}</p>
                    <p className="text-xs text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-gradient-to-r from-navy-900 to-navy-800 rounded-3xl p-12 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-400 to-transparent rounded-full translate-y-12 -translate-x-12"></div>
          </div>
          
          <div className="relative z-10">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Trusted by Hundreds of Families</h3>
              <p className="text-navy-200">Real results that speak for themselves</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-navy-200 font-medium">Client Satisfaction</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-4xl font-bold mb-2">$2.3M</div>
                <div className="text-navy-200 font-medium">Average Wealth Created</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-navy-200 font-medium">Years Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-navy-200 font-medium">Families Served</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
