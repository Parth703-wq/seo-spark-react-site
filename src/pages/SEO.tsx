
import React from 'react';
import Navigation from '../components/Navigation';

const SEO = () => {
  const features = [
    {
      title: "Keyword Research & Analysis",
      description: "Advanced AI-powered keyword research to find high-converting, low-competition keywords for your niche.",
      icon: "🔍"
    },
    {
      title: "On-Page Optimization",
      description: "Comprehensive on-page SEO optimization including meta tags, headers, and content structure.",
      icon: "📝"
    },
    {
      title: "Technical SEO Audit",
      description: "Deep technical analysis of your website's performance, speed, and search engine compatibility.",
      icon: "⚙️"
    },
    {
      title: "Competitor Analysis",
      description: "Detailed competitor research to identify opportunities and stay ahead of the competition.",
      icon: "📊"
    },
    {
      title: "Content Strategy",
      description: "AI-generated content strategies that drive organic traffic and improve search rankings.",
      icon: "✍️"
    },
    {
      title: "Performance Tracking",
      description: "Real-time monitoring and reporting of your SEO performance with actionable insights.",
      icon: "📈"
    }
  ];

  const benefits = [
    { metric: "300%", label: "Average Traffic Increase" },
    { metric: "85%", label: "First Page Rankings" },
    { metric: "60%", label: "Faster Results" },
    { metric: "24/7", label: "AI Monitoring" }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 10 keywords tracking",
        "Basic SEO audit",
        "Monthly reports",
        "Email support",
        "Content suggestions"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 100 keywords tracking",
        "Advanced SEO audit",
        "Weekly reports",
        "Priority support",
        "Content calendar",
        "Competitor analysis",
        "Technical SEO fixes"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited keywords tracking",
        "Complete SEO suite",
        "Daily reports",
        "Dedicated support",
        "Custom content strategy",
        "Advanced competitor insights",
        "White-label reports",
        "API access"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-[#1a1b3a]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Dominate Search Rankings with{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI-Powered SEO
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your online presence with cutting-edge SEO optimization. Our AI-driven platform 
            delivers measurable results and sustainable growth for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg">
              Start Free Analysis
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200">
              View Case Studies
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  {benefit.metric}
                </div>
                <div className="text-gray-300 text-sm">{benefit.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Complete SEO{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Solution
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to improve your search engine rankings and drive organic traffic
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Simple,{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Transparent Pricing
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your needs. All plans include a 14-day free trial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:transform hover:scale-105 ${
                plan.popular 
                  ? 'border-purple-500 shadow-lg shadow-purple-500/20' 
                  : 'border-gray-700/50 hover:border-purple-500/50'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-end justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <span className="text-green-400 mr-3">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white hover:scale-105'
                    : 'border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-2xl p-12 border border-purple-500/30">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Boost Your Rankings?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that trust our AI-powered SEO platform to drive results.
            </p>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg">
              Start Your Free Trial
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/50 border-t border-gray-800 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            SaaSFlow
          </div>
          <p className="text-gray-400 mb-6">
            Empowering businesses with AI-powered SEO solutions
          </p>
          <div className="flex justify-center space-x-6 text-gray-400">
            <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SEO;
