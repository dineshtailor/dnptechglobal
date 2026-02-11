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
      <section className="gradient-bg text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About DnP Technologies</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Empowering businesses through digital transformation with telecom-grade expertise
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Company Overview</h2>
              <p className="text-gray-600 mb-4">
                <strong>DnP Technologies Private Limited</strong> is an Information Technology Services &
                Consulting company based in Navi Mumbai, Maharashtra, India. We specialize in delivering
                enterprise-grade solutions across telecom, cloud, DevOps, and software development domains.
              </p>
              <p className="text-gray-600 mb-6">
                With a B2B business model, we serve telecom operators, enterprises, and technology companies
                with our deep expertise in carrier-grade systems, cloud infrastructure, and modern DevOps practices.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <Building className="h-8 w-8 text-blue-600 mb-2" />
                  <h4 className="font-semibold text-gray-900">Headquarters</h4>
                  <p className="text-sm text-gray-600">Navi Mumbai, India</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <Globe className="h-8 w-8 text-cyan-500 mb-2" />
                  <h4 className="font-semibold text-gray-900">Global Reach</h4>
                  <p className="text-sm text-gray-600">India, USA, Middle East, SEA</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Focus Areas</h3>
              <ul className="space-y-3">
                {[
                  "Telecom Solution Development & Integration",
                  "Cloud Infrastructure & Migration Services",
                  "DevOps Implementation & Automation",
                  "Software Development & Application Services",
                  "IT Infrastructure Consulting",
                  "Solution Integration & System Architecture",
                  "Digital Transformation Solutions",
                ].map((item) => (
                  <li key={item} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-cyan-500 mr-3" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="gradient-bg w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="gradient-bg w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 text-center">{member.name}</h3>
                <p className="text-cyan-600 text-center mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm text-center">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Team Certifications</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Our team holds industry-recognized certifications across cloud platforms, DevOps, and infrastructure technologies.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {certifications.map((cert) => (
              <div key={cert} className="bg-white p-4 rounded-lg shadow-sm flex items-center">
                <GraduationCap className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Industries We Serve</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {targetIndustries.map((industry) => (
              <div
                key={industry.name}
                className={`p-6 rounded-xl border-2 ${
                  industry.primary
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 bg-white"
                }`}
              >
                <div className="flex items-center">
                  <Briefcase className={`h-6 w-6 mr-3 ${industry.primary ? "text-blue-600" : "text-gray-500"}`} />
                  <span className={`font-medium ${industry.primary ? "text-blue-900" : "text-gray-700"}`}>
                    {industry.name}
                  </span>
                  {industry.primary && (
                    <span className="ml-auto text-xs bg-blue-600 text-white px-2 py-1 rounded">Primary</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Expertise</h3>
              <ul className="space-y-2">
                <li className="flex items-start text-gray-600">
                  <CheckCircle className="h-5 w-5 text-cyan-500 mr-2 mt-0.5" />
                  Deep telecom domain expertise - AAA, RADIUS, 3G/4G/5G, billing systems
                </li>
                <li className="flex items-start text-gray-600">
                  <CheckCircle className="h-5 w-5 text-cyan-500 mr-2 mt-0.5" />
                  Carrier-grade system experience - High-availability, fault-tolerant architectures
                </li>
                <li className="flex items-start text-gray-600">
                  <CheckCircle className="h-5 w-5 text-cyan-500 mr-2 mt-0.5" />
                  Real-world experience with GCP, AWS, Azure platforms
                </li>
                <li className="flex items-start text-gray-600">
                  <CheckCircle className="h-5 w-5 text-cyan-500 mr-2 mt-0.5" />
                  Complex system integration and architecture design
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Service Delivery</h3>
              <ul className="space-y-2">
                <li className="flex items-start text-gray-600">
                  <CheckCircle className="h-5 w-5 text-cyan-500 mr-2 mt-0.5" />
                  Agile and flexible engagement models
                </li>
                <li className="flex items-start text-gray-600">
                  <CheckCircle className="h-5 w-5 text-cyan-500 mr-2 mt-0.5" />
                  Quick turnaround time with personalized attention
                </li>
                <li className="flex items-start text-gray-600">
                  <CheckCircle className="h-5 w-5 text-cyan-500 mr-2 mt-0.5" />
                  Founder-led technical oversight ensuring quality
                </li>
                <li className="flex items-start text-gray-600">
                  <CheckCircle className="h-5 w-5 text-cyan-500 mr-2 mt-0.5" />
                  Competitive pricing with transparent billing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
