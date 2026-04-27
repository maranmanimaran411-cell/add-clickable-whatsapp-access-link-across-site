import { FollowUsBanner } from "@/components/FollowUsBanner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEnquiry } from "@/context/EnquiryContext";
import { useCompanyInfo } from "@/hooks/useQueries";
import { useNavigate } from "@tanstack/react-router";
import {
  Award,
  CheckCircle,
  Globe,
  Send,
  Shield,
  Truck,
  Users,
} from "lucide-react";

export default function HomePage() {
  const navigate = useNavigate();
  const { data: companyInfo } = useCompanyInfo();
  const { openEnquiry } = useEnquiry();

  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      description:
        "FSSAI certified manufacturing with international quality standards",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Exporting to 9+ countries across continents",
    },
    {
      icon: Truck,
      title: "Reliable Delivery",
      description: "On-time delivery with complete logistics support",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous quality control at every production stage",
    },
  ];

  const stats = [
    { value: "25+", label: "Years Experience" },
    { value: "9+", label: "Export Countries" },
    { value: "100%", label: "Quality Assured" },
    { value: "24/7", label: "Customer Support" },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-dark via-brand-primary to-brand-medium overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/generated/hero-banner.dim_1920x800.jpg')] bg-cover bg-center opacity-20" />
        <div className="container relative py-20 md:py-32">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6 text-white">
              <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                Premium Appalam Manufacturer & Exporter
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                PAPADIX FOODS – Premium Appalam Manufacturer & Exporter from
                India
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl">
                Leading manufacturer and supplier of authentic South Indian
                appalam. Trusted by international importers, wholesalers, and
                HORECA buyers worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={() => openEnquiry()}
                  className="bg-white text-brand-primary hover:bg-white/90 text-base font-semibold"
                  data-ocid="home_hero.request_sample_button"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Request a Free Sample
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => navigate({ to: "/contact" })}
                  className="border-white text-white hover:bg-white/10 text-base font-semibold"
                  data-ocid="home_hero.contact_button"
                >
                  Contact for Bulk Orders
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="/assets/generated/appalam-product-range.dim_1024x768.jpg"
                alt="PAPADIX FOODS Product Range"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b bg-background py-12">
        <div className="container">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-brand-primary">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <img
                src="/assets/generated/papadix-factory-exterior.dim_1200x800.jpg"
                alt="PAPADIX FOODS Factory"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div>
                <Badge className="mb-4">About PAPADIX FOODS</Badge>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Leading Appalam Manufacturer in India
                </h2>
              </div>
              <p className="text-lg text-muted-foreground">
                Based in Madurai, Tamil Nadu, PAPADIX FOODS is a trusted name in
                appalam manufacturing and export. We specialize in producing
                premium quality PAPADIX APPALAM and SAMBAR APPALAM using
                traditional methods combined with modern hygiene standards.
              </p>
              <p className="text-lg text-muted-foreground">
                As a direct manufacturer, we serve international food importers,
                wholesalers, supermarket chains, and HORECA buyers across India,
                UAE, UK, USA, France, Germany, Singapore, Malaysia, and
                Australia.
              </p>
              <ul className="space-y-3">
                {[
                  "FSSAI Certified Manufacturing Facility",
                  "Traditional Recipes with Modern Technology",
                  "Export-Grade Quality Control",
                  "Private Label Manufacturing Available",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button
                onClick={() => navigate({ to: "/about" })}
                size="lg"
                className="bg-brand-primary hover:bg-brand-dark"
              >
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <Badge className="mb-4">Why Choose PAPADIX FOODS</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Your Trusted Papad Exporter from India
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine traditional expertise with modern manufacturing to
              deliver consistent quality for your export needs.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="border-2 hover:border-brand-primary transition-colors"
              >
                <CardHeader>
                  <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-primary/10">
                    <feature.icon className="h-6 w-6 text-brand-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Export Markets Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <div>
                <Badge className="mb-4">Global Presence</Badge>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Exporting Quality Appalam Worldwide
                </h2>
              </div>
              <p className="text-lg text-muted-foreground">
                PAPADIX FOODS has established a strong presence in international
                markets, serving diverse customer needs across continents. Our
                export-grade packaging and logistics support ensure your
                products arrive in perfect condition.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {companyInfo?.exportMarkets.map((market) => (
                  <div key={market} className="flex items-center gap-2 text-sm">
                    <Globe className="h-4 w-4 text-brand-primary flex-shrink-0" />
                    <span>{market}</span>
                  </div>
                ))}
              </div>
              <Button
                onClick={() => navigate({ to: "/export-markets" })}
                size="lg"
                className="bg-brand-primary hover:bg-brand-dark"
              >
                Explore Export Markets
              </Button>
            </div>
            <div>
              <img
                src="/assets/generated/export-markets-map.dim_1200x600.jpg"
                alt="PAPADIX FOODS Export Markets"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <FollowUsBanner />

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-brand-primary to-brand-medium py-16 md:py-20">
        <div className="container text-center text-white">
          <Users className="h-12 w-12 mx-auto mb-6" />
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Ready to Partner with India's Leading Appalam Exporter?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Get in touch with us for bulk orders, private label manufacturing,
            or export enquiries. Our team is ready to assist you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => openEnquiry()}
              className="bg-white text-brand-primary hover:bg-white/90 text-base font-semibold"
              data-ocid="home_cta.request_sample_button"
            >
              <Send className="h-4 w-4 mr-2" />
              Request a Free Sample
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate({ to: "/products" })}
              className="border-white text-white hover:bg-white/10 text-base font-semibold"
              data-ocid="home_cta.view_products_button"
            >
              View Our Products
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
