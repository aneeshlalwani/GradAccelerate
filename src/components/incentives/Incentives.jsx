import { incentivesData } from "../../data/data";
import { motion } from "framer-motion";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const Incentives = () => {
  // Importing this reusable hook from hooks
  const { ref, isInView } = useScrollAnimation({ once: false, amount: 0.1 });
  return (
    <>
      <section className="container mx-auto px-6 md:px-12 lg:px-20 py-10 my-10">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#e5e0df] mb-6"
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
        >
          Key Incentives
        </motion.h1>
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4 py-2"
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
        >
          {incentivesData.map((data) => (
            <div
              key={data.id}
              className="flex flex-col p-6 bg-transparent shadow-md shadow-black rounded-xl transition-transform transform hover:scale-105"
            >
              <h1 className="text-xl sm:text-2xl font-bold text-[#FEC260]">
                {data.title}
              </h1>
              <p className="my-4 text-lg text-[#e5e0df] font-semibold">
                {data.description}
              </p>
            </div>
          ))}
        </motion.div>
      </section>
    </>
  );
};

export default Incentives;
