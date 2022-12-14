import React, { FC } from "react";
import "./rotate.scss";
import { motion } from "framer-motion";
import asset1 from "../../../logo/1x/Asset 1.png";
import asset2 from "../../../logo/1x/Asset 2.png";
import asset3 from "../../../logo/1x/Asset 3.png";
import asset4 from "../../../logo/1x/Asset 4.png";
import asset5 from "../../../logo/1x/Asset 5.png";

const Rotate: FC = () => {
  return (
    <section className="rotate-body">
      <motion.img
        initial={{ y: 0 }}
        animate={{ y: [-1, 2] }}
        transition={{
          repeat: Infinity,
          duration: 1,
          repeatType: "mirror",
          delay: 0.5,
        }}
        src={asset1}
        alt=""
      />
      <motion.img
        initial={{ y: 0 }}
        animate={{ y: [-1, 2] }}
        transition={{
          repeat: Infinity,
          duration: 1,
          repeatType: "mirror",
          delay: 1,
        }}
        src={asset2}
        alt=""
      />
      <motion.img
        initial={{ y: 0 }}
        animate={{ y: [-1, 2] }}
        transition={{
          repeat: Infinity,
          duration: 1,
          repeatType: "mirror",
          delay: 2,
        }}
        src={asset3}
        alt=""
      />
      <motion.img
        initial={{ y: 0 }}
        animate={{ y: [-1, 2] }}
        transition={{ repeat: Infinity, duration: 1, repeatType: "mirror" }}
        src={asset4}
        alt=""
      />
      <motion.img
        initial={{ y: 0 }}
        animate={{ y: [-1, 2] }}
        transition={{
          repeat: Infinity,
          duration: 1,
          repeatType: "mirror",
          delay: 1.2,
        }}
        src={asset5}
        alt=""
      />
    </section>
  );
};

export default Rotate;
