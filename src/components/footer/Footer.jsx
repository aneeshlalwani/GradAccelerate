import { motion } from "framer-motion";
import logo from "../../assets/logo.png";
import { tracks } from "../../data/data";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const Footer = () => {
  const { ref, isInView } = useScrollAnimation({ once: false, amount: 0.1 });
  return (
    <>
      <footer className="p-20 bg-[#114232] sm:rounded-tl-full">
        <div className="container mx-auto flex flex-wrap sm:items-center sm:justify-center gap-10">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut", delay: 0.3 }}
          >
            <img src={logo} alt="" />
            <h1 className="m-4 w-58 text-[#e5e0df] font-bold text-xl">
              Let&apos;s Shape Your Tech Future—Together!
            </h1>
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut", delay: 0.3 }}
            className="sm:border-l border-lg pl-12"
          >
            <h2 className="text-2xl mb-4 font-bold text-[#e5e0df]">
              Learning Track
            </h2>
            <ul className="list-none text-lg text-[#e5e0df] font-semibold">
              {tracks.map((track, index) => (
                <li
                  key={index}
                  className="mb-2 hover:underline underline-offset-8 hover:translate-x-4 transition-transform duration-300 ease-in-out"
                >
                  <a href="">{track.title}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
