import { Routes, Route } from "react-router-dom";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Header } from "./pages/Header";
import { Footer } from "./pages/Footer";
import { About } from "./pages/About";
import { Press } from "./pages/Press";
import { Carrers } from "./pages/Carrers";
import { NotFound } from "./pages/NotFound";
import { Research } from "./components/Research/Research";
import { Products } from "./pages/Products";
import { BookADemo } from "./pages/BookADemo";
import { AOSOverview } from "./components/Products/AOSOverview";
import { IAOverview } from "./components/Products/IAOverview";
import { TMOverview } from "./components/Products/TMOverview";
import { DSOverview } from "./components/Products/DSOverview";
import { ScrollButton } from "./components/ScrollButton/ScrollBtn";
import { ScrollToTop } from "./pages/ScrollTop";
import { ComingSoon } from "./pages/ComingSoon";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { FAQ } from "./components/FAQ/Faq";

export const Router = () => {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />} />

        {/* <Route path="/technology" element={<Technology />} /> */}

        <Route path="/products" element={<Products />} />
        <Route path="/demo" element={<BookADemo />} />

        <Route path="/resources/research" element={<Research />} />
        {/* <Route path="/resources/videos" element={<ProductsVideos />} /> */}
        <Route path="/resources/blogs" element={<ComingSoon />} />
        <Route path="/resources/press" element={<Press />} />

        <Route path="/company/about" element={<About />} />
        <Route path="/company/careers" element={<Carrers />} />
        <Route path="/company/contact" element={<Contact />} />

        {/* <Route path="/partners" element={<Partners />} /> */}
        {/* <Route path="/team" element={<Team />} /> */}
        {/* <Route path="/404" element={<ComingSoon />} /> */}

        <Route path="/faq" element={<FAQ />} />
        <Route path="/policy" element={<PrivacyPolicy />} />

        <Route
          path="/products/airport-operations-overview"
          element={<AOSOverview />}
        />
        <Route
          path="/products/digital-signage-overview"
          element={<DSOverview />}
        />
        <Route
          path="/products/traffic-management-overview"
          element={<TMOverview />}
        />
        <Route
          path="/products/intelligent-audio-overview"
          element={<IAOverview />}
        />
        {/* <Route
          path="/products/energy-management-overview"
          element={<EMOverview />}
        /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollButton />
      <Footer />
    </>
  );
};
