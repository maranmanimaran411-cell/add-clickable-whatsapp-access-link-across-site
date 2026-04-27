import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Time = bigint;
export interface Enquiry {
    country: string;
    contactPerson: string;
    timestamp: Time;
    companyName: string;
    shippingPreference: string;
    quantity: string;
    products: Array<string>;
}
export interface Contact {
    name: string;
    email: string;
    message: string;
    timestamp: Time;
}
export interface Product {
    nutritionalInfo: string;
    name: string;
    description: string;
    sizes: Array<string>;
    packaging: string;
}
export interface backendInterface {
    addProduct(name: string, description: string, sizes: Array<string>, packaging: string, nutritionalInfo: string): Promise<void>;
    getAllContacts(): Promise<Array<Contact>>;
    getAllEnquiries(): Promise<Array<Enquiry>>;
    getCompanyInfo(): Promise<{
        brands: Array<string>;
        exportMarkets: Array<string>;
        name: string;
        businessType: string;
        keywords: Array<string>;
        location: string;
    }>;
    getProducts(): Promise<Array<Product>>;
    submitContact(name: string, email: string, message: string): Promise<void>;
    submitEnquiry(companyName: string, contactPerson: string, country: string, products: Array<string>, quantity: string, shippingPreference: string): Promise<void>;
}
