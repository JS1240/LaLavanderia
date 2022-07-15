import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillCloseCircle } from 'react-icons/ai';


import images from '../../constants/images';
import './Navbar.css';

import './Navbar.css';

const Navbar = () => {

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.lavandera} alt="app logo" />
      </div>
        <ul className="app__navbar-links">
          <li className="p__opensans"><a href="#naslovnica">Naslovnica</a></li>
          <li className="p__opensans"><a href="#onama">O Nama</a></li>
          <li className="p__opensans"><a href="#usluge">Usluge</a></li>
          <li className="p__opensans"><a href="#cjenik">Cjenik</a></li>
          <li className="p__opensans"><a href="#faq">FAQ</a></li>
          <li className="p__opensans"><a href="#kontak">Kontakt</a></li>
        </ul>
      <div className="app__navbar-smallscreen"> 
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => {}} />

          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <AiFillCloseCircle fontSize={27} className="overlay_close" onClick={() => {}} />
              <ul className="app__navbar-smallscreen-links">
              <li className="p__opensans"><a href="#naslovnica">Naslovnica</a></li>
              <li className="p__opensans"><a href="#onama">O Nama</a></li>
              <li className="p__opensans"><a href="#usluge">Usluge</a></li>
              <li className="p__opensans"><a href="#cjenik">Cjenik</a></li>
              <li className="p__opensans"><a href="#faq">FAQ</a></li>
              <li className="p__opensans"><a href="#kontakt">Kontakt</a></li>
            </ul>
          </div>
      </div>
    </nav>
  )
};
export default Navbar;
