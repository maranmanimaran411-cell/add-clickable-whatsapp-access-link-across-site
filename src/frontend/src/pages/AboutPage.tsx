import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Award, CheckCircle, Eye, Target } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: Award,
      title: "Quality Excellence",
      description:
        "Uncompromising commitment to producing the finest appalam using premium ingredients and traditional methods.",
    },
    {
      icon: Target,
      title: "Customer Focus",
      description:
        "Understanding and exceeding customer expectations through personalized service and consistent product quality.",
    },
    {
      icon: CheckCircle,
      title: "Integrity",
      description:
        "Building trust through transparent business practices and reliable delivery commitments.",
    },
    {
      icon: Eye,
      title: "Innovation",
      description:
        "Blending traditional recipes with modern technology to meet evolving market demands.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-dark to-brand-primary py-16 md:py-24 text-white">
        <div className="container">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              About Us
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              The Story of PAPADIX FOODS
            </h1>
            <p className="text-xl text-white/90">
              A legacy of authentic South Indian appalam manufacturing, serving
              global markets with pride and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 md:py-24">
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
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Heritage Meets Modern Excellence
              </h2>
              <p className="text-lg text-muted-foreground">
                Established in Madurai, the cultural heart of Tamil Nadu,
                PAPADIX FOODS has grown from a traditional appalam maker to a
                leading manufacturer and exporter serving international markets.
                Our journey is rooted in the rich culinary heritage of South
                India, where appalam (papad) has been a staple accompaniment for
                generations.
              </p>
              <p className="text-lg text-muted-foreground">
                What started as a family tradition has evolved into a modern
                manufacturing facility that combines time-tested recipes with
                contemporary hygiene standards and quality control processes.
                Today, we proudly export our premium PAPADIX APPALAM and SAMBAR
                APPALAM to discerning customers across India, UAE, UK, USA,
                France, Germany, Singapore, Malaysia, and Australia.
              </p>
              <p className="text-lg text-muted-foreground">
                Our commitment to quality has earned us the trust of
                international food importers, wholesalers, supermarket chains,
                and HORECA buyers who rely on us for consistent, authentic South
                Indian appalam that meets global food safety standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-primary/10">
                  <Target className="h-6 w-6 text-brand-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To be the most trusted name in appalam manufacturing and
                  export, delivering authentic South Indian flavors to global
                  markets while maintaining the highest standards of quality,
                  hygiene, and customer service. We strive to support our
                  customers' success through reliable supply, competitive
                  pricing, and unwavering product consistency.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-primary/10">
                  <Eye className="h-6 w-6 text-brand-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To become the leading global supplier of premium South Indian
                  appalam, recognized for innovation, quality excellence, and
                  sustainable business practices. We envision PAPADIX FOODS as
                  the preferred partner for international buyers seeking
                  authentic, high-quality appalam products backed by world-class
                  manufacturing and export capabilities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <Badge className="mb-4">Our Values</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              What Drives Us Forward
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Our core values guide every decision we make and every product we
              manufacture.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <Card
                key={value.title}
                className="border-2 hover:border-brand-primary transition-colors"
              >
                <CardContent className="pt-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-primary/10">
                    <value.icon className="h-6 w-6 text-brand-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <div>
                <Badge className="mb-4">Our Expertise</Badge>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Decades of Manufacturing Excellence
                </h2>
              </div>
              <p className="text-lg text-muted-foreground">
                With over 25 years of experience in appalam manufacturing,
                PAPADIX FOODS has mastered the art of producing consistent,
                high-quality products that meet international standards. Our
                expertise spans:
              </p>
              <ul className="space-y-3">
                {[
                  "Traditional dough preparation techniques passed down through generations",
                  "Modern hygiene protocols and FSSAI-compliant manufacturing processes",
                  "Export-grade packaging and quality control systems",
                  "Custom formulations for private label manufacturing",
                  "Efficient logistics and international shipping coordination",
                  "Comprehensive documentation for export compliance",
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
                src="/assets/generated/manufacturing-process.dim_1200x800.jpg"
                alt="PAPADIX FOODS Manufacturing"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="mb-4">Our Commitment</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Committed to Global Quality Standards
            </h2>
            <p className="text-lg text-muted-foreground">
              At PAPADIX FOODS, we understand that our customers depend on us
              for consistent quality and reliable supply. That's why we've
              invested in state-of-the-art manufacturing facilities, rigorous
              quality control processes, and a dedicated team committed to
              excellence at every stage of production.
            </p>
            <p className="text-lg text-muted-foreground">
              Our FSSAI certification and adherence to international food safety
              standards ensure that every batch of appalam leaving our facility
              meets the highest quality benchmarks. We work closely with our
              export partners to understand their specific requirements and
              deliver products that exceed expectations.
            </p>
            <p className="text-lg text-muted-foreground">
              Whether you're a large supermarket chain, an ethnic food
              distributor, or a HORECA buyer, PAPADIX FOODS is your trusted
              partner for authentic South Indian appalam that your customers
              will love.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
