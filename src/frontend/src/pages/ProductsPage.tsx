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
import { useProducts } from "@/hooks/useQueries";
import { useNavigate } from "@tanstack/react-router";
import { Leaf, Package, Send, Shield, Truck } from "lucide-react";

export default function ProductsPage() {
  const navigate = useNavigate();
  const { data: products, isLoading } = useProducts();
  const { openEnquiry } = useEnquiry();

  const features = [
    {
      icon: Leaf,
      title: "Natural Ingredients",
      description: "Made from premium quality urad dal and authentic spices",
    },
    {
      icon: Shield,
      title: "No Preservatives",
      description: "Free from artificial colors, flavors, and preservatives",
    },
    {
      icon: Package,
      title: "Export Packaging",
      description: "Available in bulk and retail packaging for export",
    },
    {
      icon: Truck,
      title: "Private Label",
      description: "Custom packaging and branding options available",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-dark to-brand-primary py-16 md:py-24 text-white">
        <div className="container">
          <div className="max-w-3xl space-y-6">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Our Products
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Premium Quality Appalam for Export
            </h1>
            <p className="text-xl text-white/90">
              Authentic South Indian appalam varieties crafted with traditional
              recipes and modern hygiene standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                size="lg"
                onClick={() => openEnquiry()}
                className="bg-white text-brand-primary hover:bg-white/90 text-base font-semibold"
                data-ocid="products_hero.request_sample_button"
              >
                <Send className="h-4 w-4 mr-2" />
                Request a Free Sample
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate({ to: "/contact" })}
                className="border-white text-white hover:bg-white/10 text-base font-semibold"
                data-ocid="products_hero.contact_button"
              >
                Get Bulk Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Why Choose PAPADIX APPALAM
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every product is manufactured with care to ensure consistent
              quality and authentic taste.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card key={feature.title} className="border-2 text-center">
                <CardContent className="pt-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-primary/10">
                    <feature.icon className="h-6 w-6 text-brand-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <Badge className="mb-4">Product Range</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our Appalam Varieties
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              From classic urad dal appalam to specialty flavored varieties, we
              offer a complete range for your export needs.
            </p>
          </div>

          {isLoading ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i} className="animate-pulse">
                  <CardHeader>
                    <div className="h-6 bg-muted rounded w-3/4 mb-2" />
                    <div className="h-4 bg-muted rounded w-1/2" />
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="h-4 bg-muted rounded" />
                      <div className="h-4 bg-muted rounded w-5/6" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
              {products?.map((product, idx) => (
                <Card
                  key={product.name}
                  className="border-2 hover:border-brand-primary transition-colors flex flex-col"
                  data-ocid={`products.item.${idx + 1}`}
                >
                  <CardHeader>
                    <CardTitle className="text-2xl">{product.name}</CardTitle>
                    <CardDescription className="text-base">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-1">
                    <div>
                      <h4 className="font-semibold mb-2">Available Sizes:</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.sizes.map((size) => (
                          <Badge key={size} variant="secondary">
                            {size}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Packaging:</h4>
                      <p className="text-sm text-muted-foreground">
                        {product.packaging}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">
                        Product Highlights:
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {product.nutritionalInfo}
                      </p>
                    </div>
                  </CardContent>
                  <div className="px-6 pb-6">
                    <Button
                      onClick={() => openEnquiry(product.name)}
                      className="w-full bg-brand-primary hover:bg-brand-dark text-white"
                      data-ocid={`products.request_sample_button.${idx + 1}`}
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Request a Sample
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Product Image Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <img
                src="/assets/generated/appalam-product-range.dim_1024x768.jpg"
                alt="PAPADIX FOODS Product Range"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div>
                <Badge className="mb-4">Bulk & Export Packaging</Badge>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Flexible Packaging Solutions
                </h2>
              </div>
              <p className="text-lg text-muted-foreground">
                We understand that different markets have different packaging
                requirements. That's why we offer flexible packaging options to
                suit your specific needs:
              </p>
              <ul className="space-y-3">
                {[
                  "Bulk export packaging for large volume orders",
                  "Retail-ready packaging with custom branding",
                  "Private label manufacturing services",
                  "Multiple size options from 100g to 5kg packs",
                  "Moisture-proof packaging for extended shelf life",
                  "Custom packaging design and labeling support",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Package className="h-5 w-5 text-brand-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FollowUsBanner />

      {/* CTA Section */}
      <section className="py-16 md:py-20">
        <div className="container">
          <Card className="border-2 border-brand-primary bg-gradient-to-br from-brand-primary/5 to-brand-medium/5">
            <CardContent className="pt-12 pb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Interested in Our Products?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Contact us for product samples, bulk pricing, or custom
                packaging requirements. Our export team is ready to assist you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={() => openEnquiry()}
                  className="bg-brand-primary hover:bg-brand-dark text-base font-semibold"
                  data-ocid="products_cta.request_sample_button"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Request a Free Sample
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => navigate({ to: "/contact" })}
                  className="text-base font-semibold"
                  data-ocid="products_cta.get_pricing_button"
                >
                  Get Bulk Pricing
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
