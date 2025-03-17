import "./App.css";
import { motion } from "motion/react";
import { Icon } from "@mui/material";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

function App() {
  return (
    <>
      <div className="w-full h-full text-ghost-white flex justify-center content-center flex-wrap flex-col text-center">
        <div className="pb-4 mb-6 border-b-4 border-solid border-ghost-white">
          <h1 className="text-8xl">Tautas</h1>
        </div>
        <div className="flex w-150 justify-between text-2xl">
          <a href="#">GIGS</a>
          <a href="#">ABOUT</a>
          <a href="#">MEDIA</a>
          <a href="#">CONTACT</a>
        </div>
      </div>
      <motion.div
        className="absolute bottom-0 w-full text-center text-ghost-white"
        animate={{
          y: [-8, -36, -8],
          transition: { ease: ["easeIn", "easeOut"] },
        }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <a href="#">
          <Icon component={KeyboardDoubleArrowDownIcon} fontSize="large" />
        </a>
      </motion.div>
    </>
  );
}

export default App;
