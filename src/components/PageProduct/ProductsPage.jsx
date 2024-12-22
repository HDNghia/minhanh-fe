import React, { useEffect, useState } from "react";

const ProductsPage = ({ handleOrderPopup }) => {
  const [productsData, setProductsData] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // State for search input

  useEffect(() => {
    const fetchData = async () => {
      try {
        const queryParam = searchQuery
          ? `?where[title][contains]=${encodeURIComponent(searchQuery)}`
          : "";
        const response = await fetch(
          `https://minhanh.wealthfarming.org/api/products${queryParam}`
        );
        const data = await response.json();

        // Map the API response to the desired format
        const formattedData = data.docs.map((product) => ({
          id: product.id,
          title: product.title,
          image: `https://minhanh.wealthfarming.org${product.image.url}`, // Adjusting to include the base URL
          description: product.description,
          price: `${product.price.toLocaleString()}₫`, // Format price with thousands separator
        }));

        setProductsData(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [searchQuery]); // Refetch when searchQuery changes

  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-8">
      <div className="container py-14">
        <h1 className="text-3xl font-bold text-center pb-10">
          Sản Phẩm Của Chúng Tôi
        </h1>

        {/* Search Input */}
        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Update search query state
            className="px-4 py-2 border rounded-md w-full max-w-[400px] shadow-sm"
          />
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {productsData.map((item) => (
            <div
              key={item.id}
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
                    {item.price}
                  </p>
                  <button
                    className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition-colors duration-200"
                  >
                    Đặt Ngay
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
