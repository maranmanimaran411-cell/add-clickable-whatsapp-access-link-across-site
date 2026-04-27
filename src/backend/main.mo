import Map "mo:core/Map";
import Time "mo:core/Time";
import Text "mo:core/Text";
import Array "mo:core/Array";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";

actor {
  // Types
  type Product = {
    name : Text;
    description : Text;
    sizes : [Text];
    packaging : Text;
    nutritionalInfo : Text;
  };

  type Enquiry = {
    companyName : Text;
    contactPerson : Text;
    country : Text;
    products : [Text];
    quantity : Text;
    shippingPreference : Text;
    timestamp : Time.Time;
  };

  type Contact = {
    name : Text;
    email : Text;
    message : Text;
    timestamp : Time.Time;
  };

  // Storage
  let productData = Map.empty<Text, Product>();
  let enquiryData = Map.empty<Time.Time, Enquiry>();
  let contactData = Map.empty<Time.Time, Contact>();

  // Initialize products
  let products = [
    {
      name = "PAPADIX APPALAM";
      description = "Premium Urad Dal Appalam";
      sizes = ["4 inch", "5 inch", "7 inch"];
      packaging = "Bulk export packaging";
      nutritionalInfo = "Rich in protein, gluten-free";
    },
    {
      name = "SAMBAR APPALAM";
      description = "Traditional South Indian Sambar Appalam";
      sizes = ["3 inch", "6 inch"];
      packaging = "Retail and export packs";
      nutritionalInfo = "Authentic spicy flavor";
    },
    {
      name = "Pepper Appalam";
      description = "Spicy black pepper variant";
      sizes = ["4 inch", "6 inch"];
      packaging = "Bulk and private label options";
      nutritionalInfo = "No artificial preservatives";
    },
    {
      name = "Garlic Appalam";
      description = "Flavored with real garlic";
      sizes = ["5 inch", "7 inch"];
      packaging = "Export-grade packaging";
      nutritionalInfo = "Low fat, high taste";
    },
  ];

  for (product in products.values()) {
    productData.add(product.name, product);
  };

  module Product {
    public func compareByName(p1 : Product, p2 : Product) : Order.Order {
      Text.compare(p1.name, p2.name);
    };
  };

  // Product Management
  public query ({ caller }) func getProducts() : async [Product] {
    productData.values().toArray().sort(Product.compareByName);
  };

  public shared ({ caller }) func addProduct(name : Text, description : Text, sizes : [Text], packaging : Text, nutritionalInfo : Text) : async () {
    if (productData.containsKey(name)) { Runtime.trap("Product already exists") };
    let product : Product = {
      name;
      description;
      sizes;
      packaging;
      nutritionalInfo;
    };
    productData.add(name, product);
  };

  // Enquiry Management
  public shared ({ caller }) func submitEnquiry(companyName : Text, contactPerson : Text, country : Text, products : [Text], quantity : Text, shippingPreference : Text) : async () {
    let enquiry : Enquiry = {
      companyName;
      contactPerson;
      country;
      products;
      quantity;
      shippingPreference;
      timestamp = Time.now();
    };
    enquiryData.add(enquiry.timestamp, enquiry);
  };

  public query ({ caller }) func getAllEnquiries() : async [Enquiry] {
    enquiryData.values().toArray();
  };

  // Contact Management
  public shared ({ caller }) func submitContact(name : Text, email : Text, message : Text) : async () {
    let contact : Contact = {
      name;
      email;
      message;
      timestamp = Time.now();
    };
    contactData.add(contact.timestamp, contact);
  };

  public query ({ caller }) func getAllContacts() : async [Contact] {
    contactData.values().toArray();
  };

  // Static Content
  public query ({ caller }) func getCompanyInfo() : async {
    name : Text;
    brands : [Text];
    businessType : Text;
    location : Text;
    exportMarkets : [Text];
    keywords : [Text];
  } {
    {
      name = "PAPADIX FOODS";
      brands = ["PAPADIX APPALAM", "SAMBAR APPALAM"];
      businessType = "Appalam (Papad) Manufacturer, Supplier & Exporter";
      location = "Madurai, Tamil Nadu, India";
      exportMarkets = ["India", "UAE", "UK", "USA", "France", "Germany", "Singapore", "Malaysia", "Australia"];
      keywords = [
        "Appalam Manufacturer in India",
        "Papad Exporter from India",
        "Sambar Appalam Manufacturer",
        "Urad Dal Appalam Supplier",
        "Indian Papad Export Company",
        "Madurai Appalam Factory",
        "Private Label Appalam Manufacturer in India",
        "Bulk Papad Supplier for Export",
        "South Indian Appalam Exporter",
        "Sambar Appalam Factory in Tamil Nadu",
      ];
    };
  };
};
