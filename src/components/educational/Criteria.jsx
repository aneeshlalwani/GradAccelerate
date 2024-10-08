import { motion } from "framer-motion";
import { criteriaData } from "../../data/data";
import useScrollAnimation from "../../hooks/useScrollAnimation";
const Criteria = () => {
  const { ref, isInView } = useScrollAnimation({ once: false, amount: 0.1 });

  return (
    <>
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: -100 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut", delay: 0.5 }}
        className="container mx-auto px-6 md:px-12 lg:px-20 py-10 my-10 text-[#e5e0df]"
      >
        <h1 className="text-4xl sm:text-5xl font-semibold  mb-16 capitalize">
          Eligibility Criteria{" "}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {criteriaData.map((criteria, index) => (
            <div
              key={index}
              className="rounded-lg shadow-md shadow-white p-6  transition duration-300"
            >
              <h2 className="text-2xl font-bold mb-4">{criteria.title}</h2>

              <p className="text-lg font-semibold">{criteria.description}</p>
            </div>
          ))}
        </div>
      </motion.section>
    </>
  );
};

export default Criteria;
