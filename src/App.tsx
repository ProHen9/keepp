// import { useState } from "react";
import { motion } from "framer-motion";
import Categorys from "./components/categorys";
export default function App() {
  
  return (
    <motion.div initial={{ width: "500px", height: "500px" }}>
      {/* FIXME: Eine Art Header */}
      <motion.h2 className="color-light m-b-2">keepp</motion.h2>
      <motion.a
        href="https://google.com"
        className="bg-blue-500 p-2 rounded-md"
        target="_blanc"
        initial={{ textDecoration: "none", color: "white" }}
      >
        You need help?
      </motion.a>
      {/* FIXME: Categorys mit den entsprechenden darin enthaltenen Links */}
      <Categorys />
    </motion.div>
  );
}
