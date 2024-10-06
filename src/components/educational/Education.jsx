import { motion } from "framer-motion";
import { educationalOffers } from "../../data/data";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const Education = () => {
  const { ref, isInView } = useScrollAnimation({ once: false, amount: 0.1 });
  return (
    <>
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut", delay: 0.3 }}
        className="container mx-auto px-6 md:px-12 lg:px-20 py-10 my-10"
      >
        <h1 className="text-4xl sm:text-5xl font-semibold text-[#e5e0df] mb-16 capitalize">
          take your education to new heights
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {educationalOffers.map((offer, index) => (
            <div key={index} className="text-white">
              <img src={offer.icon} alt={offer.title} className="w-20 mb-1" />
              <h1 className="text-xl font-bold mb-4">{offer.title}</h1>
              <p className="text-lg font-semibold">{offer.description}</p>
            </div>
          ))}
        </div>
      </motion.section>
    </>
  );
};

export default Education;
