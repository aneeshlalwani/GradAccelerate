// Importing Learning Tracks Data
import { motion } from "framer-motion";
import { tracks } from "../../data/data";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const LearningTracks = () => {
  const { ref, isInView } = useScrollAnimation({
    triggerOnce: false,
    threshold: 0.1,
  });
  return (
    <>
      <section className="container mx-auto px-6 md:px-12 lg:px-20 py-10 my-10">
        <motion.h1
          ref={ref}
          className="text-4xl sm:text-5xl font-semibold text-[#e5e0df] mb-10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut", delay: 0.1 }}
        >
          Diverse Learning Tracks
        </motion.h1>
        {/* Grid for Learning Tracks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {tracks.map((track, index) => (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                delay: index * 0.2,
              }}
              className="rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 border-2 border-[#951556]"
            >
              <div className="flex justify-center items-center gap-3">
                <img src={track.icon} alt="track icon" />
                <h2 className="text-2xl font-bold text-[#e5e0df] mb-3">
                  {track.title}
                </h2>
              </div>

              <p className="text-[#e5e0df] text-lg font-semibold">
                {track.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default LearningTracks;
