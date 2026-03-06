// import { BiLoader } from "react-icons/bi";

// const Loader = ({ className }: { className?: string }) => {
//   return (
//     <div
//       className={`${className} mx-auto my-auto flex h-full w-full items-center justify-center`}
//     >
//       <BiLoader className="animate-spin" />
//     </div>
//   );
// };

// export default Loader;




import { motion } from "framer-motion";

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const dotVariants = {
  initial: {
    y: "0%",
  },
  animate: {
    y: "100%",
  },
};

// --- FIX STARTS HERE ---
// Add "as const" to the end of the object definition
const dotTransition = {
  duration: 0.5,
  repeat: Infinity,
  repeatType: "reverse",
  ease: "easeInOut",
} as const;
// --- FIX ENDS HERE ---

const Loader = ({ className }: { className?: string }) => {
  return (
    <div
      className={`${className} flex h-full w-full items-center justify-center`}
    >
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        style={{
          width: "2rem",
          height: "2rem",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <motion.span
          style={{
            display: "block",
            width: "0.5rem",
            height: "0.5rem",
            backgroundColor: "#0022ffff",
            borderRadius: "0.25rem",
          }}
          variants={dotVariants}
          transition={dotTransition}
        />
        <motion.span
          style={{
            display: "block",
            width: "0.5rem",
            height: "0.5rem",
            backgroundColor: "#0077ffff",
            borderRadius: "0.25rem",
          }}
          variants={dotVariants}
          transition={dotTransition} // Re-enabled transition
        />
        <motion.span
          style={{
            display: "block",
            width: "0.5rem",
            height: "0.5rem",
            backgroundColor: "#0babfcff",
            borderRadius: "0.25rem",
          }}
          variants={dotVariants}
          transition={dotTransition} // Re-enabled transition
        />
      </motion.div>
    </div>
  );
};

export default Loader;