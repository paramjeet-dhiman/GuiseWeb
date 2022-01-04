import React from "react";
import { Routes, Route } from "react-router-dom";
import { Contact } from "./pages/Contact";
import { Solutions } from "./pages/Solutions";
import { Home } from "./pages/Home";
import { Team } from "./pages/Team";
import { Header } from "./pages/Header";
import { Footer } from "./pages/Footer";
import { About } from "./pages/About";
import { Technology } from "./pages/Technology";
import { Carrers } from "./pages/Carrers";
import { Openings } from "./pages/Openings";
import { ScrollToTop } from "./pages/ScrollTop";
import { NotFound } from "./pages/NotFound";
import { Research } from "./components/Research/Research";
import { Partners } from "./pages/Partners";
import { Products } from "./pages/Products";
import { BookADemo } from "./pages/BookADemo";
import { AOSOverview } from "./components/Products/AOSOverview";
import { EMOverview } from "./components/Products/EMOverview";
import { IAOverview } from "./components/Products/IAOverview";
import { TMOverview } from "./components/Products/TMOverview";
import { ProductReview } from "./components/Products/ProductReview";
import { DSOverview } from "./components/Products/DSOverview";
import { ScrollButton } from "./components/ScrollButton/ScrollBtn";
import { ComingSoon } from "./pages/ComingSoon";
import { ProductsVideos } from "./pages/ProductsVideos";
import { HelpCenter } from "./pages/HelpCenter";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { FAQ } from "./components/FAQ/Faq";

export const Router = () => {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Carrers />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers/jobs" element={<Openings />} />
        <Route path="/team" element={<Team />} />
        <Route path="/research" element={<Research />} />
        <Route path="/products" element={<Products />} />
        <Route path="/videos" element={<ProductsVideos />} />
        <Route path="/help-and-support" element={<HelpCenter />} />
        <Route path="/policy" element={<PrivacyPolicy />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/demo" element={<BookADemo />} />
        <Route
          path="/products/airport-operations-overview"
          element={<AOSOverview />}
        />
        <Route
          path="/products/digital-signage-overview"
          element={<DSOverview />}
        />
        <Route path="/product-review" element={<ProductReview />} />
        <Route
          path="/products/traffic-management-overview"
          element={<TMOverview />}
        />
        <Route
          path="/products/intelligent-audio-overview"
          element={<IAOverview />}
        />
        <Route
          path="/products/energy-management-overview"
          element={<EMOverview />}
        />
        <Route path="/partners" element={<Partners />} />
        <Route path="/404" element={<ComingSoon />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollButton />
      <Footer />
    </>
  );
};
