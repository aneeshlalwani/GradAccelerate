import team from "../../assets/team.png";
import { motion } from "framer-motion";
import useScrollAnimation from "../../hooks/useScrollAnimation";
const LearnFromTheBest = () => {
  const { ref, isInView } = useScrollAnimation({ once: false, amount: 0.1 });

  return (
    <>
      <motion.section className="container mx-auto px-6 md:px-12 lg:px-20 py-16 bg-transparent text-white rounded-lg shadow-lg my-10 overflow-x-hidden">
        {/* Component Title */}
        <motion.h1
          ref={ref}
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0.3 }}
          className="text-4xl sm:text-5xl font-bold text-center mb-8"
        >
          Learn from Industry Leaders!{" "}
        </motion.h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Component Description*/}
          <div className="space-y-6">
            <ul className="list-none pl-5 space-y-4 text-lg">
              <li>
                Get Mentorship from Seasoned Experts Committed to Your Success
                and Skill Development.
              </li>
              <li>
                Connect with Industry-Leading Instructors Who Know the Latest
                Trends.
              </li>
              <li>
                Enhance Your Skills with Hands-On Lessons from Experts Who have
                Mastered the Field
              </li>
            </ul>
          </div>

          {/* Component Image */}
          <div className="flex justify-center">
            <img
              src={team}
              alt="Team Image"
              className="w-auto h-72 object-cover rounded-xl"
            />
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default LearnFromTheBest;
