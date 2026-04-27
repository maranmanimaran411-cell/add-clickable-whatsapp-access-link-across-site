import { createContext, useContext, useState } from "react";

interface EnquiryContextType {
  isOpen: boolean;
  openEnquiry: (prefilledProduct?: string) => void;
  closeEnquiry: () => void;
  prefilledProduct: string;
}

const EnquiryContext = createContext<EnquiryContextType | null>(null);

export function EnquiryProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [prefilledProduct, setPrefilledProduct] = useState("All Products");

  const openEnquiry = (product?: string) => {
    setPrefilledProduct(product ?? "All Products");
    setIsOpen(true);
  };

  const closeEnquiry = () => setIsOpen(false);

  return (
    <EnquiryContext.Provider
      value={{ isOpen, openEnquiry, closeEnquiry, prefilledProduct }}
    >
      {children}
    </EnquiryContext.Provider>
  );
}

export function useEnquiry() {
  const ctx = useContext(EnquiryContext);
  if (!ctx) throw new Error("useEnquiry must be used inside EnquiryProvider");
  return ctx;
}
