import ApplyButton from "../apply-button/ApplyButton";

const ScholarshipBanner = () => {
  // bg-[#03001C]
  return (
    <>
      <section className="bg-black/35 my-10 py-20 px-6">
        <div className="mx-auto text-center py-8 px-6 mb-8">
          {/* Scholarship Offer Title */}
          <h2 className="text-4xl sm:text-5xl font-bold text-[#FEC260] mb-4">
            🎉 We are offering 5 scholarships!
          </h2>

          {/* Scholarship Value */}
          <p className="text-2xl sm:text-3xl text-[#e5e0df] mt-2">
            Scholarship Value:{" "}
            <span className="font-semibold">Rs. 180,000</span> + network of
            peers + friends for life
          </p>

          {/* Call-to-action */}
          <p className="text-3xl sm:text-4xl text-[#e5e0df] mt-8 font-bold">
            Wanna be the one to secure a scholarship?
          </p>
          <p className="text-3xl sm:text-4xl text-[#e5e0df] mt-4">
            Don’t just look —{" "}
            <span className="text-[#FEC260] font-bold">
              hit the apply button
            </span>{" "}
            and secure your future!
          </p>

          {/* Apply Now Button */}
          <div className="mt-16">
            <ApplyButton
              text="Apply now 🚀"
              bgColor="bg-[#FEC260]"
              border={true}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ScholarshipBanner;
