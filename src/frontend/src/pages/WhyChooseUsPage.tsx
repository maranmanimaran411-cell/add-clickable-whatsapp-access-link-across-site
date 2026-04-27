import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Award,
  CheckCircle,
  Clock,
  DollarSign,
  Factory,
  Shield,
  Truck,
  Users,
} from "lucide-react";

export default function WhyChooseUsPage() {
  const reasons = [
    {
      icon: Factory,
      title: "Direct Manufacturer",
      description:
        "As a direct manufacturer, we eliminate middlemen, offering you better pricing and direct communication for your specific requirements.",
      benefits: [
        "Competitive factory-direct pricing",
        "Direct communication with production team",
        "Flexibility in customization and specifications",
        "Better control over quality and delivery schedules",
      ],
    },
    {
      icon: Award,
      title: "Consistent Quality",
      description:
        "Our rigorous quality control processes ensure that every batch meets the same high standards, giving you confidence in product consistency.",
      benefits: [
        "Standardized recipes and production methods",
        "Multi-stage quality inspection protocols",
        "FSSAI certification and compliance",
        "Batch-to-batch consistency guaranteed",
      ],
    },
    {
      icon: DollarSign,
      title: "Competitive Pricing",
      description:
        "We offer export-competitive pricing without compromising on quality, helping you maintain healthy margins in your market.",
      benefits: [
        "Volume-based pricing discounts",
        "Transparent pricing with no hidden costs",
        "Flexible payment terms for regular buyers",
        "Cost-effective shipping solutions",
      ],
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description:
        "We understand the importance of timely delivery for your business. Our efficient production and logistics ensure your orders arrive as scheduled.",
      benefits: [
        "Reliable production scheduling",
        "Efficient logistics coordination",
        "Real-time shipment tracking",
        "Contingency planning for urgent orders",
      ],
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description:
        "Our comprehensive quality assurance program covers every aspect of production, from raw materials to final packaging.",
      benefits: [
        "Premium quality raw materials",
        "Hygienic manufacturing environment",
        "Regular third-party audits",
        "Complete product traceability",
      ],
    },
    {
      icon: Users,
      title: "Customer-Centric Approach",
      description:
        "We work closely with our customers to understand their unique needs and provide personalized solutions.",
      benefits: [
        "Dedicated export customer service team",
        "Responsive communication and support",
        "Customized packaging and labeling",
        "Long-term partnership focus",
      ],
    },
  ];

  const additionalBenefits = [
    "Over 25 years of appalam manufacturing experience",
    "State-of-the-art production facility in Madurai",
    "Capacity to handle large volume orders",
    "Private label manufacturing capabilities",
    "Complete export documentation support",
    "Product samples available for evaluation",
    "Multilingual customer support",
    "Established presence in 9+ countries",
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-dark to-brand-primary py-16 md:py-24 text-white">
        <div className="container">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Why Choose Us
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              Your Trusted Partner for Appalam Export
            </h1>
            <p className="text-xl text-white/90">
              Discover why international buyers choose PAPADIX FOODS as their
              preferred appalam supplier.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="mb-4">The PAPADIX Advantage</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              More Than Just a Supplier
            </h2>
            <p className="text-lg text-muted-foreground">
              When you partner with PAPADIX FOODS, you're not just buying
              appalam—you're gaining a reliable manufacturing partner committed
              to your success. We combine traditional expertise with modern
              business practices to deliver exceptional value to our
              international customers.
            </p>
            <p className="text-lg text-muted-foreground">
              Our focus on quality, consistency, and customer service has made
              us a trusted name among importers, wholesalers, and retailers
              across multiple countries.
            </p>
          </div>
        </div>
      </section>

      {/* Main Reasons */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="space-y-12">
            {reasons.map((reason) => (
              <Card
                key={reason.title}
                className="border-2 hover:border-brand-primary transition-colors"
              >
                <CardContent className="pt-8">
                  <div className="grid gap-8 lg:grid-cols-[auto_1fr]">
                    <div className="flex flex-col items-center lg:items-start">
                      <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-brand-primary/10">
                        <reason.icon className="h-8 w-8 text-brand-primary" />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold">{reason.title}</h3>
                      <p className="text-lg text-muted-foreground">
                        {reason.description}
                      </p>
                      <div className="grid gap-3 md:grid-cols-2 mt-4">
                        {reason.benefits.map((benefit) => (
                          <div key={benefit} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-brand-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">Additional Benefits</Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                What Sets Us Apart
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Beyond our core strengths, here are more reasons to choose
                PAPADIX FOODS as your appalam supplier.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {additionalBenefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-3 p-4 rounded-lg bg-muted/30 border"
                >
                  <CheckCircle className="h-5 w-5 text-brand-primary flex-shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Reliability */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <img
                src="/assets/generated/team-photo.dim_1024x768.jpg"
                alt="PAPADIX FOODS Team"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div>
                <Badge className="mb-4">Trust & Reliability</Badge>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Building Long-Term Partnerships
                </h2>
              </div>
              <p className="text-lg text-muted-foreground">
                At PAPADIX FOODS, we believe in building lasting relationships
                with our customers. Many of our international buyers have been
                working with us for years, testament to our commitment to
                quality, reliability, and excellent service.
              </p>
              <p className="text-lg text-muted-foreground">
                We understand that your business depends on consistent supply
                and quality. That's why we go the extra mile to ensure every
                order meets your expectations and arrives on time. Our
                transparent communication and proactive problem-solving approach
                make us a partner you can trust.
              </p>
              <ul className="space-y-3">
                {[
                  "Transparent business practices and honest communication",
                  "Proactive updates on order status and shipments",
                  "Quick resolution of any issues or concerns",
                  "Long-term supply agreements available",
                  "Dedicated account managers for regular customers",
                  "Continuous improvement based on customer feedback",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Truck className="h-5 w-5 text-brand-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="mb-4">Customer Satisfaction</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Trusted by Buyers Worldwide
            </h2>
            <p className="text-lg text-muted-foreground">
              Our commitment to excellence has earned us the trust of importers,
              wholesalers, and retailers across India, UAE, UK, USA, France,
              Germany, Singapore, Malaysia, and Australia. We take pride in
              being their preferred supplier for authentic South Indian appalam.
            </p>
            <div className="grid gap-6 md:grid-cols-3 mt-8">
              <Card className="border-2">
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl font-bold text-brand-primary mb-2">
                    98%
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Customer Satisfaction Rate
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl font-bold text-brand-primary mb-2">
                    95%
                  </div>
                  <p className="text-sm text-muted-foreground">
                    On-Time Delivery
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl font-bold text-brand-primary mb-2">
                    100%
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Quality Guaranteed
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
