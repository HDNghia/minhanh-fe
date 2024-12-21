import React, { useEffect, useState } from "react";
import Vector from "../assets/vector3.png";

const Hero = ({ handleOrderPopup }) => {
  const [products, setProducts] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    // Fetch data from API
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/globals/product-recommend?depth=1"
        );
        const data = await response.json();

        const productList = [];
        for (let i = 1; i <= 3; i++) {
          if (data[`product_${i}`] && data[`image_${i}`]) {
            productList.push({
              id: data[`product_${i}`].id,
              title: data[`product_${i}`].title,
              description: data[`product_${i}`].description,
              price: data[`product_${i}`].price,
              imageUrl: data[`image_${i}`].url,
            });
          }
        }

        setProducts(productList);

        if (productList.length > 0) {
          setSelectedImage(productList[0].imageUrl);
        }
      } catch (error) {
        console.error("Không thể tải dữ liệu sản phẩm:", error);
      }
    };

    fetchProducts();
  }, []);

  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

  return (
    <>
      <div
        className="min-h-[600px] bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 flex justify-center items-center text-gray-800 dark:text-white duration-200"
        style={bgImage}
      >
        <div className="container max-w-6xl p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
            {/* Text Content Section */}
            <div
              data-aos="fade-right"
              data-aos-duration="600"
              data-aos-once="true"
              className="flex flex-col justify-center gap-6 text-center sm:text-left"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                An nghỉ bình yên
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                  với dịch vụ nghĩa trang cao cấp
                </span>
              </h1>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300">
                Chúng tôi cung cấp các giải pháp an nghỉ trang nghiêm, ý nghĩa, đảm bảo sự yên tĩnh và tôn trọng dành cho người thân yêu của bạn.
              </p>
              <button
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transform duration-200 text-white py-3 px-6 rounded-lg shadow-md"
                onClick={handleOrderPopup}
              >
                Tìm Hiểu Ngay
              </button>
            </div>

            {/* Image Section */}
            <div
              data-aos="fade-left"
              data-aos-duration="600"
              data-aos-once="true"
              className="relative flex flex-col items-center gap-4"
            >
              <div className="relative h-[300px] sm:h-[400px] w-full overflow-hidden rounded-lg shadow-lg bg-gray-100 flex justify-center items-center">
                {selectedImage ? (
                  <img
                    src={`http://localhost:3000${selectedImage}`}
                    alt="Hình ảnh khu nghĩa trang"
                    className="object-cover h-full w-auto hover:scale-110 transform duration-300"
                  />
                ) : (
                  <p>Đang tải...</p>
                )}
              </div>
              <div className="flex gap-4 justify-center">
                {products.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => setSelectedImage(product.imageUrl)}
                    className={`rounded-full p-1 transition-transform duration-200 border-2 ${
                      selectedImage === product.imageUrl
                        ? "border-purple-500 scale-105"
                        : "border-gray-300 hover:scale-105"
                    }`}
                  >
                    <img
                      src={`http://localhost:3000${product.imageUrl}`}
                      alt={product.title}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
