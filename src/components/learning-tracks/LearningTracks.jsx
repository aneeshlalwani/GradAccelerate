// Importing Learning Tracks Data
import { motion } from "framer-motion";
import { tracks } from "../../data/data";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const LearningTracks = () => {
  const { ref, isInView } = useScrollAnimation({
    once: false,
    amount: 0.1,
  });
  return (
    <>
      <section className="container mx-auto px-6 md:px-12 lg:px-20 py-10 my-10">
        <motion.h1
          ref={ref}
          className="text-4xl sm:text-5xl font-semibold text-[#e5e0df] mb-10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut", delay: 0.2 }}
        >
          Diverse Learning Tracks
        </motion.h1>
        {/* Grid for Learning Tracks */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -100 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {tracks.map((track, index) => (
            <div
              key={index}
              className="rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 border-2 border-[#951556]"
            >
              <div className="flex justify-center items-center gap-3">
                <img
                  src={track.icon}
                  alt="track icon"
                  className="w-auto h-auto object-contain"
                />
                <h2 className="text-xl font-bold text-[#e5e0df] mb-3">
                  {track.title}
                </h2>
              </div>

              <p className="text-[#e5e0df] text-lg font-semibold">
                {track.description}
              </p>
            </div>
          ))}
        </motion.div>
      </section>
    </>
  );
};

export default LearningTracks;
