import { Link } from "react-router-dom";

const FaqsBanner = () => {
  return (
    <>
      <section className="my-10 py-16 bg-[#FF7D29]">
        <div className="text-center py-4 mb-8">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#210a28]">
            Still Got Questions? We&apos;ve Got Answers!
          </p>
        </div>
        <div className="text-center">
          <Link
            to="/faq"
            className="bg-[#1E3E62] text-[#e5e0df] font-semibold border-black border-2 px-6 py-3 lg:px-8 lg:py-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#152d4b]"
          >
            Click here to get FAQs ↗️
          </Link>
        </div>
      </section>
    </>
  );
};

export default FaqsBanner;
