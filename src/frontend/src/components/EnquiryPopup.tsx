import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
import { useEnquiry } from "@/context/EnquiryContext";
import { MessageCircle, Send } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const PRODUCT_OPTIONS = [
  "Sambar Appalam",
  "Urad Dal Appalam",
  "Rice Appalam",
  "All Products",
];

const QUANTITY_OPTIONS = ["1kg", "5kg", "10kg", "Custom"];

const WA_NUMBER = "919751174855";

export default function EnquiryPopup() {
  const { isOpen, closeEnquiry, prefilledProduct } = useEnquiry();

  const [form, setForm] = useState({
    fullName: "",
    company: "",
    country: "",
    product: prefilledProduct,
    quantity: "",
    phone: "",
    email: "",
    message: "",
  });

  // Sync prefilled product when popup opens
  useEffect(() => {
    if (isOpen) {
      setForm((prev) => ({ ...prev, product: prefilledProduct }));
    }
  }, [isOpen, prefilledProduct]);

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const buildWAMessage = () => {
    return encodeURIComponent(
      `Hello PAPADIX FOODS,\n\nI would like to request a free sample.\n\nName: ${form.fullName}\nCompany: ${form.company}\nCountry: ${form.country}\nProduct: ${form.product}\nSample Quantity: ${form.quantity}\nPhone: ${form.phone}\nEmail: ${form.email}${form.message ? `\nMessage: ${form.message}` : ""}\n\nPlease get back to me at your earliest convenience.`,
    );
  };

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${WA_NUMBER}?text=${buildWAMessage()}`,
      "_blank",
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    closeEnquiry();
    toast.success(
      "Thank you! We'll contact you within 24 hours. You can also reach us on WhatsApp: +91 9751174855",
      { duration: 6000 },
    );
    setForm({
      fullName: "",
      company: "",
      country: "",
      product: "All Products",
      quantity: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  const isFormReady =
    form.fullName &&
    form.company &&
    form.country &&
    form.product &&
    form.quantity &&
    form.phone;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && closeEnquiry()}>
      <DialogContent
        className="max-w-lg max-h-[90vh] overflow-y-auto"
        data-ocid="enquiry.dialog"
      >
        <DialogHeader>
          <div className="flex items-center gap-3 mb-1">
            <div className="h-10 w-10 rounded-full bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
              <Send className="h-5 w-5 text-brand-primary" />
            </div>
            <div>
              <DialogTitle className="text-xl text-brand-dark">
                Request a Free Sample
              </DialogTitle>
              <p className="text-sm text-muted-foreground mt-0.5">
                Fill in your details and we'll get back to you within 24 hours
              </p>
            </div>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="enquiry-name">Full Name *</Label>
              <Input
                id="enquiry-name"
                placeholder="Your full name"
                value={form.fullName}
                onChange={(e) => handleChange("fullName", e.target.value)}
                required
                data-ocid="enquiry.name_input"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="enquiry-company">Company Name *</Label>
              <Input
                id="enquiry-company"
                placeholder="Your company"
                value={form.company}
                onChange={(e) => handleChange("company", e.target.value)}
                required
                data-ocid="enquiry.company_input"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="enquiry-country">Country *</Label>
            <Input
              id="enquiry-country"
              placeholder="e.g. United Arab Emirates"
              value={form.country}
              onChange={(e) => handleChange("country", e.target.value)}
              required
              data-ocid="enquiry.country_input"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label>Product Interest *</Label>
              <Select
                value={form.product}
                onValueChange={(v) => handleChange("product", v)}
              >
                <SelectTrigger data-ocid="enquiry.product_select">
                  <SelectValue placeholder="Select product" />
                </SelectTrigger>
                <SelectContent>
                  {PRODUCT_OPTIONS.map((p) => (
                    <SelectItem key={p} value={p}>
                      {p}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label>Sample Quantity *</Label>
              <Select
                value={form.quantity}
                onValueChange={(v) => handleChange("quantity", v)}
              >
                <SelectTrigger data-ocid="enquiry.quantity_select">
                  <SelectValue placeholder="Select qty" />
                </SelectTrigger>
                <SelectContent>
                  {QUANTITY_OPTIONS.map((q) => (
                    <SelectItem key={q} value={q}>
                      {q}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="enquiry-phone">Phone / WhatsApp *</Label>
              <Input
                id="enquiry-phone"
                type="tel"
                placeholder="+1 234 567 8900"
                value={form.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                required
                data-ocid="enquiry.phone_input"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="enquiry-email">Email</Label>
              <Input
                id="enquiry-email"
                type="email"
                placeholder="you@company.com"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                data-ocid="enquiry.email_input"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="enquiry-message">
              Message / Special Requirements
            </Label>
            <Textarea
              id="enquiry-message"
              placeholder="Any specific requirements, packaging preferences, or questions..."
              rows={3}
              value={form.message}
              onChange={(e) => handleChange("message", e.target.value)}
              data-ocid="enquiry.message_textarea"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button
              type="submit"
              disabled={!isFormReady}
              className="flex-1 bg-brand-primary hover:bg-brand-dark text-white"
              data-ocid="enquiry.submit_button"
            >
              <Send className="h-4 w-4 mr-2" />
              Send Enquiry
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={handleWhatsApp}
              className="flex-1 border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10"
              data-ocid="enquiry.whatsapp_button"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Send via WhatsApp
            </Button>
          </div>

          <p className="text-xs text-center text-muted-foreground pb-1">
            We respond within 24 hours · WhatsApp: +91 9751174855
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
