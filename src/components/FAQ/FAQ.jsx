import React, {useEffect, useState} from "react";

// const faqData = [
//   {
//     question: "Fanta là gì?",
//     answer:
//       "Fanta là một loại nước giải khát có ga hương vị trái cây, được tạo ra bởi Công ty Coca-Cola.",
//   },
//   {
//     question: "Fanta có những hương vị nào?",
//     answer:
//       "Fanta cung cấp nhiều hương vị đa dạng như cam, nho, dứa và nhiều loại khác!",
//   },
//   {
//     question: "Fanta có không chứa gluten không?",
//     answer:
//       "Có, Fanta không chứa gluten, phù hợp với những người không dung nạp gluten.",
//   },
//   {
//     question: "Một lon Fanta chứa bao nhiêu calo?",
//     answer: "Một lon Fanta Cam 12 oz chứa khoảng 160 calo.",
//   },
// ];
const FAQ = () => {
  const [active, setActive] = React.useState(null);

  const [faqData, setFaqData] = useState([]);

  useEffect(() => {
    const fetchFAQData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/questions?limit=5");
        const data = await response.json();

        // Map the API response to the desired format
        const formattedData = data.docs.map((faq) => ({
          question: faq.question,
          answer: faq.answer,
        }));

        setFaqData(formattedData);
      } catch (error) {
        console.error("Error fetching FAQ data:", error);
      }
    };
    fetchFAQData()
  }, []);
  const handleClick = (index) => {
    setActive(index === active ? null : index);
  };
  return (
    <div className="max-w-2xl mx-auto mt-20 mb-28 px-8">
      <h1 className="text-3xl font-bold text-center pb-8">Câu Hỏi Thường Gặp</h1>

      {faqData.map((item, index) => (
        <div key={index} className="mb-4 py-4 border-b border-gray-300 ">
          <div
            className="flex justify-between items-center cursor-pointer py-4"
            onClick={() => handleClick(index)}
          >
            <h3 className="text-xl font-semibold ">
              {item.question}
            </h3>
            <span>{active === index ? "-" : "+"}</span>
          </div>

          {active === index && <p className="">{item.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
