import React from 'react'
import { projectExperience, WhatDoIHelp } from '../../utils/data'
import css from './Experties.module.scss'
import {motion} from 'framer-motion'
import {fadeIn, staggerContainer, textVariant} from '../../utils/motion.js'
const Experties = () => {
  return (
    <motion.section 
    
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={css.wrapper}>

        <a className="anchor" id="experties"></a>
        <div
       
        className={`paddings yPaddings innerWidth flexCenter ${css.container}`}>


            {/* left side */}
            <div className={css.leftSide}>
                {
                    projectExperience.map((exp, i)=> {
                        return <motion.div variants = {fadeIn("right", "tween", (i+1)*0.2, 1)} className={css.exp} key={i}>
                            <div style={{background: exp.bg}} className="flexCenter">
                                <exp.icon size={25} color="white"/>
                            </div>
                            <div>
                                <span>{exp.name}</span>
                                <span className='secondaryText'>{exp.projects} Projects</span>
                            </div>
                        </motion.div>
                    })
                }
            </div>


            {/* right */}
            <motion.div
            variants={fadeIn("left", "tween", 0.5, 1)}
            className={css.rightSide}>

                <motion.span
                variants={fadeIn("right", "tween", 0.5, 1)}
                className='primaryText'>What do I help? </motion.span>
                {WhatDoIHelp.map((paragraph, i)=> <span className='secondaryText' key={i}>{paragraph}</span>)}


                <motion.div
                variants={fadeIn("left", "tween", 0.5, 1)}
                className={`flexCenter ${css.stats}`}>
                
                    <div className={`flexCenter ${css.stat}`}>
                        <span className='primaryText'>100+</span>
                        <span
                        
                        className='secondaryText'>Project Completed</span>
                    </div>
                    <div className={`flexCenter ${css.stat}`}>
                        <span className='primaryText'>80+</span>
                        <span className='secondaryText'>Happy Clients</span>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    </motion.section>
  )
}

export default Experties