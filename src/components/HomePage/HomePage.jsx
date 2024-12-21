import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../Hero";
import Products from "../Products/Products";
import TopProducts from "../TopProducts/TopProducts";
import Banner from "../Banner/Banner";
import FAQ from "../FAQ/FAQ";
import Contact from "../Contact/Contact";
import AboutUs from "../AboutUs/AboutUs";
import BlogPage from "../Blog/Blog";

const HomePage = ({ handleOrderPopup }) => {
  const location = useLocation();

  // Scroll to the desired section when navigating to "/"
  useEffect(() => {
    if (location.state?.sectionId) {
      const section = document.getElementById(location.state.sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <section id="hero">
        <Hero handleOrderPopup={handleOrderPopup} />
      </section>
      <section id="products">
        <Products handleOrderPopup={handleOrderPopup} />
      </section>
      <TopProducts handleOrderPopup={handleOrderPopup} />
      <Banner />
      <section id="about-us">
        <AboutUs handleOrderPopup={handleOrderPopup}/>
      </section>
      <section id="blog">
        <BlogPage/>
      </section>
      <FAQ />
      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default HomePage;
