import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Black from "../assets/black.png";

const LogoPage = () => {
  const [imageAnimationComplete, setImageAnimationComplete] = useState(false);
  const controls = useAnimation();

  const handleImageAnimationComplete = () => {
    setImageAnimationComplete(true);
    controls.start({ opacity: 1, y: 0 });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <motion.img
        src={Black}
        alt="Logo"
        className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 max-w-lg h-auto mb-4"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        onAnimationComplete={handleImageAnimationComplete}
      />
      <motion.p
        className="text-white text-center text-sm md:text-sm lg:text-sm xl:text-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        Elevate Your Style, Shop with Smiles!
      </motion.p>
    </div>
  );
};

export default LogoPage;
