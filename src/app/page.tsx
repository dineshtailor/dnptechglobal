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
      <section className="gradient-bg text-white py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Empowering Digital
              <br />
              Transformation
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Telecom Solutions, Cloud Infrastructure, DevOps Excellence, and Innovation-Driven IT Services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
              >
                Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient">{stat.value}</div>
                <div className="text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive IT solutions tailored to accelerate your digital transformation journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="gradient-bg w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="gradient-bg text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose DnP Technologies?
              </h2>
              <p className="text-gray-600 mb-8">
                With over 15 years of combined experience in telecom and IT infrastructure, we deliver
                carrier-grade solutions with enterprise-level quality at competitive pricing.
              </p>
              <ul className="space-y-4">
                {whyChooseUs.map((item) => (
                  <li key={item} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-cyan-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <Users className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900">Expert Team</h3>
                <p className="text-sm text-gray-600 mt-1">Certified professionals</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <Target className="h-10 w-10 text-cyan-500 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900">Client Focus</h3>
                <p className="text-sm text-gray-600 mt-1">Personalized attention</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <Zap className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900">Fast Delivery</h3>
                <p className="text-sm text-gray-600 mt-1">Quick turnaround time</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <Shield className="h-10 w-10 text-cyan-500 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900">Quality Assured</h3>
                <p className="text-sm text-gray-600 mt-1">Enterprise-grade solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-bg py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our telecom, cloud, and DevOps expertise can accelerate your digital journey.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
          >
            Get in Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
