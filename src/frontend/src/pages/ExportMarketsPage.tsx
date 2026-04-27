import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useCompanyInfo } from "@/hooks/useQueries";
import { FileText, Globe, Package, Ship, Truck, Users } from "lucide-react";

export default function ExportMarketsPage() {
  const { data: companyInfo } = useCompanyInfo();

  const services = [
    {
      icon: Package,
      title: "Bulk Order Handling",
      description:
        "Efficient processing of large volume orders with consistent quality and timely delivery.",
    },
    {
      icon: Ship,
      title: "Logistics Support",
      description:
        "Complete shipping coordination including freight forwarding and customs documentation.",
    },
    {
      icon: Users,
      title: "Private Label Services",
      description:
        "Custom packaging and branding solutions tailored to your market requirements.",
    },
    {
      icon: FileText,
      title: "Export Documentation",
      description:
        "Complete assistance with certificates, invoices, and regulatory compliance documents.",
    },
  ];

  const capabilities = [
    "Container load (FCL) and less than container load (LCL) shipments",
    "Air freight for urgent orders",
    "Temperature-controlled shipping options",
    "Custom packaging design and labeling",
    "Multi-language packaging support",
    "Flexible payment terms for established buyers",
    "Product samples for quality evaluation",
    "Dedicated export customer service team",
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-dark to-brand-primary py-16 md:py-24 text-white">
        <div className="container">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Export Markets
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              Serving Global Markets with Excellence
            </h1>
            <p className="text-xl text-white/90">
              PAPADIX FOODS exports premium quality appalam to discerning
              customers across continents.
            </p>
          </div>
        </div>
      </section>

      {/* Export Markets Map */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <Badge className="mb-4">Our Global Presence</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Trusted by Buyers Worldwide
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We've built strong relationships with importers, wholesalers, and
              retailers across multiple countries.
            </p>
          </div>
          <div className="mb-12">
            <img
              src="/assets/generated/export-markets-map.dim_1200x600.jpg"
              alt="PAPADIX FOODS Export Markets"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
            {companyInfo?.exportMarkets.map((market) => (
              <Card
                key={market}
                className="border-2 hover:border-brand-primary transition-colors"
              >
                <CardContent className="pt-6 text-center">
                  <Globe className="h-8 w-8 text-brand-primary mx-auto mb-2" />
                  <p className="font-semibold">{market}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Export Services */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <Badge className="mb-4">Export Services</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Comprehensive Export Support
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide end-to-end support to make your import process smooth
              and hassle-free.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Card
                key={service.title}
                className="border-2 hover:border-brand-primary transition-colors"
              >
                <CardContent className="pt-6 text-center">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-brand-primary/10">
                    <service.icon className="h-8 w-8 text-brand-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bulk Handling */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <img
                src="/assets/generated/export-packaging.dim_1024x768.jpg"
                alt="PAPADIX FOODS Export Packaging"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div>
                <Badge className="mb-4">Bulk Order Capabilities</Badge>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Scalable Production for Large Orders
                </h2>
              </div>
              <p className="text-lg text-muted-foreground">
                Our manufacturing facility is equipped to handle large volume
                export orders without compromising on quality. Whether you need
                a single container or multiple shipments per month, we have the
                capacity and expertise to meet your requirements.
              </p>
              <p className="text-lg text-muted-foreground">
                We work closely with international buyers to understand their
                specific needs, including packaging preferences, labeling
                requirements, and delivery schedules. Our flexible production
                planning ensures consistent supply for your business.
              </p>
              <ul className="space-y-3">
                {capabilities.map((capability) => (
                  <li key={capability} className="flex items-start gap-2">
                    <Truck className="h-5 w-5 text-brand-primary flex-shrink-0 mt-0.5" />
                    <span>{capability}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Private Label */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6 lg:order-2">
              <div>
                <Badge className="mb-4">Private Label Manufacturing</Badge>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Build Your Brand with Our Expertise
                </h2>
              </div>
              <p className="text-lg text-muted-foreground">
                PAPADIX FOODS offers comprehensive private label manufacturing
                services for international buyers looking to market appalam
                under their own brand. We handle everything from product
                formulation to custom packaging design.
              </p>
              <p className="text-lg text-muted-foreground">
                Our private label services include:
              </p>
              <ul className="space-y-3">
                {[
                  "Custom recipe development based on your specifications",
                  "Packaging design and printing with your branding",
                  "Multi-language labeling and nutritional information",
                  "Compliance with destination country regulations",
                  "Minimum order quantities tailored to your needs",
                  "Confidentiality and exclusivity agreements",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Package className="h-5 w-5 text-brand-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:order-1">
              <img
                src="/assets/generated/appalam-product-range.dim_1024x768.jpg"
                alt="Private Label Products"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Target Customers */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <Badge className="mb-4">Who We Serve</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Trusted by Diverse Customer Segments
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              PAPADIX FOODS serves a wide range of international buyers across
              different market segments.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "International Food Importers",
                description:
                  "Bulk suppliers and distributors importing Indian food products for retail and wholesale markets.",
              },
              {
                title: "Supermarket & Hypermarket Chains",
                description:
                  "Large retail chains looking for consistent quality and reliable supply of ethnic food products.",
              },
              {
                title: "Ethnic Food Distributors",
                description:
                  "Specialized distributors serving Indian and South Asian communities worldwide.",
              },
              {
                title: "HORECA Buyers",
                description:
                  "Hotels, restaurants, and catering businesses requiring bulk quantities of authentic appalam.",
              },
              {
                title: "Wholesalers",
                description:
                  "Regional and national wholesalers distributing to smaller retailers and food service businesses.",
              },
              {
                title: "Online Retailers",
                description:
                  "E-commerce platforms and online grocery stores expanding their ethnic food offerings.",
              },
            ].map((customer) => (
              <Card key={customer.title} className="border-2">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold mb-2">{customer.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {customer.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-brand-primary to-brand-medium py-16 md:py-20">
        <div className="container text-center text-white">
          <Globe className="h-12 w-12 mx-auto mb-6" />
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Ready to Start Importing from India?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Contact our export team to discuss your requirements, request
            product samples, or get a detailed quotation for your market.
          </p>
        </div>
      </section>
    </div>
  );
}
