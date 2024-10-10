import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { sendDataToGoogleSheet } from "../../api/API";
import CustomTextField from "../custom-text-field/CustomTextField";

// Validation Schema Using Yup for Form Validation
const ApplicationSchema = Yup.object().shape({
  name: Yup.string().required("Full Name is required"),
  birthday: Yup.date().required("Birth Date is required"),
  phone: Yup.string().required("Phone number is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  degree: Yup.string().required("Degree is required"),
  institute: Yup.string().required("Institute is required"),
  yearOfGraduation: Yup.string().required("Year of Graduation is required"),
  cgpa: Yup.number().required("CGPA is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  country: Yup.string().required("Country is required"),
  selectedSkill: Yup.string().required("Please select a skill"),
});
const ApplicationForm = () => {
  const handleSubmit = async (values, { resetForm }) => {
    const data = {
      data: [values],
    };
    try {
      const response = await sendDataToGoogleSheet(data);
      console.log("Data sent successfully:", response.data);
      resetForm();
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };
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
      <Formik
        initialValues={{
          name: "",
          birthday: "",
          phone: "",
          email: "",
          degree: "",
          institute: "",
          yearOfGraduation: "",
          cgpa: "",
          city: "",
          state: "",
          country: "",
          selectedSkill: "",
        }}
        validationSchema={ApplicationSchema}
        onSubmit={handleSubmit}
      >
        {/* Personal Information Section */}
        <div className="p-4 border border-gray-300 rounded-lg">
          <h1 className="text-3xl font-semibold text-[#F39F5A] mb-4">
            Personal Information
          </h1>
          <CustomTextField
            label="Full Name"
            type="text"
            labelFor="full-name"
            placeholder="Enter your Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <CustomTextField
            label="Birth Date"
            type="date"
            labelFor="birthday"
            placeholder="Select your Birth date"
            value={birthday}
            onChange={(e) => setBirthDay(e.target.value)}
          />
          <CustomTextField
            type="text"
            label="Phone"
            labelFor="phone"
            placeholder="Enter your Phone No:"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <CustomTextField
            type="email"
            label="Email"
            labelFor="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {/* Academic Information Section */}
        <div className="p-4 border border-gray-300 rounded-lg">
          <h1 className="text-3xl font-semibold text-[#F39F5A] mb-4">
            Academic Information
          </h1>
          <CustomTextField
            type="text"
            label="Degree"
            labelFor="degree"
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
          />
          <CustomTextField
            type="text"
            label="Institution"
            labelFor="institution"
            value={institute}
            onChange={(e) => setInstitute(e.target.value)}
          />
          <CustomTextField
            type="date"
            label="Year of Graduation"
            labelFor="year-of-graduation"
            value={yearOfGraduation}
            onChange={(e) => setYearOfGraduation(e.target.value)}
          />
          <CustomTextField
            type="number"
            label="CGPA"
            labelFor="cgpa"
            value={cgpa}
            onChange={(e) => setCGPA(e.target.value)}
          />
        </div>
        {/* Location Section */}
        <div className="p-4 border border-gray-300 rounded-lg">
          <h1 className="text-3xl font-semibold text-[#F39F5A] mb-4">
            Location
          </h1>
          <CustomTextField
            type="text"
            label="City"
            labelFor="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <CustomTextField
            type="text"
            label="State/Province/Region"
            labelFor="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
          <CustomTextField
            type="text"
            label="Country"
            labelFor="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        {/* Knowledge and Skill Section */}
        <div className="p-4 border border-gray-300 rounded-lg">
          <h1 className="text-3xl font-semibold text-[#F39F5A] mb-4">
            Knowledge and Skills
          </h1>
          <div className="flex flex-col space-y-2">
            <label className="text-lg font-semibold text-gray-300">
              Which area of IT are you most interested in?{" "}
            </label>

            <label className="text-gray-300">
              <input
                type="radio"
                name="selectedSkill"
                value="Full Stack Development"
                checked={selectedSkill === "Full Stack Development"}
                onChange={handleRadioChange}
                className="mr-2"
              />
              Full Stack Development
            </label>
            <label className="text-gray-300">
              <input
                type="radio"
                name="selectedSkill"
                value="Backend Development"
                checked={selectedSkill === "Backend Development"}
                onChange={handleRadioChange}
                className="mr-2"
              />
              Backend Development{" "}
            </label>
            <label className="text-gray-300">
              <input
                type="radio"
                name="selectedSkill"
                value="Frontend Development"
                checked={selectedSkill === "Frontend Development"}
                onChange={handleRadioChange}
                className="mr-2"
              />
              Frontend Development
            </label>
            <label className="text-gray-300">
              <input
                type="radio"
                name="selectedSkill"
                value="Quality Assurance & Testing"
                checked={selectedSkill === "Quality Assurance & Testing"}
                onChange={handleRadioChange}
                className="mr-2"
              />
              Quality Assurance & Testing
            </label>
            <label className="text-gray-300">
              <input
                type="radio"
                name="selectedSkill"
                value="Digital Marketing"
                checked={selectedSkill === "Digital Marketing"}
                onChange={handleRadioChange}
                className="mr-2"
              />
              Digital Marketing
            </label>
            <label className="text-gray-300">
              <input
                type="radio"
                name="selectedSkill"
                value="Business Analytics"
                checked={selectedSkill === "Business Analytics"}
                onChange={handleRadioChange}
                className="mr-2"
              />
              Business Analyst / Product Management
            </label>
            <label className="text-gray-300">
              <input
                type="radio"
                name="selectedSkill"
                value="Artificial Intelligence"
                checked={selectedSkill === "Artificial Intelligence"}
                onChange={handleRadioChange}
                className="mr-2"
              />
              Artificial Intelligence / Machine Learning
            </label>
          </div>
        </div>
        <div className="text-center mt-6 mx-auto">
          <button
            type="submit"
            className="bg-[#F39F5A] text-white font-bold py-2 px-4 rounded hover:bg-[#e5e0df] transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default ApplicationForm;
