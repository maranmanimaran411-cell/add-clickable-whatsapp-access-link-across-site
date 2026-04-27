import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { ThemeProvider } from "next-themes";
import EnquiryPopup from "./components/EnquiryPopup";
import Footer from "./components/Footer";
import Header from "./components/Header";
import WhatsAppWidget from "./components/WhatsAppWidget";
import { EnquiryProvider } from "./context/EnquiryContext";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ExportMarketsPage from "./pages/ExportMarketsPage";
import HomePage from "./pages/HomePage";
import ManufacturingPage from "./pages/ManufacturingPage";
import ProductsPage from "./pages/ProductsPage";
import QualityPage from "./pages/QualityPage";
import WhyChooseUsPage from "./pages/WhyChooseUsPage";

const queryClient = new QueryClient();

// Layout component with Header and Footer
function Layout() {
  return (
    <EnquiryProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <WhatsAppWidget />
        <EnquiryPopup />
        <Toaster />
      </div>
    </EnquiryProvider>
  );
}

// Define routes
const rootRoute = createRootRoute({
  component: Layout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});

const productsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/products",
  component: ProductsPage,
});

const manufacturingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/manufacturing",
  component: ManufacturingPage,
});

const qualityRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/quality",
  component: QualityPage,
});

const exportMarketsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/export-markets",
  component: ExportMarketsPage,
});

const whyChooseUsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/why-choose-us",
  component: WhyChooseUsPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  productsRoute,
  manufacturingRoute,
  qualityRoute,
  exportMarketsRoute,
  whyChooseUsRoute,
  contactRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
