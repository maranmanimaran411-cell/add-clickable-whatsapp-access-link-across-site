import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useEnquiry } from "@/context/EnquiryContext";
import { Link, useNavigate } from "@tanstack/react-router";
import { Mail, Menu, MessageCircle, Phone, Send } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { openEnquiry } = useEnquiry();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/products", label: "Products" },
    { href: "/manufacturing", label: "Manufacturing" },
    { href: "/quality", label: "Quality & Certifications" },
    { href: "/export-markets", label: "Export Markets" },
    { href: "/why-choose-us", label: "Why Choose Us" },
    { href: "/contact", label: "Contact" },
  ];

  const handleNavigation = (href: string) => {
    navigate({ to: href });
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top bar with contact info */}
      <div className="border-b border-border/40 bg-brand-dark">
        <div className="container flex h-10 items-center justify-between text-sm text-white">
          <div className="flex items-center gap-4">
            <a
              href="tel:+919751174855"
              className="flex items-center gap-1 hover:text-brand-light transition-colors"
            >
              <Phone className="h-3 w-3" />
              <span className="hidden sm:inline">+91 9751174855</span>
            </a>
            <a
              href="https://wa.me/919751174855"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-brand-light transition-colors"
            >
              <MessageCircle className="h-3 w-3" />
              <span className="hidden sm:inline">Chat on WhatsApp</span>
            </a>
            <a
              href="mailto:export@papadixfoods.com"
              className="flex items-center gap-1 hover:text-brand-light transition-colors"
            >
              <Mail className="h-3 w-3" />
              <span className="hidden sm:inline">export@papadixfoods.com</span>
            </a>
          </div>
          <div className="text-xs hidden md:block">
            Premium Appalam Manufacturer & Exporter from India
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/assets/generated/papadix-logo.dim_400x160.png"
            alt="PAPADIX FOODS"
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-brand-primary hover:bg-accent rounded-md transition-colors"
              activeProps={{ className: "text-brand-primary bg-accent" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Request a Sample button */}
          <Button
            onClick={() => openEnquiry()}
            variant="outline"
            className="hidden md:inline-flex border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white transition-colors"
            data-ocid="header.request_sample_button"
          >
            <Send className="h-4 w-4 mr-1.5" />
            Request a Sample
          </Button>

          <Button
            onClick={() => navigate({ to: "/contact" })}
            className="hidden md:inline-flex bg-brand-primary hover:bg-brand-dark text-white"
            data-ocid="header.get_quote_button"
          >
            Get Export Quote
          </Button>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="mb-6 mt-2">
                <img
                  src="/assets/generated/papadix-logo.dim_400x160.png"
                  alt="PAPADIX FOODS"
                  className="h-12 w-auto"
                />
              </div>
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <button
                    type="button"
                    key={link.href}
                    onClick={() => handleNavigation(link.href)}
                    className="text-left px-4 py-2 text-base font-medium text-foreground hover:text-brand-primary hover:bg-accent rounded-md transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
                <Button
                  onClick={() => {
                    setIsOpen(false);
                    openEnquiry();
                  }}
                  variant="outline"
                  className="mt-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white"
                  data-ocid="mobile_nav.request_sample_button"
                >
                  <Send className="h-4 w-4 mr-1.5" />
                  Request a Sample
                </Button>
                <Button
                  onClick={() => handleNavigation("/contact")}
                  className="bg-brand-primary hover:bg-brand-dark text-white"
                  data-ocid="mobile_nav.get_quote_button"
                >
                  Get Export Quote
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
