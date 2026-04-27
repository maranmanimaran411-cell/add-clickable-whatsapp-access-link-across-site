import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  useProducts,
  useSubmitContact,
  useSubmitEnquiry,
} from "@/hooks/useQueries";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { SiFacebook, SiInstagram, SiYoutube } from "react-icons/si";
import { toast } from "sonner";

export default function ContactPage() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [enquiryForm, setEnquiryForm] = useState({
    companyName: "",
    contactPerson: "",
    country: "",
    products: [] as string[],
    quantity: "",
    shippingPreference: "",
  });

  const { data: products } = useProducts();
  const submitContact = useSubmitContact();
  const submitEnquiry = useSubmitEnquiry();

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      toast.error("Please fill in all fields");
      return;
    }
    try {
      await submitContact.mutateAsync(contactForm);
      toast.success("Thank you! We will get back to you soon.");
      setContactForm({ name: "", email: "", message: "" });
    } catch {
      toast.error("Failed to submit. Please try again.");
    }
  };

  const handleEnquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !enquiryForm.companyName ||
      !enquiryForm.contactPerson ||
      !enquiryForm.country
    ) {
      toast.error("Please fill in all required fields");
      return;
    }
    try {
      await submitEnquiry.mutateAsync(enquiryForm);
      toast.success(
        "Export enquiry submitted successfully! Our team will contact you soon.",
      );
      setEnquiryForm({
        companyName: "",
        contactPerson: "",
        country: "",
        products: [],
        quantity: "",
        shippingPreference: "",
      });
    } catch {
      toast.error("Failed to submit enquiry. Please try again.");
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-dark to-brand-primary py-16 md:py-24 text-white">
        <div className="container">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Contact Us
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              Get in Touch with PAPADIX FOODS
            </h1>
            <p className="text-xl text-white/90">
              Ready to start your export journey? Contact our team for product
              information, samples, or bulk orders.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-3 mb-16">
            <Card className="border-2">
              <CardContent className="pt-6 text-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-primary/10">
                  <MapPin className="h-6 w-6 text-brand-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Our Location</h3>
                <p className="text-sm text-muted-foreground">
                  PAPADIX FOODS
                  <br />
                  Madurai, Tamil Nadu
                  <br />
                  India
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6 text-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-primary/10">
                  <Phone className="h-6 w-6 text-brand-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Phone & WhatsApp</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  <a
                    href="tel:+919751174855"
                    className="hover:text-brand-primary transition-colors"
                  >
                    +91 9751174855
                  </a>
                  <br />
                  Available for WhatsApp
                </p>
                <Button
                  asChild
                  size="sm"
                  className="bg-brand-primary hover:bg-brand-dark text-white"
                >
                  <a
                    href="https://wa.me/919751174855"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6 text-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-primary/10">
                  <Mail className="h-6 w-6 text-brand-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Email Us</h3>
                <p className="text-sm text-muted-foreground">
                  <a
                    href="mailto:export@papadixfoods.com"
                    className="hover:text-brand-primary transition-colors"
                  >
                    export@papadixfoods.com
                  </a>
                  <br />
                  For export enquiries
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Export Enquiry Form */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Export Enquiry Form</CardTitle>
                <CardDescription>
                  Fill out this form for bulk orders, export quotations, or
                  private label manufacturing enquiries.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleEnquirySubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company Name *</Label>
                    <Input
                      id="companyName"
                      value={enquiryForm.companyName}
                      onChange={(e) =>
                        setEnquiryForm({
                          ...enquiryForm,
                          companyName: e.target.value,
                        })
                      }
                      placeholder="Your company name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contactPerson">Contact Person *</Label>
                    <Input
                      id="contactPerson"
                      value={enquiryForm.contactPerson}
                      onChange={(e) =>
                        setEnquiryForm({
                          ...enquiryForm,
                          contactPerson: e.target.value,
                        })
                      }
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="country">Country *</Label>
                    <Input
                      id="country"
                      value={enquiryForm.country}
                      onChange={(e) =>
                        setEnquiryForm({
                          ...enquiryForm,
                          country: e.target.value,
                        })
                      }
                      placeholder="Your country"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="products">Products Interested In</Label>
                    <Select
                      onValueChange={(value) => {
                        if (!enquiryForm.products.includes(value)) {
                          setEnquiryForm({
                            ...enquiryForm,
                            products: [...enquiryForm.products, value],
                          });
                        }
                      }}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select products" />
                      </SelectTrigger>
                      <SelectContent>
                        {products?.map((product) => (
                          <SelectItem key={product.name} value={product.name}>
                            {product.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {enquiryForm.products.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {enquiryForm.products.map((product) => (
                          <Badge key={product} variant="secondary">
                            {product}
                            <button
                              type="button"
                              onClick={() =>
                                setEnquiryForm({
                                  ...enquiryForm,
                                  products: enquiryForm.products.filter(
                                    (p) => p !== product,
                                  ),
                                })
                              }
                              className="ml-1 hover:text-destructive"
                            >
                              ×
                            </button>
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="quantity">Estimated Quantity</Label>
                    <Input
                      id="quantity"
                      value={enquiryForm.quantity}
                      onChange={(e) =>
                        setEnquiryForm({
                          ...enquiryForm,
                          quantity: e.target.value,
                        })
                      }
                      placeholder="e.g., 1000 kg per month"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="shippingPreference">
                      Shipping Preference
                    </Label>
                    <Select
                      value={enquiryForm.shippingPreference}
                      onValueChange={(value) =>
                        setEnquiryForm({
                          ...enquiryForm,
                          shippingPreference: value,
                        })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select shipping method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sea">Sea Freight</SelectItem>
                        <SelectItem value="air">Air Freight</SelectItem>
                        <SelectItem value="express">Express Courier</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-brand-primary hover:bg-brand-dark text-white"
                    disabled={submitEnquiry.isPending}
                  >
                    {submitEnquiry.isPending
                      ? "Submitting..."
                      : "Submit Export Enquiry"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* General Contact Form */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">General Contact Form</CardTitle>
                <CardDescription>
                  Have a question or need more information? Send us a message
                  and we'll respond promptly.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      value={contactForm.name}
                      onChange={(e) =>
                        setContactForm({ ...contactForm, name: e.target.value })
                      }
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={contactForm.email}
                      onChange={(e) =>
                        setContactForm({
                          ...contactForm,
                          email: e.target.value,
                        })
                      }
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={contactForm.message}
                      onChange={(e) =>
                        setContactForm({
                          ...contactForm,
                          message: e.target.value,
                        })
                      }
                      placeholder="Tell us how we can help you..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-brand-primary hover:bg-brand-dark text-white"
                    disabled={submitContact.isPending}
                  >
                    {submitContact.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Business Hours & Social Media */}
          <div className="grid gap-8 lg:grid-cols-2 mt-12">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-brand-primary" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Monday - Friday:
                    </span>
                    <span className="font-medium">9:00 AM - 6:00 PM IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday:</span>
                    <span className="font-medium">9:00 AM - 2:00 PM IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">
                    * WhatsApp messages are monitored 24/7 for urgent export
                    enquiries
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle>Connect With Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Follow us on social media for updates, product launches, and
                  industry insights.
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/share/18Renuqkzo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-border hover:border-brand-primary hover:text-brand-primary transition-colors"
                  >
                    <SiFacebook className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/papadixfoods?igsh=aTNpemFoMThkYWY5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-border hover:border-brand-primary hover:text-brand-primary transition-colors"
                  >
                    <SiInstagram className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/manimaran-m-31b4aa359?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-border hover:border-brand-primary hover:text-brand-primary transition-colors"
                  >
                    <FaLinkedinIn className="h-5 w-5" />
                  </a>
                  <a
                    href="https://youtube.com/@papadixfoods?si=efjDh8qFBFi4E43f"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-border hover:border-red-600 hover:text-red-600 transition-colors"
                  >
                    <SiYoutube className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
