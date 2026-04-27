import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function ManufacturingPage() {
  const steps = [
    {
      title: "Raw Material Selection",
      description:
        "We source premium quality urad dal, rice flour, and authentic spices from trusted suppliers. Every batch undergoes rigorous quality checks to ensure only the finest ingredients enter our production facility.",
      image: "/assets/generated/quality-control.dim_1024x768.jpg",
    },
    {
      title: "Traditional Dough Preparation",
      description:
        "Our master craftsmen prepare the dough using time-tested traditional methods. The perfect blend of ingredients, precise water ratios, and expert kneading techniques ensure consistent texture and authentic taste in every batch.",
      image: "/assets/generated/manufacturing-process.dim_1200x800.jpg",
    },
    {
      title: "Hygienic Drying Process",
      description:
        "The shaped appalam undergoes controlled drying in our state-of-the-art drying chambers. Temperature and humidity are carefully monitored to achieve optimal moisture content while maintaining product integrity and preventing contamination.",
      image: "/assets/generated/drying-process.dim_1200x800.jpg",
    },
    {
      title: "Quality Inspection",
      description:
        "Every batch passes through multiple quality checkpoints. Our trained quality control team inspects for size consistency, color uniformity, texture, and overall appearance. Only products meeting our strict standards proceed to packaging.",
      image: "/assets/generated/quality-control.dim_1024x768.jpg",
    },
    {
      title: "Export-Grade Packaging",
      description:
        "Products are packed in moisture-proof, food-grade packaging materials that ensure freshness during long-distance transportation. We offer both bulk export packaging and retail-ready options with custom branding capabilities.",
      image: "/assets/generated/export-packaging.dim_1024x768.jpg",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-dark to-brand-primary py-16 md:py-24 text-white">
        <div className="container">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Manufacturing Process
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              Traditional Methods Meet Modern Standards
            </h1>
            <p className="text-xl text-white/90">
              Discover how we combine centuries-old recipes with contemporary
              manufacturing technology to produce world-class appalam.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="mb-4">Our Process</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              From Premium Ingredients to Export-Ready Products
            </h2>
            <p className="text-lg text-muted-foreground">
              At PAPADIX FOODS, we believe that great appalam starts with great
              ingredients and meticulous attention to detail at every stage of
              production. Our manufacturing process is designed to preserve the
              authentic taste of traditional South Indian appalam while meeting
              international food safety and quality standards.
            </p>
            <p className="text-lg text-muted-foreground">
              Our FSSAI-certified facility combines the wisdom of traditional
              appalam-making techniques with modern hygiene protocols, quality
              control systems, and export-grade packaging solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Manufacturing Steps */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="space-y-16">
            {steps.map((step, stepIndex) => (
              <div
                key={step.title}
                className={`grid gap-8 lg:gap-12 lg:grid-cols-2 items-center ${
                  stepIndex % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={stepIndex % 2 === 1 ? "lg:order-2" : ""}>
                  <img
                    src={step.image}
                    alt={step.title}
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <div className={stepIndex % 2 === 1 ? "lg:order-1" : ""}>
                  <Card className="border-2">
                    <CardContent className="pt-6">
                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary text-white font-bold">
                          {stepIndex + 1}
                        </div>
                        <h3 className="text-2xl font-bold">{step.title}</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <div>
                <Badge className="mb-4">Quality Standards</Badge>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Committed to Excellence at Every Stage
                </h2>
              </div>
              <p className="text-lg text-muted-foreground">
                Our manufacturing facility adheres to strict quality and hygiene
                standards throughout the production process. We've implemented
                comprehensive protocols to ensure every batch of appalam meets
                international export requirements.
              </p>
              <ul className="space-y-3">
                {[
                  "FSSAI-certified manufacturing facility",
                  "Regular equipment sanitization and maintenance",
                  "Trained personnel following GMP (Good Manufacturing Practices)",
                  "Temperature and humidity-controlled production areas",
                  "Pest control and contamination prevention measures",
                  "Batch tracking and traceability systems",
                  "Regular third-party quality audits",
                  "Documented standard operating procedures (SOPs)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img
                src="/assets/generated/papadix-factory-exterior.dim_1200x800.jpg"
                alt="PAPADIX FOODS Manufacturing Facility"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Tradition */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="mb-4">Technology & Tradition</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              The Perfect Balance
            </h2>
            <p className="text-lg text-muted-foreground">
              While we embrace modern technology for hygiene, quality control,
              and packaging, we never compromise on the traditional methods that
              give our appalam its authentic taste and texture. Our master
              craftsmen bring decades of experience to the production floor,
              ensuring that every batch maintains the quality and consistency
              that PAPADIX FOODS is known for.
            </p>
            <p className="text-lg text-muted-foreground">
              This unique combination of tradition and technology allows us to
              scale production for large export orders while maintaining the
              artisanal quality that sets our products apart in international
              markets.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
