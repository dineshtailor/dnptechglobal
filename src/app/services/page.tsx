import {
  Network,
  Settings,
  Cloud,
  Code,
  Server,
  Shield,
  Radio,
  Cpu,
  CreditCard,
  Users,
  Activity,
  Database,
  GitBranch,
  Container,
  MonitorCheck,
  Workflow,
  Layers,
  Globe,
  Cog,
  FileCode,
  TestTube,
  Lightbulb,
  TrendingUp,
  Building,
} from "lucide-react";

const telecomServices = [
  {
    title: "AAA & RADIUS Solutions",
    items: [
      "Authentication, Authorization, and Accounting (AAA) systems",
      "RADIUS server implementation and customization",
      "Policy management and charging systems",
      "Subscriber management platforms",
      "Real-time billing and rating engines",
      "CDR processing and analytics",
    ],
  },
  {
    title: "3G/4G/5G Network Solutions",
    items: [
      "Core network element integration (HSS, MME, SGW, PGW)",
      "Packet core solutions and optimization",
      "IMS (IP Multimedia Subsystem) implementation",
      "VoLTE and VoNR solutions",
      "Network slicing architecture",
      "5G SA and NSA deployment support",
    ],
  },
  {
    title: "Telecom Billing & Charging",
    items: [
      "Convergent billing systems",
      "Online and Offline Charging Systems",
      "Revenue management platforms",
      "Prepaid and postpaid billing solutions",
      "Real-time charging and policy control",
    ],
  },
];

const integrationServices = [
  {
    title: "Enterprise Integration",
    items: [
      "Enterprise Application Integration (EAI)",
      "Service-Oriented Architecture (SOA)",
      "API management and gateway solutions",
      "Message queue integration (RabbitMQ, Kafka)",
      "Enterprise Service Bus (ESB) implementation",
    ],
  },
  {
    title: "OSS/BSS Integration",
    items: [
      "Operations Support Systems integration",
      "Business Support Systems integration",
      "CRM and billing system integration",
      "Network inventory management",
      "Multi-vendor OSS/BSS orchestration",
    ],
  },
  {
    title: "Legacy Modernization",
    items: [
      "Legacy system assessment and analysis",
      "Migration strategy development",
      "API wrapper development",
      "Data migration and transformation",
      "Database modernization",
    ],
  },
];

const cloudServices = [
  {
    title: "Cloud Migration",
    items: [
      "Assessment and strategy development",
      "Cloud architecture design (AWS, Azure, GCP)",
      "Application migration to cloud",
      "Data center to cloud migration",
      "Hybrid cloud implementation",
    ],
  },
  {
    title: "Cloud Management",
    items: [
      "Cloud infrastructure monitoring",
      "Cost optimization and FinOps",
      "Performance tuning",
      "Security and compliance management",
      "Disaster recovery planning",
    ],
  },
];

const devopsServices = [
  {
    title: "CI/CD & Automation",
    items: [
      "CI/CD pipeline design and implementation",
      "Infrastructure as Code (Terraform, Ansible)",
      "Build automation (Jenkins, GitLab CI, GitHub Actions)",
      "Deployment and release automation",
      "Environment provisioning",
    ],
  },
  {
    title: "Container & Orchestration",
    items: [
      "Docker containerization",
      "Kubernetes cluster management",
      "Container security and optimization",
      "Microservices architecture",
    ],
  },
  {
    title: "Monitoring & Observability",
    items: [
      "Application performance monitoring",
      "Infrastructure monitoring (Prometheus, Grafana)",
      "Log management (ELK Stack)",
      "Alerting and incident management",
      "SRE practices implementation",
    ],
  },
];

const softwareServices = [
  {
    title: "Custom Development",
    items: [
      "Web application development",
      "Enterprise application development",
      "API development and integration",
      "Database design and optimization",
    ],
  },
  {
    title: "Technology Stack",
    items: [
      "Frontend: React, Angular, Vue.js",
      "Backend: Node.js, Python, Java, .NET",
      "Databases: MySQL, PostgreSQL, MongoDB",
      "Mobile: React Native, Flutter",
    ],
  },
];

export default function Services() {
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
            Comprehensive Solutions
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delay-1">
            Comprehensive IT solutions spanning Telecom, Cloud, DevOps, and Enterprise Software Development
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 80L60 70C120 60 240 40 360 35C480 30 600 40 720 45C840 50 960 50 1080 45C1200 40 1320 30 1380 25L1440 20V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Telecom Solutions */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12">
            <div className="gradient-bg p-4 rounded-2xl shadow-xl">
              <Network className="h-10 w-10 text-white" />
            </div>
            <div>
              <span className="text-cyan-600 font-semibold text-sm uppercase tracking-wider">Telecommunications</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-1">Telecom Solution Development</h2>
              <p className="text-gray-600 text-lg mt-2">Carrier-grade telecommunications infrastructure and solutions</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {telecomServices.map((service, index) => (
              <div
                key={service.title}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-5 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                <ul className="space-y-3">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start text-gray-600 text-sm">
                      <Radio className="h-4 w-4 text-cyan-500 mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Integration */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12">
            <div className="gradient-bg p-4 rounded-2xl shadow-xl">
              <Settings className="h-10 w-10 text-white" />
            </div>
            <div>
              <span className="text-cyan-600 font-semibold text-sm uppercase tracking-wider">Integration</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-1">Solution Integration Services</h2>
              <p className="text-gray-600 text-lg mt-2">Enterprise and telecom system integration expertise</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {integrationServices.map((service, index) => (
              <div
                key={service.title}
                className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-cyan-200 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-5 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                <ul className="space-y-3">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start text-gray-600 text-sm">
                      <Layers className="h-4 w-4 text-cyan-500 mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Services */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12">
            <div className="gradient-bg p-4 rounded-2xl shadow-xl">
              <Cloud className="h-10 w-10 text-white" />
            </div>
            <div>
              <span className="text-cyan-600 font-semibold text-sm uppercase tracking-wider">Cloud Infrastructure</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-1">Cloud Services</h2>
              <p className="text-gray-600 text-lg mt-2">Multi-cloud solutions across AWS, Azure, and GCP</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {cloudServices.map((service, index) => (
              <div
                key={service.title}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-5 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                <ul className="space-y-3">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start text-gray-600">
                      <Globe className="h-5 w-5 text-cyan-500 mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DevOps Services */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12">
            <div className="gradient-bg p-4 rounded-2xl shadow-xl">
              <Code className="h-10 w-10 text-white" />
            </div>
            <div>
              <span className="text-cyan-600 font-semibold text-sm uppercase tracking-wider">DevOps & Automation</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-1">DevOps Services</h2>
              <p className="text-gray-600 text-lg mt-2">End-to-end DevOps implementation and automation</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {devopsServices.map((service, index) => (
              <div
                key={service.title}
                className="group bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:border-cyan-200 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-5 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                <ul className="space-y-3">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start text-gray-700 text-sm">
                      <Container className="h-4 w-4 text-cyan-600 mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Software Development */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12">
            <div className="gradient-bg p-4 rounded-2xl shadow-xl">
              <Server className="h-10 w-10 text-white" />
            </div>
            <div>
              <span className="text-cyan-600 font-semibold text-sm uppercase tracking-wider">Development</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-1">Software Development</h2>
              <p className="text-gray-600 text-lg mt-2">Custom application development and enterprise solutions</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {softwareServices.map((service, index) => (
              <div
                key={service.title}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-5 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                <ul className="space-y-3">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start text-gray-600">
                      <FileCode className="h-5 w-5 text-cyan-500 mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Consulting */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12">
            <div className="gradient-bg p-4 rounded-2xl shadow-xl">
              <Shield className="h-10 w-10 text-white" />
            </div>
            <div>
              <span className="text-cyan-600 font-semibold text-sm uppercase tracking-wider">Advisory</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-1">IT Consulting</h2>
              <p className="text-gray-600 text-lg mt-2">Strategic technology consulting and digital transformation</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:border-cyan-200 hover:-translate-y-2">
              <Lightbulb className="h-12 w-12 text-blue-600 mb-5 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Technology Consulting</h3>
              <p className="text-gray-600 leading-relaxed">
                IT strategy development, technology stack selection, architecture review, and technical due diligence.
              </p>
            </div>
            <div className="group bg-gradient-to-br from-cyan-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-cyan-100 hover:border-blue-200 hover:-translate-y-2">
              <TrendingUp className="h-12 w-12 text-cyan-600 mb-5 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors">Digital Transformation</h3>
              <p className="text-gray-600 leading-relaxed">
                Digital maturity assessment, cloud adoption strategy, DevOps transformation, and agile consulting.
              </p>
            </div>
            <div className="group bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:border-cyan-200 hover:-translate-y-2">
              <Building className="h-12 w-12 text-blue-600 mb-5 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Infrastructure Consulting</h3>
              <p className="text-gray-600 leading-relaxed">
                Data center optimization, network architecture, security compliance, and capacity planning.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
