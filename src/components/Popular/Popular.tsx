import { FC, useEffect, useState } from "react";
import Slider from "react-slick";
import settings from "../Shared/slickSettings";
import headerVariants from "./popularAnimation";
import "./popular.scss";
import Card from "../Shared/Card/Card";
import { motion } from "framer-motion";
import Loading, { Status } from "../Shared/Loading/Loading";
import burger from "../../logo/1x/Asset 1.png";
import pizza from "../../logo/1x/Asset 2.png";
import spagetti from "../../logo/1x/Asset 3.png";
export interface RandomRecipe {
  [key: string]: any;
}

const Popular: FC<RandomRecipe> = ({ data }) => {
  const [mobile, setMobile] = useState<boolean>(false);
  console.log(data);
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="popular"
      id="popular"
    >
      {!data ? (
        <Loading message={Status.quotaExceeded} />
      ) : (
        <section className="main-container">
          <motion.header
            initial={{ height: "100vh" }}
            variants={headerVariants}
            animate={mobile ? "mobile" : "dekstop"}
            className="mainHeader"
          >
            <motion.h1
              initial={{ x: -400 }}
              animate={{ x: 1, transition: { delay: 1.5 } }}
            >
              Popular Now
            </motion.h1>
          </motion.header>
          <div className="content">
            <Slider {...settings}>
              {data?.map((s: any) => (
                <Card
                  title={s.title}
                  image={s.image}
                  id={s.id}
                  summary={s.summary}
                  key={s.id}
                />
              ))}
            </Slider>
          </div>
        </section>
      )}
    </motion.section>
  );
};

export default Popular;
