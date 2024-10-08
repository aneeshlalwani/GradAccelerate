import heroImg from "../../assets/hero.png";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import ApplyButton from "../apply-button/ApplyButton";
import { motion } from "framer-motion";
const Hero = () => {
  // Importing this reusable hook from hooks
  const { ref, isInView } = useScrollAnimation({ once: false, amount: 0.1 });

  return (
    <>
      <section className="container mx-auto px-6 md:px-12 lg:px-20 py-6 sm:py-8 lg:py-12 overflow-x-hidden">
        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <img
            src={heroImg}
            alt="Hero"
            className="mx-auto w-full h-auto max-w-[900px] object-cover rounded-3xl opacity-90 shadow-lg"
          />
        </motion.div>
        {/* Tagline and Introduction to GAP */}
        <motion.div
          className="mt-4 sm:mt-6 lg:mt-8 text-center"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-[#F39F5A]">
            🚀 Transform Your Passion into Profession with Graduate Accelerate
            Program (GAP)!
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-[#e5e0df] mt-4 max-w-2xl mx-auto">
            At GAP, we provide hands-on experience, expert mentorship, and
            personalized career guidance. Our program equips you with in-demand
            skills, robust placement support, and valuable industry connections,
            ensuring you&apos;re job-ready in just 12-16 weeks to stand out in
            the competition.
          </p>
          <blockquote className="mt-4 text-base md:text-lg lg:text-xl text-[#e5e0df] italic">
            With GAP, you&apos;re not just learning – you&apos;re evolving,
            transforming, and launching your tech career!
          </blockquote>

          {/* Promotional Text */}
          <motion.div
            ref={ref}
            className="mt-6"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
          >
            <p className="text-lg md:text-xl lg:text-2xl font-bold text-red-600">
              GET 50% OFF FOR A LIMITED TIME
            </p>
            <p className="text-base md:text-lg lg:text-xl text-[#e5e0df] font-bold mt-2">
              Scholarships are available – apply now and unlock your potential!
            </p>
          </motion.div>

          {/* GAP Apply Button */}
          <motion.div
            ref={ref}
            className="flex justify-center mt-8"
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <ApplyButton
              text="Apply now 🚀"
              bgColor="bg-[#F39F5A]"
              border={false}
            />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
