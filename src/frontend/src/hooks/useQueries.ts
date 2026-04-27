import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export interface Product {
  name: string;
  description: string;
  sizes: string[];
  packagingOptions: string[];
  packaging?: string;
  nutritionalInfo?: string;
}

interface ContactData {
  name: string;
  email: string;
  message: string;
}

interface EnquiryData {
  companyName: string;
  contactPerson: string;
  country: string;
  products: string[];
  quantity: string;
  shippingPreference: string;
}

const staticProducts: Product[] = [
  {
    name: "PAPADIX APPALAM (Urad Dal Appalam)",
    description:
      "Our signature urad dal appalam, crafted using traditional South Indian recipes with premium quality black gram lentils.",
    sizes: [
      "Small (5cm)",
      "Medium (8cm)",
      "Large (12cm)",
      "Extra Large (15cm)",
    ],
    packagingOptions: [
      "100g retail pack",
      "500g bulk pack",
      "1kg export pack",
      "5kg wholesale bag",
    ],
    packaging:
      "Available in food-grade poly bags, vacuum-sealed packs, and custom branded packaging for private label.",
    nutritionalInfo:
      "Rich in protein and fiber from premium urad dal. Traditional recipe with no artificial preservatives.",
  },
  {
    name: "SAMBAR APPALAM",
    description:
      "Specially crafted appalam perfect for serving with sambar and South Indian meals. A staple for authentic dining.",
    sizes: ["Small (5cm)", "Medium (8cm)", "Large (12cm)"],
    packagingOptions: ["100g retail pack", "500g bulk pack", "1kg export pack"],
    packaging:
      "Food-grade packaging suitable for international export with moisture-proof sealing.",
    nutritionalInfo:
      "Made from a blend of lentils with authentic South Indian spices for a perfect taste.",
  },
  {
    name: "Pepper Appalam",
    description:
      "Infused with freshly ground black pepper for a spicy kick. Popular among customers who love bold flavours.",
    sizes: ["Small (5cm)", "Medium (8cm)", "Large (12cm)"],
    packagingOptions: ["100g retail pack", "500g bulk pack", "1kg export pack"],
    packaging:
      "Available in airtight sealed packs to preserve freshness and crunch.",
    nutritionalInfo:
      "Black pepper adds natural antioxidants and bold spice flavour.",
  },
  {
    name: "Garlic Appalam",
    description:
      "Aromatic garlic-flavoured appalam with a distinctive taste loved across South Asia and global markets.",
    sizes: ["Small (5cm)", "Medium (8cm)", "Large (12cm)"],
    packagingOptions: ["100g retail pack", "500g bulk pack", "1kg export pack"],
    packaging:
      "Sealed in aroma-lock packaging to preserve the garlic fragrance.",
    nutritionalInfo:
      "Garlic provides natural flavour enhancement with traditional health benefits.",
  },
];

// Products
export function useProducts() {
  return useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: async () => staticProducts,
  });
}

// Company Info (static)
export function useCompanyInfo() {
  return useQuery({
    queryKey: ["companyInfo"],
    queryFn: async () => ({
      name: "PAPADIX FOODS",
      location: "Madurai, Tamil Nadu, India",
      phone: "+91 9751174855",
      email: "export@papadixfoods.com",
      exportMarkets: [
        "India",
        "UAE",
        "UK",
        "USA",
        "France",
        "Germany",
        "Singapore",
        "Malaysia",
        "Australia",
      ],
    }),
  });
}

// Submit Contact
export function useSubmitContact() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: ContactData) => {
      // Simulate submission — backend methods will be wired once bindgen runs
      await new Promise((resolve) => setTimeout(resolve, 800));
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contacts"] });
    },
  });
}

// Submit Enquiry
export function useSubmitEnquiry() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: EnquiryData) => {
      await new Promise((resolve) => setTimeout(resolve, 800));
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["enquiries"] });
    },
  });
}

// Get All Contacts (admin use)
export function useContacts() {
  return useQuery<ContactData[]>({
    queryKey: ["contacts"],
    queryFn: async () => [],
  });
}

// Get All Enquiries (admin use)
export function useEnquiries() {
  return useQuery<EnquiryData[]>({
    queryKey: ["enquiries"],
    queryFn: async () => [],
  });
}
