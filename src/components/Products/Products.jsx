import React, {useEffect, useState} from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const fadeUp = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
  };
};

const Products = ({ handleOrderPopup }) => {
  const navigate = useNavigate();
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://minhanh.wealthfarming.org/api/globals/product-recommend?depth=1&draft=false&locale=undefined"
        );
        const data = await response.json();

        // Map the API response to the desired format
        const formattedData = [
          {
            id: data.product_1.id,
            title: data.product_1.title,
            image: `https://minhanh.wealthfarming.org${data.image_1.url}`, // Assuming URL needs to be used as an image source
            description: data.product_1.description,
            price: `${data.product_1.price}`,
            delay: 0.5,
          },
          {
            id: data.product_2.id,
            title: data.product_2.title,
            image: `https://minhanh.wealthfarming.org${data.image_2.url}`,
            description: data.product_2.description,
            price: `${data.product_2.price}`,
            delay: 0.8,
          },
          {
            id: data.product_3.id,
            title: data.product_3.title,
            image: `https://minhanh.wealthfarming.org${data.image_3.url}`,
            description: data.product_3.description,
            price: `${data.product_3.price}`,
            delay: 1.1,
          },
        ];

        setProductsData(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-gray-100 dark:bg-gray-950 py-16">
      <div className="container mx-auto px-4">
        <motion.h1
          variants={fadeUp(0.2)}
          initial="hidden"
          whileInView="show"
          className="text-4xl font-bold text-center pb-12"
        >
          Sản Phẩm Của Chúng Tôi
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productsData.map((item) => (
            <motion.div
              variants={fadeUp(item.delay)}
              key={item.id}
              initial="hidden"
              whileInView={"show"}
              onClick={handleOrderPopup}
              className="cursor-pointer flex flex-col bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <div className="relative h-64 w-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-3xl font-bold font-handwriting mb-3">{item.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{item.description}</p>
                <div className="flex justify-between items-center">
                  <p className="text-2xl font-semibold text-primary">
                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(parseFloat(item.price))}
                  </p>
                  <button
                    className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition-colors duration-200"
                  >
                    Đặt Ngay
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          variants={fadeUp(0.8)}
          initial="hidden"
          whileInView="show"
          className="flex justify-center mt-12"
        >
          <button
            onClick={() => navigate("/products")}
            className="bg-primary text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-primary-dark transition-colors duration-200"
          >
            Xem Tất Cả
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
