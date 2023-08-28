import React, {  useEffect, useRef,useState } from 'react'
import css from './Header.module.scss'
import { BiMenuAltRight, BiPhoneCall } from 'react-icons/bi'
import { motion } from 'framer-motion'
import { fadeIn, getMenuStyles, headerVariants, slideIn } from '../utils/motion'
import useHeaderShadow from "../hooks/useHeaderShadow";
import useOutsideAlerter from '../hooks/useOutsideAlerter';

function Header() {
  const menuRef = useRef();
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();

  useOutsideAlerter({
    menuRef,
    setMenuOpened,
  });
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={headerVariants}
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}

      style={{ boxShadow: headerShadow }}
    >

      <div className={`flexCenter innerWidth ${css.container}`}>
        <motion.div
          variants={fadeIn("right", "tween", 0.5, 1)}
          className={css.name} >
          <a href="#home">SIDDHARTH GUPTA</a>
        </motion.div>

        <ul
        ref={menuRef}
          style={getMenuStyles(menuOpened)}
          className={`flexCenter ${css.menu}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#experties">Services</a></li>
          <li><a href="#work">Experience</a></li>
          <li><a href="#portfolio">PortFolio</a></li>
          <li><a href="#people">Testimonials</a></li>
          <li className={`flexCenter ${css.phone}`}>
            <li><a href="#footer">Contacts</a></li>
            <BiPhoneCall size={"40px"} />
          </li>
        </ul>

        <div className={css.menuIcon}
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </motion.div>
  )
}

export default Header
