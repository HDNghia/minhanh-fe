import Logo from "../assets/logo-duynam.jpg";
import { MdMenu } from "react-icons/md";
import { motion } from "framer-motion";

const NavbarMenu = [
  {
    id: 1,
    title: "Trang chủ",
    link: "hero",
  },
  {
    id: 2,
    title: "Sản phẩm",
    link: "products",
  },
  {
    id: 3,
    title: "Giới thiệu",
    link: "about-us",
  },
  {
    id: 4,
    title: "Liên hệ",
    link: "contact",
  },
];

const Navbar = () => {
  const handleNavigation = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className=" text-white py-3 md:py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="container flex justify-between items-center"
      >
        {/* Logo Section */}
        <div className="flex items-center justify-center p-6 rounded-xl">
          <div className="bg-white rounded-lg p-4 shadow-md">
            <img
              src={Logo}
              alt="Duy Nam Logo"
              className="w-[80px] h-auto object-contain"
            />
          </div>
        </div>


        {/* Menu Section */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-4 relative z-40">
            {NavbarMenu.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavigation(item.link)}
                  className="inline-block text-base font-semibold py-2 px-3 uppercase"
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
        {/* Hamburger Icon */}
        <div className="md:hidden">
          <MdMenu className="text-4xl" />
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
