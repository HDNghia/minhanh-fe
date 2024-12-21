import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ProductsPage from "./components/PageProduct/ProductsPage";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import Popup from "./components/Popup/Popup";
import BlogDetailPage from "./components/Blog/BlogDetail";
import AOS from "aos";

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <main className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar handleOrderPopup={handleOrderPopup} />
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={<HomePage handleOrderPopup={handleOrderPopup} />}
          />

          {/* Products Page */}
          <Route
            path="/products"
            element={
              <div className="bg-gray-100">
                <ProductsPage handleOrderPopup={handleOrderPopup} />
              </div>
            }
          />

          {/* Blog Detail Page */}
          <Route path="/blogs/:slug" element={<BlogDetailPage />} />
        </Routes>
        <Popup orderPopup={orderPopup} setOrderPopup={handleOrderPopup} />
        <Footer />
      </main>
    </Router>
  );
};

export default App;
