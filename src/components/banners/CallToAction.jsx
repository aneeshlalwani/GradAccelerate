import ApplyButton from "../apply-button/ApplyButton";

const CallToAction = () => {
  return (
    <>
      <section className="my-10 py-20 bg-[#FFE98A]/90">
        <div className="text-center py-4 mb-8">
          <p className="text-2xl sm:text-3xl font-bold text-[#210a28]">
            Hurry Up - Secure your spot now and kickstart your journey with the
            next cohort!
          </p>
        </div>
        <div className="flex justify-center items-center">
          <ApplyButton
            text="Apply now ↗️"
            bgColor="bg-[#FFE98A]"
            border={true}
          />
        </div>
      </section>
    </>
  );
};

export default CallToAction;
