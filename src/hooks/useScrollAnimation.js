import { useInView } from "framer-motion";
import { useRef } from "react";

const useScrollAnimation = (options) => {
  const ref = useRef(null);
  const isInView = useInView(ref, options);
  
  return { ref, isInView };
};

export default useScrollAnimation;
