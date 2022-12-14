import { FC } from "react";
import "./about.scss";
import Rotate from "../Shared/Rotate/Rotate";
import { motion } from "framer-motion";
const About: FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="about-page-body"
    >
      <section className="about">
        <h1>ABOUT US</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio enim
          voluptatum laudantium aperiam corrupti rerum molestiae possimus
          ducimus voluptate, sunt maxime, totam error aspernatur voluptas
          reiciendis. Eaque sapiente quas fugiat. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quibusdam accusantium quae optio enim
          mollitia fugiat numquam quo. Dignissimos molestias explicabo
          reiciendis impedit. Quisquam nobis minima, id veniam perspiciatis
          molestiae eaque. Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Earum sint quas ad soluta? Deserunt tempore architecto in non
          placeat ullam consectetur animi! Architecto fugit at enim atque, ad
          temporibus ex.
        </p>
      </section>
      <section className="credit">
        <Rotate />
      </section>
    </motion.section>
  );
};

export default About;
