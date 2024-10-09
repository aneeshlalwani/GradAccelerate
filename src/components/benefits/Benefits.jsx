import { motion } from "framer-motion";
import boy from "../../assets/boy_new.png";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import { benefits } from "../../data/data";
const Benefits = () => {
  const { ref, isInView } = useScrollAnimation({ once: false, amount: 0.1 });

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
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center"
        >
          {/* Left Side Benefits Description */}
          <div className="space-y-8">
            {benefits.slice(0, 2).map((item) => (
              <div key={item.id} className="text-[#e5e0df] mb-16">
                <h2 className="text-3xl px-3 border border-lg rounded-sm inline">
                  {item.id}
                </h2>
                <h3 className="text-2xl font-bold my-3">{item.title}</h3>
                <p className="text-lg font-semibold">{item.description}</p>
              </div>
            ))}
          </div>
          {/* Center Image of Boy*/}
          <div className="flex justify-center">
            <img
              src={boy}
              alt="students image in the center"
              className="w-full max-w-[300px] h-auto object-cover rounded-xl"
            />
          </div>
          {/* Right side descriptions */}
          <div className="space-y-8">
            {benefits.slice(2, 4).map((item) => (
              <motion.div key={item.id} className="text-[#e5e0df] mb-16">
                <h2 className="text-3xl px-3 border border-lg rounded-sm inline">
                  {item.id}
                </h2>
                <h3 className="text-2xl font-bold my-3">{item.title}</h3>
                <p className="text-lg font-semibold">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Benefits;
