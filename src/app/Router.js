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
import { ProductsDescribe } from "./components/Products/ProductsDescribe";
import { EMOverview } from "./components/Products/EMOverview";
import { IAOverview } from "./components/Products/IAOverview";

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
        <Route path="/demo" element={<BookADemo />} />
        <Route path="/products/overview" element={<ProductsDescribe />} />
        <Route
          path="/products/intelligent-audio-overview"
          element={<IAOverview />}
        />
        <Route
          path="/products/energy-management-overview"
          element={<EMOverview />}
        />
        <Route path="/partners" element={<Partners />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};
