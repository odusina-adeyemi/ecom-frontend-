import React from 'react'
import css from "./Footer.module.css";
import Logo from "../../assets/logo.png";
import {InboxIcon, PhoneIcon, LocationMarkerIcon,LoginIcon, UserIcon, LinkIcon} from "@heroicons/react/outline";


const Footer = () => {
  return (
  <div className={css.cFooterWrapper}>
    <hr/>
    <div className={css.cFooter}>
        <div className={css.logo}>
            <img src={Logo} alt=""/>
            <span>Yoo Metics</span>
        </div>
        <div className={css.block}>
            <div className={css.detail}>
              <span>Contact Us</span>
              <span className={css.pngLine}>
                <LocationMarkerIcon className={css.icon}/>
                <span>111 North Avenue Orlando,
                  <br/> FL 32801</span>
              </span>

              <span className={css.pngLine}>
                <PhoneIcon className={css.icon}/>
                <a href="tel:56770801">56770801</a>
              </span>

              <span className={css.pngLine}>
                <InboxIcon className={css.icon}/>
                <a href="mailto:support@yoometics.com">support@yoometics.com</a>
              </span>
 
            </div>
         </div>

              <div className={css.block}>
              <div className={css.detail}>
                <span>Account</span>
                <span className={css.pngLine}>
                <LoginIcon className={css.icon}/>
                <a href="/signin">Sign In</a>
              </span>
              </div> 
              </div>



              <div className={css.block}>
              <div className={css.detail}>
                <span>Company</span>
                <span className={css.pngLine}>
                <UserIcon className={css.icon}/>
                <a href="/aboutus">About Us</a>
              </span>
              </div> 
              </div>



              <div className={css.block}>
              <div className={css.detail}>
                <span>Resources</span>
                <span className={css.pngLine}>
                <LinkIcon className={css.icon}/>
                <a href="/resources">Safety Privacy & Terms</a>
              </span>
              </div> 
              </div>


    </div>
    <div className={css.copyright}>
      <span>Copyright © 2023 By Yoo Metics.  </span>
      <span>All rights reserved.</span>
    </div>

  </div>
  )
}

export default Footer