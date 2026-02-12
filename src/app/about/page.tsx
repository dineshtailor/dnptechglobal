import {
  Target,
  Users,
  Award,
  CheckCircle,
  Briefcase,
  GraduationCap,
  Building,
  Globe,
  Zap,
  Shield,
} from "lucide-react";

const team = [
  {
    name: "Ms. Padma Tailor",
    role: "Director",
    description: "Operations and Business Development, Client relationship management, Strategic planning",
  },
  {
    name: "Mr. Manoj Kumar",
    role: "Director",
    description: "Technical delivery and project management, Team leadership, Quality assurance",
  },
  {
    name: "Mr. Dinesh Kumar Tailor",
    role: "Technical Advisor",
    description: "15+ years in DevOps, Cloud Infrastructure, and Telecom Solutions. Expert in AAA systems, RADIUS, 3G/4G/5G networks, and carrier-grade infrastructure.",
  },
];

const certifications = [
  "AWS Certified Solutions Architect",
  "AWS Certified DevOps Engineer",
  "Google Cloud Professional DevOps Engineer",
  "Azure DevOps Engineer Expert",
  "Certified Kubernetes Administrator (CKA)",
  "HashiCorp Terraform Associate",
];

const targetIndustries = [
  { name: "Telecommunications", primary: true },
  { name: "Financial Services & FinTech", primary: false },
  { name: "Healthcare & Life Sciences", primary: false },
  { name: "E-commerce & Retail", primary: false },
  { name: "Media & Entertainment", primary: false },
  { name: "Government & Public Sector", primary: false },
];

const values = [
  {
    icon: Shield,
    title: "Quality First",
    description: "Enterprise-grade solutions with founder-led quality oversight",
  },
  {
    icon: Users,
    title: "Client Focus",
    description: "Personalized attention and agile engagement models",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Future-ready solutions using cutting-edge technologies",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "15+ years of proven expertise in telecom and IT",
  },
];

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative gradient-bg text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-300 rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm font-medium">
            Our Story
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">About DnP Technologies</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delay-1">
            Empowering businesses through digital transformation with telecom-grade expertise
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 80L60 70C120 60 240 40 360 35C480 30 600 40 720 45C840 50 960 50 1080 45C1200 40 1320 30 1380 25L1440 20V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-cyan-600 font-semibold text-sm uppercase tracking-wider">Who We Are</span>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 mt-2">Company Overview</h2>
              <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                <strong className="text-gray-900">DnP Technologies Private Limited</strong> is an Information Technology Services &
                Consulting company based in Navi Mumbai, Maharashtra, India. We specialize in delivering
                enterprise-grade solutions across telecom, cloud, DevOps, and software development domains.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                With a B2B business model, we serve telecom operators, enterprises, and technology companies
                with our deep expertise in carrier-grade systems, cloud infrastructure, and modern DevOps practices.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl shadow-lg border border-blue-100 hover:-translate-y-1 transition-transform duration-300">
                  <Building className="h-10 w-10 text-blue-600 mb-3" />
                  <h4 className="font-bold text-gray-900 text-lg">Headquarters</h4>
                  <p className="text-gray-600 mt-1">Navi Mumbai, India</p>
                </div>
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-2xl shadow-lg border border-cyan-100 hover:-translate-y-1 transition-transform duration-300">
                  <Globe className="h-10 w-10 text-cyan-600 mb-3" />
                  <h4 className="font-bold text-gray-900 text-lg">Global Reach</h4>
                  <p className="text-gray-600 mt-1">India, USA, Middle East, SEA</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white p-10 rounded-3xl shadow-xl border border-blue-100">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Core Focus Areas</h3>
              <ul className="space-y-4">
                {[
                  "Telecom Solution Development & Integration",
                  "Cloud Infrastructure & Migration Services",
                  "DevOps Implementation & Automation",
                  "Software Development & Application Services",
                  "IT Infrastructure Consulting",
                  "Solution Integration & System Architecture",
                  "Digital Transformation Solutions",
                ].map((item, index) => (
                  <li
                    key={item}
                    className="flex items-start group hover:translate-x-2 transition-transform duration-300"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <CheckCircle className="h-6 w-6 text-cyan-500 mr-3 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-cyan-600 font-semibold text-sm uppercase tracking-wider">Core Principles</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">Our Values</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that guide our work and define our commitment to excellence
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-gray-100 hover:border-cyan-200 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="gradient-bg w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-cyan-600 font-semibold text-sm uppercase tracking-wider">Meet Our Team</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">Leadership Team</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Experienced leaders driving innovation and excellence in IT services
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-cyan-200 hover:-translate-y-2 text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="gradient-bg w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{member.name}</h3>
                <p className="text-cyan-600 font-semibold text-lg mt-2 mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-cyan-600 font-semibold text-sm uppercase tracking-wider">Expertise & Credentials</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">Team Certifications</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our team holds industry-recognized certifications across cloud platforms, DevOps, and infrastructure technologies.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={cert}
                className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center border border-gray-100 hover:border-blue-200 hover:-translate-y-1"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <GraduationCap className="h-8 w-8 text-blue-600 mr-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-cyan-600 font-semibold text-sm uppercase tracking-wider">Target Markets</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">Industries We Serve</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Delivering specialized solutions across diverse industry verticals
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {targetIndustries.map((industry, index) => (
              <div
                key={industry.name}
                className={`group p-8 rounded-2xl border-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                  industry.primary
                    ? "border-blue-500 bg-gradient-to-br from-blue-50 to-cyan-50 shadow-lg"
                    : "border-gray-200 bg-white hover:border-blue-300"
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Briefcase className={`h-7 w-7 mr-4 group-hover:scale-110 transition-transform ${industry.primary ? "text-blue-600" : "text-gray-500 group-hover:text-blue-600"}`} />
                    <span className={`font-bold text-lg ${industry.primary ? "text-blue-900" : "text-gray-700 group-hover:text-gray-900"}`}>
                      {industry.name}
                    </span>
                  </div>
                  {industry.primary && (
                    <span className="text-xs bg-blue-600 text-white px-3 py-1 rounded-full font-semibold">Primary</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-cyan-600 font-semibold text-sm uppercase tracking-wider">Competitive Edge</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">Why Choose Us</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              What sets us apart in the competitive IT services landscape
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Award className="h-8 w-8 text-blue-600 mr-3" />
                Technical Expertise
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start group hover:translate-x-2 transition-transform duration-300">
                  <CheckCircle className="h-6 w-6 text-cyan-500 mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-700 leading-relaxed">Deep telecom domain expertise - AAA, RADIUS, 3G/4G/5G, billing systems</span>
                </li>
                <li className="flex items-start group hover:translate-x-2 transition-transform duration-300">
                  <CheckCircle className="h-6 w-6 text-cyan-500 mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-700 leading-relaxed">Carrier-grade system experience - High-availability, fault-tolerant architectures</span>
                </li>
                <li className="flex items-start group hover:translate-x-2 transition-transform duration-300">
                  <CheckCircle className="h-6 w-6 text-cyan-500 mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-700 leading-relaxed">Real-world experience with GCP, AWS, Azure platforms</span>
                </li>
                <li className="flex items-start group hover:translate-x-2 transition-transform duration-300">
                  <CheckCircle className="h-6 w-6 text-cyan-500 mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-700 leading-relaxed">Complex system integration and architecture design</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Target className="h-8 w-8 text-cyan-600 mr-3" />
                Service Delivery
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start group hover:translate-x-2 transition-transform duration-300">
                  <CheckCircle className="h-6 w-6 text-cyan-500 mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-700 leading-relaxed">Agile and flexible engagement models</span>
                </li>
                <li className="flex items-start group hover:translate-x-2 transition-transform duration-300">
                  <CheckCircle className="h-6 w-6 text-cyan-500 mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-700 leading-relaxed">Quick turnaround time with personalized attention</span>
                </li>
                <li className="flex items-start group hover:translate-x-2 transition-transform duration-300">
                  <CheckCircle className="h-6 w-6 text-cyan-500 mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-700 leading-relaxed">Founder-led technical oversight ensuring quality</span>
                </li>
                <li className="flex items-start group hover:translate-x-2 transition-transform duration-300">
                  <CheckCircle className="h-6 w-6 text-cyan-500 mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-700 leading-relaxed">Competitive pricing with transparent billing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
