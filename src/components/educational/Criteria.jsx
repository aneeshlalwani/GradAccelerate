import { criteriaData } from "../../data/data";
const Criteria = () => {
  return (
    <>
      <section className="container mx-auto px-6 md:px-12 lg:px-20 py-10 my-10">
        <h1 className="text-4xl sm:text-5xl font-semibold text-[#e5e0df] mb-16 capitalize">
          Eligibility Criteria{" "}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {criteriaData.map((criteria, index) => (
            <div
              key={index}
              className="text-[#e5e0df] rounded-lg shadow-md shadow-white p-6  transition duration-300"
            >
              <h2 className="text-2xl font-bold mb-4">{criteria.title}</h2>

              <p className="text-lg font-semibold">{criteria.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Criteria;
