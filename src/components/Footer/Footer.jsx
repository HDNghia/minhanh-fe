import React from "react";
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaPhone,
  FaTelegram,
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import Logo from "../../assets/logo-duynam.jpg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const FooterMenu = [
  {
    id: 1,
    title: "Trang Chủ",
    link: "hero",
  },
  {
    id: 2,
    title: "Sản Phẩm",
    link: "products",
  },
  {
    id: 3,
    title: "Giới Thiệu",
    link: "about-us",
  },
  {
    id: 4,
    title: "Liên Hệ",
    link: "contact",
  },
];

const Footer = () => {
  const navigate = useNavigate();
    const handleNavigation = (id) => {
      navigate("/", { state: { sectionId: id } }); // Navigate to home with sectionId
    };

  return (
    <footer className="bg-gray-500 dark:bg-gray-950 pt-12 pb-8 text-white">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Company Information */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
            className="space-y-6"
          >
            {/* Logo Section */}
            <div className="flex w-[150px] items-center justify-center p-6 rounded-xl">
              <div className="bg-white rounded-lg p-4 shadow-md">
                <img
                  src={Logo}
                  alt="Duy Nam Logo"
                  className="w-[80px] h-auto object-contain"
                />
              </div>
            </div>
            <div>
              <p className="flex items-center gap-2">
                <FaPhone />
                +84 905020856
              </p>
              <p className="flex items-center gap-2 mt-2">
                <FaMapLocation />
                Lô 19B2.1 Lê Văn Hiến, Q.Ngũ Hành Sơn, TP Đà Nẵng, Da Nang,
                Vietnam
              </p>
            </div>
          </motion.div>
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.6,
            }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold">Liên Kết Nhanh</h1>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <ul className="space-y-2">
                  {FooterMenu.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => handleNavigation(item.link)}
                        className="text-base font-semibold hover:underline"
                      >
                        {item.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <ul className="space-y-2">
                  {FooterMenu.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => handleNavigation(item.link)}
                        className="text-base font-semibold hover:underline"
                      >
                        {item.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.6,
              duration: 0.6,
            }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold">Theo Dõi Chúng Tôi</h1>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/DuyNam0931929256"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:scale-105 duration-300"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:scale-105 duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://telegram.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:scale-105 duration-300"
              >
                <FaTelegram />
              </a>
              <a
                href="https://www.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:scale-105 duration-300"
              >
                <FaGoogle />
              </a>

            </div>
          </motion.div>
        </div>
        {/* Footer Copyright */}
        <p className="text-center mt-8 border-t-2 border-white/40 pt-8">
          Copyright &copy; 2024. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
