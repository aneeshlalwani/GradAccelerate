import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift } from "@fortawesome/free-solid-svg-icons";
import invite from "../../assets/invite.png";
import { motion } from "framer-motion";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const Invitation = () => {
  const { ref, isInView } = useScrollAnimation({ once: false, amount: 0.1 });

  return (
    <>
      <motion.section
        ref={ref}
        initial={{ opacity: 0, x: -100 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
        className="container mx-auto px-6 md:px-12 lg:px-20 py-10 my-10 bg-transparent rounded-lg shadow-lg"
      >
        {/* Invitation Title */}
        <motion.h1
          ref={ref}
          initial={{ opacity: 0, y: -100 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
          className="text-4xl sm:text-5xl font-semibold text-white mb-10 capitalize text-center"
        >
          🥳 Invite Friends & Earn a Gift Card!{" "}
          <span>
            <FontAwesomeIcon icon={faGift} className="text-5xl mr-2" />
          </span>
        </motion.h1>
        {/* Invitation Description */}
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <div className="text-white max-w-md mx-auto lg:mx-0 lg:mr-10 p-6 rounded-lg shadow-md bg-opacity-80 transition duration-300 hover:shadow-2xl">
            <p className="text-lg mb-4">
              Invite Your Friends to Join GAP and Enter to Win a Gift Card! The
              More Friends You Refer, the Greater Your Chances!
            </p>
            <h2 className="text-2xl mb-4 font-semibold">
              Here&apos;s How It Works:
            </h2>
            <ul className="list-none">
              <li className="mb-2">
                Share GAP and Help Friends Discover New Opportunities!
              </li>
              <li className="mb-2">
                Make sure they enter your name and email on the application form
                to ensure you get credit!
              </li>
              <li>Boost Your Chances to Win with Every Referral!</li>
            </ul>
          </div>
          {/* Invitation Image */}
          <div className="flex justify-center items-center mt-8 lg:mt-0">
            <img
              src={invite}
              alt="invitation image"
              className="w-64 h-auto rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Invitation;
