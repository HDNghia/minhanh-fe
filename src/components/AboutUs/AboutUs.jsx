import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaHistory, FaTrophy, FaHandshake } from 'react-icons/fa';
import aboutUs from '../../assets/Banner/image.png';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const AboutUs = ({ handleOrderPopup }) => {
  const stats = [
    { icon: <FaUsers />, value: '1000+', label: 'Khách Hàng Hài Lòng' },
    { icon: <FaHistory />, value: '20+', label: 'Năm Kinh Nghiệm' },
    { icon: <FaTrophy />, value: '50+', label: 'Khu Nghĩa Trang' },
    { icon: <FaHandshake />, value: '100%', label: 'Cam Kết Chất Lượng' },
  ];

  return (
    <div className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } }
          }}
          className="text-center mb-16"
        >
          <motion.h1 variants={fadeIn} className="text-4xl font-bold mb-4">Giới Thiệu</motion.h1>
          <motion.p variants={fadeIn} className="text-lg text-gray-600 dark:text-gray-400">
            Tìm hiểu thêm về sứ mệnh, giá trị và đội ngũ đứng sau những nỗ lực của chúng tôi trong việc cung cấp nơi an nghỉ trang nghiêm và ý nghĩa.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src={aboutUs}
              alt="Khu Nghĩa Trang"
              className="rounded-lg shadow-xl w-full h-auto"
            />
            <div className="absolute inset-0 bg-primary opacity-20 rounded-lg"></div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } }
            }}
          >
            <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-6 text-primary dark:text-primary-light">
              Chúng Tôi Là Ai
            </motion.h2>
            <motion.p variants={fadeIn} className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
              Chúng tôi là nhà cung cấp uy tín chuyên về các giải pháp nghĩa trang chất lượng cao, mang đến sự yên tĩnh, trang nghiêm và bền vững cho người thân yêu của bạn.
            </motion.p>
            <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-6 text-primary dark:text-primary-light">
              Sứ Mệnh Của Chúng Tôi
            </motion.h2>
            <motion.p variants={fadeIn} className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Sứ mệnh của chúng tôi là tạo ra những không gian an nghỉ vĩnh hằng với sự chăm sóc tận tâm và tôn trọng cao nhất, đảm bảo mỗi khu vực nghĩa trang đều phản ánh sự tôn kính và ý nghĩa vượt thời gian.
            </motion.p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl text-primary dark:text-primary-light mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-6 text-primary dark:text-primary-light">
            Khám Phá Những Giải Pháp Nghĩa Trang Của Chúng Tôi
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Hãy để chúng tôi đồng hành cùng bạn trong việc chọn lựa nơi an nghỉ vĩnh hằng cho người thân yêu. Chúng tôi cam kết mang đến dịch vụ tận tâm và chu đáo nhất.
          </p>
          <button 
          className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
          onClick={handleOrderPopup}>
            Liên Hệ Ngay
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
