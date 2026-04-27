import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Award, CheckCircle, FileCheck, Shield } from "lucide-react";

export default function QualityPage() {
  const certifications = [
    {
      icon: Award,
      title: "FSSAI Certified",
      description:
        "Our manufacturing facility is certified by the Food Safety and Standards Authority of India (FSSAI), ensuring compliance with national food safety regulations.",
    },
    {
      icon: Shield,
      title: "Export Quality Standards",
      description:
        "We adhere to international food safety standards required for export to various countries including EU, USA, and Middle East markets.",
    },
    {
      icon: FileCheck,
      title: "ISO Compliant Processes",
      description:
        "Our quality management systems follow ISO-aligned protocols for consistent product quality and traceability.",
    },
    {
      icon: CheckCircle,
      title: "Regular Audits",
      description:
        "We undergo regular third-party audits and inspections to maintain the highest standards of food safety and quality.",
    },
  ];

  const qualityMeasures = [
    "Raw material testing and supplier qualification",
    "In-process quality checks at every production stage",
    "Microbiological testing of finished products",
    "Physical and chemical parameter verification",
    "Moisture content and shelf-life testing",
    "Packaging integrity and seal strength testing",
    "Metal detection and foreign object screening",
    "Batch coding and traceability documentation",
    "Temperature and humidity monitoring",
    "Pest control and sanitation programs",
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-dark to-brand-primary py-16 md:py-24 text-white">
        <div className="container">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Quality & Certifications
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              Uncompromising Quality Standards
            </h1>
            <p className="text-xl text-white/90">
              Your trust is our priority. We maintain rigorous quality control
              and food safety standards at every stage of production.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="mb-4">Quality Assurance</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Export Quality You Can Trust
            </h2>
            <p className="text-lg text-muted-foreground">
              At PAPADIX FOODS, quality is not just a goal—it's a commitment we
              make to every customer. Our comprehensive quality assurance
              program ensures that every batch of appalam leaving our facility
              meets the highest standards of food safety, hygiene, and product
              excellence.
            </p>
            <p className="text-lg text-muted-foreground">
              We understand that international buyers need consistent, reliable
              products that comply with their local regulations. That's why
              we've invested in state-of-the-art quality control systems and
              obtained necessary certifications to serve global markets with
              confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <Badge className="mb-4">Certifications</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Certified for Excellence
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Our certifications demonstrate our commitment to maintaining
              international food safety and quality standards.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert) => (
              <Card
                key={cert.title}
                className="border-2 hover:border-brand-primary transition-colors"
              >
                <CardContent className="pt-6 text-center">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-brand-primary/10">
                    <cert.icon className="h-8 w-8 text-brand-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {cert.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Control Image */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <img
                src="/assets/generated/quality-control.dim_1024x768.jpg"
                alt="PAPADIX FOODS Quality Control"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div>
                <Badge className="mb-4">Quality Control Process</Badge>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Rigorous Testing at Every Stage
                </h2>
              </div>
              <p className="text-lg text-muted-foreground">
                Our quality control team implements a comprehensive testing
                protocol that covers every aspect of production, from raw
                material inspection to final product verification. This
                multi-layered approach ensures consistent quality and safety in
                every batch.
              </p>
              <p className="text-lg text-muted-foreground">
                We maintain detailed records of all quality checks, enabling
                complete traceability and rapid response to any quality
                concerns. This documentation is essential for export compliance
                and customer confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Measures */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">Quality Measures</Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Comprehensive Quality Control
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Our quality assurance program includes multiple checkpoints and
                testing procedures to ensure product excellence.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {qualityMeasures.map((measure) => (
                <div
                  key={measure}
                  className="flex items-start gap-3 p-4 rounded-lg bg-background border"
                >
                  <CheckCircle className="h-5 w-5 text-brand-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{measure}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hygiene Standards */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <div>
                <Badge className="mb-4">Hygiene Standards</Badge>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  World-Class Hygiene Protocols
                </h2>
              </div>
              <p className="text-lg text-muted-foreground">
                Maintaining impeccable hygiene is fundamental to our operations.
                Our facility follows strict sanitation protocols that meet
                international food safety standards. From personnel hygiene to
                equipment cleaning, every aspect is carefully controlled and
                documented.
              </p>
              <ul className="space-y-3">
                {[
                  "Daily cleaning and sanitization of all production areas",
                  "Mandatory hygiene training for all staff members",
                  "Personal protective equipment (PPE) requirements",
                  "Controlled access to production zones",
                  "Regular equipment maintenance and calibration",
                  "Air filtration and ventilation systems",
                  "Water quality testing and treatment",
                  "Waste management and disposal protocols",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Shield className="h-5 w-5 text-brand-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img
                src="/assets/generated/manufacturing-process.dim_1200x800.jpg"
                alt="PAPADIX FOODS Hygiene Standards"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Export Assurance */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="mb-4">Export Assurance</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready for Global Markets
            </h2>
            <p className="text-lg text-muted-foreground">
              Our quality systems are designed to meet the diverse regulatory
              requirements of international markets. We provide complete
              documentation including certificates of analysis, FSSAI
              certificates, and other export-related documents to facilitate
              smooth customs clearance.
            </p>
            <p className="text-lg text-muted-foreground">
              Whether you're importing to the EU, USA, Middle East, or
              Asia-Pacific region, PAPADIX FOODS ensures that our products meet
              your local food safety regulations and quality expectations. Our
              export team works closely with customers to understand specific
              requirements and provide necessary compliance documentation.
            </p>
            <div className="grid gap-6 md:grid-cols-3 mt-8">
              <Card className="border-2">
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-2">
                    100%
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Quality Tested
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-2">
                    Zero
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Compromise on Safety
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-2">
                    24/7
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Quality Monitoring
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
