import React from 'react'
import css from './Portfolio.module.scss'
import {motion, transform} from 'framer-motion'
import { fadeIn, staggerChildren } from '../../utils/motion'
const Portfolio = () => {
    return (
        <motion.section
        variants={staggerChildren}
      initial ="hidden"
     whileInView="show"
     viewport={{once :false ,amount:0.25}}

        className={`paddings ${css.wrapper}`}>
                 <a  className="anchor" id="portfolio"></a>
            <div className={`innerWidth flexCenter ${css.container}`}>

                <div className={`flexCenter ${css.heading}`}>

                    <div>
                        <span className='primaryText'>
                            My Latest Works
                        </span>
                        <p style={{ marginTop: "10px" }}> Perfect solution for digital experience </p>
                    </div>

                    <span className="secondaryText">
                        Explore More Work
                    </span>
                </div>

                {/* images */}
                <div className={`flexCenter ${css.showCase}`} >
                 <motion.img  variants={fadeIn("right", "tween", 0.8, 0.8)} src="./showCase1.png" alt="project" />
            <motion.img variants={fadeIn("up", "tween", 0.7, 0.7)} src="./showCase2.png" alt="project" />
            <motion.img variants={fadeIn("left", "tween", 0.8, 0.8)} src="./showCase3.png" alt="project" /> 
                </div>
            </div>
        </motion.section>
    )
}

export default Portfolio
