import React from 'react';
import css from '../Hero/Hero.module.css';
import HeroImg from '../../assets/hero.png';
import {RiShoppingBagFill} from  'react-icons/ri';
import {BsArrowRight} from  'react-icons/bs';
import {motion} from "framer-motion"


const Hero = () => {
    const transition = {duration: 3, type:"spring"}
  return (
    <div className={css.container}>
       { /** left side */}
        <div className={css.h_sides}>
        <span className={css.text1}> Skin Protection Cream</span>
        <div className={css.text2}>

            <span>Trendy Collection. </span>
            <span>Enjoy the best offer on YooMetics. Fell the difference.  </span>
        </div>

        </div>

        {/** Middle side Hero */}
        <div className={css.wrapper}>

            {/** Motion of blueCirlce*/ }
            <motion.div
            initial={{bottom:"2rem"}}
            whileInView={{bottom: "0rem"}}
            className={css.blueCircle}
            transition={transition}
            >
            </motion.div>

            {/** Motion of HeroImage */}

            <motion.img
            initial={{bottom:"-2rem"}}
            whileInView={{bottom: "0rem"}}
            transition={transition}
            src={HeroImg} alt="" width={600}

            />


            <motion.div
            transition={transition}
            initial={{right:"4%"}}
            whileInView={{right: "2%"}}
            className={css.cart2}

            />    




            
            
            <div className={css.cart2}>
           
                <RiShoppingBagFill/>
                <div className={css.signup}>
                    <span>Best Signup <br/>Offers</span>
                    <div>
                       <BsArrowRight/> 
                    </div>
                </div>
            </div>
        </div>

 

    <div className={css.h_sides}>
        <div className={css.traffic}>
            <span>1.5M </span>
            <span>Monthly Traffic</span>
        </div>
        <div className={css.customers}>
            <span>100k </span>
            <span>Happy Customers</span>
        </div>
    </div>



    </div>
  );
};

export default Hero