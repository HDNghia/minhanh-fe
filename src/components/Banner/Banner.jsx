import React from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaTruck, FaMoneyBillWave, FaHeadset } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const fadeUp = (delay) => ({
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay },
  },
});

const Banner = () => {
  const navigate = useNavigate();
  const features = [
    {
      icon: <FaShieldAlt className="text-4xl text-primary" />,
      title: "Chất Lượng Đảm Bảo",
      description: "Chúng tôi cam kết cung cấp sản phẩm chất lượng cao nhất cho khách hàng.",
      stat: "100%",
      statDescription: "Sản phẩm chính hãng",
    },
    {
      icon: <FaTruck className="text-4xl text-primary" />,
      title: "Giao Hàng Nhanh Chóng",
      description: "Dịch vụ giao hàng nhanh chóng và đáng tin cậy trên toàn quốc.",
      stat: "24h",
      statDescription: "Giao hàng trong nội thành",
    },
    {
      icon: <FaMoneyBillWave className="text-4xl text-primary" />,
      title: "Giá Cả Hợp Lý",
      description: "Chúng tôi cung cấp giá cả cạnh tranh mà không ảnh hưởng đến chất lượng.",
      stat: "10%",
      statDescription: "Tiết kiệm trung bình",
    },
    {
      icon: <FaHeadset className="text-4xl text-primary" />,
      title: "Hỗ Trợ 24/7",
      description: "Đội ngũ hỗ trợ khách hàng luôn sẵn sàng giúp đỡ bạn mọi lúc.",
      stat: "24/7",
      statDescription: "Hỗ trợ khách hàng",
    },
  ];

  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          variants={fadeUp(0.2)}
          initial="hidden"
          whileInView="show"
          className="text-4xl font-bold text-center mb-12"
        >
          Tại Sao Chọn Chúng Tôi?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeUp(0.3 + index * 0.1)}
              initial="hidden"
              whileInView="show"
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center transition-transform duration-300 hover:scale-105"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{feature.description}</p>
              <div className="border-t pt-4">
                <p className="text-3xl font-bold text-primary mb-1">{feature.stat}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{feature.statDescription}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          variants={fadeUp(0.7)}
          initial="hidden"
          whileInView="show"
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Chúng tôi tự hào mang đến trải nghiệm mua sắm tốt nhất cho bạn. Với cam kết về chất lượng, 
            dịch vụ và giá trị, chúng tôi luôn nỗ lực để vượt qua sự mong đợi của khách hàng.
          </p>
          <button 
          className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
          onClick={() => navigate("/products")}
          >
            Khám Phá Ngay
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;

