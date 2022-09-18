import React from "react";

import Logo from "../../../assets/images/logo.png";

import { motion } from "framer-motion";

const Brand = () => {
  return (
    <motion.a
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      href="#"
      className="sm:mt-5 sm:mb-5 flex flex-row justify-center items-center"
    >
      <img src={Logo} className="sm:h-20 lg:h-20" alt="logo" />
    </motion.a>
  );
};

export default Brand;
