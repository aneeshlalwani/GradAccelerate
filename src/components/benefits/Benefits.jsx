import { motion } from "framer-motion";
import boy from "../../assets/boy_new.png";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const Benefits = () => {
  const { ref, isInView } = useScrollAnimation({ once: false, amount: 0.1 });
  const benefits = [
    {
      id: 1,
      title: "Personal Growth",
      description:
        "Challenge yourself to step outside your comfort zone and develop valuable life skills.",
    },
    {
      id: 2,
      title: "Enhanced Employability",
      description:
        "Acquire valuable skills and experiences that employers actively seek.",
    },
    {
      id: 3,
      title: "Cultural Enrichment",
      description:
        "Immerse yourself in different cultures to broaden your perspective and foster intercultural understanding.",
    },
    {
      id: 4,
      title: "Career Exploration",
      description:
        "Gain practical experience and explore potential career paths to make informed choices.",
    },
  ];
  return (
    <>
      <section className="container mx-auto px-6 md:px-12 lg:px-20 py-10 my-20">
        <motion.h1
          ref={ref}
          className="text-4xl sm:text-5xl font-semibold text-[#e5e0df] mb-20"
          initial={{ opacity: 0, y: -100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
        >
          Improved Student Experience
        </motion.h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          {/* Left Side Benefits Description */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
            className="space-y-8"
          >
            {benefits.slice(0, 2).map((item) => (
              <motion.div
                key={item.id}
                ref={ref}
                initial={{ opacity: 0, x: 100 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 1.2,
                  ease: "easeInOut",
                  delay: item.id * 0.2,
                }}
                className="text-[#e5e0df] mb-16"
              >
                <h2 className="text-3xl px-3 border border-lg rounded-sm inline">
                  {item.id}
                </h2>
                <h3 className="text-2xl font-bold my-3">{item.title}</h3>
                <p className="text-lg font-semibold">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
          {/* Center Image of Boy*/}
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{
              duration: 1.2,
              ease: "easeInOut",
              delay: 0.8,
            }}
            className="flex justify-center"
          >
            <img
              src={boy}
              alt="boy image in the center"
              className="w-80 h-80 object-cover rounded-xl"
            />
          </motion.div>
          {/* Right side descriptions */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
            className="space-y-8"
          >
            {benefits.slice(2, 4).map((item) => (
              <motion.div
                key={item.id}
                ref={ref}
                initial={{ opacity: 0, x: -100 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 1.2,
                  ease: "easeInOut",
                  delay: item.id * 0.2,
                }}
                className="text-[#e5e0df] mb-16"
              >
                <h2 className="text-3xl px-3 border border-lg rounded-sm inline">
                  {item.id}
                </h2>
                <h3 className="text-2xl font-bold my-3">{item.title}</h3>
                <p className="text-lg font-semibold">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Benefits;
