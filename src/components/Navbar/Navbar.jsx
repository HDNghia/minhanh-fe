import React from "react";
import Logo from "../../assets/logo-duynam.jpg";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import { useNavigate } from "react-router-dom";

const Menu = [
  {
    id: 1,
    name: "Trang chủ",
    link: "hero",
  },
  {
    id: 2,
    name: "Sản phẩm",
    link: "products",
  },
  {
    id: 3,
    name: "Giới thiệu",
    link: "about-us",
  },
  {
    id: 4,
    name: "Bài đăng",
    link: "blog",
  },
  {
    id: 5,
    name: "Liên hệ",
    link: "contact",
  },
];
const Navbar = ({ handleOrderPopup }) => {
  const navigate = useNavigate();
  const handleNavigation = (id) => {
    navigate("/", { state: { sectionId: id } }); // Navigate to home with sectionId
  };
  return (
    <>
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200">
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            <div className="flex items-center justify-center">
              <a
                href="#"
                className="flex items-center gap-3 text-2xl sm:text-3xl font-bold transition-all duration-300"
              >
                <img
                  src={Logo}
                  alt="Logo"
                  className="w-12 h-12 rounded-full shadow-lg transition-transform duration-300"
                />
                <span className="tracking-wide">Duy Nam</span>
              </a>
            </div>

            <div className="flex justify-between items-center gap-4">
              <div>
                <DarkMode />
              </div>
              <ul className="hidden sm:flex items-center gap-4">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      onClick={() => handleNavigation(menu.link)}
                      className="inline-block py-4 px-4 hover:text-yellow-500 cursor-pointer"
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>
              <button
                className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3"
                onClick={handleOrderPopup}>
                Đặt hàng
                <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
