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
      <section className="gradient-bg text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive IT solutions spanning Telecom, Cloud, DevOps, and Enterprise Software Development
          </p>
        </div>
      </section>

      {/* Telecom Solutions */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="gradient-bg p-3 rounded-lg">
              <Network className="h-8 w-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Telecom Solution Development</h2>
              <p className="text-gray-600">Carrier-grade telecommunications infrastructure and solutions</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {telecomServices.map((service) => (
              <div key={service.title} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start text-gray-600 text-sm">
                      <Radio className="h-4 w-4 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Integration */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="gradient-bg p-3 rounded-lg">
              <Settings className="h-8 w-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Solution Integration Services</h2>
              <p className="text-gray-600">Enterprise and telecom system integration expertise</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {integrationServices.map((service) => (
              <div key={service.title} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start text-gray-600 text-sm">
                      <Layers className="h-4 w-4 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Services */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="gradient-bg p-3 rounded-lg">
              <Cloud className="h-8 w-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Cloud Services</h2>
              <p className="text-gray-600">Multi-cloud solutions across AWS, Azure, and GCP</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {cloudServices.map((service) => (
              <div key={service.title} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start text-gray-600 text-sm">
                      <Globe className="h-4 w-4 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DevOps Services */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="gradient-bg p-3 rounded-lg">
              <Code className="h-8 w-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">DevOps Services</h2>
              <p className="text-gray-600">End-to-end DevOps implementation and automation</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {devopsServices.map((service) => (
              <div key={service.title} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start text-gray-600 text-sm">
                      <Container className="h-4 w-4 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Software Development */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="gradient-bg p-3 rounded-lg">
              <Server className="h-8 w-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Software Development</h2>
              <p className="text-gray-600">Custom application development and enterprise solutions</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {softwareServices.map((service) => (
              <div key={service.title} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start text-gray-600 text-sm">
                      <FileCode className="h-4 w-4 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Consulting */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="gradient-bg p-3 rounded-lg">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">IT Consulting</h2>
              <p className="text-gray-600">Strategic technology consulting and digital transformation</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <Lightbulb className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Technology Consulting</h3>
              <p className="text-gray-600 text-sm">
                IT strategy development, technology stack selection, architecture review, and technical due diligence.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <TrendingUp className="h-10 w-10 text-cyan-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Digital Transformation</h3>
              <p className="text-gray-600 text-sm">
                Digital maturity assessment, cloud adoption strategy, DevOps transformation, and agile consulting.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <Building className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Infrastructure Consulting</h3>
              <p className="text-gray-600 text-sm">
                Data center optimization, network architecture, security compliance, and capacity planning.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
