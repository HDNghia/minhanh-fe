import React, {useEffect, useState} from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

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

// const productsData = [
//   {
//     id: 1,
//     image: Img1,
//     title: "Trang Phục Thường Ngày",
//     description:
//       "Trang phục thoải mái, phù hợp để mặc hàng ngày hoặc trong các buổi đi chơi nhẹ nhàng.",
//     price: "700.000₫",
//     delay: 0.5,
//   },
//   {
//     id: 2,
//     image: Img2,
//     title: "Áo In Họa Tiết",
//     description:
//       "Áo in họa tiết độc đáo, mang lại phong cách nổi bật và trẻ trung.",
//     price: "850.000₫",
//     delay: 0.8,
//   },
//   {
//     id: 3,
//     image: Img3,
//     title: "Áo Sơ Mi Nữ",
//     description:
//       "Áo sơ mi thiết kế tinh tế, phù hợp với phong cách thanh lịch và hiện đại.",
//     price: "900.000₫",
//     delay: 1.1,
//   },
// ];

const TopProducts = ({ handleOrderPopup }) => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/globals/best-product?depth=1&draft=false&locale=undefined"
        );
        const data = await response.json();

        // Map the API response to the desired format
        const formattedData = [
          {
            id: data.product_1.id,
            title: data.product_1.title,
            image: `http://localhost:3000${data.image_1.url}`, // Assuming URL needs to be used as an image source
            description: data.product_1.description,
            price: `${data.product_1.price}`,
            delay: 0.5,
          },
          {
            id: data.product_2.id,
            title: data.product_2.title,
            image: `http://localhost:3000${data.image_2.url}`,
            description: data.product_2.description,
            price: `${data.product_2.price}`,
            delay: 0.8,
          },
          {
            id: data.product_3.id,
            title: data.product_3.title,
            image: `http://localhost:3000${data.image_3.url}`,
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
    <div className="bg-gray-100 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h1
            variants={fadeUp(0.2)}
            initial="hidden"
            whileInView={"show"}
            className="text-4xl font-bold mb-4"
          >
            Sản Phẩm Bán Chạy
          </motion.h1>
          <motion.p
            variants={fadeUp(0.3)}
            initial="hidden"
            whileInView={"show"}
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            Chúng tôi cung cấp các sản phẩm chất lượng cao, phù hợp với mọi nhu cầu của bạn.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {productsData.map((data) => (
            <motion.div
              variants={fadeUp(data.delay)}
              key={data.id}
              initial="hidden"
              whileInView={"show"}
              onClick={handleOrderPopup}
              className="cursor-pointer bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 hover:scale-105"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={data.image}
                  alt={data.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md">
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{data.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {data.description}
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-2xl font-semibold text-primary">
                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(parseFloat(data.price))}
                  </p>
                  <button
                    className="bg-primary hover:bg-primary-dark text-white py-2 px-6 rounded-full transition-colors duration-300"
                  >
                    Đặt Hàng Ngay
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
