import  {React, useState} from 'react'
import css from './Header.module.css'
import Logo from '../../assets/logo.png'
import {CgShoppingBag} from 'react-icons/cg';
import {GoThreeBars} from "react-icons/go"

const Header = () => {

  const [ShowMenu, SetShowMenu] = useState(true);
  const toggleMenu = () =>{ 
    SetShowMenu((ShowMenu)=>!ShowMenu)
  } 

  return (
    <div className={css.container}> 
        <div className={css.logo}> 
        <img src={Logo} alt=""  /> YooMetics
        </div>
 
        <div className={css.right}>

          <div className={css.bars} onClick={toggleMenu}>
            <GoThreeBars/>
          </div> 
         
                <ul className={css.menu} style={{display: ShowMenu? 'inherit':'none'}}  >
                    <li>Collection</li>
                    <li>Brands </li>
                    <li>New</li>
                    <li>Sales</li>
                    <li>ENG</li>
            
                </ul>


            
            <input type='text' placeholder='Search' className={css.search}/>
         <CgShoppingBag className="css search"/>


        </div>
    </div>
  )
}

export default Header