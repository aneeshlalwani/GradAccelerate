import ApplyButton from "../apply-button/ApplyButton";

const Accelerate = () => {
  return (
    <>
      <section className="my-10 py-20 bg-[#72BF78]">
        <div className="text-center py-4 mb-8 text-[#210a28]">
          <h1 className="mb-2 text-4xl sm:text-5xl font-extrabold">
            🛩️ Aiming high ?
          </h1>
          <p className="text-3xl sm:text-4xl font-semibold ">
            Reach the peak of success with Graduate Accelerate Program (GAP)!{" "}
          </p>
        </div>
        <div className="flex justify-center items-center">
          <ApplyButton
            text="Apply now 🚀"
            bgColor="bg-[#72BF78]/90"
            border={true}
          />
        </div>
      </section>
    </>
  );
};

export default Accelerate;
