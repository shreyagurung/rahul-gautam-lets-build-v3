import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import ArchitecturePage from "./pages/ArchitecturePage.tsx";
import InstallationsPage from "./pages/InstallationsPage.tsx";
import FestivalSpacesPage from "./pages/FestivalSpacesPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";

import SiteHeader from "./components/SiteHeader.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SiteHeader />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/architecture" element={<ArchitecturePage />} />
          <Route path="/installations" element={<InstallationsPage />} />
          <Route path="/festival-spaces" element={<FestivalSpacesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;