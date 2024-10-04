import ApplyButton from "../apply-button/ApplyButton";

const DiscountBanner = () => {
  return (
    <>
      <section className="bg-[#d7425ebf] my-10 py-20">
        <div className="text-center text-[#E2DFD0] py-6 px-4 rounded-lg mb-8">
          <h2 className="text-4xl font-bold">50% OFF FOR A LIMITED TIME</h2>
          <p className="text-2xl sm:text-3xl mt-4 text-[] font-semibold line-through">
            Rs. 180,000
          </p>
          <p className="text-3xl font-bold">Now Rs. 90,000</p>
          <p className="text-xl sm:text-2xl mt-4 font-semibold">
            Don&apos;t miss out on these opportunities. Take advantage of our
            scholarships with 50% Discount!
          </p>
        </div>
        <div className="flex justify-center items-center">
          <ApplyButton
            text="Register today"
            bgColor="bg-[#E2DFD0]"
            border={true}
          />
        </div>
      </section>
    </>
  );
};

export default DiscountBanner;
