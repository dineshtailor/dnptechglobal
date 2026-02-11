import Link from "next/link";
import { Server, Mail, Phone, MapPin } from "lucide-react";

const services = [
  "Telecom Solutions",
  "Solution Integration",
  "Cloud Services",
  "DevOps Services",
  "Software Development",
  "IT Consulting",
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="gradient-bg p-2 rounded-lg">
                <Server className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">DnP Technologies</span>
                <p className="text-xs text-gray-400">Private Limited</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Empowering Digital Transformation through Telecom Solutions, Cloud Infrastructure,
              DevOps Implementation, and innovative IT services.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-cyan-400" />
                <span className="text-sm">Navi Mumbai, Maharashtra, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-cyan-400" />
                <span className="text-sm">contact@dnptechnologies.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-cyan-400" />
                <span className="text-sm">+91 XXXXX XXXXX</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link href="/services" className="text-sm hover:text-cyan-400 transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-cyan-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} DnP Technologies Private Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
