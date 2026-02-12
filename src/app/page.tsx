import Link from "next/link";
import {
  Server,
  Cloud,
  Code,
  Settings,
  Network,
  Shield,
  ArrowRight,
  CheckCircle,
  Users,
  Target,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: Network,
    title: "Telecom Solutions",
    description: "AAA systems, RADIUS servers, 3G/4G/5G network solutions, billing systems, and carrier-grade infrastructure.",
  },
  {
    icon: Settings,
    title: "Solution Integration",
    description: "Enterprise integration, OSS/BSS integration, API development, and legacy system modernization.",
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description: "Cloud migration, multi-cloud architecture, infrastructure management, and FinOps optimization.",
  },
  {
    icon: Code,
    title: "DevOps Services",
    description: "CI/CD pipelines, Kubernetes orchestration, infrastructure as code, and SRE practices.",
  },
  {
    icon: Server,
    title: "Software Development",
    description: "Custom web applications, enterprise solutions, microservices architecture, and API development.",
  },
  {
    icon: Shield,
    title: "IT Consulting",
    description: "Technology strategy, digital transformation, architecture review, and infrastructure planning.",
  },
];

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "100+", label: "Projects Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "24/7", label: "Support" },
];

const whyChooseUs = [
  "Telecom-Grade Expertise - Carrier-grade AAA, RADIUS, 3G/4G/5G solutions",
  "Deep Integration Capabilities - OSS/BSS, enterprise, and third-party systems",
  "End-to-End Solutions - From strategy to implementation to support",
  "Founder-Led Quality - Direct involvement ensures excellence",
  "Cost-Effective - Enterprise quality at competitive pricing",
  "Future-Ready - Focus on scalable, cloud-native solutions",
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative gradient-bg text-white py-24 lg:py-40 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-300 rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-sm font-medium text-white">IT Services & Consulting Excellence</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight animate-fade-in-up">
              Empowering Digital
              <br />
              <span className="text-cyan-300">Transformation</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delay-1">
              Telecom Solutions, Cloud Infrastructure, DevOps Excellence, and Innovation-Driven IT Services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-2">
              <Link
                href="/services"
                className="group bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 inline-flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="group border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 80C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center group hover:scale-110 transition-transform duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-cyan-600 font-semibold text-sm uppercase tracking-wider">What We Offer</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 mt-2">Our Services</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive IT solutions tailored to accelerate your digital transformation journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-cyan-200 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="gradient-bg w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/services"
              className="group gradient-bg text-white px-10 py-4 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 inline-flex items-center shadow-xl hover:shadow-2xl hover:scale-105"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-cyan-600 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 mt-2">
                Why Choose DnP Technologies?
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                With over 15 years of combined experience in telecom and IT infrastructure, we deliver
                carrier-grade solutions with enterprise-level quality at competitive pricing.
              </p>
              <ul className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <li
                    key={item}
                    className="flex items-start group hover:translate-x-2 transition-transform duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CheckCircle className="h-6 w-6 text-cyan-500 mr-3 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="group bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-blue-100 hover:-translate-y-2">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-gray-900 text-lg">Expert Team</h3>
                <p className="text-sm text-gray-600 mt-2">Certified professionals</p>
              </div>
              <div className="group bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-cyan-100 hover:-translate-y-2">
                <Target className="h-12 w-12 text-cyan-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-gray-900 text-lg">Client Focus</h3>
                <p className="text-sm text-gray-600 mt-2">Personalized attention</p>
              </div>
              <div className="group bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-cyan-100 hover:-translate-y-2">
                <Zap className="h-12 w-12 text-cyan-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-gray-900 text-lg">Fast Delivery</h3>
                <p className="text-sm text-gray-600 mt-2">Quick turnaround time</p>
              </div>
              <div className="group bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-blue-100 hover:-translate-y-2">
                <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-gray-900 text-lg">Quality Assured</h3>
                <p className="text-sm text-gray-600 mt-2">Enterprise-grade solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative gradient-bg py-24 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-300 rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Let&apos;s discuss how our telecom, cloud, and DevOps expertise can accelerate your digital journey.
          </p>
          <Link
            href="/contact"
            className="group bg-white text-blue-600 px-10 py-4 rounded-lg font-bold hover:bg-blue-50 transition-all duration-300 inline-flex items-center shadow-2xl hover:scale-105"
          >
            Get in Touch
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
