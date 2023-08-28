import React from 'react';
import css from './Hero.module.scss';
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer, zoomIn } from "../../utils/motion"
const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <a  className="anchor" id="home"></a>
      <motion.div

        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}

        className={`innerWidth ${css.container}`}>

        {/* upper area */}
        <div className={css.upperElements}>

          <motion.span
            variants={fadeIn("left", "tween", 0.5, 1)}
            className="primaryText">

            Hey There ,<br /> I'm Siddharth Gupta
          </motion.span>

          <motion.span
            variants={fadeIn("right", "tween", 0.5, 1)}
            className='secondaryText'>
            I design beautiful simple
            <br />
            things, And I love what I do
          </motion.span>
        </div>

        {/* person image */}
        <motion.div
          variants={fadeIn("down", "tween", 0.5, 1)}
          className={css.person}>
          <motion.img
            variants={slideIn("up", "tween", 0.5, 1.3)}
            src="./person2.png" alt="" />

        </motion.div>

        {/* email */}
        <motion.span 
         variants={fadeIn("up", "tween", 1, 1)}
        className="div">
        <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=siddharthgupta052@email.com&" className={css.email}>
          siddharthgupta052@gmail.com
        </a>
       </motion.span>

        {/* lower Elements */}
        <div className={css.lowerElements}>
          <motion.div
            variants={slideIn("up", "tween", 0.3, 1)}
            className={css.experience}>

            <div className="primaryText">2</div>
            <div className="secondaryText">
              <div>
                Years
              </div>
              <div>
                Experience
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={slideIn("up", "tween", 0.5, 1)}
            className={css.certificate}>
            <img src="./certificate.png" alt="" />
            <span>CERTIFIED PROFESSIONAL</span>
            <span>SOFTWARE DEVELOPER</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
