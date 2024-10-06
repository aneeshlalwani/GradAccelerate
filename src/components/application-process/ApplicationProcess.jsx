import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { applicationSteps } from "../../data/data";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import { motion } from "framer-motion";
const ApplicationProcess = () => {
  const { ref, isInView } = useScrollAnimation({ once: false, amount: 0.1 });

  return (
    <section className="container mx-auto px-6 md:px-12 lg:px-20 py-12 my-10">
      <motion.h1 className="text-4xl sm:text-5xl font-semibold text-[#e5e0df] mb-10 capitalize">
        Apply with Ease — Our Process is Simplified!{" "}
      </motion.h1>
      <div className="relative">
        {applicationSteps.map((step, index) => (
          <motion.div
            key={index}
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: index * 0.2,
            }}
            className="mb-12 flex flex-col items-start"
          >
            <div className="flex items-center">
              <div className="w-6 h-6 bg-[#F39F5A] rounded-full flex items-center justify-center text-[#e5e0df] font-semibold mr-4">
                {index + 1}
              </div>
              <h2 className="text-3xl font-bold text-[#e5e0df] flex items-center gap-4">
                {step.title}
                <FontAwesomeIcon
                  icon={step.icon}
                  className="mr-2 text-[#e5e0df]"
                />
              </h2>
            </div>
            <p className="text-xl text-[#e5e0df] mt-2">{step.description}</p>
            {/* Adding Border */}
            {index < applicationSteps.length - 1 && (
              <div className="border-l-2 border-[#F39F5A] h-12 ml-3" />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ApplicationProcess;
