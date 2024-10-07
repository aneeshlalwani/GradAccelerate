import CustomTextField from "../custom-text-field/CustomTextField";

const ApplicationForm = () => {
  return (
    <section className="container mx-auto px-4">
      <div className="my-10 text-center">
        <h1 className="text-3xl md:text-5xl text-[#e5e0df] mb-6 underline underline-offset-8">
          Application Form
        </h1>
        <h2 className="text-3xl md:text-5xl text-[#F39F5A] mb-4">
          ⏱️ Time&apos;s ticking! We can&apos;t wait to see you on the shortlist
        </h2>
        <h3 className="text-lg md:text-2xl text-[#e5e0df] mb-8">
          Fill out the form ASAP!
        </h3>
      </div>
      <form action="" className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Personal Information Section */}
        <div className="p-4 border border-gray-300 rounded-lg">
          <h1 className="text-3xl font-semibold text-[#F39F5A] mb-4">
            Personal Information
          </h1>
          <CustomTextField label="Full Name" />
          <CustomTextField label="Phone" />
          <CustomTextField label="Email" />
        </div>
      </form>

      {/* Submit Button */}
      <div className="text-center mt-6">
        <button
          type="submit"
          className="bg-[#F39F5A] text-white font-bold py-2 px-4 rounded hover:bg-[#e5e0df] transition duration-300"
        >
          Submit
        </button>
      </div>
    </section>
  );
};

export default ApplicationForm;
