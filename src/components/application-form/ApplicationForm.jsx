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
        {({ isSubmitting }) => (
          <Form action="" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* {console.log(values)} */}
            {/* Personal Information Section */}
            <div className="p-4 border border-gray-300 rounded-lg">
              <h1 className="text-3xl font-semibold text-[#F39F5A] mb-4">
                Personal Information
              </h1>
              <CustomTextField
                label="Full Name"
                labelFor="full-name"
                placeholder="Enter your Full Name"
                type="text"
                name="name"
              />
              <CustomTextField
                label="Birth Date"
                labelFor="birthday"
                placeholder="Select your Birth date"
                type="date"
                name="birthday"
              />
              <CustomTextField
                label="Phone"
                labelFor="phone"
                placeholder="Enter your Phone No:"
                type="text"
                name="phone"
              />
              <CustomTextField
                label="Email"
                labelFor="email"
                placeholder="Enter your email"
                type="email"
                name="email"
              />
            </div>
            {/* Academic Information Section */}
            <div className="p-4 border border-gray-300 rounded-lg">
              <h1 className="text-3xl font-semibold text-[#F39F5A] mb-4">
                Academic Information
              </h1>
              <CustomTextField
                label="Degree"
                labelFor="degree"
                placeholder="Enter Degree"
                type="text"
                name="degree"
              />
              <CustomTextField
                label="Institution"
                labelFor="institution"
                placeholder="Enter Institute"
                type="text"
                name="institute"
              />
              <CustomTextField
                label="Year of Graduation"
                labelFor="year-of-graduation"
                placeholder="Select Graduation Date"
                type="date"
                name="yearOfGraduation"
              />
              <CustomTextField
                label="CGPA"
                labelFor="cgpa"
                placeholder="Enter your CGPA/GPA"
                type="number"
                name="cgpa"
              />
            </div>
            {/* Location Section */}
            <div className="p-4 border border-gray-300 rounded-lg">
              <h1 className="text-3xl font-semibold text-[#F39F5A] mb-4">
                Location
              </h1>
              <CustomTextField
                label="City"
                labelFor="city"
                placeholder="Enter City"
                type="text"
                name="city"
              />
              <CustomTextField
                label="State/Province/Region"
                labelFor="state"
                placeholder="Enter State"
                type="text"
                name="state"
              />
              <CustomTextField
                label="Country"
                labelFor="country"
                placeholder="Enter Country"
                type="text"
                name="country"
              />
            </div>
            {/* Knowledge and Skill Section */}
            <div className="p-4 border border-gray-300 rounded-lg">
              <h1 className="text-3xl font-semibold text-[#F39F5A] mb-4">
                Knowledge and Skills
              </h1>
              <div className="flex flex-col space-y-2 text-[#e5e0df]">
                <label className="text-lg font-semibold text-gray-300">
                  Which area of IT are you most interested in?{" "}
                </label>
                <div>
                  <Field
                    value="Full Stack Development"
                    type="radio"
                    name="selectedSkill"
                  />
                  <label className="ml-2">Full Stack Development</label>
                </div>
                <div>
                  <Field
                    value="Backend Development"
                    type="radio"
                    name="selectedSkill"
                  />
                  <label className="ml-2">Backend Development</label>
                </div>
                <div>
                  <Field
                    value="Frontend Development"
                    type="radio"
                    name="selectedSkill"
                  />
                  <label className="ml-2">Frontend Development</label>
                </div>
                <div>
                  <Field
                    value="Quality Assurance & Testing"
                    type="radio"
                    name="selectedSkill"
                  />
                  <label className="ml-2">Quality Assurance & Testing</label>
                </div>
                <div>
                  <Field
                    value="Digital Marketing"
                    type="radio"
                    name="selectedSkill"
                  />
                  <label className="ml-2">Digital Marketing</label>
                </div>
                <div>
                  <Field
                    value="Business Analytics"
                    type="radio"
                    name="selectedSkill"
                  />
                  <label className="ml-2">
                    Business Analyst / Product Management
                  </label>
                </div>
                <div>
                  <Field
                    value="Artificial Intelligence"
                    type="radio"
                    name="selectedSkill"
                  />
                  <label className="ml-2">
                    Artificial Intelligence / Machine Learning
                  </label>
                </div>
              </div>
            </div>
            <div className="text-center mt-6 mx-auto">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#F39F5A] text-white font-bold py-2 px-4 rounded hover:bg-[#e5e0df] transition duration-300"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default ApplicationForm;
