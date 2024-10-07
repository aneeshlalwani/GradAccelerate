import { sendDataToGoogleSheet } from "../../api/API";
import CustomTextField from "../custom-text-field/CustomTextField";
import { useState } from "react";

const ApplicationForm = () => {
  // Hook For Personal Information
  const [name, setName] = useState("");
  const [birthday, setBirthDay] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  // Hook For Academic Information
  const [degree, setDegree] = useState("");
  const [institute, setInstitute] = useState("");
  const [yearOfGraduation, setYearOfGraduation] = useState("");
  const [cgpa, setCGPA] = useState("");
  // Hook For Location Information
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      data: [
        {
          name: name,
          birthday: birthday,
          phone: phone,
          email: email,
          degree: degree,
          institute: institute,
          yearOfGraduation: yearOfGraduation,
          cgpa: cgpa,
          city: city,
          state: state,
          country: country,
        },
      ],
    };

    try {
      const response = await sendDataToGoogleSheet(data);
      console.log("Data sent successfully:", response.data);
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
      <form
        action=""
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
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
            labelFor="email"
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
        ;
        <div className="text-center mt-6">
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
