import { Link } from "@tanstack/react-router";
import { Heart, Mail, MapPin, Phone } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import { SiFacebook, SiInstagram, SiWhatsapp, SiYoutube } from "react-icons/si";

export default function Footer() {
  const productLinks = [
    { href: "/products", label: "PAPADIX APPALAM" },
    { href: "/products", label: "SAMBAR APPALAM" },
    { href: "/products", label: "Pepper Appalam" },
    { href: "/products", label: "Garlic Appalam" },
  ];

  const quickLinks = [
    { href: "/about", label: "About Us" },
    { href: "/manufacturing", label: "Manufacturing Process" },
    { href: "/quality", label: "Quality & Certifications" },
    { href: "/export-markets", label: "Export Markets" },
    { href: "/why-choose-us", label: "Why Choose Us" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <img
              src="/assets/generated/papadix-logo.dim_400x160.png"
              alt="PAPADIX FOODS"
              className="h-14 w-auto"
            />
            <p className="text-sm text-muted-foreground">
              Leading manufacturer and exporter of premium quality appalam from
              Madurai, Tamil Nadu, India.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/share/18Renuqkzo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-brand-primary transition-colors"
              >
                <SiFacebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/papadixfoods?igsh=aTNpemFoMThkYWY5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-brand-primary transition-colors"
              >
                <SiInstagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/manimaran-m-31b4aa359?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-brand-primary transition-colors"
              >
                <FaLinkedinIn className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com/@papadixfoods?si=efjDh8qFBFi4E43f"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-red-600 transition-colors"
              >
                <SiYoutube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Our Products</h3>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-brand-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-brand-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-brand-primary" />
                <span>Madurai, Tamil Nadu, India</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 flex-shrink-0 text-brand-primary" />
                <a
                  href="tel:+919751174855"
                  className="hover:text-brand-primary transition-colors"
                >
                  +91 9751174855
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <SiWhatsapp className="h-4 w-4 flex-shrink-0 text-brand-primary" />
                <a
                  href="https://wa.me/919751174855"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-primary transition-colors"
                >
                  WhatsApp: Chat with us
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 flex-shrink-0 text-brand-primary" />
                <a
                  href="mailto:export@papadixfoods.com"
                  className="hover:text-brand-primary transition-colors"
                >
                  export@papadixfoods.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} PAPADIX FOODS. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Built with <Heart className="h-3 w-3 text-red-500 fill-red-500" />{" "}
              using{" "}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "papadix-foods")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-primary hover:underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
