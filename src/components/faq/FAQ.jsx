import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { faq } from "../../data/data";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggling the Plus Icon active FAQ
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>
      <section className="container mx-auto px-6 md:px-12 lg:px-20 py-10 my-10">
        <h1 className="text-4xl sm:text-5xl font-semibold text-[#F39F5A] mb-10">
          Everything You Need to Know . 💡
        </h1>
        {/*Mapping FAQS here*/}
        <div className="space-y-4">
          {faq.map((item, index) => (
            <div
              key={index}
              className="p-4 rounded-lg shadow-lg shadow-black transition-all duration-300"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h2 className="text-xl font-semibold text-[#e5e0df]">
                  {item.question}
                </h2>
                <FontAwesomeIcon
                  icon={activeIndex === index ? faMinus : faPlus}
                  className="text-[#e5e0df] text-lg"
                />
              </div>
              {activeIndex === index && (
                <p className="mt-4 text-[#e5e0df] text-lg">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default FAQ;
