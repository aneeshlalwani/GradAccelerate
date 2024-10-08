import { motion } from "framer-motion";
import { testimonialData } from "../../data/data";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const Testimonials = () => {
  const { ref, isInView } = useScrollAnimation({
    once: false,
    amount: 0.1,
  });
  return (
    <>
      <section className="container mx-auto px-6 md:px-12 lg:px-20 py-10 my-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl font-semibold text-[#e5e0df] mb-10">
            Don&apos;t Just Take Our Word for It - Hear It From Those
            Who&apos;ve Experienced It.
          </h1>
          <p className="text-xl sm:text-2xl text-[#F39F5A] font-bold mb-5">
            Real Voices, Real Impact 📣
          </p>
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap -mx-4"
        >
          {testimonialData.map((testimonial, index) => (
            <div key={index} className="w-full md:w-1/2 px-4 mb-8">
              <div className="text-[#e5e0df] p-6 rounded-2xl shadow-lg h-full border-4 border-[#951556]">
                <p className="text-xl mb-4">{testimonial.review}</p>
                <h4 className="font-bold text-lg italic">
                  ~ {testimonial.name}
                </h4>
              </div>
            </div>
          ))}
        </motion.div>
      </section>
    </>
  );
};

export default Testimonials;
