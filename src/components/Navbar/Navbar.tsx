import { FC, useState } from "react";
import "./navbar.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { motion } from "framer-motion";
import animate from "./navbarAnimation";
import { Link } from "react-router-dom";
import logo from "../../logo/logo.png";

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <div className="menu">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className="normalLi">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <div className="burgerMenu">
          <div className="burger-icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <ImCross /> : <GiHamburgerMenu />}
          </div>
        </div>
      </div>
      <motion.div
        initial={isOpen}
        variants={animate.menuVariants}
        animate={isOpen ? "opened" : "closed"}
        className="resMenu"
      >
        <div className="menuItemRes">
          <ul className="mobileUl">
            <motion.li variants={animate.linkVariants}>
              <Link to="/">Home</Link>
            </motion.li>
            <motion.li variants={animate.linkVariants}>
              <Link to="/search">Search</Link>
            </motion.li>
            <motion.li variants={animate.linkVariants}>
              <Link to="/about">About</Link>
            </motion.li>
          </ul>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
