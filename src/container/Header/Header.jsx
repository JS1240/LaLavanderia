import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title=" Volimo To Što Radimo" />
      <h1 className="app__header-h1">Ključ Savršenog Pranja</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
      molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
      numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
      optio, eaque rerum!</p>
      <button type="button" className="custom__button">Kontakt</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.lalavandera} alt="header img" />
    </div>
  </div>
);

export default Header;
