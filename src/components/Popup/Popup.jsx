import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";

const Popup = ({ orderPopup, setOrderPopup }) => {
  // State for form data and feedback
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Send form data as JSON
      });

      if (response.ok) {
        setSuccessMessage("Cảm ơn bạn đã đặt hàng! Chúng tôi sẽ liên hệ sớm.");
        setErrorMessage("");
        // Reset form fields
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        // Close popup after submission
        setTimeout(() => setOrderPopup(false), 2000);
      } else {
        const errorData = await response.json();
        setErrorMessage("Có lỗi xảy ra, vui lòng thử lại.");
        console.error("Server error:", errorData);
      }
    } catch (error) {
      setErrorMessage("Lỗi mạng, vui lòng thử lại.");
      console.error("Network error:", error);
    }
  };

  return (
    <>
      {orderPopup && (
        <div className="popup">
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]">
              {/* Title */}
              <div className="flex items-center justify-between">
                <h1 className="text-lg font-bold">Đặt Hàng</h1>
                <IoCloseOutline
                  className="text-2xl cursor-pointer"
                  onClick={() => setOrderPopup(false)}
                />
              </div>
              {/* Form Section */}
              <form onSubmit={handleSubmit} className="mt-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Họ và Tên"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Số Điện Thoại"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                />
                <textarea
                  name="message"
                  placeholder="Tin Nhắn"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full rounded-lg border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                ></textarea>
                {/* Success or Error Message */}
                {successMessage && (
                  <p className="text-green-600 text-center mb-4">
                    {successMessage}
                  </p>
                )}
                {errorMessage && (
                  <p className="text-red-600 text-center mb-4">{errorMessage}</p>
                )}
                {/* Submit Button */}
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-primary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full"
                  >
                    Đặt Ngay
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
